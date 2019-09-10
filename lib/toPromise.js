const isFunction = require('./isFunction');
module.exports = function toPromise(withCallback) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      if (isFunction(withCallback)) {
        withCallback(...args, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      } else {
        reject(new Error('Not a function'))
      }
    })
  } 
}