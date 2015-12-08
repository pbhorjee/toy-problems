//Insertion sort is a basic sorting algorithm. Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs. It does this until it gets to the end of the array.

//TODO: rewrite with no splice

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j] && array[j + 1] >= array[i]) {
        array.splice(j, 0, array[i]);
        array.splice(i + 1, 1);
        break;
      }
    }
  }

  return array;
}

console.log(insertionSort([3, 1, 2]));
console.log(insertionSort([1, 0, 100, 42]));
console.log(insertionSort([67, 23.7, 23.4, 9]));