const generate = require('./src/template')
const writeFile = require('./src/page')
const start = require('./src/main')

start()
  .then(generate)
  .then(writeFile)
  .catch(err => {
    console.log(err);
  });