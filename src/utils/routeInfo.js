import Home from '../pages/home';
import Guest from '../pages/guest';
import Shop from '../pages/shop';

export const BASE_URL = 'http://localhost:3000';

export const routes = [
  {
    path: /^\/$/,
    element: Home,
  },
  {
    path: /^\/guest*$/,
    element: Guest,
  },
  {
    path: /^\/shop$/,
    element: Shop,
  },
];
