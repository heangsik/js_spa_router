import { BASE_URL } from './utils/routeInfo';
import Router from './router';
import { navigate } from './utils/navi';
function App($container) {
  this.$container = $container;
  const init = () => {
    document.querySelector('.navbar').addEventListener('click', (e) => {
      const target = e.target.closest('a');

      if (!(target instanceof HTMLAnchorElement)) return;
      e.preventDefault();
      const targetURL = e.target.href
        .replace(window.location.host, '')
        .replace('https://', '');
      navigate(targetURL);
    });
    new Router($container);
    navigate('/');
  };
  init();
}

export default App;
