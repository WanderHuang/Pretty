
const fs = require('fs');

// const
const baseUri = process.cwd();
const slash = '/';

// function
const readString = require('./readString');
const writeString = require('./writeString');

const isDir = (uri) => (fs.existsSync(uri) && fs.statSync(uri).isDirectory());

const getDistPath = (filePath = '', src = '/src', dist = '/dist') => (filePath.replace(src, dist));

const mkdir = (uri) => (!fs.existsSync(uri) ? fs.mkdirSync(uri) : '');

const resolveRoot = (filename) => {
  return baseUri + slash + filename;
}

const copy = (src, dist) => readString(src).then((data) => writeString(dist, data, 'utf8'))


module.exports = {
  resolveRoot,
  mkdir,
  getDistPath,
  isDir,
  slash,
  baseUri,
  copy
}