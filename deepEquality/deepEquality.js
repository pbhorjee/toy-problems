/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  var equal = true;


  var recurse = function(apple, orange){
    if (typeof orange !== 'object' || typeof apple !== 'object') {
      equal = false;
      return
    }

    var appleKeys = Object.keys(apple);
    var orangeKeys = Object.keys(orange);

    for (var i = 0; i < appleKeys.length; i++) {
      if (orangeKeys.indexOf(appleKeys[i]) === -1) {
        equal = false;
        break
      }

      if (typeof orange[appleKeys[i]] === 'object' || typeof apple[appleKeys[i]] === 'object') {
        recurse(apple[appleKeys[i]], orange[appleKeys[i]]);
      } else if (orange[appleKeys[i]] !== apple[appleKeys[i]]) {
        equal = false;
        break
      }
    };
  }
  
  recurse(apple, orange);

  return equal;
};


// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}))
// console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}))


console.log(deepEquals({a: '1', b: '2'}, {b: '2', a: '1'})) // true
console.log(deepEquals({a: '1', b: {aa: 4}}, {b: {aa: 4}, a: '1'})) //true
console.log(deepEquals({a: '1', b: {aa: 4}}, {b: {aa: 3}, a: '1'})) // false
console.log(deepEquals({a: '1', b: {aa: {bb: 3}}}, {b: {aa: {bb: 3}}, a: '1'})) // true
console.log(deepEquals({a: '1', b: {aa: 'f'}}, {b: {aa: {bb: 3}}, a: '1'})) // false