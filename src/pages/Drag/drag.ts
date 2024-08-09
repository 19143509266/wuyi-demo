export type DragItem = {
  id: string
  x: number
  y: number
  sizeX: number
  sizeY: number
}

export type ShadowPositionType = {
  x: number
  y: number
  type: 'new' | 'drag'
}

// pc 矩阵数量
export const pcMatrixCount = {
  x: 36,
  y: 18
}

export const SLIDER_WIDTH = 260

export const handlePositions = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']
