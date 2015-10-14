/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {
  var hands = ['rock', 'paper', 'scissors'];

  for (var _1 = 0; _1 < hands.length; _1++) {
    var throw1 = hands[_1];
      for (var _2 = 0; _2 < hands.length; _2++) {
        var throw2 = hands[_2];
          for (var _3 = 0; _3 < hands.length; _3++) {
            var throw3 = hands[_3];
            
            console.log([throw1, throw2, throw3]);
          };
      };
  };
};

rockPaperScissors();
