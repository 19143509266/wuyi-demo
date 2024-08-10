import { useCallback, useEffect, useRef, useState } from 'react'
import {
  DragItem,
  pcCanvasSize,
  pcMatrixCount,
  scaleType,
  ShadowPositionType,
  SLIDER_WIDTH
} from './drag'
import { checkUpElement, getDeltaInMatrix, handleCollision, setUpItem } from './utils'

export const useReSize = (
  curComponent: DragItem | null,
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>,
  componentData: DragItem[],
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>,
  scale: scaleType,
  setShadowPosition: React.Dispatch<React.SetStateAction<ShadowPositionType>>
) => {
  const curComponentRef = useRef(curComponent)
  curComponentRef.current = curComponent

  let resPos: DragItem | null = null

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent, pos: string) => {
      const startX = e.clientX
      const startY = e.clientY

      const initialSizeX = curComponentRef.current?.sizeX || 0
      const initialSizeY = curComponentRef.current?.sizeY || 0
      const initialX = curComponentRef.current?.x || 0
      const initialY = curComponentRef.current?.y || 0

      const onMouseMove = (moveEvent: MouseEvent) => {
        if (!curComponentRef.current) return
        const deltaX = Math.round(getDeltaInMatrix('x', moveEvent.clientX - startX, scale))
        const deltaY = Math.round(getDeltaInMatrix('y', moveEvent.clientY - startY, scale))

        let newSizeX = initialSizeX
        let newSizeY = initialSizeY
        let newX = initialX
        let newY = initialY

        switch (pos) {
          case 'tl':
            newSizeX = initialSizeX - deltaX
            newSizeY = initialSizeY - deltaY
            newX = initialX + deltaX
            newY = initialY + deltaY
            break
          case 'tm':
            newSizeY = initialSizeY - deltaY
            newY = initialY + deltaY
            break
          case 'tr':
            newSizeX = initialSizeX + deltaX
            newSizeY = initialSizeY - deltaY
            newY = initialY + deltaY
            break
          case 'ml':
            newSizeX = initialSizeX - deltaX
            newX = initialX + deltaX
            break
          case 'mr':
            newSizeX = initialSizeX + deltaX
            break
          case 'bl':
            newSizeX = initialSizeX - deltaX
            newSizeY = initialSizeY + deltaY
            newX = initialX + deltaX
            break
          case 'bm':
            newSizeY = initialSizeY + deltaY
            break
          case 'br':
            newSizeX = initialSizeX + deltaX
            newSizeY = initialSizeY + deltaY
            break
          default:
            break
        }

        // 边界判断
        if (newX + newSizeX > pcMatrixCount.x) {
          newX = pcMatrixCount.x - (curComponentRef.current?.sizeX || 0)
          newSizeX = curComponentRef.current?.sizeX || 0
        }
        if (newX < 0) {
          newX = 0
          newSizeX = curComponentRef.current?.sizeX || 0
        }
        if (newY < 0) {
          newY = 0
          newSizeY = curComponentRef.current?.sizeY || 0
        }

        const potentialNewComponent = {
          ...curComponentRef.current,
          sizeX: newSizeX,
          sizeY: newSizeY,
          x: newX,
          y: newY
        }
        resPos = potentialNewComponent
        setShadowPosition({ ...resPos, type: 'drag' })

        // 处理碰撞
        const hasCollision = handleCollision(resPos, setComponentData)

        if (!hasCollision) {
          setCurComponent(resPos)
          checkUpElement(curComponentRef.current, setComponentData, false)
        }
      }

      const onMouseUp = () => {
        setShadowPosition({ x: 0, y: 0, sizeX: 0, sizeY: 0, type: 'new' })
        if (resPos) {
          const res = setUpItem(componentData, resPos)
          res.x = Math.min(Math.max(res.x, 0), pcMatrixCount.x - (res.sizeX || 0))
          res.y = Math.max(res.y, 0)
          setCurComponent(res)
          setComponentData(prev => prev.map(item => (item.id === res?.id ? res : item)))
        }
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [curComponent, setCurComponent, componentData, setComponentData, scale]
  )

  return { handleResizeMouseDown }
}

// 拖拽钩子
export const useMoveMouseDown = (
  curComponent: DragItem | null,
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>,
  componentData: DragItem[],
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>,
  scale: scaleType,
  setShadowPosition: React.Dispatch<React.SetStateAction<ShadowPositionType>>
) => {
  const curComponentRef = useRef(curComponent)
  curComponentRef.current = curComponent

  let resPos: DragItem | null = null

  const handleMoveMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const startX = e.clientX
      const startY = e.clientY

      const initialX = curComponentRef.current?.x || 0
      const initialY = curComponentRef.current?.y || 0

      const onMouseMove = (moveEvent: MouseEvent) => {
        if (!curComponentRef.current) return
        const deltaX = Math.round(getDeltaInMatrix('x', moveEvent.clientX - startX, scale))
        const deltaY = Math.round(getDeltaInMatrix('y', moveEvent.clientY - startY, scale))

        let newX = initialX + deltaX
        let newY = initialY + deltaY

        // 确保元素不越界
        newX = Math.min(Math.max(newX, 0), pcMatrixCount.x - (curComponentRef.current?.sizeX || 0))
        newY = Math.max(newY, 0)

        const potentialNewComponent = { ...curComponentRef.current, x: newX, y: newY }
        resPos = potentialNewComponent
        setShadowPosition({ ...resPos, type: 'drag' })

        // 处理碰撞
        const hasCollision = handleCollision(resPos, setComponentData)

        if (!hasCollision) {
          setCurComponent(resPos)
          checkUpElement(curComponentRef.current, setComponentData, false)
        }
      }

      const onMouseUp = () => {
        setShadowPosition({ x: 0, y: 0, sizeX: 0, sizeY: 0, type: 'new' })
        if (resPos) {
          const res = setUpItem(componentData, resPos)
          res.x = Math.min(Math.max(res.x, 0), pcMatrixCount.x - (res.sizeX || 0))
          res.y = Math.max(res.y, 0)
          setCurComponent(res)
          setComponentData(prev => prev.map(item => (item.id === res?.id ? res : item)))
        }
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [curComponent, setCurComponent, componentData, setComponentData, scale]
  )

  return { handleMoveMouseDown }
}

type UseComponentPositionAndSizeReturn = {
  matrixX: number
  matrixY: number
  sizeX: number
  sizeY: number
}

// sizeX sizeY 钩子
export const useComponentPositionAndSize = (
  clientX: number,
  clientY: number,
  componentWidth: number,
  componentHeight: number
): UseComponentPositionAndSizeReturn => {
  const [matrixX, setMatrixX] = useState(0)
  const [matrixY, setMatrixY] = useState(0)
  const [sizeX, setSizeX] = useState(1)
  const [sizeY, setSizeY] = useState(1)

  useEffect(() => {
    const matrixWidth = pcCanvasSize.width
    const matrixHeight = pcCanvasSize.height

    const calculatedMatrixX = Math.round((clientX - SLIDER_WIDTH) / (matrixWidth / pcMatrixCount.x))
    const calculatedMatrixY = Math.round(clientY / (matrixHeight / pcMatrixCount.y))

    const calculatedSizeX = Math.round((componentWidth / matrixWidth) * pcMatrixCount.x)
    const calculatedSizeY = Math.round((componentHeight / matrixHeight) * pcMatrixCount.y)

    setMatrixX(calculatedMatrixX)
    setMatrixY(calculatedMatrixY)
    setSizeX(calculatedSizeX)
    setSizeY(calculatedSizeY)
  }, [clientX, clientY, componentWidth, componentHeight])

  return { matrixX, matrixY, sizeX, sizeY }
}
