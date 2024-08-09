import { defineConfig } from '@umijs/max'

export default defineConfig({
  antd: {
    theme: {
      token: {
        colorPrimary: '#13c2c2',
        colorInfo: '#13c2c2'
      }
    }
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'demo'
  },
  routes: [
    {
      path: '/',
      redirect: '/antv-x6'
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
    }
    // {
    //   name: 'antv/x6',
    //   path: '/antv-x6',
    //   component: './AntvX6'
    // },
    // {
    //   name: 'pixi',
    //   path: '/pixi',
    //   component: './Pixi'
    // }
  ],
  npmClient: 'pnpm'
})
