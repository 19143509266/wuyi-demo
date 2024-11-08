import { chartDataReq } from '@/api/low_code/chart';
import { buildLineChart } from '@/pages/LowCode/chart/line';
import { layoutItem } from '@/pages/LowCode/types';
import { getNestedData } from '@/pages/LowCode/utils';
import { useModel } from '@/useModel';
import { useEffect, useRef, useState } from 'react';

export const useChart = ({ componentItem }: { componentItem: layoutItem }) => {
  const ref = useRef<any>(null);
  if (componentItem.type !== 'chart') return { chartRef: ref };
  const chartInstance = useRef<any>(null);
  const { setCurComponent } = useModel('low_code');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (componentItem?.type === 'chart' && ref.current) {
      const data = componentItem?.viewsData || [];
      switch (componentItem?.componentType) {
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
  }, [componentItem?.type, componentItem?.componentType, componentItem?.viewsData]);

  useEffect(() => {
    if (componentItem?.customAttr?.requestData) {
      const { dataPath } = componentItem?.customAttr?.requestData;
      const path = dataPath?.split('/');
      setLoading(true);
      chartDataReq(componentItem?.customAttr?.requestData)
        .then((res) => {
          const viewsData = getNestedData(res, path) || [];
          setCurComponent((prev: any) => ({ ...prev, viewsData }));
          setLoading(false);
        })
        .catch(() => {
          setCurComponent((prev: any) => ({ ...prev, viewsData: [] }));
          setLoading(false);
        });
    }
  }, [componentItem?.customAttr?.requestData]);

  return { chartRef: ref, chartInstance, chartLoading: loading };
};
