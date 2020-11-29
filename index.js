'use strict';

const inquier = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const addManager = () => {
  return inquier.prompt([
    {
      message: 'Enter manager name',
      name: 'name',
    },
    {
      type: 'number',
      message: 'Enter manager ID',
      name: 'manId',
    },
    {
      message: 'Enter manager email',
      name: 'email',
    },
    {
      type: 'number',
      message: 'Enter manager office number',
      name: 'officeNumber',
    }
  ]);
};

const addEngineer = () => {
  return inquier.prompt([
    {
      message: 'Enter engineer name',
      name: 'name',
    },
    {
      type: 'number',
      message: 'Enter engineer ID',
      name: 'engId',
    },
    {
      message: 'Enter engineer email',
      name: 'email',
    },
    {
      message: 'Enter engineer github',
      name: 'github',
    }
  ]);
};

const addIntern = () => {
  return inquier.prompt([
    {
      message: 'Enter intern name',
      name: 'name',
    },
    {
      type: 'number',
      message: 'Enter intern ID',
      name: 'intId',
    },
    {
      message: 'Enter intern email',
      name: 'email',
    },
    {
      message: 'Enter intern school',
      name: 'school',
    }
  ]);
};

addManager()
  .then(addEngineer)
  .then(addIntern)
  .catch(err => {
    console.log(err);
  });