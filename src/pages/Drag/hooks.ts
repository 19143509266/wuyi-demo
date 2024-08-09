import { useCallback, useEffect, useRef, useState } from 'react'
import { DragItem, pcCanvasSize, pcMatrixCount, scaleType, SLIDER_WIDTH } from './drag'
import { checkUpElement, getDeltaInMatrix, handleCollision } from './utils'

export const useReSize = (
  curComponent: DragItem | null,
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>,
  componentData: DragItem[],
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>,
  scale: scaleType
) => {
  const curComponentRef = useRef(curComponent)
  curComponentRef.current = curComponent

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

        // 处理碰撞
        const hasCollision = handleCollision(
          potentialNewComponent,
          setCurComponent,
          setComponentData
        )

        if (!hasCollision) {
          setCurComponent(potentialNewComponent)
          checkUpElement(curComponentRef.current, setComponentData, false)
        }
      }

      const onMouseUp = () => {
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
  scale: scaleType
) => {
  const curComponentRef = useRef(curComponent)
  curComponentRef.current = curComponent
  const gridHeight = (pcCanvasSize.height * scale.y) / pcMatrixCount.y
  const gridWidth = (pcCanvasSize.width * scale.x) / pcMatrixCount.x

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
        let newY = Math.round((initialY + deltaY) / gridHeight) * gridHeight

        // 确保元素不越界
        newX = Math.min(Math.max(newX, 0), pcMatrixCount.x - (curComponentRef.current?.sizeX || 0))
        newY = Math.max(newY, 0)

        const potentialNewComponent = { ...curComponentRef.current, x: newX, y: newY }

        // 处理碰撞
        const hasCollision = handleCollision(
          potentialNewComponent,
          setCurComponent,
          setComponentData
        )

        if (!hasCollision) {
          setCurComponent(potentialNewComponent)
          checkUpElement(curComponentRef.current, setComponentData, false)
        }
      }

      const onMouseUp = () => {
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
