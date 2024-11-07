import React from 'react';
import { Divider } from 'antd';
import styles from '../components.less';
import { componentItems, dragComponentItem } from '@/pages/LowCode/types';

const Items: componentItems[] = [
  {
    key: 'general',
    title: '通用',
    components: [],
  },
  {
    key: 'layout',
    title: '布局',
    components: [],
  },
  {
    key: 'data-entry',
    title: '数据录入',
    components: [],
  },
  {
    key: 'data-display',
    title: '数据展示',
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
