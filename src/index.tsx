import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            fontFamily: '"KoiFont","PingFang SC", "Microsoft YaHei", "Arial", sans-serif',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>,
  );
}
