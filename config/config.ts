import { defineConfig } from 'umi'

export default defineConfig({
  plugins: ['@umijs/plugins/dist/initial-state', '@umijs/plugins/dist/model'],
  initialState: {},
  model: {},
  routes: [
    {
      path: '/',
      redirect: '/low-code'
    },
    {
      name: 'canvas',
      path: '/canvas',
      component: './Canvas'
    },
    {
      name: 'drag',
      path: '/drag',
      component: './Drag'
    },
    {
      name: 'react-grid-layout',
      path: '/react-grid-layout',
      component: './ReactGridLayout'
    },
    {
      name: 'condition-relation',
      path: '/condition-relation',
      component: './ConditionRelation'
    },
    {
      name: 'two-chart-echarts',
      path: '/two-chart-echarts',
      component: './TwoChartEcharts'
    },
    {
      name: 'low-code',
      path: '/low-code',
      component: './LowCode'
    }
  ],
  npmClient: 'pnpm',
  base: '/wuyi-demo/',
  publicPath: '/wuyi-demo/'
})
