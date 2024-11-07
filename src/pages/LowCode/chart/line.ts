import { Line } from '@antv/g2plot';

export const buildLineChart = (container: any, data: any[], chartInstance: any, customAttr: any) => {
  const { xField = '', yField = '' } = customAttr;

  if (!chartInstance.current) {
    chartInstance.current = new Line(container, {
      data,
      padding: 'auto',
      xField,
      yField,
      xAxis: {
        tickCount: 5,
      },
    });
  } else {
    chartInstance.current?.changeData(data);
    chartInstance.current?.update({ xField, yField });
  }

  chartInstance.current.render();
};
