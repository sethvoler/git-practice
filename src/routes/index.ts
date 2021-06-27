// import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';
import Home from '@/ui/Home';

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

export default routesConfig;
