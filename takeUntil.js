const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i] && count <= arr1.length) {
        count++;
        if (count === arr1.length) {
          return true;
        }
      } else return false;
    }
  } else return false;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
};

const takeUntil = function(array, callback) {

  let result = [];
  for (const word of array) {
    if (!callback(word)) {
      result.push(word);
    } else break;
  } return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ])

