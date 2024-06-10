const Logout = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  bindEvents() {
    const logoutButton = this.el.querySelector('#logout-btn');
    logoutButton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }

  render() {
    return `
      <div class="logout-container">
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button id="logout-btn">Logout</button>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.bindEvents();
  }
};

export default Logout;
