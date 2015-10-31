/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target, low, high) {
    if (low = 'undefined') {
      low = 0;
    }
    if (high = 'undefined') {
      high = rotated.length-1;
    }

console.log (low + high / 2);

    //get mid
    var mid = Math.floor(low + high / 2);

    //target found
    if (rotated[mid] === target) {
      return mid;
    }

    //if left half is sorted
    if (rotated[low] < rotated[mid]) {
      //if target is present in the right half
      if (rotated[mid] <= target && rotated[high] >= target) {
        //search it
        rotatedArraySearch(rotated, target, mid+1, high);

      //if target is present in left half
      } else { 
        //search it
        rotatedArraySearch(rotated, target, low, mid-1);
      }

    } else { //else if right half is rotated
      //if target is present in the right half
      if (rotated[mid] <= target && rotated[high] >= target) {
        //search it
        rotatedArraySearch(rotated, target, mid+1, high);
        //search it

      //if target is present in left half
      } else { 
        //search it
        rotatedArraySearch(rotated, target, low, mid-1);
      }
    }
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)) // -> 5

