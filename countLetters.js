// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const countLetters = function(sentence) {
  const sentNoSpace = sentence.replace(/ /g,"");
  const result = {};
  for (const letter of sentNoSpace) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } return result;
};

module.exports = countLetters;

// const result = countLetters("lighthouse in the house");

// assertEqual(result["l"], 1);
// assertEqual(result["i"], 2);
// assertEqual(result["g"], 1);
// assertEqual(result["h"], 4);
// assertEqual(result["t"], 2);
// assertEqual(result["o"], 2);
// assertEqual(result["u"], 2);
// assertEqual(result["s"], 2);
// assertEqual(result["e"], 3);
// assertEqual(result["n"], 1);


