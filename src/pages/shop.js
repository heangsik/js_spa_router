function Shop($container) {
  this.$container = $container;

  console.log('construct shop page');

  this.setState = () => {
    console.log('set state shop');

    this.render();
  };

  this.render = () => {
    console.log('render shop');

    this.$container.innerHTML = `
      <main class="mainPage">
      Shop 페이지에요.
      </main>
    `;
  };

  this.render();
}

export default Shop;
