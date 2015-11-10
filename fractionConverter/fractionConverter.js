/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

// TODO: must reduce final fraction.
// TODO: refactor

var toFraction = function(number) {
  var split = number.toString().split('.');
  var left = split[0];
  var right = "1";
  var frac = '';
  var N = 0, D = 0;
  var multiplier = 0;

  if (split.length === 2) {
    right = split[1];
  }

  multiplier = 1 + new Array(right.toString().length + 1).join("0");
  multiplier = Number(multiplier);

  N = number * multiplier;
  D = right.length * multiplier;

  frac = N + "/" + D;

  return frac;
};

console.log(toFraction(0.5));
console.log(toFraction(3.0));
console.log(toFraction(1.5));
console.log(toFraction(2.5));
console.log(toFraction(1.55));
console.log(toFraction(210000.5));