import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './router';

const App = () => {
  return (
    <Router basename="/wuyi-demo">
      <RouterView />
    </Router>
  );
};

export default App;
