//Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (string) {
  var checked = {};

  for (var i = 0; i < string.length - 1; i++) {
    var found = false;

    if (checked[string[i]]) {
      found = true;
    }

    if (!found) {
      for (var j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          checked[string[i]] = string[i];
          found = true;
          break;
        }
      }
    }

    if (!found) {
      return string[i];
    }
  }

  return 'sorry';
}


console.log(firstNonRepeatedCharacter("ABCDBIRDUP"));