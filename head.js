const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  if (array.length >= 1) {
    return array.shift();
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([])," ");
assertEqual(head([]), );
assertEqual(head([7]), 7);
