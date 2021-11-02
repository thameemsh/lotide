// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

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

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      return eqArrays(object1[key],object2[key]);
    }
     
    if (object1[key] === object2[key]) {
         continue;
      } return true;
    } return false
};

module.exports = eqObjects;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // console.log(eqObjects(cd, dc)); // => true
// assertEqual(eqObjects(cd, dc),true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // console.log(eqObjects(cd, cd2)); // => false
// assertEqual(eqObjects(cd, cd2),false);

// const aa = { c: "1", e: [1, 2, 3], d: ["2", 3]  };
// const bb = { d: ["2", 3], c: "1", e: [1, 2, 3] };
// // console.log(eqObjects(aa, bb)) // => true
// assertEqual(eqObjects(aa, bb),true);


