import { ResizeHandle } from '@/pages/LowCode/types'

export const UTILS_WIDTH = 260 // 两侧工具栏宽度

export const GRID_COLS = 12 // 网格列数

export const GRID_ROW_HEIGHT = 30 // 网格行高

export const RESIZE_HANDLES: ResizeHandle[] = ['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']

// 组件默认配置
export const COMPONENT_DEFAULT_SETTINGS: any = {
  Button: {
    props: {
      block: true,
      danger: false,
      disabled: false,
      ghost: false,
      href: null,
      icon: null,
      iconPosition: 'start',
      shape: 'default',
      size: 'middle',
      target: '_blank',
      type: 'default'
    },
    customAttr: {
      label: '按 钮',
      event: null
    }
  },
  Cascader: {
    props: {
      options: [
        {
          label: '选项1',
          value: '1',
          key: '1',
          children: [{ label: '选项1-1', value: '1-1', key: '1-1', children: [] }]
        }
      ]
    },
    customAttr: {
      dataMode: 'static'
    }
  }
}

// 按钮类型
export const BUTTON_TYPE_LIST = [
  { label: '默认', value: 'default' },
  { label: '主要', value: 'primary' },
  { label: '虚线', value: 'dashed' },
  { label: '链接', value: 'link' },
  { label: '文字', value: 'text' }
]

// 按钮打开方式
export const BUTTON_TARGET_LIST = [
  { label: '当前窗口', value: '_self' },
  { label: '新窗口', value: '_blank' }
]

// 按钮size
export const BUTTON_SIZE_LIST = [
  { label: '大', value: 'large' },
  { label: '中', value: 'middle' },
  { label: '小', value: 'small' }
]

// 按钮shape
export const BUTTON_SHAPE_LIST = [
  { label: '默认', value: 'default' },
  { label: '圆形', value: 'circle' },
  { label: '圆角', value: 'round' }
]
