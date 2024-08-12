import React, { useEffect, useState, useRef } from 'react'
import { buildBar, buildLine, buildPie } from './chartBuild'
import { Plot } from '@antv/g2plot'
import { ColumnOptions } from '@antv/g2plot/lib/plots/column'
import { LineOptions } from '@antv/g2plot/lib/plots/line'
import { PieOptions } from '@antv/g2plot/lib/plots/pie'

type Props = {
  id: string
}

const datas: any = {
  a: {
    type: 'bar'
  },
  b: {
    type: 'line'
  },
  c: {
    type: 'pie'
  }
}

const sampleData = [
  { field: '2021', value: 100, category: 'A' },
  { field: '2022', value: 200, category: 'B' },
  { field: '2023', value: 150, category: 'C' }
]
const pieData = [
  { field: 'A', value: 40 },
  { field: 'B', value: 30 },
  { field: 'C', value: 30 }
]

const View = (props: Props) => {
  const { id } = props
  const [view, setView] = useState<{ id?: string; type?: string }>({})
  const chartContainerRef = useRef<HTMLDivElement | null>(null)
  const [plot, setPlot] = useState<
    Plot<ColumnOptions> | Plot<LineOptions> | Plot<PieOptions> | null
  >(null)

  const getViewData = (id: string) => {
    const res = {
      id: id,
      ...datas[id]
    }
    setView(res)
  }

  useEffect(() => {
    getViewData(id)
  }, [id])

  useEffect(() => {
    if (chartContainerRef.current && view.type) {
      let newPlot: Plot<ColumnOptions> | Plot<LineOptions> | Plot<PieOptions> | null = null

      switch (view.type) {
        case 'bar':
          newPlot = buildBar(chartContainerRef.current, sampleData)
          break
        case 'line':
          newPlot = buildLine(chartContainerRef.current, sampleData)
          break
        case 'pie':
          newPlot = buildPie(chartContainerRef.current, pieData)
          break
        default:
          break
      }

      if (newPlot) {
        newPlot.render()
      }

      if (plot) {
        plot.destroy()
      }

      setPlot(newPlot)
    }

    return () => {
      if (plot) {
        plot.destroy()
      }
    }
  }, [view])

  return <div id={id} ref={chartContainerRef} style={{ width: '100%', height: '100%' }}></div>
}

export default View
