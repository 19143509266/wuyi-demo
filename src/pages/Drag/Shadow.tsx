import React, { useMemo } from 'react'
import Styles from './index.less'
import { pcCanvasSize, pcMatrixCount, scaleType, ShadowPositionType, SLIDER_WIDTH } from './drag'

type Props = {
  shadowPosition: ShadowPositionType
  scale: scaleType
}

const Shadow = (props: Props) => {
  const { shadowPosition, scale } = props

  if (shadowPosition.x < SLIDER_WIDTH || shadowPosition.y < 0) {
    return null
  }

  // 矩阵单元格的宽度和高度
  const matrixWidth = pcCanvasSize.width / pcMatrixCount.x
  const matrixHeight = pcCanvasSize.height / pcMatrixCount.y

  const styleInfo = useMemo(() => {
    // 计算阴影左上角对齐到网格的位置
    let left = Math.round((shadowPosition.x - SLIDER_WIDTH) / matrixWidth) * matrixWidth
    let top = Math.round(shadowPosition.y / matrixHeight) * matrixHeight

    // 调整宽度和高度，使其为单元格大小的整数倍
    const adjustedWidth = Math.round(200 / matrixWidth) * matrixWidth
    const adjustedHeight = Math.round(150 / matrixHeight) * matrixHeight

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
