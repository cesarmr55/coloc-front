import axios from 'axios';
import viewNav from '../views/nav';
import viewTache from '../views/tache';
import viewAlerte from '../views/alerte';
import viewCalendar from '../views/calendar';
import Calendar from './calendar_controller';
import viewBouton from '../views/bouton_card';
import viewMembers from '../views/members';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  bindEvents() {
    const logoutButton = document.getElementById('logout-btn');
    const createCardButton = document.getElementById('cta');

    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        window.location.href = 'login.js';
      });
    }

    if (createCardButton) {
      createCardButton.addEventListener('click', () => {
        window.location.href = 'create.js';
      });
    }

    this.bindDeleteMemberEvents();
  }

  bindDeleteMemberEvents() {
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', async (event) => {
        const memberId = event.target.getAttribute('data-member-id');
        await this.deleteMember(memberId);
        document.getElementById(`member-${memberId}`).remove();
      });
    });
  }

  async deleteMember(memberId) {
    try {
      await axios.delete(`http://localhost:80/member/${memberId}`);
      console.log(`Membre avec l'ID ${memberId} supprimé`);
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  }

  async fetchTasks() {
    try {
      const response = await axios.get('http://localhost:80/task');
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  }

  async render() {
    const tasks = await this.fetchTasks();
    return `
      <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="home-container">
          <div class="container">
            <div class="row">
              <div class="col-12">${viewAlerte()}</div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-3">${viewTache(tasks)}</div>
              <div class="col-12 col-lg-5">${viewCalendar()}</div>
              <div class="col-12 col-lg-4">${viewMembers()}</div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-3">${viewBouton()}</div>
            </div>
          </div>  
        </div>
      </div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.renderCalendar();
    this.bindEvents();
  }

  renderCalendar() {
    this.calendar = new Calendar('.current-date', '.days', '.icons span');
  }

  render404() {
    this.el.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
};

export default Home;
