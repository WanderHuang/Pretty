const fs = require('fs');
const toPromise = require('./toPromise');

module.exports = toPromise(fs.writeFile);