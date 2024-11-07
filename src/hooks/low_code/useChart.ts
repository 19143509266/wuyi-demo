import { layoutItem } from '@/pages/LowCode/types';
import { useEffect, useRef } from 'react';

export const useChart = ({ componentItem }: { componentItem: layoutItem }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentItem.type === 'chart') {
      console.log(componentItem);
    }
  }, [componentItem]);

  return { chartRef: ref };
};
