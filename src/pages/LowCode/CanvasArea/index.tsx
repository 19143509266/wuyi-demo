import React, { useState, useEffect } from 'react'
import styles from './index.less'
import GridLayout, { Layout } from 'react-grid-layout'
import { curComponentType, layoutItem } from '@/pages/LowCode/types'
import { GRID_COLS, GRID_ROW_HEIGHT, RESIZE_HANDLES, UTILS_WIDTH } from '@/pages/LowCode/constants'
import CustomComponent from '@/pages/LowCode/CanvasArea/CustomComponent'
import EditBar from '@/pages/LowCode/CanvasArea/EditBar'
import { Form, FormInstance } from 'antd'

type Props = {
  layout: layoutItem[]
  setLayout: React.Dispatch<React.SetStateAction<layoutItem[]>>
  curComponent: curComponentType
  setCurComponent: React.Dispatch<React.SetStateAction<curComponentType>>
  form: FormInstance
}

const Index = (props: Props) => {
  const { layout, setLayout, curComponent, setCurComponent, form } = props
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
          const result = {
            ...item,
            x: newItem.x,
            y: newItem.y,
            h: newItem.h,
            w: newItem.w,
            resizeHandles: curComponent?.id === item.i ? RESIZE_HANDLES : item.resizeHandles
          }
          if (result.i === curComponent?.id) {
            setCurComponent(result)
          }
          return result
        }
        return item
      })
    })
  }

  const handleEditComponent = (newItem: layoutItem, type: string) => {
    switch (type) {
      case 'delete':
        setCurComponent(null)
        setLayout(prev => prev.filter(item => item.id !== newItem.id))
        break
    }
  }

  return (
    <div className={styles.container} style={{ width: `calc(100% - ${UTILS_WIDTH * 2}px)` }}>
      {/*<Form form={form}>*/}
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
              key={item.id}
              style={{ background: '#e6f7ff' }}
              onClick={e => {
                e.stopPropagation()
                setCurComponent(item)
              }}
            >
              {curComponent?.id === item.i && (
                <EditBar componentItem={item} handleEditComponent={handleEditComponent} />
              )}
              <div
                className={styles['grid-item']}
                style={curComponent?.id === item.i ? { outline: '1px solid #70c0ff' } : {}}
              >
                <div className={`${styles['drag-handle']} ${styles['top']}`}></div>
                <div className={`${styles['drag-handle']} ${styles['bottom']}`}></div>
                <div className={`${styles['drag-handle']} ${styles['left']}`}></div>
                <div className={`${styles['drag-handle']} ${styles['right']}`}></div>
                <div className={styles['grid-item-content']}>
                  <CustomComponent componentItem={item} form={form} />
                </div>
              </div>
            </div>
          )
        })}
      </GridLayout>
      {/*</Form>*/}
    </div>
  )
}

export default Index
