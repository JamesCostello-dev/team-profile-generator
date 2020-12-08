'use strict';

const inquirer = require('inquirer');

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const data = [];

const start = async () => {
  await inquirer.prompt([
    {
      type: 'list',
      message: 'Choose a team member to add or exit.',
      name: 'choice',
      choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
      filter: async (input) => {
        if (input === 'Manager') {
          await addManager();
        } else if (input === 'Engineer') {
          await addEngineer();
        } else if (input === 'Intern') {
          await addIntern();
        } else {
          return;
        }
      }
    },
  ]);
}

const addManager = async () => {
  const Employee = await inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'number',
      message: 'What is your id number?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'Whats is your email?',
      name: 'email'
    },
    {
      type: 'number',
      message: 'What is your office phone number?',
      name: 'officeNumber',

    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'add',
      choices: ['Yes', 'No'],
      filter: async (input) => {
        if (input === 'Yes') {
          await start();
        } else {
          return;
        }
      }
    },
  ]).then(({ name, id, email, officeNumber }) => {
    this.Manager = new Manager(Employee.name, Employee.id, Employee.email, Employee.officeNumber);
  });
  data.push(this.Manager);
};

const addEngineer = async () => {
  const Employee = await inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name'
    },
    {
      type: 'number',
      message: 'What is your id number?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'Whats is your email?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What is your gihub?',
      name: 'github',
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'add',
      choices: ['Yes', 'No'],
      filter: async (input) => {
        if (input === 'Yes') {
          await start();
        } else {
          return;
        }
      }
    }
  ]).then(({ name, id, email, github }) => {
    this.Engineer = new Engineer(Employee.name, Employee.id, Employee.email, Employee.github);
  });
  data.push(this.Engineer);
};

const addIntern = async () => {
  const Employee = await inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name'
    },
    {
      type: 'number',
      message: 'What is your id number?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'Whats is your email?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'Whats is your school?',
      name: 'school',
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'add',
      choices: ['Yes', 'No'],
      filter: async (input) => {
        if (input === 'Yes') {
          await start();
        } else {
          return;
        }
      }
    },
  ]).then(({ name, id, email, shcool }) => {
    this.Intern = new Intern(Employee.name, Employee.id, Employee.email, Employee.shcool);
  });
  data.push(this.Intern);
};

module.exports = start;