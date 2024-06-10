import axios from 'axios';
import viewRegister from '../views/register_view';
import Imagedeux from '../assets/1763.jpg';
import viewNav from '../views/nav';

const Register = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  collectData() {
    const userData = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      confirmPassword: document.getElementById('confirmPassword').value
    };
    return userData;
  }

  sendData(userData) {
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sending Backend Call to register new User', userData);
    axios.post('http://localhost:80/register', userData)
      .then(() => {
        console.log('New User registered');
        alert('Registration successful!');
        document.getElementById('register-form').reset();
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to register. Please try again.');
      });
  }

  bindEvents() {
    const registerForm = this.el.querySelector('#register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userData = this.collectData();
        this.sendData(userData);
      });
    } else {
      console.error('Register form not found');
    }
  }

  render() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="row">
          <div class="col-4">${viewRegister()}</div>
          <div class="col-5">
            <img src="${Imagedeux}" alt="Registration Image" width="900" height="500">
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

export default Register;
