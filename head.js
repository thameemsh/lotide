const assertEqual = require("./assertEqual")

const head = function(array) {
  if (array.length >= 1) {
    return array.shift();
  }
};

module.exports = head;