'use strict';

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const temp = (data) => {

  const managers = data.filter(Employee => Employee.role === 'Manager')
  const engineers = data.filter(Employee => Employee.role === 'Engineer')
  const interns = data.filter(Employee => Employee.role === 'Intern')

  const managerCard = managers.map(managerCard => {
    managerCard = `<div class="card-deck">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${managers.getName()}</h5>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${managers.getId()}</li>
              <li class="list-group-item">${managers.getEmail()}</li>
              <li class="list-group-item">${managers.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>`

    return managerCard
  })

};

module.exports = temp;