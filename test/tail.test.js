const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns ["labs","hello"] for ["lighthouse","labs","hello"]', () => {
    assert.deepEqual(["labs","hello"], ["labs","hello"]);
  });

  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]),[2,3]); 
  });

});


