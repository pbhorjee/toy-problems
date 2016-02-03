//Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.

function allAnagrams (string) {
  var arrString = string.split("");
  var ret = [];

  var recurse = function(arrStr, solution, pos) {
    if (arrStr.length === 1) {
      var final = solution + arrStr[0];

      if (ret.indexOf(final) === -1) {
        ret.push(final);
      }
    }

    solution += arrStr.splice(pos, 1);

    for (var i = 0; i < arrStr.length; i++) {
      recurse(arrStr.slice(0), solution, i)
    }
  };

  for (var i = 0; i < arrString.length; i++) {
    recurse(arrString.slice(0), "", i);
  }

  return ret;
}


console.log(allAnagrams("apps"));