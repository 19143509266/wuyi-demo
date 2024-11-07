import { Line } from '@antv/g2plot';

export const buildLineChart = (ref: any, data: any[]) => {
  const line = new Line(ref.current, {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
  });
  line.render();
};
