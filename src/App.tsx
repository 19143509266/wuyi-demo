import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './router';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/wuyi-demo');
    }
  }, []);

  return (
    <Router basename="/wuyi-demo">
      <RouterView />
    </Router>
  );
};

export default App;
