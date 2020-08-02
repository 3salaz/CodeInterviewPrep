// string compression
// implement a method to preform basic string compressoion using the counts of repeated characters.
// ex. aabcccccaaa would be a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assue the string has only uppercase and lowecase letters (a-z)

let testString = "abbcccddddeeeee";
// => a1b2c3d4e5
// loop through string
// let compressedString = "";
// let count = 0;
// let letter = [];
// let amountOfLetters = 0;
// for (let l = 0; l < testString.length; l++) {
//   if (testString[l] === testString[l + 1]) {
//     letter.push(testString[l]);
//     count++;
//   } else amountOfLetters++;
// }
// console.log(count);
// console.log(letter);

function sum(a, b) {
  return a + b;
}
module.exports = sum;

// const countOfSameChar = (string) => {};

// countOfSameChar(testString);

// const stringCompression = (string) => {
//   let oLength = string.length;
//   let nLength;

//   //   check if first charactor is same as next

//   if (oLength >= nLength) {
//     return nLength;
//   }
//   //
//   return console.log(stringLength);
// };

// stringCompression("a");
// stringCompression("abbcccdddd");
