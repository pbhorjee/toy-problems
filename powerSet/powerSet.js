/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function (str) {
  var arrStr = str.split('').sort();
  var ret = {"": ""};

  var concater = function (startPos, stringTillNow) {
    for (var i = startPos; i < arrStr.length; i++) {
      var tempStr = stringTillNow + arrStr[i];
      var sortedString = tempStr.split('').sort().join('');
      var hasDuplicates = (/[^\w\s]|(.)\1/gi).test(sortedString);

      if (!hasDuplicates) {
        ret[sortedString] = sortedString;
      }

      if (startPos < arrStr.length - 1) {
        concater(startPos + 1, sortedString);
      }
    }
  };

  concater(0, "");

  return Object.keys(ret);
};


console.log(powerSet("abc"));
console.log(powerSet("cab"));
// -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]


console.log(powerSet("jump"))
// -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]