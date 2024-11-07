import { chartDataReq } from '@/api/low_code/chart';
import { buildLineChart } from '@/pages/LowCode/chart/line';
import { layoutItem } from '@/pages/LowCode/types';
import { getNestedData } from '@/pages/LowCode/utils';
import { useModel } from '@/useModel';
import { useEffect, useRef } from 'react';

export const useChart = ({ componentItem }: { componentItem: layoutItem }) => {
  const ref = useRef<any>(null);
  const chartInstance = useRef<any>(null);
  const { setCurComponent } = useModel('low_code');
  if (componentItem.type !== 'chart') return { chartRef: ref };

  useEffect(() => {
    if (componentItem.type === 'chart' && ref.current) {
      const data = componentItem?.viewsData || [];
      switch (componentItem.componentType) {
        case 'line':
          buildLineChart(ref.current, data, chartInstance, componentItem?.customAttr);
          break;
        case 'bar':
          break;
        case 'pie':
          break;
        default:
          break;
      }
    }
  }, [componentItem]);

  useEffect(() => {
    if (componentItem?.customAttr?.requestData) {
      const { dataPath } = componentItem?.customAttr?.requestData;
      const path = dataPath?.split('/');
      chartDataReq(componentItem?.customAttr?.requestData).then((res) => {
        const viewsData = getNestedData(res, path) || [];
        setCurComponent((prev: any) => ({ ...prev, viewsData }));
      });
    }
  }, [componentItem?.customAttr?.requestData]);

  return { chartRef: ref, chartInstance };
};
