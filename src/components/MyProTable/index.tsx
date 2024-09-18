import React, { useMemo, useState, useEffect, useRef } from 'react'
import { ProTable } from '@ant-design/pro-components'
import { useDebounceFn } from 'ahooks'

type ProTablePropsType = React.ComponentProps<typeof ProTable>

type Props = ProTablePropsType & {
  autoHeight?: boolean
  offsetHeight?: number
}

const getMargin = (element: HTMLElement) => {
  if (element) {
    const style = getComputedStyle(element)
    const marginTop = parseFloat(style.marginTop)
    const marginBottom = parseFloat(style.marginBottom)
    return marginTop + marginBottom
  }
  return 0
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
        setHeight(newHeight)
      }
    }
  }

  const { run } = useDebounceFn(handleResize, { wait: 200 })

  console.log(height, '==================height')
  console.log(containerRef.current?.clientHeight, '==================clientHeight')

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      run()
    })

    const mutationObserver = new MutationObserver(run)

    const container = containerRef.current
    if (container) {
      observer.observe(container)
      mutationObserver.observe(container, { childList: true, subtree: true })
    }

    run()

    return () => {
      if (container) {
        observer.unobserve(container)
        mutationObserver.disconnect()
      }
    }
  }, [autoHeight, run])

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
