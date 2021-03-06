function firstTenNums() {
  // firstTenNums should `console.log()` the numbers
  // from 1 - 10.  Use a `for` loop.
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function manyEvens() {

  let myArray = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      myArray.push(i);
    }
  }
  return myArray;
  // Return an array that contains all the even numbers between 1 and 100 (inclusive).
  // Use a for loop.
}

function manyOdds() {

  let myOdds = [];
  let i = 3;

  while (i <= 103) {
    if (i % 2 !== 0) {
      myOdds.push(i);
    }
    i++;
  }

  return myOdds;


  // return myOddArray;
  // Return an array that contains all the odd numbers between 3 and 103 (inclusive).
  // Use a while loop.
}

function arraySum(nums) {
  let n = 0;

  for (let i = 0; i < nums.length; i++) {
    n = n + nums[i];
  }
  return n;

  // arraySum(nums) receives an array of numbers as an argument
  // and should return the sum of all the numbers.
  // For example,
  // arraySum([1, 2]) => 3
  // arraySum([3, 4, 5, 6]) => 18
  // Use a loop of your choice
}

function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;

  // Return the sum of all numbers from 1 to n.
}

function countDown(n) {
  let myArray = [];
  myArray.push(n);
  myArray.push(1);
  return myArray;

  // Return an array of all numbers with n at index 0 and 1 at the last index.
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
  // compute the factorial of n. See https://en.wikipedia.org/wiki/Factorial.
}

function leastCommonMult(a, b) {
  // Bonus question:
  // Find the least common multiple of two inputted numbers.
  // See: https://en.wikipedia.org/wiki/Least_common_multiple
}

function funkyText(text) {
  /*
   * Bonus question :
   * funkyText(text) should return a modified version of `text` which
   * is passed as an argument.  The modified string should have every other
   * letter capitalized, starting with the second character.
   *
   * For example, "wallet" should be transformed into "wAlLeT"; "cat" => "cAt"
   * Use a loop of your choice.
   * Recall that you can concatenate two strings
   * together using "string".concat("otherString")
   * Alternatively, Array.split() and Array.join() might be useful
   */
}

function multiplicationTable() {
  /*
   * Bonus question :
   * multiplicationTable() should console.log() out a multiplication
   * table ( or "times table" ) up to 10 in the format of "a X b is c".
   * First, it should console.log() "1 X 1 is 1"; next, "1 X 2 is 2"
   * until "1 X 10 is 10", then the following log should be "2 X 1 is 2" and so forth
   * This one is a bit harder.  You will need to use a nested loop.
   */
}

function activityLog() {
  /*
   * Bonus question :
   * activityLog() should `console.log()` that each
   * person is doing each activity in order.  For example,
   * first, log "Eric went on a bike ride", then "Eric
   * played badminton"...  After logging "Eric is going to the deli...", do the same for each activity.
   * This task also requires a nested loop
   */
  const people = ['Eric', 'Jay-Z', 'John', 'Jason', 'Ryan', 'Micky']

  const activities = [
    'went on a bike ride',
    'played badminton',
    'hailed a taxi',
    'is visiting the Met',
    'is going to the deli to nosh'
  ]
}

function fib(n) {
  // Bonus question:
  // Find the nth number of the Fibonacci sequence.d
  // See https://en.wikipedia.org/wiki/Fibonacci_number.
}

module.exports = {
  firstTenNums,
  manyEvens,
  manyOdds,
  arraySum,
  sumToN,
  countDown,
  factorial,
  leastCommonMult,
  funkyText,
  multiplicationTable,
  activityLog,
  fib
}
