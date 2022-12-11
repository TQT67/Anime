import Home from '../pages/Home';
import GridItems from '../components/GridItems/GridItems';
import Shop from '../pages/Shop/Shop';
import Watch from '../pages/Watch/Watch';
import Infor from '../pages/Infor/Infor';

const publicRoutes = [
    { path: '/information', component: Infor },
    { path: '/watch/:id', component: Watch },
    { path: '/shop', component: Shop },
    { path: '/:type/:letter', component: GridItems },
    { path: '/:type', component: GridItems },
    { path: '/', component: Home },
    // { path: '/sales', component: Sales },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
