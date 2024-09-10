import { defineConfig } from 'umi'

export default defineConfig({
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
      name: 'demo',
      path: '/demo',
      component: './Demo'
    },
    {
      name: 'iframe',
      path: '/iframe',
      component: './Iframe'
    },
    {
      name: 'antv/x6',
      path: '/antv-x6',
      component: './AntvX6'
    },
    {
      name: 'pixi',
      path: '/pixi',
      component: './Pixi'
    },
    {
      name: 'disable-devtool',
      path: '/disable-devtool',
      component: './DisableDevtool'
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
