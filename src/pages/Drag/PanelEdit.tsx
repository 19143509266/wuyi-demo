import React, { useEffect, useState } from 'react'
import { DragItem, handlePositions, pcMatrixCount, SLIDER_WIDTH } from './drag'
import Styles from './index.less'
import { useReSize } from './hooks'

type Props = {
  componentData: DragItem[]
  setComponentData: React.Dispatch<React.SetStateAction<DragItem[]>>
  curComponent: DragItem | null
  setCurComponent: React.Dispatch<React.SetStateAction<DragItem | null>>
}

const PanelEdit = (props: Props) => {
  const { componentData, setComponentData, curComponent, setCurComponent } = props
  const { handleResizeMouseDown } = useReSize(curComponent, setCurComponent, setComponentData)
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
      {componentData.map((item, index) => (
        <div
          key={item.id}
          style={{
            width: (item.sizeX / pcMatrixCount.x) * (windowSize.width - SLIDER_WIDTH),
            height: (item.sizeY / pcMatrixCount.y) * windowSize.height,
            background: '#fff',
            transform: `translate(${item.x - SLIDER_WIDTH}px, ${item.y}px)`,
            position: 'absolute'
          }}
          onClick={() => handleClick(item)}
        >
          {item.id}

          {curComponent && curComponent.id === item.id ? (
            <div className={Styles.outline}>
              {handlePositions.map(pos => (
                <div
                  key={pos}
                  className={Styles['handle'] + ' ' + Styles[`handle-${pos}`]}
                  onMouseDown={e => handleResizeMouseDown(e, pos)}
                ></div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default PanelEdit
