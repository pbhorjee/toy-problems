/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  return array.sort().slice(array.length - 3).reduce(function (a, b) {
    return a * b;
  });
};

console.log(largestProductOfThree([9, 2, 1, 3, 7, 8, 9, -3]));