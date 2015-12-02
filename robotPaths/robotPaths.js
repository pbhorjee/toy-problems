function makeBoard(n) {
  var board = [];

  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }

  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j]
  };

  board.hasBeenVisited = function (i, j) {
    return !!this[i][j]
  };

  return board
}

function robotPaths(n) {
  var totalCount = 0;

  var board = makeBoard(n);
  board.togglePiece(0,0);
  var currentLocation = [0,0];


  var recurse = function (board, currentLocation) {
    if (board.hasBeenVisited(n - 1,n - 1)) {
      totalCount++;
      return;
    }

    var posX = currentLocation[0];
    var posY = currentLocation[1];

    if (posX !== 0 && !board.hasBeenVisited(posX - 1, posY)) { //up
      currentLocation = [posX - 1, posY];
      board.togglePiece(posX - 1, posY);
    } else if (posY < n && !board.hasBeenVisited(posX, posY + 1)) { //right
      currentLocation = [posX, posY + 1];
      board.togglePiece(posX, posY + 1);
    } else if (posY !== 0 && !board.hasBeenVisited(posX, posY - 1)) { //left
      currentLocation = [posX, posY - 1];
      board.togglePiece(posX, posY - 1);
    } else if (posY < n && !board.hasBeenVisited(posX + 1, posY)) { //down
      currentLocation = [posX + 1, posY];
      board.togglePiece(posX + 1, posY);
    }

    recurse(board, currentLocation);
  };

  recurse(board, currentLocation);

  return totalCount;
}


console.log(robotPaths(2));