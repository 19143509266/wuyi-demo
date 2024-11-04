import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './router';

const App = () => {
  console.log('加载App...');
  return (
    <Router>
      <RouterView />
      <div>123</div>
    </Router>
  );
};

export default App;
