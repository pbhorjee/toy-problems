/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  var lastLongestRun = [0,0];
  var thisRun = [0,0];

  function compareLengths() {
    if ((thisRun[1] - thisRun[0]) > (lastLongestRun[1] - lastLongestRun[0])) {
      lastLongestRun = thisRun.slice(0);
    }
  }

  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      thisRun[1] = i;
    } else {
      compareLengths();
      thisRun[0] = thisRun[1] = i;
    }
  }

  compareLengths();

  return lastLongestRun;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var l = console.log;

l(longestRun("abbbcc")); // [1, 3]
l(longestRun("aabbc"));  // [0, 1]
l(longestRun("abcd"));  // [0, 0]
l(longestRun("abbbccc")); // [1, 3]
l(longestRun("abbbccccc")); // [4, 8]
l('');

var string = randomString(200);
l(string);
l(longestRun(string));

string = randomString(200) + "xxxx";
l(string);
l(longestRun(string));
