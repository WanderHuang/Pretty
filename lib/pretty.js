// const fs = require('fs');
// const { toPromise } = require('./toPromise');
const readString = require('./readString');
const writeString = require('./writeString');
const prettier = require('prettier');
const compose = require('./compose');
const isFunction = require('./isFunction');
const chalk = require('chalk');
const sh = require('shelljs');

class Pretty {
  constructor() {
    this.funcs = [];
  }
  applyMiddelware(fn) {
    if (isFunction(fn)) {
      this.funcs.push(fn);
    }
  }

  getConfig() {
    return prettier.resolveConfig('./')
  }

  resolve (src, dist, config) {
    return new Promise((resolve, reject) => {
      if (!src || !dist || !config) {
        reject(new Error('Not a file path'));
      }
      readString(src)
        .then((data = '') => {
          sh.echo(chalk.blue('> [pretty]', src));
          const middleware = compose(...this.funcs)
          const { data: resolvedDatas } = middleware({ data, src, dist });
          const output = prettier.format(resolvedDatas.toString(), config);
          writeString(dist, output).then((data) => {
            resolve(data);
          })
        })
        .catch(reject)
    })
  }
}

module.exports = Pretty;