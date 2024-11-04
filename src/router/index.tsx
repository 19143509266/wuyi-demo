import { useRoutes } from 'react-router-dom';
import Canvas from '../pages/Canvas';
import Drag from '../pages/Drag';
import ReactGridLayout from '../pages/ReactGridLayout';
import ConditionRelation from '../pages/ConditionRelation';
import TwoChartEcharts from '../pages/TwoChartEcharts';
import LowCode from '../pages/LowCode';
import DemoBlock from '../pages/DemoBlock';
import { dataflowProvider } from '@/useModel';

const routes = [
  {
    name: '首页',
    path: '/',
    element: <div>首页</div>,
  },
  {
    name: 'canvas',
    path: '/canvas',
    element: <Canvas />,
  },
  {
    name: '拖拽',
    path: '/drag',
    element: <Drag />,
  },
  {
    name: 'react-grid-layout',
    path: '/react-grid-layout',
    element: <ReactGridLayout />,
  },
  {
    name: '条件关系',
    path: '/condition-relation',
    element: <ConditionRelation />,
  },
  {
    name: '两个图表的echarts',
    path: '/two-chart-echarts',
    element: <TwoChartEcharts />,
  },
  {
    name: '低代码',
    path: '/low-code',
    element: <LowCode />,
  },
  {
    name: '二次封装组件demo',
    path: '/demo-block',
    element: <DemoBlock />,
  },
];

export default function RouterView() {
  return dataflowProvider(useRoutes(routes));
}
