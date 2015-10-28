/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
  if (!Array.isArray(array) || array.length ===0) { return -1; }
  var index = null;

  var splitSearch = function (array, target, startIndex) {
    if (index) { return; }

    var startIndex = startIndex || 0;
    var middle = Math.floor(array.length / 2);
    var leftArr = array.slice(0, middle);
    var rightArr = array.slice(middle, array.length);

    if (target <= leftArr[leftArr.length - 1]) {
      if (leftArr.length === 1) {
        if (leftArr[0] === target) {
          index = startIndex;
        } else {
          index = -1;
        }
        return;
      }

      splitSearch(leftArr, target, startIndex)
    } else {
      if (rightArr.length === 1) {
        if (rightArr[0] === target) {
          index = startIndex + 1;
        } else  {
          index = -1;
        }
        return;
      }

      splitSearch(rightArr, target, startIndex + middle)
    }
  }

  splitSearch(array, target);

  return index;
};

console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 5));

console.log(binarySearch([1, 2, 3, 4, 5, 17, 19, 200, 400], 17));
console.log(binarySearch([1, 2, 3, 4], 1));
console.log(binarySearch([1, 2], 2));
console.log(binarySearch([], 2));
console.log(binarySearch('', 2));

console.log(binarySearch([1, 2, 3, 4, 5], -2));
console.log(binarySearch([1, 2, 3, 4, 5], 15));
console.log(binarySearch([1, 2, 3, 4, 5], 1.5));

console.log(binarySearch([1, 2, 3, 4, 5, 17], -2));
console.log(binarySearch([1, 2, 3, 4], 15));
console.log(binarySearch([1, 2], 1.5));