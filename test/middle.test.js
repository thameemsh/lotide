const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 'b' for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b']);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
});

// assertEqual(eqArrays(middle([1]), []), true);
// assertEqual(eqArrays(middle([1, 2]), []), true);
// assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
// assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
// assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);