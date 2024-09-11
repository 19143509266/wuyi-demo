import React, { useState } from 'react'
import ComponentsArea from '@/pages/LowCode/ComponentsArea'
import CanvasArea from '@/pages/LowCode/CanvasArea'
import ConfigArea from '@/pages/LowCode/ConfigArea'
import { curComponentType, dragComponentItem, layoutItem } from '@/pages/LowCode/types'
import { GRID_COLS, UTILS_WIDTH } from '@/pages/LowCode/constants'
import { v4 as uuidv4 } from 'uuid'

const Index = () => {
  const [layout, setLayout] = useState<layoutItem[]>([])
  const [curComponent, setCurComponent] = useState<curComponentType>(null)
  const handleComponentDragEnd = (event: React.DragEvent, componentItem: dragComponentItem) => {
    const canvasWidth = window.innerWidth - UTILS_WIDTH * 2
    const left = event.clientX - UTILS_WIDTH
    const col = Math.ceil((left / canvasWidth) * GRID_COLS)
    const newItem = {
      x: col,
      y: 0,
      w: 6,
      h: 3,
      i: uuidv4(),
      componentType: componentItem.componentType,
      type: componentItem.value,
      resizeHandles: []
    }
    setLayout(prev => [...prev, newItem])
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <ComponentsArea handleComponentDragEnd={handleComponentDragEnd} />
      <CanvasArea
        layout={layout}
        setLayout={setLayout}
        curComponent={curComponent}
        setCurComponent={setCurComponent}
      />
      <ConfigArea />
    </div>
  )
}

export default Index
