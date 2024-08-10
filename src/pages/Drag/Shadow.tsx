import React, { useMemo } from 'react'
import Styles from './index.less'
import {
  DragItem,
  pcCanvasSize,
  pcMatrixCount,
  scaleType,
  ShadowPositionType,
  SLIDER_WIDTH
} from './drag'
import { setUpItem } from './utils'

type Props = {
  shadowPosition: ShadowPositionType
  scale: scaleType
  componentData: DragItem[]
}

const Shadow = (props: Props) => {
  const { shadowPosition, scale, componentData } = props

  if (
    shadowPosition.x < 0 ||
    shadowPosition.y < 0 ||
    (shadowPosition.x === 0 && shadowPosition.y === 0)
  ) {
    return null
  }

  // 矩阵单元格的宽度和高度
  const matrixWidth = pcCanvasSize.width / pcMatrixCount.x
  const matrixHeight = pcCanvasSize.height / pcMatrixCount.y

  const styleInfo = useMemo(() => {
    const shadow = {
      id: 'shadow',
      x: shadowPosition.x,
      y: shadowPosition.y,
      sizeX: shadowPosition.sizeX,
      sizeY: shadowPosition.sizeY
    }
    const res = setUpItem(componentData, shadow)
    // 确保元素不越界
    res.x = Math.min(Math.max(res.x, 0), pcMatrixCount.x - (res.sizeX || 0))
    res.y = Math.max(res.y, 0)

    // 计算阴影左上角对齐到网格的位置
    let left = res.x * matrixWidth
    let top = res.y * matrixHeight

    // 调整宽度和高度，使其为单元格大小的整数倍
    const adjustedWidth = res.sizeX * matrixWidth
    const adjustedHeight = res.sizeY * matrixHeight

    const style = {
      transform: `translate(${left * scale.x}px, ${top * scale.y}px) rotate(0deg)`,
      width: adjustedWidth * scale.x,
      height: adjustedHeight * scale.y,
      transition: '0.1s',
      zIndex: 10
    }
    return style
  }, [shadowPosition, matrixWidth, matrixHeight])

  return <div className={Styles.shadow} style={styleInfo}></div>
}

export default Shadow
