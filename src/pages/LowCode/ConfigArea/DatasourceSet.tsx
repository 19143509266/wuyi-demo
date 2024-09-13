import { Button, Form, Input, Modal, Space, Tree } from 'antd'
import React, { useState } from 'react'
import { DeleteOutlined, PlusOutlined, PlusSquareTwoTone } from '@ant-design/icons'
import { curComponentType } from '@/pages/LowCode/types'
import { addItemToTree, removeItemFromTree } from '@/pages/LowCode/utils'

type Item = {
  label: string
  value: string
  key: string
  children: Item[]
}

type Props = {
  name: string
  options: Item[]
  setCurComponent: React.Dispatch<React.SetStateAction<curComponentType>>
  isTree: boolean
}

const DatasourceSet = (props: Props) => {
  const { name, options, setCurComponent, isTree } = props
  const [addOpen, setAddOpen] = useState(false)
  const [curKey, setCurKey] = useState<string | null>(null)
  const [form] = Form.useForm()

  const handleAdd = () => {
    setCurKey(null)
    setAddOpen(true)
  }

  const titleRender = (nodeData: any): React.ReactNode => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {nodeData?.label}(key: {nodeData?.key})
        </div>
        <Space>
          {isTree && (
            <PlusOutlined
              onClick={e => {
                e.stopPropagation()
                setCurKey(nodeData?.key)
                setAddOpen(true)
              }}
            />
          )}
          <DeleteOutlined
            onClick={e => {
              e.stopPropagation()
              setCurComponent(prev => {
                if (prev) {
                  const updatedOptions = removeItemFromTree(prev?.props[name] || [], nodeData?.key)
                  return {
                    ...prev,
                    props: { ...prev.props, [name]: updatedOptions }
                  }
                }
                return null
              })
            }}
          />
        </Space>
      </div>
    )
  }

  const handleCancel = () => {
    form.resetFields()
    setAddOpen(false)
  }

  const handleOk = () => {
    form.validateFields().then(values => {
      const newItem = { ...values, key: values.value, children: [] }
      setCurComponent(prev => {
        if (prev) {
          const updatedOptions = addItemToTree(prev?.props[name] || [], curKey, newItem)
          return {
            ...prev,
            props: { ...prev.props, [name]: updatedOptions }
          }
        }
        return null
      })
      handleCancel()
    })
  }

  return (
    <div>
      {options?.length === 0 ? (
        <div style={{ textAlign: 'center' }}>暂无数据</div>
      ) : (
        <Tree
          treeData={options}
          blockNode
          showLine={isTree}
          titleRender={titleRender}
          defaultExpandAll
        />
      )}
      <Button type={'link'} size={'small'} icon={<PlusSquareTwoTone />} onClick={handleAdd}>
        添加
      </Button>

      <Modal title={'添加数据'} open={addOpen} onCancel={handleCancel} onOk={handleOk} centered>
        <Form form={form}>
          <Form.Item
            label={'label'}
            name={'label'}
            rules={[{ required: true, message: '请输入label' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={'value'}
            name={'value'}
            rules={[{ required: true, message: '请输入value' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default DatasourceSet
