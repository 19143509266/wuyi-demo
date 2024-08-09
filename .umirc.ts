import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    {
      path: '/',
      redirect: '/drag'
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
