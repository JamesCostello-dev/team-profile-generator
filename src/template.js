'use strict';

const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');

const generatePage = () => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

  <title>Team Profile Generator</title>

</head>

<nav class="navbar navbar-dark bg-dark justify-content-center">
  <span class="navbar-brand mb-0 h1">My Team</span>
</nav>

<body>

  <div class="card-deck">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">${this.name}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">${this.name}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">${this.name}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</body>

</html>
  `
};

module.exports = generatePage;