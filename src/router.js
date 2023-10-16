import { routes } from './utils/routeInfo';

function Router($container) {
  this.$container = $container;
  let currentPage = undefined;

  const findMatchedRoute = () =>
    routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    currentPage = null;
    const TargetPage = findMatchedRoute()?.element || NotFound;

    currentPage = new TargetPage(this.$container);
  };

  const init = () => {
    window.addEventListener('historychange', (e) => {
      const { to, isReplace } = e.detail;

      if (isReplace || to === location.pathname)
        history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      route();
    });

    window.addEventListener('popstate', () => {
      route();
    });
  };

  init();
}

export default Router;
