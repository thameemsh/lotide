const assertEqual = require("./assertEqual")

const tail = function(array) {
  if (array.length >= 1) {
    let newArray = array.slice(1)
    return newArray;
  } 
};

module.exports = tail;
