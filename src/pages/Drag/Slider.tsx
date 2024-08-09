import React from 'react'
import Styles from './index.less'
import { DragItem, pcMatrixCount, ShadowPositionType, SLIDER_WIDTH } from './drag'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  setShadowPosition: (val: ShadowPositionType) => void
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
}

const Slider = (props: Props) => {
  const { setShadowPosition, setComponentData } = props

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    const x = event.clientX
    const y = event.clientY

    setShadowPosition({ x, y, type: 'new' })
  }

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    const x = event.clientX
    const y = event.clientY

    if (x > SLIDER_WIDTH && y > 0) {
      const newComponent: DragItem = {
        id: uuidv4(),
        x,
        y,
        sizeX: (200 / (window.innerWidth - SLIDER_WIDTH)) * pcMatrixCount.x,
        sizeY: (150 / window.innerHeight) * pcMatrixCount.y
      }
      setComponentData((pre: DragItem[]) => [...pre, newComponent])
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
