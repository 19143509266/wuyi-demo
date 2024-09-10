import React, { useEffect } from 'react'
import DisableDevtool from 'disable-devtool'

const index = () => {
  useEffect(() => {
    // 你可以配置 DisableDevtool 的选项
    DisableDevtool({})
  }, [])

  return <div>disable-devtool</div>
}

export default index
