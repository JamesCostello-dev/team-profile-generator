'use strict';

const inquier = require('inquirer');
const fs = require('fs');

const generate = require('./src/template.js')

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const addManager = () => {
  return inquier.prompt([
    {
      message: 'Enter manager name',
      name: 'name',
    },
    {
      type: 'number',
      message: 'Enter manager ID',
      name: 'id',
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
      name: 'id',
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
      name: 'id',
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

const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

addManager()
  .then(addEngineer)
  .then(addIntern)
  .then(generate)
  .then(writeFile)
  .catch(err => {
    console.log(err);
  });