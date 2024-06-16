import axios from 'axios';
import viewNav from '../views/nav';
import viewDashboard from '../views/dashboard';

const Dashboard = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.tasks = [];
    this.expenses = [];

    this.run();
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

  async render() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="row dashboard">
          ${viewDashboard(this.tasks, this.expenses)}
        </div>
      </div>
    `;
  }

  async run() {
    this.tasks = await this.fetchTasks();
    this.expenses = await this.fetchExpenses();

    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
