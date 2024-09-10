import React from 'react'
import { Divider } from 'antd'
import styles from './index.modules.less'

const Items = [
  {
    key: 'general',
    title: '通用',
    components: [
      { label: '按钮', value: 'Button' },
      { label: '悬浮按钮', value: 'FloatButton' },
      { label: '图标', value: 'Icon' },
      { label: '排版', value: 'Typography' }
    ]
  },
  {
    key: 'layout',
    title: '布局',
    components: [{ label: '分割线', value: 'Divider' }]
  },
  {
    key: 'navigation',
    title: '导航',
    components: [
      { label: '下拉菜单', value: 'Dropdown' },
      { label: '分页', value: 'Pagination' },
      { label: '步骤条', value: 'Steps' }
    ]
  },
  {
    key: 'data-entry',
    title: '数据录入',
    components: [
      { label: '自动完成', value: 'AutoComplete' },
      { label: '级联选择', value: 'Cascader' },
      { label: '多选框', value: 'Checkbox' },
      { label: '颜色选择器', value: 'ColorPicker' },
      { label: '日期选择框', value: 'DatePicker' },
      { label: '表单', value: 'Form' },
      { label: '输入框', value: 'Input' },
      { label: '数字输入框', value: 'InputNumber' },
      { label: '提及', value: 'Mentions' },
      { label: '单选框', value: 'Radio' },
      { label: '评分', value: 'Rate' },
      { label: '选择器', value: 'Select' },
      { label: '滑动输入条', value: 'Slider' },
      { label: '开关', value: 'Switch' },
      { label: '时间选择框', value: 'TimePicker' },
      { label: '穿梭框', value: 'Transfer' },
      { label: '树选择', value: 'TreeSelect' },
      { label: '上传', value: 'Upload' }
    ]
  },
  {
    key: 'data-display',
    title: '数据展示',
    components: [
      { label: '头像', value: 'Avatar' },
      { label: '徽标数', value: 'Badge' },
      { label: '日历', value: 'Calendar' },
      { label: '卡片', value: 'Card' },
      { label: '走马灯', value: 'Carousel' },
      { label: '折叠面板', value: 'Collapse' },
      { label: '描述列表', value: 'Descriptions' },
      { label: '空状态', value: 'Empty' },
      { label: '图片', value: 'Image' },
      { label: '列表', value: 'List' },
      { label: '气泡卡片', value: 'Popover' },
      { label: '二维码', value: 'QRCode' },
      { label: '分段控制器', value: 'Segmented' },
      { label: '统计数值', value: 'Statistic' },
      { label: '表格', value: 'Table' },
      { label: '标签页', value: 'Tabs' },
      { label: '标签', value: 'Tag' },
      { label: '时间轴', value: 'Timeline' },
      { label: '文字提示', value: 'Tooltip' },
      { label: '漫游式引导', value: 'Tour' },
      { label: '树形控件', value: 'Tree' }
    ]
  },
  {
    key: 'feedback',
    title: '反馈',
    components: [
      { label: '警告提示', value: 'Alert' },
      { label: '抽屉', value: 'Drawer' },
      { label: '全局提示', value: 'Message' },
      { label: '对话框', value: 'Modal' },
      { label: '通知提醒框', value: 'Notification' },
      { label: '气泡确认框', value: 'Popconfirm' },
      { label: '进度条', value: 'Progress' },
      { label: '结果', value: 'Result' },
      { label: '骨架屏', value: 'Skeleton' },
      { label: '加载中', value: 'Spin' },
      { label: '水印', value: 'Watermark' }
    ]
  }
]

const Index = () => {
  return (
    <div className={styles.container}>
      {Items.map(item => {
        return (
          <div key={item.key}>
            <div className={styles.groupTitle}>{item.title}</div>
            <Divider className={styles.divider} />
            <div className={styles.componentGroup}>
              {item.components.map(componentItem => {
                return (
                  <div key={componentItem.value} className={styles.componentItem} draggable={true}>
                    {componentItem.label}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Index
