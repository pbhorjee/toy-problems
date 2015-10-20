/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

var commonCharacters = function(string1, string2) {
  var common = {};
  var str1 = string1.length >= string2.length ? string1 : string2;
  var str2 = string1.length >= string2.length ? string2 : string1;

  for (var i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      common[str1[i]] = str1[i];
    }
  };

  return Object.keys(common).join(",");
};


console.log(commonCharacters('acexivou', 'aegi'));