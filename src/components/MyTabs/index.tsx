import React, { useRef } from 'react'
import { Tabs, TabsProps } from 'antd'
import { getMargin } from '@/utils'
import { useDebounceResize } from '@/hooks/useDebounceResize'

type Props = TabsProps & {
  autoFitContent?: boolean
}

const Index: React.FC<Props> = props => {
  const { autoFitContent, ...myTabsProps } = props
  const containerRef = useRef<HTMLDivElement>(null)

  // 防抖函数
  const handleResize = () => {
    if (autoFitContent) {
      const container = containerRef.current
      if (container) {
        const tabs = container.querySelector('.ant-tabs-nav') as HTMLElement
        const tabsHeight = tabs ? tabs.clientHeight + getMargin(tabs) : 0
        const newHeight = container.clientHeight - tabsHeight
        const antTabsContentBody: HTMLElement | null = container.querySelector('.ant-tabs-content')
        if (antTabsContentBody) {
          antTabsContentBody.style.height = `${newHeight}px`
          antTabsContentBody.style.overflow = 'auto'
        }
      }
    }
  }
  if (autoFitContent) {
    useDebounceResize({ resizeFn: handleResize, containerRef, deptParams: [autoFitContent] })
  }

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Tabs {...myTabsProps} />
    </div>
  )
}

export default Index
