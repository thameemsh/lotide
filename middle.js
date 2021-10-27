const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.length === 0) {
    return true;
  } else if (arr1.length === arr2.length) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        count++;
        if (count === arr1.length) {
          return true;
        }
      } else return false;
    }
  } else return false;
};

const middle = function(array) {
  const arr0 = [];
  const arr1 = [];
  const arr2 = [];
  const length = array.length;
  if (length === 1 || length === 2) {
    return arr0;
  } else if (length % 2 === 0) {
    arr1.push(array[(length / 2) - 1]);
    arr1.push(array[length / 2]);
    return arr1;
  } else {
    arr2.push(array[Math.floor(length / 2)]);
    return arr2;
  }
};


// console.log(middle([1]));// => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertEqual(eqArrays(middle([1]), []), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);