import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import PanelEdit from './PanelEdit'
import { DragItem, pcCanvasSize, scaleType, ShadowPositionType, SLIDER_WIDTH } from './drag'
import Shadow from './Shadow'
import Styles from './index.less'
import Grid from './Grid'

const Drag = () => {
  const [componentData, setComponentData] = useState<DragItem[]>([])
  const [curComponent, setCurComponent] = useState<DragItem | null>(null)
  const [shadowPosition, setShadowPosition] = useState<ShadowPositionType>({
    x: 0,
    y: 0,
    sizeX: 5,
    sizeY: 3,
    type: 'new'
  })
  const [scale, setScale] = useState<scaleType>({ x: 1, y: 1 })

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth - SLIDER_WIDTH
      const screenHeight = window.innerHeight
      const scaleX = screenWidth / pcCanvasSize.width
      const scaleY = screenHeight / pcCanvasSize.height
      setScale({ x: scaleX, y: scaleY })
    }
    window.addEventListener('resize', updateScale)
    updateScale()
    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  return (
    <div className={Styles['big-box']}>
      <Slider setShadowPosition={setShadowPosition} setComponentData={setComponentData} />
      <div className={Styles['panel-edit']} style={{ width: `calc(100% - ${SLIDER_WIDTH}px)` }}>
        <Shadow shadowPosition={shadowPosition} scale={scale} componentData={componentData} />
        <PanelEdit
          componentData={componentData}
          setComponentData={setComponentData}
          curComponent={curComponent}
          setCurComponent={setCurComponent}
          scale={scale}
          setShadowPosition={setShadowPosition}
        />
        <Grid scale={scale} />
      </div>
    </div>
  )
}

export default Drag
