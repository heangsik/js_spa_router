function Home($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">
      Home 페이지에요.
      </main>
    `;
  };

  this.render();
}

export default Home;
