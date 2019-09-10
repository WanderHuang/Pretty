#!/usr/bin/env node
const sh = require('shelljs');
const commander = require('commander');
const defaultConfig = require('../lib/defaultConfig');

commander
  .version('0.1.0')
  .option('-l, --eslintrc <eslintrcName>', 'which file to use for eslint check')
  .option('-s, --src <srcDir>', 'which directory do you choose to `pretty`')
  .option('-d, --dist <distDir>', 'which directory do you choose to receive output from `pretty`')
  .option('-e, --error-eslint-file <errorEslintFile>', 'which directory do you choose to receive eslint errors from `pretty`')
  .option('-i, --error-detail-level <errorEslintLevel>', 'set how many errors do you want')
  .option('-x, --ext <extName>', 'default ext is .js')

commander.parse(process.argv);

// sh.cd('..');

const {
  eslintrc = defaultConfig.eslintrc,
  src = defaultConfig.src,
  dist = defaultConfig.dist,
  errorEslint = defaultConfig.errorEslint,
  ext = defaultConfig.ext,
  errorDetailLevel = defaultConfig.errorDetailLevel
} = commander;

sh.exec(
  `node index.js ` + 
  `-l ${eslintrc} ` +
  `-s ${src} ` +
  `-d ${dist} ` +
  `-e ${errorEslint} ` +
  `-i ${errorDetailLevel} ` +
  `-x ${ext} `
);