const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail(["lighthouse","labs","hello"]), ["labs","hello"]);
assertEqual(tail([]),["hello","world"]);
assertEqual(tail([1,2,3]),[2,3]);