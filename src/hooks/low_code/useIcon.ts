import { layoutItem } from '@/pages/LowCode/types';
import { useEffect, useState } from 'react';

export const useIcon = ({ componentItem }: { componentItem: layoutItem }) => {
  const [IconComponent, setIconComponent] = useState<any>(null);

  // 添加 useEffect 来处理图标加载
  useEffect(() => {
    if (componentItem?.componentType === 'Icon') {
      const iconName = componentItem?.customAttr?.iconName;
      if (iconName) {
        import(`@ant-design/icons`).then((AntdIcons) => {
          if ((AntdIcons as any)[iconName]) {
            setIconComponent(() => (AntdIcons as any)[iconName]);
          } else {
            setIconComponent(null);
          }
        });
      }
    }
  }, [componentItem?.customAttr?.iconName, componentItem?.componentType]);

  return { IconComponent };
};
