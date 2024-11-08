import { Button, Space } from 'antd';
import { useModel } from '@/useModel';

const Index = () => {
  const { globalConfig, setGlobalConfig, layout, setLayout, setCurComponent } = useModel('low_code');

  const handleExport = () => {
    const exportLayout = layout.map((item: any) => ({ ...item, viewsData: [] }));
    const schema = { layout: exportLayout, globalConfig };
    const json = JSON.stringify(schema, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'schema.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';

    input.onchange = (event) => {
      const target = event.target as HTMLInputElement; // 类型断言
      const file = target.files?.[0]; // 使用可选链以防 `files` 为空
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          try {
            const json = JSON.parse(e.target?.result as string); // 类型断言
            const cur = json.layout.find((item: any) => item?.resizeHandles?.length > 0);
            setGlobalConfig(json.globalConfig);
            setCurComponent(cur);
            setTimeout(() => setLayout(json.layout), 0);
          } catch (error) {
            console.error('文件解析失败：', error);
            alert('导入的文件格式不正确，请选择有效的 JSON 文件。');
          }
        };

        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div
      style={{
        height: 54,
        width: '100%',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 16,
        boxSizing: 'border-box',
      }}
    >
      <Space>
        <Button onClick={handleImport}>导入</Button>
        <Button onClick={handleExport}>导出Schema</Button>
      </Space>
    </div>
  );
};

export default Index;
