import React from 'react'
import { Form, InputNumber } from 'antd'
import { useModel } from 'umi'

const GlobalConfig = () => {
  const { gridCols, setGridCols, gridRowHeight, setGridRowHeight } = useModel('low_code')
  const [form] = Form.useForm()

  return (
    <div style={{ padding: 12, boxSizing: 'border-box' }}>
      <Form form={form}>
        <Form.Item label="网格列数" name={'gridCols'} initialValue={gridCols}>
          <InputNumber
            size={'small'}
            onChange={e => {
              if (typeof e === 'number') {
                setGridCols(e)
              }
            }}
          />
        </Form.Item>
        <Form.Item label="网格行高" name={'gridRowHeight'} initialValue={gridRowHeight}>
          <InputNumber
            size={'small'}
            onChange={e => {
              if (typeof e === 'number') {
                setGridRowHeight(e)
              }
            }}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default GlobalConfig
