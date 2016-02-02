//Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

function characterFrequency(string) {
  var charsObj = {};
  var charsArr = [];

  for (var i = 0; i < string.length; i++) {
    if (!charsObj[string[i]]) {
      charsObj[string[i]] = 1;
    } else {
      charsObj[string[i]]++;
    }
  }

  for (var char in charsObj) {
    charsArr.push([char, charsObj[char]]);
  }

  function compare(a, b) {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  }

  return charsArr.sort(compare);
}

console.log(characterFrequency("aaabbc"));
console.log(characterFrequency("mississippi"));
console.log(characterFrequency("supercalifragilisticexpialidocious"));
