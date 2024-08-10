export type DragItem = {
  id: string
  x: number
  y: number
  sizeX: number
  sizeY: number
}

export type ShadowPositionType = {
  id?: string
  x: number
  y: number
  sizeX: number
  sizeY: number
  type: 'new' | 'drag'
}

// pc 矩阵数量
export const pcMatrixCount = {
  x: 36,
  y: 18
}

// pc 画布 1600 * 900
export const pcCanvasSize = {
  width: 1600,
  height: 900
}

export type scaleType = {
  x: number
  y: number
}

export const SLIDER_WIDTH = 260

export const handlePositions = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']
