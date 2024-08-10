import React, { useRef, useEffect } from 'react'
import { pcCanvasSize, pcMatrixCount, scaleType } from './drag'

type Props = {
  scale: scaleType
}

const Grid: React.FC<Props> = ({ scale }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const { width, height } = pcCanvasSize
        canvas.width = width * scale.x
        canvas.height = height * scale.y

        // 设置网格样式
        ctx.strokeStyle = '#e0e0e0'
        ctx.lineWidth = 1

        // 计算每个网格的大小
        const cellWidth = width / pcMatrixCount.x
        const cellHeight = height / pcMatrixCount.y

        // 绘制列
        for (let x = 0; x <= pcMatrixCount.x; x++) {
          ctx.beginPath()
          ctx.moveTo(x * cellWidth * scale.x, 0)
          ctx.lineTo(x * cellWidth * scale.x, height * scale.y)
          ctx.stroke()
        }

        // 绘制行
        for (let y = 0; y <= pcMatrixCount.y; y++) {
          ctx.beginPath()
          ctx.moveTo(0, y * cellHeight * scale.y)
          ctx.lineTo(width * scale.x, y * cellHeight * scale.y)
          ctx.stroke()
        }
      }
    }
  }, [scale])

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor: '#f0f0f0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #d0d0d0',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
        zIndex: 1
      }}
    />
  )
}

export default Grid
