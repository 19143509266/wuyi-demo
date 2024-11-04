import { routes } from '@/router';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {routes.map((item) => {
        return (
          <Link to={item.path} key={item.path}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
