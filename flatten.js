// const eqArrays = function(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     let count = 0;
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i] && count <= arr1.length) {
//         count++;
//         if (count === arr1.length) {
//           return true;
//         }
//       } else return false;
//     }
//   } else return false;
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1,array2) === true) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
// };

const flatten = function(array) {
  const arrayFlattened = [];
  for (let val of array) {
    if (Array.isArray(val) === true) {
      for (let elem of val) {
        arrayFlattened.push(elem);
      }
    } else arrayFlattened.push(val);
  } return arrayFlattened;
};

module.exports = flatten;
// console.log(flatten([1, 2, [3, 4], 5, [6]]));

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);