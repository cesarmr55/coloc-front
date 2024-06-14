import axios from 'axios';
import viewNav from '../views/nav';

const Expenses = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.expenses = [];
    this.run();
  }

  addNewExpense(expenseData) {
    console.log('Sending Backend Call to add new Expense', expenseData);
    axios.post('http://localhost:80/expenses', expenseData)
      .then(() => {
        console.log('New Expense added');
        document.getElementById('expense-form').reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  bindEvents() {
    const expenseForm = this.el.querySelector('#expense-form');

    expenseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const expenseData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        amount: document.getElementById('amount').value
      };
      this.addNewExpense(expenseData);
    });
  }

  render() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="row">
          <div class="col-12">
            <h2>Expenses</h2>
            <form id="expense-form">
              <label for="title">Title:</label>
              <input type="text" id="title" name="title" required />
              <label for="description">Description:</label>
              <textarea id="description" name="description" required></textarea>
              <label for="amount">Amount:</label>
              <input type="number" id="amount" name="amount" required />
              <button type="submit">Add Expense</button>
            </form>
            <ul id="expense-list">
              ${this.expenses.map((expense) => `<li>${expense}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  updateExpenseList() {
    const expenseList = this.el.querySelector('#expense-list');
    expenseList.innerHTML = this.expenses.map((expense) => `<li>${expense}</li>`).join('');
  }

  run() {
    this.el.innerHTML = this.render();
    this.bindEvents();
  }
};

export default Expenses;
