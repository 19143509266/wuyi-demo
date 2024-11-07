import { useState } from 'react';

type GlobalConfigType = {
  gridCols: number;
  gridRowHeight: number;
};

const LowCode = () => {
  const [globalConfig, setGlobalConfig] = useState<GlobalConfigType>({
    gridCols: 12,
    gridRowHeight: 30,
  });

  return {
    globalConfig,
    setGlobalConfig,
  };
};

export default LowCode;
