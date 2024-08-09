import { pcCanvasSize, pcMatrixCount, scaleType } from './drag'

export const getPcMatrix = (type: 'x' | 'y', val: number, scale: scaleType) => {
  if (type === 'x') {
    return ((val * scale.x) / pcMatrixCount.x) * pcCanvasSize.width
  } else if (type === 'y') {
    return ((val * scale.y) / pcMatrixCount.y) * pcCanvasSize.height
  }
}

export const getDeltaInMatrix = (type: 'x' | 'y', val: number, scale: scaleType) => {
  if (type === 'x') {
    return ((val * scale.x) / pcCanvasSize.width) * pcMatrixCount.x
  } else if (type === 'y') {
    return ((val * scale.y) / pcCanvasSize.height) * pcMatrixCount.y
  }
  return 0
}
