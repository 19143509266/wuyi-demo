import React from 'react'
import { pcCanvasSize, pcMatrixCount, scaleType } from './drag'

type Props = {
  scale: scaleType
}

const Grid = (props: Props) => {
  const { scale } = props
  const gridCells = Array.from({ length: pcMatrixCount.x * pcMatrixCount.y })

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${pcMatrixCount.x}, 1fr)`,
    gridTemplateRows: `repeat(${pcMatrixCount.y}, 1fr)`,
    width: pcCanvasSize.width * scale.x,
    height: pcCanvasSize.height * scale.y,
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
  }

  const gridCellStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.05)'
  }

  return (
    <div style={gridContainerStyle}>
      {gridCells.map((_, index) => (
        <div key={index} style={gridCellStyle}></div>
      ))}
    </div>
  )
}

export default Grid
