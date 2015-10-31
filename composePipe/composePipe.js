/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';


var pipe = function() {

  for (var i = 0; i < arguments.length; i++) {
    arguments[i];
  }

}

var add2 = function(number) {
  return number + 2; 
}

var multiplyBy3 = function(number) { 
  return number * 3; 
}

//console.log(pipe);
console.log(pipe(add2, multiplyBy3)(5)); // 21


// pipe(add2, multiplyBy3, multiplyBy3)(5) // 63




// var compose = function() {
//   var ret;

//   for (var i = arguments.length - 1; i >= 1; i--) {
//     ret += arguments[i](ret);
//   };

//   return ret;
// };

// var greet = function(name) { 
//   //return 'hi: ' + name;
// }
// var exclaim = function(statement) { 
//   //return statement.toUpperCase() + '!';
// } 

// var welcome = compose(greet, exclaim);

// console.log(welcome('phillip')); // 'hi: PHILLIP!'
