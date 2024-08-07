import { defineConfig } from '@umijs/max'

export default defineConfig({
  antd: {},
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
