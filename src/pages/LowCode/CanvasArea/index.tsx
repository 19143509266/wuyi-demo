import React, { useState, useEffect } from 'react'
import styles from './index.modules.less'
import GridLayout, { Layout } from 'react-grid-layout'
import './index.modules.less'
import { curComponentType, layoutItem } from '@/pages/LowCode/types'
import { GRID_COLS, GRID_ROW_HEIGHT, RESIZE_HANDLES, UTILS_WIDTH } from '@/pages/LowCode/constants'
import CustomComponent from '@/pages/LowCode/CanvasArea/CustomComponent'

type Props = {
  layout: layoutItem[]
  setLayout: React.Dispatch<React.SetStateAction<layoutItem[]>>
  curComponent: curComponentType
  setCurComponent: React.Dispatch<React.SetStateAction<curComponentType>>
}

const Index = (props: Props) => {
  const { layout, setLayout, curComponent, setCurComponent } = props
  const [width, setWidth] = useState(window.innerWidth - 520)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth - 520)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(prev => {
      return prev.map(item => {
        const newItem = newLayout.find(nItem => nItem.i === item.i)
        if (newItem) {
          return {
            ...item,
            x: newItem.x,
            y: newItem.y,
            h: newItem.h,
            w: newItem.w,
            resizeHandles: curComponent?.id === item.i ? RESIZE_HANDLES : item.resizeHandles
          }
        }
        return item
      })
    })
  }

  return (
    <div className={styles.container} style={{ width: `calc(100% - ${UTILS_WIDTH * 2}px)` }}>
      <GridLayout
        className="layout"
        layout={layout}
        cols={GRID_COLS}
        rowHeight={GRID_ROW_HEIGHT}
        width={width}
        onLayoutChange={handleLayoutChange}
        draggableHandle={`.${styles['drag-handle']}`}
        // margin={[0, 0]} // 设置为 [0, 0] 以移除网格项之间的间隙
        // containerPadding={[0, 0]} // 设置为 [0, 0] 以移除容器内边距
      >
        {layout.map(item => {
          return (
            <div
              key={item.i}
              style={{ background: '#e6f7ff' }}
              onClick={() => {
                setCurComponent({ ...item, id: item.i })
                setLayout((prev: layoutItem[]) => {
                  return prev.map(i => {
                    if (i.i === item.i) {
                      return {
                        ...i,
                        resizeHandles: RESIZE_HANDLES
                      }
                    } else {
                      return {
                        ...i,
                        resizeHandles: []
                      }
                    }
                  })
                })
              }}
            >
              <div
                className={styles['grid-item']}
                style={curComponent?.id === item.i ? { outline: '1px solid #70c0ff' } : {}}
              >
                <div className={`${styles['drag-handle']} ${styles['top']}`}></div>
                <div className={`${styles['drag-handle']} ${styles['bottom']}`}></div>
                <div className={`${styles['drag-handle']} ${styles['left']}`}></div>
                <div className={`${styles['drag-handle']} ${styles['right']}`}></div>
                <div className={styles['grid-item-content']}>
                  <CustomComponent componentItem={item} />
                </div>
              </div>
            </div>
          )
        })}
      </GridLayout>
    </div>
  )
}

export default Index
