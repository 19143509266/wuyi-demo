import { curComponentType, layoutItem } from '@/pages/LowCode/types';
import { useState } from 'react';

type GlobalConfigType = {
  gridCols: number;
  gridRowHeight: number;
};

const LowCode = () => {
  const [globalConfig, setGlobalConfig] = useState<GlobalConfigType>({ gridCols: 12, gridRowHeight: 30 });
  const [layout, setLayout] = useState<layoutItem[]>([]);
  const [curComponent, setCurComponent] = useState<curComponentType>(null);

  return {
    globalConfig,
    setGlobalConfig,

    layout,
    setLayout,

    curComponent,
    setCurComponent,
  };
};

export default LowCode;
