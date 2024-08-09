import React, { useEffect, useState } from 'react'
import { DragItem, handlePositions } from './drag'
import Styles from './index.less'
import { useMoveMouseDown, useReSize } from './hooks'
import { getPcMatrix } from './utils'

type Props = {
  componentData: DragItem[]
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
  curComponent: DragItem | null
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>
}

const PanelEdit = (props: Props) => {
  const { componentData, setComponentData, curComponent, setCurComponent } = props
  const { handleResizeMouseDown } = useReSize(curComponent, setCurComponent, setComponentData)
  const { handleMoveMouseDown } = useMoveMouseDown(curComponent, setCurComponent, setComponentData)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClick = (item: DragItem) => {
    setCurComponent(item)
  }

  return (
    <div style={{ width: '100%', height: '100%', userSelect: 'none' }}>
      {componentData.map(item => (
        <div
          key={item.id}
          style={{
            width: getPcMatrix('x', item.sizeX),
            height: getPcMatrix('y', item.sizeY),
            background: '#fff000',
            transform: `translate(${getPcMatrix('x', item.x)}px, ${getPcMatrix('y', item.y)}px)`,
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
