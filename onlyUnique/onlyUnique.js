//Given a string, remove any characters that are not unique from the string.

function onlyUnique (str) {
  var arrStr = str.split("");
  var retStr = "";
  var foundObj = {};

  for (var i = 0; i < arrStr.length; i++) {
    var found = false;

    if (foundObj[arrStr[i]]) {
      found = true;
    }

    if (!found) {
      for (var j = i + 1; j < arrStr.length; j++) {
        if (arrStr[i] === arrStr[j]) {
          foundObj[arrStr[i]] = arrStr[i];
          found = true;
          break;
        }
      }
    }

    if (!found) {
      retStr += arrStr[i];
    }

  }

  return retStr;
}

console.log(onlyUnique("iiii"));