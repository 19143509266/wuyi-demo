import { useRoutes } from 'react-router-dom';
import Canvas from '../pages/Canvas';
import Drag from '../pages/Drag';
import ReactGridLayout from '../pages/ReactGridLayout';
import ConditionRelation from '../pages/ConditionRelation';
import TwoChartEcharts from '../pages/TwoChartEcharts';
import LowCode from '../pages/LowCode';
import DemoBlock from '../pages/DemoBlock';
import { dataflowProvider } from '@/useModel';
import Home from '@/pages/Home';

export const routes = [
  {
    name: '首页',
    path: '/',
    element: <Home />,
  },
  {
    name: 'canvas',
    path: '/canvas',
    element: <Canvas />,
  },
  {
    name: 'drag',
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
    name: 'low-code',
    path: '/low-code',
    element: <LowCode />,
  },
  {
    name: 'demo',
    path: '/demo-block',
    element: <DemoBlock />,
  },
];

export default function RouterView() {
  console.log('加载RouterView...');
  return dataflowProvider(useRoutes(routes));
}
