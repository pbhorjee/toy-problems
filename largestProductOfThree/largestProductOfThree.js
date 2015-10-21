/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var largest3 = [array[0]];

  for (var i = 1; i < array.length; i++) {
    var toPush = undefined;

    largest3.sort();

    for (var l = 0; l < largest3.length; l++) {
      if (largest3.length < 3) {
        toPush = array[i];
        break;
      } else if (array[i] > largest3[l]) {
        largest3[l] = array[i];
        break;
      }
    };

    if (toPush) { 
      largest3.push(toPush); 
    }
  };

  return largest3.reduce(function(a,b) {
    return a * b;
  });
};

console.log(largestProductOfThree([9, 2, 1, 3, 7, 8, 9, -3]));