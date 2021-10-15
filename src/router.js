import { FavouritesComponent, HomeComponent, SearchComponent } from './components.js'

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/favourites', component: FavouritesComponent },
    { path: '/search', component: SearchComponent }
];

const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const router = () => {
    const path = parseLocation();
    const { component } = findComponentByPath(path, routes) || {};
    component.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export default router;