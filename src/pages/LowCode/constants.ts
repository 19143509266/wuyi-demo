import { ResizeHandle } from '@/pages/LowCode/types'

export const UTILS_WIDTH = 260 // 两侧工具栏宽度

export const RESIZE_HANDLES: ResizeHandle[] = ['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']

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
    },
    configItems: [
      { type: 'input', label: '名称', name: 'label', attr: 'customAttr' },
      {
        type: 'select',
        label: '按钮类型',
        name: 'type',
        options: BUTTON_TYPE_LIST,
        attr: 'props'
      },
      { type: 'switch', label: '危险', name: 'danger', attr: 'props' },
      { type: 'input', label: '链接', name: 'href', attr: 'props' },
      {
        type: 'radio',
        label: '打开方式',
        name: 'target',
        options: BUTTON_TARGET_LIST,
        attr: 'props'
      },
      {
        type: 'radio',
        label: '按钮大小',
        name: 'size',
        options: BUTTON_SIZE_LIST,
        attr: 'props'
      },
      {
        type: 'radio',
        label: '按钮形状',
        name: 'shape',
        options: BUTTON_SHAPE_LIST,
        attr: 'props'
      },
      {
        type: 'radio',
        label: '事件',
        name: 'event',
        options: [
          { label: '提交表单', value: 'submit' },
          { label: '重置表单', value: 'reset' }
        ],
        attr: 'customAttr'
      }
    ]
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
      ],
      placeholder: '请选择',
      showSearch: false,
      multiple: false,
      expandTrigger: 'click'
    },
    customAttr: {
      dataMode: 'static',
      label: 'Cascader'
    },
    configItems: [
      {
        type: 'radio',
        label: '',
        name: 'dataMode',
        options: [
          { label: '静态数据', value: 'static' },
          { label: '动态数据', value: 'dynamic' }
        ],
        attr: 'customAttr'
      },
      { type: 'tree-datasource', name: 'options' },
      { type: 'input', label: '名称', name: 'label', attr: 'customAttr' },
      { type: 'input', label: '占位符', name: 'placeholder', attr: 'props' },
      { type: 'switch', label: '搜索', name: 'showSearch', attr: 'props' },
      { type: 'switch', label: '多选', name: 'multiple', attr: 'props' },
      {
        type: 'radio',
        label: '次级菜单展开方式',
        name: 'expandTrigger',
        options: [
          { label: '点击', value: 'click' },
          { label: '移入', value: 'hover' }
        ],
        attr: 'props'
      }
    ]
  },
  Checkbox: {
    props: {
      options: [
        { label: '选项1', value: '1', key: '1' },
        { label: '选项2', value: '2', key: '2' }
      ]
    },
    customAttr: { label: 'Checkbox', dataMode: 'static' },
    configItems: [
      {
        type: 'radio',
        label: '',
        name: 'dataMode',
        options: [
          { label: '静态数据', value: 'static' },
          { label: '动态数据', value: 'dynamic' }
        ],
        attr: 'customAttr'
      },
      { type: 'datasource', name: 'options' },
      { type: 'input', label: '名称', name: 'label', attr: 'customAttr' }
    ]
  },
  DatePicker: {
    props: {},
    customAttr: { label: 'DatePicker' },
    configItems: [{ type: 'input', label: '名称', name: 'label', attr: 'customAttr' }]
  },
  Input: {
    props: {
      addonBefore: null,
      addonAfter: null,
      maxLength: null,
      showCount: false,
      allowClear: false,
      placeholder: '请输入'
    },
    customAttr: { label: 'Input' },
    configItems: [
      { type: 'input', label: '名称', name: 'label', attr: 'customAttr' },
      { type: 'input', label: '占位符', name: 'placeholder', attr: 'props' },
      { type: 'input', label: '前置标签', name: 'addonBefore', attr: 'props' },
      { type: 'input', label: '后置标签', name: 'addonAfter', attr: 'props' },
      { type: 'input-number', label: '最大长度', name: 'maxLength', attr: 'props' },
      { type: 'switch', label: '展示字数', name: 'showCount', attr: 'props' },
      { type: 'switch', label: '可清除', name: 'allowClear', attr: 'props' }
    ]
  },
  InputNumber: {
    props: {},
    customAttr: { label: 'InputNumber' },
    configItems: [{ type: 'input', label: '名称', name: 'label', attr: 'customAttr' }]
  },
  Radio: {
    props: {
      options: [
        { label: '选项1', value: '1', key: '1' },
        { label: '选项2', value: '2', key: '2' }
      ]
    },
    customAttr: { label: 'Radio', dataMode: 'static' },
    configItems: [
      {
        type: 'radio',
        label: '',
        name: 'dataMode',
        options: [
          { label: '静态数据', value: 'static' },
          { label: '动态数据', value: 'dynamic' }
        ],
        attr: 'customAttr'
      },
      { type: 'datasource', name: 'options' },
      { type: 'input', label: '名称', name: 'label', attr: 'customAttr' }
    ]
  },
  Rate: {
    props: {},
    customAttr: { label: 'Rate' },
    configItems: [{ type: 'input', label: '名称', name: 'label', attr: 'customAttr' }]
  },
  Select: {
    props: {
      options: [
        { label: '选项1', value: '1', key: '1' },
        { label: '选项2', value: '2', key: '2' }
      ],
      placeholder: '请选择',
      allowClear: false,
      showSearch: false,
      mode: 'single'
    },
    customAttr: { label: 'Select', dataMode: 'static' },
    configItems: [
      {
        type: 'radio',
        label: '',
        name: 'dataMode',
        options: [
          { label: '静态数据', value: 'static' },
          { label: '动态数据', value: 'dynamic' }
        ],
        attr: 'customAttr'
      },
      { type: 'datasource', name: 'options' },
      { type: 'input', label: '名称', name: 'label', attr: 'customAttr' },
      { type: 'input', label: '占位符', name: 'placeholder', attr: 'props' },
      { type: 'switch', label: '可清除', name: 'allowClear', attr: 'props' },
      { type: 'switch', label: '搜索', name: 'showSearch', attr: 'props' },
      {
        type: 'radio',
        label: '模式',
        name: 'mode',
        attr: 'props',
        options: [
          { label: '单选', value: 'single' },
          { label: '多选', value: 'multiple' }
        ]
      }
    ]
  },
  Slider: {
    props: {},
    customAttr: { label: 'Slider' },
    configItems: [{ type: 'input', label: '名称', name: 'label', attr: 'customAttr' }]
  },
  Switch: {
    props: {},
    customAttr: { label: 'Switch' },
    configItems: [{ type: 'input', label: '名称', name: 'label', attr: 'customAttr' }]
  },
  TimePicker: {
    props: {},
    customAttr: { label: 'TimePicker' },
    configItems: [{ type: 'input', label: '名称', name: 'label', attr: 'customAttr' }]
  },
  TreeSelect: {
    props: {
      treeData: [
        {
          label: '选项1',
          value: '1',
          key: '1',
          children: [{ label: '选项1-1', value: '1-1', key: '1-1', children: [] }]
        }
      ],
      placeholder: '请选择',
      allowClear: false,
      showSearch: false,
      multiple: false
    },
    customAttr: {
      dataMode: 'static',
      label: 'TreeSelect'
    },
    configItems: [
      {
        type: 'radio',
        label: '',
        name: 'dataMode',
        options: [
          { label: '静态数据', value: 'static' },
          { label: '动态数据', value: 'dynamic' }
        ],
        attr: 'customAttr'
      },
      { type: 'tree-datasource', name: 'treeData' },
      { type: 'input', label: '名称', name: 'label', attr: 'customAttr' },
      { type: 'input', label: '占位符', name: 'placeholder', attr: 'props' },
      { type: 'switch', label: '可清除', name: 'allowClear', attr: 'props' },
      { type: 'switch', label: '搜索', name: 'showSearch', attr: 'props' },
      { type: 'switch', label: '多选', name: 'multiple', attr: 'props' }
    ]
  },
  Avatar: {
    props: {
      alt: '无法显示',
      shape: 'circle',
      size: 32,
      src: ''
    },
    customAttr: {},
    configItems: [
      { type: 'input', label: '错误显示', name: 'alt', attr: 'props' },
      {
        type: 'radio',
        label: '形状',
        name: 'shape',
        attr: 'props',
        options: [
          { label: '圆形', value: 'circle' },
          { label: '方形', value: 'square' }
        ]
      },
      { type: 'input-number', label: '大小', name: 'size', attr: 'props' },
      { type: 'input', label: '地址', name: 'src', attr: 'props' }
    ]
  },
  Calendar: {
    props: {},
    customAttr: {},
    configItems: []
  }
}
