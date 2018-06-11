const Card = () => import('../views/components/card');
const Chips = () => import('../views/components/chips');
const GridList = () => import('../views/grid-list');
const List = () => import('../views/list');
// const Table = () => import('../views/table');
// const Pagination = () => import('../views/pagination');

const dataRoutes = [
  {
    path: '/card',
    name: 'card',
    component: Card
  },
  {
    path: '/chips',
    name: 'chips',
    component: Chips
  },
  {
    path: '/grid-list',
    name: 'grid-list',
    component: GridList
  },
  {
    path: '/list',
    name: 'list',
    component: List
  }
];

export default dataRoutes;
