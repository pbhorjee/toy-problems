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
    if (charsObj.hasOwnProperty(char)) {
      var charArr = [char, charsObj[char]];

      if (!charsArr.length) {
        charsArr.push(charArr);
      } else {
        var posFound = false;
        for (var i = 0; i < charsArr.length; i++) {
          if (charArr[1] >= charsArr[i][1]) {

            if (charsArr[i + 1]) {
              //TODO: The innder test to see if we're at the right place as far the chars go isn't working
              if (charArr[1] >= charsArr[i + 1][1] && charArr[0] < charsArr[i + 1][0]) {
                charsArr.splice(i, 0, charArr);
                posFound = true;
                break;
              }
            } else {
              charsArr.splice(i, 0, charArr);
              posFound = true;
              break;
            }
          }
        }

        if (!posFound) {
          charsArr.push(charArr);
        }
      }
    }
  }

  return charsArr;
}

//console.log(characterFrequency("aaabbc"));
//console.log(characterFrequency("mississippi"));
console.log((characterFrequency("supercalifragilisticexpialidocious")));