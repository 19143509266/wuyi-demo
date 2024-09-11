import React from 'react'
import { Divider } from 'antd'
import styles from './index.less'
import { componentItems, dragComponentItem } from '@/pages/LowCode/types'

const Items: componentItems[] = [
  {
    key: 'general',
    title: '通用',
    components: [
      { label: '按钮', value: 'Button', type: 'button' },
      { label: '图标', value: 'Icon', type: 'icon' }
    ]
  },
  {
    key: 'layout',
    title: '布局',
    components: [{ label: '分割线', value: 'Divider', type: 'layout' }]
  },
  // {
  //   key: 'navigation',
  //   title: '导航',
  //   components: [
  //     { label: '下拉菜单', value: 'Dropdown', type: 'navigation' },
  //     { label: '分页', value: 'Pagination', type: 'navigation' },
  //     { label: '步骤条', value: 'Steps', type: 'navigation' }
  //   ]
  // },
  {
    key: 'data-entry',
    title: '数据录入',
    components: [
      // { label: '自动完成', value: 'AutoComplete', type: 'form-item' },
      { label: '级联选择', value: 'Cascader', type: 'form-item' },
      { label: '多选框', value: 'Checkbox', type: 'form-item' },
      // { label: '颜色选择器', value: 'ColorPicker', type: 'form-item' },
      { label: '日期选择框', value: 'DatePicker', type: 'form-item' },
      // { label: '表单', value: 'Form', type: 'form-item' },
      { label: '输入框', value: 'Input', type: 'form-item' },
      { label: '数字输入框', value: 'InputNumber', type: 'form-item' },
      // { label: '提及', value: 'Mentions', type: 'form-item' },
      { label: '单选框', value: 'Radio', type: 'form-item' },
      { label: '评分', value: 'Rate', type: 'form-item' },
      { label: '选择器', value: 'Select', type: 'form-item' },
      { label: '滑动输入条', value: 'Slider', type: 'form-item' },
      { label: '开关', value: 'Switch', type: 'form-item' },
      { label: '时间选择框', value: 'TimePicker', type: 'form-item' },
      // { label: '穿梭框', value: 'Transfer', type: 'form-item' },
      { label: '树选择', value: 'TreeSelect', type: 'form-item' },
      { label: '上传', value: 'Upload', type: 'form-item' }
    ]
  },
  {
    key: 'data-display',
    title: '数据展示',
    components: [
      { label: '头像', value: 'Avatar', type: 'data-display' },
      { label: '徽标数', value: 'Badge', type: 'data-display' },
      { label: '日历', value: 'Calendar', type: 'data-display' },
      { label: '卡片', value: 'Card', type: 'data-display' },
      { label: '走马灯', value: 'Carousel', type: 'data-display' },
      { label: '折叠面板', value: 'Collapse', type: 'data-display' },
      { label: '描述列表', value: 'Descriptions', type: 'data-display' },
      { label: '空状态', value: 'Empty', type: 'data-display' },
      { label: '图片', value: 'Image', type: 'data-display' },
      { label: '列表', value: 'List', type: 'data-display' },
      { label: '气泡卡片', value: 'Popover', type: 'data-display' },
      { label: '二维码', value: 'QRCode', type: 'data-display' },
      { label: '分段控制器', value: 'Segmented', type: 'data-display' },
      { label: '统计数值', value: 'Statistic', type: 'data-display' },
      { label: '表格', value: 'Table', type: 'data-display' },
      { label: '标签页', value: 'Tabs', type: 'data-display' },
      { label: '标签', value: 'Tag', type: 'data-display' },
      { label: '时间轴', value: 'Timeline', type: 'data-display' },
      { label: '文字提示', value: 'Tooltip', type: 'data-display' },
      { label: '漫游式引导', value: 'Tour', type: 'data-display' },
      { label: '树形控件', value: 'Tree', type: 'data-display' }
    ]
  }
  // {
  //   key: 'feedback',
  //   title: '反馈',
  //   components: [
  //     { label: '警告提示', value: 'Alert', type: 'feedback' },
  //     { label: '抽屉', value: 'Drawer', type: 'feedback' },
  //     { label: '全局提示', value: 'Message', type: 'feedback' },
  //     { label: '对话框', value: 'Modal', type: 'feedback' },
  //     { label: '通知提醒框', value: 'Notification', type: 'feedback' },
  //     { label: '气泡确认框', value: 'Popconfirm', type: 'feedback' },
  //     { label: '进度条', value: 'Progress', type: 'feedback' },
  //     { label: '结果', value: 'Result', type: 'feedback' },
  //     { label: '骨架屏', value: 'Skeleton', type: 'feedback' },
  //     { label: '加载中', value: 'Spin', type: 'feedback' },
  //     { label: '水印', value: 'Watermark', type: 'feedback' }
  //   ]
  // }
]

type Props = {
  handleComponentDragEnd: (event: React.DragEvent, componentItem: dragComponentItem) => void
}

const Index = (props: Props) => {
  const { handleComponentDragEnd } = props

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
                  <div
                    key={componentItem.value}
                    className={styles.componentItem}
                    draggable
                    onDragEnd={event =>
                      handleComponentDragEnd(event, { ...componentItem, componentCategory: 'form' })
                    }
                  >
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
