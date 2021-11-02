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

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1,array2) === true) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
// };

const letterPositions = function(sentence) {
  const result = {};
  for (let i in sentence) {
    if(sentence[i] !== ' ') {
    if (result[sentence[i]]) {
      result[sentence[i]].push(Number(i));
    } else result[sentence[i]] = [Number(i)]
  } 
} return result;
};

module.exports = letterPositions;
// console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
// assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
// assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]);
// assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
// assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
// assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);
// assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
// assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);
