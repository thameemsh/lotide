const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.length === 0) {
    return true;
  } else if (arr1.length === arr2.length) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
      // if (arr1[i] === arr2[i] && count <= arr1.length) {
        count++;
        if (count === arr1.length) {
          return true;
        }
      } else return false;
    }
  } else return false;
};

module.exports = eqArrays;

