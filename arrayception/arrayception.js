// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

function arrayception (array) {
  var depth = 0, deepestDepth = 0;

  var checkDepth = function (array, depth) {
    for (var i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        if (depth > deepestDepth) {
          deepestDepth = depth;
        }
      } else {
        checkDepth(array[i], depth + 1)
      }
    }
  };

  checkDepth(array, depth + 1);

  return deepestDepth;
}

console.log(arrayception([ [ 5 ], [ [ ] ] ]));
console.log(arrayception([ [ [ ] ] ]));
console.log(arrayception([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]));
console.log(arrayception([[[[[[6,[],7]]]]]]));
console.log(arrayception([[1,[2],[3,[[4,[6,[],7]],[5]]]]]));