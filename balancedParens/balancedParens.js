/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function (input) {
  var windUp = [];

  for (var i = 0, len = input.length; i < len; i++) {
    switch (input[i]) {
      case '(':
        windUp.push(input[i]);
        break;
      case ')':
        if (!checkLastWindUp('(', windUp)) {
          return false;
        }
        break;

      case '[':
        windUp.push(input[i]);
        break;
      case ']':
        if (!checkLastWindUp('[', windUp)) {
          return false;
        }
        break;

      case '{':
        windUp.push(input[i]);
        break;
      case '}':
        if (!checkLastWindUp('{', windUp)) {
          return false;
        }
        break;
    }
  }

  return windUp.length === 0;
};

function checkLastWindUp(charToUnwind, windUp) {
  if (windUp[windUp.length - 1] !== charToUnwind) {
    return false;
  } else {
    windUp.pop();
    return true;
  }
}

console.log(balancedParens(' ([])]')); // false
console.log(balancedParens(' (())')); // true
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
console.log(balancedParens(' var hubble = function() { telescopes.awesome() };')); // true
console.log(balancedParens(' var hubble = function() {[] telescopes.awesome() };')); // true
console.log(balancedParens(' var hubble = function() {[{] telescopes.awesome() };')); // false
