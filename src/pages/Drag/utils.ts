import { pcMatrixCount, SLIDER_WIDTH } from './drag'

export const getPcMatrix = (type: 'x' | 'y', val: number) => {
  if (type === 'x') {
    return (val / pcMatrixCount.x) * (window.innerWidth - SLIDER_WIDTH)
  } else if (type === 'y') {
    return (val / pcMatrixCount.y) * window.innerHeight
  }
}

export const getDeltaInMatrix = (type: 'x' | 'y', val: number) => {
  if (type === 'x') {
    return (val / (window.innerWidth - SLIDER_WIDTH)) * pcMatrixCount.x
  } else if (type === 'y') {
    return (val / window.innerHeight) * pcMatrixCount.y
  }
  return 0
}
