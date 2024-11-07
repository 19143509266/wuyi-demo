import { buildLineChart } from '@/pages/LowCode/chart/line';
import { layoutItem } from '@/pages/LowCode/types';
import { useEffect, useRef } from 'react';

export const useChart = ({ componentItem }: { componentItem: layoutItem }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (componentItem.type === 'chart') {
      const data = componentItem?.viewsData || [];
      switch (componentItem.componentType) {
        case 'line':
          buildLineChart(ref, data);
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

  return { chartRef: ref };
};
