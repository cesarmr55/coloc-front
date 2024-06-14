import axios from 'axios';
import viewNav from '../views/nav';

const Members = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.members = [];
    this.run();
  }

  addNewMember(memberData) {
    console.log('Sending Backend Call to add new Member', memberData);
    axios.post('http://localhost:80/members', memberData)
      .then(() => console.log('New Member added'))
      .catch((error) => console.log(error));
  }

  bindEvents() {
    const memberForm = this.el.querySelector('#member-form');

    memberForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const memberData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value
      };
      this.addNewMember(memberData);
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
            <h2>Members</h2>
            <form id="member-form">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label for="role">Role:</label>
              <input type="text" id="role" name="role" required />
              <button type="submit">Add Member</button>
            </form>
            <ul id="member-list">
              ${this.members.map((member) => `<li>${member}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  updateMemberList() {
    const memberList = this.el.querySelector('#member-list');
    memberList.innerHTML = this.members.map((member) => `<li>${member}</li>`).join('');
  }

  run() {
    this.el.innerHTML = this.render();
    this.bindEvents();
  }
};

export default Members;
