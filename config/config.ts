import { defineConfig } from 'umi'

export default defineConfig({
  plugins: ['@umijs/plugins/dist/initial-state', '@umijs/plugins/dist/model', '@umijs/plugins/dist/antd'],
  initialState: {},
  model: {},
  mako: {},
  antd: {
    theme: {
      token: {
        fontFamily: '"KoiFont","PingFang SC", "Microsoft YaHei", "Arial", sans-serif'
      }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/demo-block'
    },
    {
      name: 'canvas',
      path: '/canvas',
      component: './Canvas'
    },
    {
      name: '拖拽',
      path: '/drag',
      component: './Drag'
    },
    {
      name: 'react-grid-layout',
      path: '/react-grid-layout',
      component: './ReactGridLayout'
    },
    {
      name: '条件关系',
      path: '/condition-relation',
      component: './ConditionRelation'
    },
    {
      name: '两个图表的echarts',
      path: '/two-chart-echarts',
      component: './TwoChartEcharts'
    },
    {
      name: '低代码',
      path: '/low-code',
      component: './LowCode'
    },
    {
      name: '二次封装组件demo',
      path: '/demo-block',
      component: './DemoBlock'
    }
  ],
  npmClient: 'pnpm',
  base: '/wuyi-demo/',
  publicPath: '/wuyi-demo/'
})
