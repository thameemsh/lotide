const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 'a' for ['a', 'b', 'c']", () => {
    assert.strictEqual(head(['a', 'b', 'c']), 'a');
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([])," ");
// assertEqual(head([]), );
// assertEqual(head([7]), 7);
