/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  function sortNumber(a, b) {
    return a - b;
  }

  array.sort(sortNumber);

  var possibility1 = array[0] * array[1] * array[array.length - 1];
  var possibility2 = array[array.length - 3] * array[array.length - 2] * array[array.length - 1];

  if (possibility1 > possibility2) {
    return possibility1;
  } else {
    return possibility2;
  }
};

console.log(largestProductOfThree([9, 2, 1, 3, 7, 8, 9, -3]));
console.log(largestProductOfThree([ 2, 1, 3, 7 ]));
console.log(largestProductOfThree([ 2, 11, 13, 7, 13, 3, 11, 5 ]));
console.log(largestProductOfThree([ -31, 41, 34, -37, -17, 29 ]));
console.log(largestProductOfThree([ -1, -2, -3, -4, -5 ]));
