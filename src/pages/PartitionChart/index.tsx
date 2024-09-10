import React, { useEffect, useRef } from 'react'
import { Mix } from '@antv/g2plot'

// 定义单个图表的配置类型
interface ChartConfig {
  type: 'line' | 'column'
  data: { month: string; value: number }[]
  color: string
  yAxisTitle: string
}

// 定义图表配置数组的类型
export type ChartsConfig = ChartConfig[]

interface ChartProps {
  chartsConfig: ChartsConfig
}

const PartitionChart: React.FC<ChartProps> = ({ chartsConfig }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      const plots: any = chartsConfig.map((config, index) => {
        const { type, data, yAxisTitle, color } = config
        const isLastPlot = index === chartsConfig.length - 1

        return {
          type,
          region: {
            start: { x: 0, y: index / chartsConfig.length },
            end: { x: 1, y: (index + 1) / chartsConfig.length }
          },
          options: {
            data,
            xField: 'month',
            yField: 'value',
            color,
            xAxis: {
              title: isLastPlot ? { text: '月份' } : null,
              label: { style: { opacity: isLastPlot ? 1 : 0 } },
              line: { style: { stroke: isLastPlot ? '#ccc' : 'transparent' } },
              tickLine: { style: { stroke: isLastPlot ? '#ccc' : 'transparent' } }
            },
            yAxis: {
              title: { text: yAxisTitle },
              line: { style: { stroke: 'transparent' } },
              tickLine: { style: { stroke: 'transparent' } }
            },
            tooltip: { shared: true, showMarkers: true },
            legend: { position: 'top-left' },
            meta: { month: { alias: '月份' }, value: { alias: '值' } }
          }
        }
      })

      new Mix(containerRef.current, { plots }).render()
    }
  }, [chartsConfig])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
}

export default PartitionChart
