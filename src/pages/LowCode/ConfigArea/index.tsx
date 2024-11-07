import styles from './index.less';
import { Tabs } from 'antd';
import { UTILS_WIDTH } from '@/pages/LowCode/constants';
import ComponentConfig from '@/pages/LowCode/ConfigArea/ComponentConfig';
import GlobalConfig from '@/pages/LowCode/ConfigArea/GlobalConfig';

const Index = () => {
  const tabItems = [
    {
      key: 'form',
      label: '组件配置',
      children: <ComponentConfig />,
    },
    {
      key: 'chart',
      label: '整体配置',
      children: <GlobalConfig />,
    },
  ];

  return (
    <div className={styles.container} style={{ width: UTILS_WIDTH }}>
      <Tabs items={tabItems} />
    </div>
  );
};

export default Index;
