import { useState, useCallback, useRef } from 'react'
import { DragItem, pcMatrixCount, SLIDER_WIDTH } from './drag'

export const useReSize = (
  curComponent: DragItem | null,
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>,
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
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
        const deltaX =
          ((moveEvent.clientX - startX) / (window.innerWidth - SLIDER_WIDTH)) * pcMatrixCount.x
        const deltaY = ((moveEvent.clientY - startY) / window.innerHeight) * pcMatrixCount.y

        setCurComponent(prev => {
          if (!prev) return null

          let newSizeX = initialSizeX
          let newSizeY = initialSizeY
          let newX = initialX
          let newY = initialY

          switch (pos) {
            case 'tl':
              newSizeX = initialSizeX - deltaX
              newSizeY = initialSizeY - deltaY
              newX = initialX + moveEvent.clientX - startX
              newY = initialY + moveEvent.clientY - startY
              break
            case 'tm':
              newSizeY = initialSizeY - deltaY
              newY = initialY + moveEvent.clientY - startY
              break
            case 'tr':
              newSizeX = initialSizeX + deltaX
              newSizeY = initialSizeY - deltaY
              newY = initialY + moveEvent.clientY - startY
              break
            case 'ml':
              newSizeX = initialSizeX - deltaX
              newX = initialX + moveEvent.clientX - startX
              break
            case 'mr':
              newSizeX = initialSizeX + deltaX
              break
            case 'bl':
              newSizeX = initialSizeX - deltaX
              newSizeY = initialSizeY + deltaY
              newX = initialX + moveEvent.clientX - startX
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

          return {
            ...prev,
            sizeX: newSizeX,
            sizeY: newSizeY,
            x: newX,
            y: newY
          }
        })

        setComponentData(prev => {
          return prev.map(item => {
            if (item.id === curComponentRef.current?.id) {
              return {
                ...item,
                sizeX: curComponentRef.current?.sizeX,
                sizeY: curComponentRef.current?.sizeY,
                x: curComponentRef.current?.x,
                y: curComponentRef.current?.y
              }
            }
            return item
          })
        })
      }

      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [setCurComponent, setComponentData]
  )

  return { handleResizeMouseDown }
}

// 拖拽钩子
export const useMoveMouseDown = (
  curComponent: DragItem | null,
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>,
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
) => {
  const curComponentRef = useRef(curComponent)
  curComponentRef.current = curComponent

  const handleMoveMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const startX = e.clientX
      const startY = e.clientY

      const initialX = curComponentRef.current?.x || 0
      const initialY = curComponentRef.current?.y || 0

      const onMouseMove = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.clientX - startX
        const deltaY = moveEvent.clientY - startY

        setCurComponent(prev => {
          if (!prev) return null

          let newX = initialX + deltaX
          let newY = initialY + deltaY

          return {
            ...prev,
            x: newX,
            y: newY
          }
        })

        setComponentData(prev => {
          return prev.map(item => {
            if (item.id === curComponentRef.current?.id) {
              return {
                ...item,
                x: curComponentRef.current?.x,
                y: curComponentRef.current?.y
              }
            }
            return item
          })
        })
      }

      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [curComponent, setCurComponent, setComponentData]
  )

  return { handleMoveMouseDown }
}
