import axios from 'axios';
import viewNav from '../views/nav';

const Tasks = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.tasks = [];
    this.run();
  }

  addNewTask(taskData) {
    console.log('Sending Backend Call to add new Task', taskData);
    axios.post('http://localhost:80/task', taskData)
      .then(() => console.log('New Task added'))
      .catch((error) => console.log(error));
  }

  bindEvents() {
    const taskForm = this.el.querySelector('#task-form');

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        due_date: document.getElementById('due_date').value,
        assigned_to: document.getElementById('assigned_to').value
      };
      this.addNewTask(taskData);
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
            <h2>Tasks</h2>
            <form id="task-form">
              <label for="title">Title:</label>
              <input type="text" id="title" name="title" required />
              <label for="description">Description:</label>
              <textarea id="description" name="description" required></textarea>
              <label for="due_date">Due Date:</label>
              <input type="datetime-local" id="due_date" name="due_date" required />
              <label for="assigned_to">Assigned To:</label>
              <input type="number" id="assigned_to" name="assigned_to" required />
              <button type="submit">Add Task</button>
            </form>
            <ul id="task-list">
              ${this.tasks.map((task) => `<li>${task}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  updateTaskList() {
    const taskList = this.el.querySelector('#task-list');
    taskList.innerHTML = this.tasks.map((task) => `<li>${task}</li>`).join('');
  }

  run() {
    this.el.innerHTML = this.render();
    this.bindEvents();
  }
};

export default Tasks;
