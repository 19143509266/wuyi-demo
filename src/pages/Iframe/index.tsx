import React, { useEffect } from 'react'

const Iframe = () => {
  const ref = React.useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleLoad = () => {
      if (ref.current) {
        console.log('发消息...')
        // 向 iframe 发送消息
        ref.current.contentWindow?.postMessage(
          { param1: 'value1', param2: 'value2' }, // 发送的消息对象
          'http://localhost:4869' // 目标 origin
        )
      }
    }

    // 监听 iframe 的加载事件
    if (ref.current) {
      ref.current.addEventListener('load', handleLoad)

      return () => {
        ref.current?.removeEventListener('load', handleLoad)
      }
    }
  }, [])

  return (
    <iframe
      ref={ref}
      src="http://localhost:4869/wuyi-demo/react-grid-layout"
      style={{ width: '100%', height: '100%' }}
      frameBorder="0"
      title="Iframe Example"
    ></iframe>
  )
}

export default Iframe
