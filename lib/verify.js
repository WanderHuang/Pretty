
const CLIEngine = require('eslint').CLIEngine;
const writeString = require('./writeString');
const { objectFromEntries } = require('./fromEntries');
const isArray = require('./isArray');

class Verify {
  constructor(config, level) {
    this.eslintCli = new CLIEngine(config);
    this.lintMap = new Map();
    this.level = level;
  }

  getMaps() {
    return this.lintMap
  }

  resolve({ src, data, dist }) {
    const { results } = this.eslintCli.executeOnFiles([src]);
    results.forEach(({messages, filePath}) => {
      messages.forEach(({ ruleId, column }) => {
        if (ruleId) {
          const errorMessage = { filePath, column };
          const lintError = this.lintMap.get(ruleId);
          if (!lintError) {
            this.lintMap.set(ruleId, [errorMessage])
          } else if (isArray(lintError)) {
            if (lintError.length < this.level) {
              lintError.push(errorMessage);
              this.lintMap.set(ruleId, lintError);
            }
            if (lintError.length === this.level) {
              this.lintMap.set(ruleId, this.level + 1)
            }
          } else {
            this.lintMap.set(ruleId, lintError + 1)
          }
        }
      })
    })
    return { src, data, dist }
  }
}

module.exports = Verify
