import React from 'react'
import { Button, Space } from 'antd'
import { layoutItem } from '@/pages/LowCode/types'

type Props = {
  layout: layoutItem[]
  setLayout: React.Dispatch<React.SetStateAction<layoutItem[]>>
}

const Index: React.FC<Props> = props => {
  const { layout, setLayout } = props

  const handleExport = () => {
    const json = JSON.stringify(layout, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'schema.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json'

    input.onchange = event => {
      const target = event.target as HTMLInputElement // 类型断言
      const file = target.files?.[0] // 使用可选链以防 `files` 为空
      if (file) {
        const reader = new FileReader()

        reader.onload = e => {
          try {
            const json = JSON.parse(e.target?.result as string) // 类型断言
            setLayout(json) // 更新 layout 状态
          } catch (error) {
            console.error('文件解析失败：', error)
            alert('导入的文件格式不正确，请选择有效的 JSON 文件。')
          }
        }

        reader.readAsText(file)
      }
    }
    input.click()
  }

  return (
    <div
      style={{
        height: 54,
        width: '100%',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 16
      }}
    >
      <Space>
        <Button onClick={handleImport}>导入</Button>
        <Button onClick={handleExport}>导出Schema</Button>
      </Space>
    </div>
  )
}

export default Index
