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

const without = function(arr1, arr2) {
  const result = arr1.filter(word => {
    if (arr2.indexOf(word) === -1) {
      return word;
    }
  });
  return result;
};

module.exports = without
// console.log(without([1, 2, 3], [3]));
// console.log(without(["1", "2", "3"], ["1", "2", 3]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);