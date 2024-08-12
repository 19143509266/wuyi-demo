import { Column, Line, Pie, ColumnOptions, LineOptions, PieOptions, Plot } from '@antv/g2plot'

// 数据类型定义
interface ChartData {
  field: string
  value: number
  category: string
}

// 柱状图
export function buildBar(container: HTMLElement, data: ChartData[]): Plot<ColumnOptions> {
  const options: ColumnOptions = {
    data: data,
    xField: 'field',
    yField: 'value',
    seriesField: 'category',
    isGroup: true,
    isStack: true
  }

  return new Column(container, options)
}

// 折线图
export function buildLine(container: HTMLElement, data: ChartData[]): Plot<LineOptions> {
  const options: LineOptions = {
    data: data,
    xField: 'field',
    yField: 'value',
    seriesField: 'category',
    isStack: true
  }

  return new Line(container, options)
}

// 饼图
export function buildPie(
  container: HTMLElement,
  data: { field: string; value: number }[]
): Plot<PieOptions> {
  const options: PieOptions = {
    data: data,
    angleField: 'value', // 饼图使用angleField表示角度
    colorField: 'field' // 饼图使用colorField表示不同类别的颜色
  }

  return new Pie(container, options)
}
