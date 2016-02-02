/**
 Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

 Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.
 */

if (!String.prototype.includes) {
  String.prototype.includes = function () {
    'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

function isWhitespaceOrEmpty(text) {
  return !/[^\s]/.test(text);
}

var commonCharacters = function (string1, string2) {
  var common = '';

  for (var i = 0; i < string1.length; i++) {
    if (!isWhitespaceOrEmpty(string1[i]) && string2.includes(string1[i]) && !common.includes(string1[i])) {
      common += string1[i];
    }
  }

  return common;
};


console.log(commonCharacters('acexivou', 'aegihobu'));