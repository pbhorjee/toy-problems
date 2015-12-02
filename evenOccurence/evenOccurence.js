//Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

function evenOccurence (arr) {
  var evens = {};
  var ret = [null, null];

  function isNumber(o) {
    return ! isNaN (o-0) && o != null;
  }

  for (var i = 0; i < arr.length; i++) {
    if (!evens[arr[i]]) {
      var evenObj = {};
      evenObj['firstAppearance'] = i;
      evenObj['isEven'] = false;
      evens[arr[i]] = evenObj;
    } else {
      evens[arr[i]].isEven = !evens[arr[i]].isEven;
    }
  }

  for (var key in evens) {
    if (evens.hasOwnProperty(key)) {
      if (evens[key].isEven && (ret[1] > evens[key].firstAppearance)) {
        ret[0] = key;
        ret[1] = evens[key].firstAppearance
      } else if (evens[key].isEven && !ret[0]) {
        ret[0] = key;
        ret[1] = evens[key].firstAppearance
      }
    }
  }

  if (isNumber(ret[0])) {
    ret[0] = parseFloat(ret[0]);
  }

  return ret[0];
}


console.log(evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]));
console.log(evenOccurence([ "cat", "dog", "dig", "cat" ]));
console.log(evenOccurence([ "cat", "dog", "dig" ]));