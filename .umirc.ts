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
      redirect: '/canvas'
    },
    {
      name: 'canvas',
      path: '/canvas',
      component: './Canvas'
    }
  ],
  npmClient: 'pnpm'
})
