import React, { useEffect } from 'react';
import ComponentsArea from '@/pages/LowCode/ComponentsArea';
import CanvasArea from '@/pages/LowCode/CanvasArea';
import ConfigArea from '@/pages/LowCode/ConfigArea';
import { curComponentType, dragComponentItem } from '@/pages/LowCode/types';
import { COMPONENT_DEFAULT_SETTINGS, RESIZE_HANDLES, UTILS_WIDTH } from '@/pages/LowCode/constants';
import { v4 as uuidv4 } from 'uuid';
import { ConfigProvider, Form } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useModel } from '@/useModel';
import lineData from './1.json';

const Index = () => {
  const { globalConfig, setLayout, curComponent, setCurComponent } = useModel('low_code');
  const [form] = Form.useForm();

  const handleComponentDragEnd = (event: React.DragEvent, componentItem: dragComponentItem) => {
    const canvasWidth = window.innerWidth - UTILS_WIDTH * 2;
    const left = event.clientX - UTILS_WIDTH;
    const col = Math.ceil((left / canvasWidth) * globalConfig.gridCols);
    if (col > 0 && col <= globalConfig.gridCols) {
      const y = Math.ceil(event.clientY / globalConfig.gridRowHeight);
      const newItem: curComponentType = {
        x: col,
        y: y,
        w: globalConfig.gridCols / 2,
        h: 3,
        id: uuidv4(),
        componentCategory: componentItem.componentCategory,
        componentType: componentItem.value,
        type: componentItem.type,
        resizeHandles: [],
        customStyle: {},
        props: COMPONENT_DEFAULT_SETTINGS[componentItem.value]?.props || {},
        customAttr: COMPONENT_DEFAULT_SETTINGS[componentItem.value]?.customAttr || {},
        viewsData: lineData,
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
        <CanvasArea form={form} />
        <ConfigArea key={curComponent?.id} />
      </ConfigProvider>
    </div>
  );
};

export default Index;
