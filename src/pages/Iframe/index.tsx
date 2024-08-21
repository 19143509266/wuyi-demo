import PartitionChart, { ChartsConfig } from '../PartitionChart'

const Demo = () => {
  const chartsConfig: ChartsConfig = [
    {
      type: 'column',
      data: [
        { month: '1月', value: 2.0 },
        { month: '2月', value: 4.9 }
        // 其他数据
      ],
      color: '#f8f106',
      yAxisTitle: '蒸发量'
    },
    {
      type: 'line',
      data: [
        { month: '1月', value: 2.6 },
        { month: '2月', value: 5.9 }
      ],
      color: '#fe7576',
      yAxisTitle: '降水量'
    },
    {
      type: 'line',
      data: [
        { month: '1月', value: 13 },
        { month: '2月', value: 43 }
      ],
      color: '#fe7576',
      yAxisTitle: '降水量'
    }
  ]

  return <PartitionChart chartsConfig={chartsConfig} />
}

export default Demo
