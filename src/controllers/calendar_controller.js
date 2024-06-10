class Calendar {
  constructor(currentDateSelector, daysSelector, prevNextIconSelector) {
    this.currentDate = document.querySelector(currentDateSelector);
    this.daysTag = document.querySelector(daysSelector);
    this.prevNextIcon = document.querySelectorAll(prevNextIconSelector);

    this.date = new Date();
    this.currYear = this.date.getFullYear();
    this.currMonth = this.date.getMonth();
    this.months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];

    this.events = {}; // Object to store events

    this.renderCalendar();
    this.addEventListeners();
  }

  renderCalendar() {
    const firstDayofMonth = new Date(this.currYear, this.currMonth, 1).getDay();
    const lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(this.currYear, this.currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();
    let liTag = '';

    for (let i = firstDayofMonth; i > 0; i -= 1) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i += 1) {
      const isToday = i === this.date.getDate() && this.currMonth === new Date().getMonth() && this.currYear === new Date().getFullYear() ? 'active' : '';
      const hasEvent = this.events[`${this.currYear}-${this.currMonth + 1}-${i}`] ? 'event' : '';
      liTag += `<li class="${isToday} ${hasEvent}" data-date="${this.currYear}-${this.currMonth + 1}-${i}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i += 1) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    this.currentDate.innerText = `${this.months[this.currMonth]} ${this.currYear}`;
    this.daysTag.innerHTML = liTag;

    this.addDayEventListeners();
  }

  addEventListeners() {
    this.prevNextIcon.forEach((icon) => {
      icon.addEventListener('click', () => {
        this.currMonth = icon.id === 'prev' ? this.currMonth - 1 : this.currMonth + 1;

        if (this.currMonth < 0 || this.currMonth > 11) {
          this.date = new Date(this.currYear, this.currMonth);
          this.currYear = this.date.getFullYear();
          this.currMonth = this.date.getMonth();
        } else {
          this.date = new Date();
        }
        this.renderCalendar();
      });
    });
  }

  addDayEventListeners() {
    const dayElements = this.daysTag.querySelectorAll('li:not(.inactive)');
    dayElements.forEach((day) => {
      day.addEventListener('click', (e) => {
        const { date } = e.target.dataset;
        this.addOrViewEvent(date);
      });
    });
  }

  addOrViewEvent(date) {
    const event = prompt(`Add an event for ${date}:`, this.events[date] || '');
    if (event !== null) {
      if (event) {
        this.events[date] = event;
      } else {
        delete this.events[date];
      }
      this.renderCalendar();
    }
  }
}

export default Calendar;
