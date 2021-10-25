// Modified assertEqual function to compare strings 
const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  if (array.length >= 1) {
    let newArray = array.slice(1)
    return newArray;
  } 
};

assertEqual(tail(["lighthouse","labs","hello"]), ["labs","hello"]);
assertEqual(tail([]),["hello","world"]);
assertEqual(tail([1,2,3]),[2,3]);


