import { useEffect, useState } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css'
// import 'react-resizable/css/styles.css'
import styles from './index.less';
import View from './View';
import './resize.module.less';

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

const resizeHandles: ResizeHandle[] = [
  's',
  'w',
  'e',
  'n',
  'sw',
  'nw',
  'se',
  'ne',
];

const ReactGridLayout = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [layout, setLayout] = useState<Layout[]>([]);
  const [curComponent, setCurComponent] = useState<string | null>(null);

  const getPanelData = () => {
    const res = [
      { id: 'a', x: 0, y: 0, w: 4, h: 9 },
      { id: 'b', x: 4, y: 0, w: 4, h: 9 },
      { id: 'c', x: 8, y: 0, w: 4, h: 9 },
    ];
    const data = res.map((item) => {
      return {
        i: item.id,
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
        resizeHandles: [],
      };
    });
    setLayout(data);
  };

  useEffect(() => {
    getPanelData();

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLayoutChange = (newLayout: Layout[]) => {
    const res = newLayout.map((item) => {
      return {
        i: item.i,
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
        resizeHandles: curComponent === item.i ? resizeHandles : [],
      };
    });
    setLayout(res);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={width}
      onLayoutChange={handleLayoutChange}
      draggableHandle={`.${styles['drag-handle']}`}
      // margin={[0, 0]} // 设置为 [0, 0] 以移除网格项之间的间隙
      // containerPadding={[0, 0]} // 设置为 [0, 0] 以移除容器内边距
    >
      {layout.map((item) => {
        return (
          <div
            key={item.i}
            style={{ background: '#ccc' }}
            onClick={() => {
              setCurComponent(item.i);
              setLayout((prev) => {
                return prev.map((i) => {
                  if (i.i === item.i) {
                    return {
                      ...i,
                      resizeHandles: resizeHandles,
                    };
                  }
                  return i;
                });
              });
            }}
          >
            <div
              className={styles['grid-item']}
              style={
                curComponent === item.i ? { outline: '1px solid #70c0ff' } : {}
              }
            >
              <div
                className={`${styles['drag-handle']} ${styles['top']}`}
              ></div>
              <div
                className={`${styles['drag-handle']} ${styles['bottom']}`}
              ></div>
              <div
                className={`${styles['drag-handle']} ${styles['left']}`}
              ></div>
              <div
                className={`${styles['drag-handle']} ${styles['right']}`}
              ></div>
              <div className={styles['grid-item-content']}>
                <View id={item.i} />
              </div>
            </div>
          </div>
        );
      })}
    </GridLayout>
  );
};

export default ReactGridLayout;
