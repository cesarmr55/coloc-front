import axios from 'axios';
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

      const email = this.el.querySelector('#email').value;
      const password = this.el.querySelector('#password').value;

      console.log('Collected Data:', { email, password }); // Log collected data

      axios.post('http://localhost:80/login', { email, password })
        .then((response) => {
          console.log('Server Response:', response.data); // Log server response
          if (response.data.success) {
            window.location.href = 'home';
          } else {
            errorMessage.textContent = 'Invalid email or password. Please try again.';
          }
        })
        .catch((error) => {
          console.error('Error:', error); // Log error
          errorMessage.textContent = 'An error occurred. Please try again.';
        });
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
        <div id="error-message" class="text-danger"></div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.bindEvents();
  }
};

export default Login;
