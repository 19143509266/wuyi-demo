export type componentItem = {
  label: string;
  value: string;
  type: string;
};

export type dragComponentItem = componentItem & { componentCategory: 'form' | 'chart' };

export type componentItems = {
  key: string;
  title: string;
  components: componentItem[];
};

export type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

// 通用组件类型
type commonItem = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  resizeHandles?: ResizeHandle[];
  componentCategory: 'form' | 'chart';
  componentType: string;
  type: string; // 组件类型 form 数据展示 等
  props?: any; // 组件配置
  customStyle?: any; // 组件样式
  customAttr?: any; // 组件自定义属性
  viewsData?: any[]; // 视图数据
};

export type layoutItem = commonItem & { i: string };

export type curComponentType = commonItem | null;
