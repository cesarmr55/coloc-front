import viewLogin from '../views/login_view';
import Imagedeux from '../assets/1763.jpg';
import viewNav from '../views/nav';

const Login = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  bindEvents() {
    const loginForm = this.el.querySelector('#login-form');
    const errorMessage = this.el.querySelector('#error-message');

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = this.el.querySelector('#username').value;
      const password = this.el.querySelector('#password').value;

      if (username === 'user' && password === 'password') {
        window.location.href = 'home.js';
      } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
      }
    });
  }

  render() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="row">
          <div class="col-4">${viewLogin()}</div>
          <div class="col-5">
            <img src="${Imagedeux}" alt="Colocation Image" width="900" height="500">
          </div>
        </div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.bindEvents();
  }
};

export default Login;
