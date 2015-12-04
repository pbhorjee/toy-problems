//A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

function primeTester(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
    return false;
  }

  if (n % 2 == 0) {
    return (n == 2);
  }

  var m = Math.sqrt(n);

  for (var i = 3; i <= m; i += 2) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(primeTester(70368760954879));