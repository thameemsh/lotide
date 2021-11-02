// const eqArrays = function(arr1, arr2) {
//   if (arr1.length === arr2.length && arr1.length === 0) {
//     return true;
//   } else if (arr1.length === arr2.length) {
//     let count = 0;
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         count++;
//         if (count === arr1.length) {
//           return true;
//         }
//       } else return false;
//     }
//   } else return false;
// };

// const eqObjects = function(object1, object2) {
//   const obj1Keys = Object.keys(object1);
//   const obj2Keys = Object.keys(object2);
  
//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }

//   for (const key of obj1Keys) {
    
//     if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
//       return eqArrays(object1[key],object2[key]);
//     }
     
//     if (object1[key] === object2[key]) {
//          continue;
//       } return true;
//     } return false
// };

const assertArraysEqual = require("./assertArraysEqual");
const eqObjects = require("./eqObjects")

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertArraysEqual
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertObjectsEqual(cd,dc);