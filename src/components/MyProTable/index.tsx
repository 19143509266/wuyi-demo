import React, { useMemo, useRef, useState } from 'react'
import { ProTable } from '@ant-design/pro-components'
import { getMargin } from '@/utils'
import { useDebounceResize } from '@/hooks/useDebounceResize'

type ProTablePropsType = React.ComponentProps<typeof ProTable>

type Props = ProTablePropsType & {
  autoHeight?: boolean
  offsetHeight?: number
}

const Index = (props: Props) => {
  const { autoHeight, offsetHeight = 0, ...myProTableProps } = props
  const { scroll } = myProTableProps
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  // 防抖函数
  const handleResize = () => {
    if (autoHeight) {
      const container = containerRef.current
      if (container) {
        const searchForm = container.querySelector('.ant-pro-table-search') as HTMLElement
        const toolbar = container.querySelector('.ant-pro-table-list-toolbar') as HTMLElement
        const thead = container.querySelector('.ant-table-thead') as HTMLElement
        const pagination = container.querySelector('.ant-pagination') as HTMLElement
        const searchFormHeight = searchForm ? searchForm.clientHeight + getMargin(searchForm) : 0
        const toolbarHeight = toolbar ? toolbar.clientHeight + getMargin(toolbar) : 0
        const theadHeight = thead ? thead.clientHeight + getMargin(thead) : 0
        const paginationHeight = pagination ? pagination.clientHeight + getMargin(pagination) : 0
        const totalHeight = searchFormHeight + toolbarHeight + theadHeight + paginationHeight
        const newHeight =
          container.clientHeight - totalHeight - getMargin(searchForm) - offsetHeight
        const antTableBody: HTMLElement | null = container.querySelector('.ant-table-body')
        if (antTableBody) {
          antTableBody.style.height = `${newHeight}px`
        }
        setHeight(newHeight)
      }
    }
  }
  if (autoHeight) {
    useDebounceResize({ resizeFn: handleResize, containerRef, deptParams: [autoHeight] })
  }

  const newScroll = useMemo(() => {
    if (autoHeight && height) {
      return { ...scroll, y: height }
    } else {
      return scroll
    }
  }, [height, scroll, autoHeight])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <ProTable {...myProTableProps} scroll={newScroll} />
    </div>
  )
}

export default Index
