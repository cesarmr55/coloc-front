import Router from './Router';
import Search from './controllers/Search';
import Login from './controllers/login';
import Home from './controllers/Home';
import Logout from './controllers/logout';
import Tasks from './controllers/Tasks';
import './index.scss';
import Expenses from './controllers/expenses';
import Register from './controllers/register';

const routes = [
  {
    url: '/search',
    controller: Search
  },
  {
    url: '/login',
    controller: Login
  },
  {
    url: '/home',
    controller: Home
  },
  {
    url: '/logout',
    controller: Logout
  },
  {
    url: '/tasks',
    controller: Tasks
  },
  {
    url: '/expenses',
    controller: Expenses
  },
  {
    url: '/register',
    controller: Register
  }
];

new Router(routes);
