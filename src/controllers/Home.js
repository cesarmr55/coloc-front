import axios from 'axios';
import viewNav from '../views/nav';
import viewTache from '../views/tache';
import viewAlerte from '../views/alerte';
import viewCalendar from '../views/calendar';
import Calendar from './calendar_controller';
import viewMembers from '../views/members';
import viewExpenses from '../views/expenses';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  bindEvents() {
    const logoutButton = document.getElementById('logout-btn');

    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        window.location.href = 'login.js';
      });
    }

    this.bindDeleteMemberEvents();
    this.bindTaskEvents();
    this.bindExpenseEvents();
  }

  bindDeleteMemberEvents() {
    document.querySelectorAll('.delete-btn').forEach((button) => {
      button.addEventListener('click', async (event) => {
        const memberId = event.target.getAttribute('data-member-id');
        await this.deleteMember(memberId);
        document.getElementById(`member-${memberId}`).remove();
      });
    });
  }

  bindTaskEvents() {
    // Add event listeners related to task management here
  }

  bindExpenseEvents() {
    // Add event listeners related to expense management here
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

  async fetchExpenses() {
    try {
      const response = await axios.get('http://localhost:80/expenses');
      return response.data;
    } catch (error) {
      console.error('Error fetching expenses:', error);
      return [];
    }
  }

  async fetchDashboardData() {
    try {
      const tasks = await this.fetchTasks();
      const expenses = await this.fetchExpenses();
      return { tasks, expenses };
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      return { tasks: [], expenses: [] };
    }
  }

  async render() {
    const { tasks, expenses } = await this.fetchDashboardData();
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
              <div class="col-12 col-lg-5">${viewExpenses(expenses)}</div>
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
