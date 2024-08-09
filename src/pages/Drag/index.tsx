import React, { useState } from 'react'
import Slider from './Slider'
import PanelEdit from './PanelEdit'
import { DragItem, ShadowPositionType, SLIDER_WIDTH } from './drag'
import Shadow from './Shadow'
import Styles from './index.less'
import Grid from './Grid'

const Drag = () => {
  const [componentData, setComponentData] = useState<DragItem[]>([])
  const [curComponent, setCurComponent] = useState<DragItem | null>(null)
  const [shadowPosition, setShadowPosition] = useState<ShadowPositionType>({
    x: 0,
    y: 0,
    type: 'new'
  })

  return (
    <div className={Styles['big-box']}>
      <Slider setShadowPosition={setShadowPosition} setComponentData={setComponentData} />
      <div className={Styles['panel-edit']} style={{ width: `calc(100% - ${SLIDER_WIDTH}px)` }}>
        <Shadow shadowPosition={shadowPosition} />
        <PanelEdit
          componentData={componentData}
          setComponentData={setComponentData}
          curComponent={curComponent}
          setCurComponent={setCurComponent}
        />
        <Grid />
      </div>
    </div>
  )
}

export default Drag
