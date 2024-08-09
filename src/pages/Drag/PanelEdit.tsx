import React, { useEffect, useState } from 'react'
import { DragItem, handlePositions, scaleType } from './drag'
import Styles from './index.less'
import { useMoveMouseDown, useReSize } from './hooks'
import { getPcMatrix } from './utils'

type Props = {
  componentData: DragItem[]
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
  curComponent: DragItem | null
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>
  scale: scaleType
}

const PanelEdit = (props: Props) => {
  const { componentData, setComponentData, curComponent, setCurComponent, scale } = props
  const { handleResizeMouseDown } = useReSize(
    curComponent,
    setCurComponent,
    componentData,
    setComponentData,
    scale
  )
  const { handleMoveMouseDown } = useMoveMouseDown(
    curComponent,
    setCurComponent,
    componentData,
    setComponentData,
    scale
  )

  const handleClick = (item: DragItem) => {
    setCurComponent(item)
  }

  return (
    <div style={{ width: '100%', height: '100%', userSelect: 'none' }}>
      {componentData.map(item => (
        <div
          key={item.id}
          style={{
            width: getPcMatrix('x', item.sizeX, scale),
            height: getPcMatrix('y', item.sizeY, scale),
            background: '#fff000',
            transform: `translate(${getPcMatrix('x', item.x, scale)}px, ${getPcMatrix('y', item.y, scale)}px)`,
            position: 'absolute',
            zIndex: 999
          }}
          onClick={() => handleClick(item)}
        >
          {item.id}
          {curComponent && curComponent.id === item.id ? (
            <div className={Styles.outline}>
              {handlePositions.map(pos => (
                <div
                  key={pos}
                  className={`${Styles['handle']} ${Styles[`handle-${pos}`]}`}
                  onMouseDown={e => handleResizeMouseDown(e, pos)}
                ></div>
              ))}
              {['top', 'bottom', 'left', 'right'].map(pos => (
                <div
                  key={pos}
                  className={`${Styles.move} ${Styles[`move-${pos}`]}`}
                  onMouseDown={e => handleMoveMouseDown(e)}
                />
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default PanelEdit
