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


module.exports = middle