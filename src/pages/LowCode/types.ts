export type componentItem = {
  label: string
  value: string
}

export type dragComponentItem = componentItem & { componentType: 'form' | 'chart' }

export type componentItems = {
  key: string
  title: string
  components: componentItem[]
}

export type curComponentType = {
  id: string
  x: number
  y: number
  w: number
  h: number
  componentType: 'form' | 'chart'
  type: string
  props?: any
} | null

export type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'

export type layoutItem = {
  i: string
  x: number
  y: number
  w: number
  h: number
  resizeHandles?: ResizeHandle[]
  componentType: 'form' | 'chart'
  type: string
  props?: any
}
