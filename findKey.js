// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const findKeyByValue = require("./findKeyByValue");

const findKey = function(obj, callback) {
  const objKey = Object.keys(obj);
  for (const val of objKey) {
    if (callback(obj[val])) {
      return val;
    }
  }
};

module.exports = findKey;
// To return all keys with callback truthy
  // const objKey = Object.keys(obj);
  // const result = objKey.filter((elem) => {
  //  if(callback(obj[elem])) { return elem;}})
  //  return result;


// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");