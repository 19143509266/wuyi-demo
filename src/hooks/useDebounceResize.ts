import { useDebounceFn } from 'ahooks'
import { useEffect } from 'react'

export const useDebounceResize = ({
  resizeFn,
  containerRef,
  deptParams,
  wait = 200
}: {
  resizeFn: any
  containerRef: any
  deptParams: any[]
  wait?: number
}) => {
  const { run } = useDebounceFn(resizeFn, { wait })

  useEffect(() => {
    const observer = new ResizeObserver(() => run())
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
  }, [...deptParams, run])

  return {}
}
