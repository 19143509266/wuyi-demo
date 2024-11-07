import React, { useEffect, useState } from 'react';
import ComponentsArea from '@/pages/LowCode/ComponentsArea';
import CanvasArea from '@/pages/LowCode/CanvasArea';
import ConfigArea from '@/pages/LowCode/ConfigArea';
import { curComponentType, dragComponentItem, layoutItem } from '@/pages/LowCode/types';
import { COMPONENT_DEFAULT_SETTINGS, RESIZE_HANDLES, UTILS_WIDTH } from '@/pages/LowCode/constants';
import { v4 as uuidv4 } from 'uuid';
import { ConfigProvider, Form } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useModel } from '@/useModel';

const Index = () => {
  const { globalConfig } = useModel('low_code');
  const [layout, setLayout] = useState<layoutItem[]>([]);
  const [curComponent, setCurComponent] = useState<curComponentType>(null);
  const [form] = Form.useForm();

  const handleComponentDragEnd = (event: React.DragEvent, componentItem: dragComponentItem) => {
    const canvasWidth = window.innerWidth - UTILS_WIDTH * 2;
    const left = event.clientX - UTILS_WIDTH;
    const col = Math.ceil((left / canvasWidth) * globalConfig.gridCols);
    if (col > 0 && col <= globalConfig.gridCols) {
      const y = Math.ceil(event.clientY / globalConfig.gridRowHeight);
      const newItem = {
        x: col,
        y: y,
        w: 6,
        h: 3,
        id: uuidv4(),
        componentCategory: componentItem.componentCategory,
        componentType: componentItem.value,
        type: componentItem.type,
        resizeHandles: [],
        customStyle: {},
        props: COMPONENT_DEFAULT_SETTINGS[componentItem.value]?.props || {},
        customAttr: COMPONENT_DEFAULT_SETTINGS[componentItem.value]?.customAttr || {},
      };
      setCurComponent(newItem);
    }
  };

  useEffect(() => {
    if (curComponent) {
      setLayout((prev) => {
        const updated = prev.some((item) => item.id === curComponent.id);
        return updated
          ? prev.map((item) =>
              item.id === curComponent.id
                ? {
                    ...curComponent,
                    i: curComponent.id,
                    resizeHandles: RESIZE_HANDLES,
                  }
                : { ...item, resizeHandles: [] },
            )
          : [
              ...prev.map((item) => ({ ...item, resizeHandles: [] })),
              {
                ...curComponent,
                i: curComponent.id,
                resizeHandles: RESIZE_HANDLES,
              },
            ];
      });
    } else {
      setLayout((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            resizeHandles: [],
          };
        });
      });
    }
  }, [curComponent]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <ConfigProvider locale={zhCN}>
        <ComponentsArea handleComponentDragEnd={handleComponentDragEnd} />
        <CanvasArea
          layout={layout}
          setLayout={setLayout}
          curComponent={curComponent}
          setCurComponent={setCurComponent}
          form={form}
        />
        <ConfigArea key={curComponent?.id} curComponent={curComponent} setCurComponent={setCurComponent} />
      </ConfigProvider>
    </div>
  );
};

export default Index;
