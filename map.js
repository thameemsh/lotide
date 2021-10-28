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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5]
const items = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(numbers,num => num + 1)
const results3 = map(items, word => word.toUpperCase())
// console.log(results1);
// console.log(results2)
// console.log(results3)

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2,[ 2, 3, 4, 5, 6 ])
assertArraysEqual(results3,[ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])