import { DragItem, pcCanvasSize, pcMatrixCount, scaleType } from './drag'

export const getPcMatrix = (type: 'x' | 'y', val: number, scale: scaleType) => {
  if (type === 'x') {
    return ((val * scale.x) / pcMatrixCount.x) * pcCanvasSize.width
  } else if (type === 'y') {
    return ((val * scale.y) / pcMatrixCount.y) * pcCanvasSize.height
  }
}

export const getDeltaInMatrix = (type: 'x' | 'y', val: number, scale: scaleType) => {
  if (type === 'x') {
    return (val / scale.x / pcCanvasSize.width) * pcMatrixCount.x
  } else if (type === 'y') {
    return (val / scale.y / pcCanvasSize.height) * pcMatrixCount.y
  }
  return 0
}

// 碰撞检测函数
export const isColliding = (item1: DragItem, item2: DragItem) => {
  return (
    item1.x < item2.x + item2.sizeX &&
    item1.x + item1.sizeX > item2.x &&
    item1.y < item2.y + item2.sizeY &&
    item1.y + item1.sizeY > item2.y
  )
}

// 碰撞处理函数
export const handleCollision = (
  potentialNewComponent: DragItem,
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
) => {
  let collisionDetected = false

  setComponentData(prev => {
    const resPos = setUpItem(prev, potentialNewComponent)
    resPos.x = Math.min(Math.max(resPos.x, 0), pcMatrixCount.x - (resPos.sizeX || 0))
    resPos.y = Math.max(resPos.y, 0)
    const updatedComponentData = prev.map(item => {
      if (item.id !== resPos.id && isColliding(resPos, item)) {
        collisionDetected = true
        let newY = item.y
        if (resPos.y <= item.y) {
          newY += resPos.sizeY - item.y
        }
        return { ...item, y: newY }
      }
      return item
    })

    return updatedComponentData
  })

  return collisionDetected
}

// 上方元素检测
export const checkUpElement = (
  potentialNewComponent: DragItem,
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>,
  isNew: boolean
) => {
  setComponentData(prev =>
    prev.map(item => {
      let newItem = item
      if (item.y > 0) {
        const res = setUpItem(prev, item)
        newItem = res
      }

      // 更新当前组件或返回调整后的 newItem
      return item.id === potentialNewComponent?.id && !isNew ? potentialNewComponent : newItem
    })
  )
}

export const setUpItem = (prev: DragItem[], item: DragItem) => {
  // 查找上方最近的元素
  const upElement = prev
    .filter(
      pr =>
        pr.y < item.y && pr.x < item.x + item.sizeX && pr.x + pr.sizeX > item.x && pr.id !== item.id
    ) // 找到所有在当前元素上方且有水平重叠的元素
    .reduce((closest: DragItem | null, current: DragItem) => {
      // 如果 closest 为空，则返回 current；否则，返回 y 值更接近 item 的元素
      return closest === null || current.y > closest.y ? current : closest
    }, null)

  if (upElement) {
    // 检查x轴是否没有水平重叠
    if (upElement.x + upElement.sizeX <= item.x || item.x + item.sizeX <= upElement.x) {
      return { ...item, y: upElement.y } // 吸附到上方元素下方
    } else {
      if (item.y < upElement.y + upElement.sizeY) {
        return { ...item, y: item.y - upElement.sizeY } // 吸附到上方元素下方
      } else {
        return { ...item, y: upElement.y + upElement.sizeY }
      }
    }
  } else {
    return { ...item, y: 0 }
  }
}
