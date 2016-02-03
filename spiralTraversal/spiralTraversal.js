//Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
//and prints out every value found, but in a spiral from the upper left in to the center.

function spiralTraversal(matrix) {
  var ret = [];

  var grab = function () {
    //right
    if (!matrix[0]) { return }
    var length = matrix[0].length;
    for (var i = 0; i < length; i++) {
      ret.push(matrix[0].shift());
    }
    matrix.shift();

    //down
    length = matrix.length;
    for (i = 0; i < length; i++) {
      if (!matrix[i][matrix[i].length - 1]) { return }
      ret.push(matrix[i].pop());
    }

    //left
    if (!matrix[0]) { return }
    length = matrix[0].length;
    for (i = length; i > 0; i--) {
      ret.push(matrix[matrix.length - 1].pop());
    }
    matrix.pop();

    //up
    length = matrix.length;
    for (i = length - 1; i >= 0; i--) {
      if (!matrix[i][0]) { return }
      ret.push(matrix[i].shift());
    }

    if (matrix.length) {
      grab()
    }
  };

  grab();

  return ret;
}


console.log(spiralTraversal([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
console.log(spiralTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]]));
