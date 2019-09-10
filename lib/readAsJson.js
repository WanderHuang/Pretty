const chalk = require('chalk');
const sh = require('shelljs');
const readString = require('./readString');
module.exports = function readAsJson (path) {
  return new Promise((resolve) => {
    readString(path)
      .then((data) => {
        resolve(data ? JSON.parse(data.toString()) : {});
      })
      .catch((err) => {
        sh.echo(chalk.yellow('[warn]'), chalk.yellow(err.message))
        resolve({})
      })
  })
}