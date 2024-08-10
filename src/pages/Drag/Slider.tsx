import React, { useState } from 'react'
import Styles from './index.less'
import {
  DragItem,
  pcCanvasSize,
  pcMatrixCount,
  scaleType,
  ShadowPositionType,
  SLIDER_WIDTH
} from './drag'
import { v4 as uuidv4 } from 'uuid'
import { useComponentPositionAndSize } from './hooks'
import { checkUpElement } from './utils'

type Props = {
  setShadowPosition: (val: ShadowPositionType) => void
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
}

const Slider = (props: Props) => {
  const { setShadowPosition, setComponentData } = props
  const componentWidth = 200
  const componentHeight = 150
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })

  const { matrixX, matrixY, sizeX, sizeY } = useComponentPositionAndSize(
    dragPosition.x,
    dragPosition.y,
    componentWidth,
    componentHeight
  )
  // 矩阵单元格的宽度和高度
  const matrixWidth = pcCanvasSize.width / pcMatrixCount.x
  const matrixHeight = pcCanvasSize.height / pcMatrixCount.y

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    const x = event.clientX
    const y = event.clientY

    if (x > 0 && y > 0) {
      setDragPosition({ x, y })
    }
    let newX = Math.round((x - SLIDER_WIDTH) / matrixWidth)
    let newY = Math.round(y / matrixHeight)
    setShadowPosition({ x: newX, y: newY, sizeX: 5, sizeY: 3, type: 'new' })
  }

  const handleDragEnd = () => {
    const x = dragPosition.x
    const y = dragPosition.y
    if (x > SLIDER_WIDTH && y > 0) {
      const newComponent: DragItem = {
        id: uuidv4(),
        x: matrixX,
        y: matrixY,
        sizeX: sizeX,
        sizeY: sizeY
      }
      setComponentData((pre: DragItem[]) => [...pre, newComponent])
      checkUpElement(newComponent, setComponentData, true)
    }
  }

  return (
    <div className={Styles.slider} style={{ width: SLIDER_WIDTH }}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={Styles.item}
          draggable
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          item{index + 1}
        </div>
      ))}
    </div>
  )
}

export default Slider
