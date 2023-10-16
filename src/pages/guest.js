function Guest($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">
      Guest 페이지에요.
      </main>
    `;
  };

  this.render();
}

export default Guest;
