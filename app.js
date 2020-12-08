const temp = require('./src/template')
const writeFile = require('./src/page')
const start = require('./src/main')

start()
  .then(temp)
  .then(writeFile)
  .catch(err => {
    console.log(err);
  });