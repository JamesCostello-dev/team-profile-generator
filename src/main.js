'use strict';

const inquirer = require('inquirer');

const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const index = [];

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
  await inquirer.prompt([
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
  ])
}

const addEngineer = async () => {
  await inquirer.prompt([
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
    },
  ])
}

const addIntern = async () => {
  await inquirer.prompt([
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
  ])
}

module.exports = start;