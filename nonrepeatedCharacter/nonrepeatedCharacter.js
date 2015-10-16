/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(str) {
  for (var i = 0, len = str.length; i < len; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i]))
      return str[i];
  }
  return null;
};

console.log(firstNonRepeatedCharacter('BBCDD'));