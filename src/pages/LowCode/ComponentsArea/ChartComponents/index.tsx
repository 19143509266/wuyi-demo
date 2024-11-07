import React from 'react';
import { Divider } from 'antd';
import styles from '../components.less';
import { componentItems, dragComponentItem } from '@/pages/LowCode/types';

const Items: componentItems[] = [
  {
    key: 'chart',
    title: '图表',
    components: [
      { label: '折线图', value: 'line', type: 'chart' },
      { label: '柱状图', value: 'bar', type: 'chart' },
    ],
  },
  {
    key: 'map',
    title: '地图',
    components: [],
  },
];

type Props = {
  handleComponentDragEnd: (event: React.DragEvent, componentItem: dragComponentItem) => void;
};

const Index = (props: Props) => {
  const { handleComponentDragEnd } = props;

  return (
    <div className={styles.container}>
      {Items.map((item) => {
        return (
          <div key={item.key}>
            <div className={styles.groupTitle}>{item.title}</div>
            <Divider className={styles.divider} />
            <div className={styles.componentGroup}>
              {item.components.map((componentItem) => {
                return (
                  <div
                    key={componentItem.value}
                    className={styles.componentItem}
                    draggable
                    onDragEnd={(event) =>
                      handleComponentDragEnd(event, { ...componentItem, componentCategory: 'chart' })
                    }
                  >
                    {componentItem.label}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
