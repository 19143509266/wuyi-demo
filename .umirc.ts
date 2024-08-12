import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    {
      path: '/',
      redirect: '/react-grid-layout'
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
