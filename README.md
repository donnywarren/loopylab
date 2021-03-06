# Iteration Practice Homework

_During this exercise students will practice:_

- Using both `for` and `while` loops to solve basic coding tasks
- Incrementally write code to pass unit tests and verify that they pass
- Given more challenging tasks and problems, strategically use loops to tackle more complex iterations
- Breaking apart a difficult problem into smaller, debuggable steps

### Intro

In this homework, you'll get practice using `while` and `for` loops to solve basic programming problems. There are also tests for your coding convenience!

### Get Set Up

You know the drill.

1. Fork this repo
1. Clone it down
1. `cd` into the directory
1. run `npm i`
1. Open `loop.js` in your editor
1. When done, commit + push your changes
1. Open a pull request to this repo with your work
1. Celebrate

to kick off the unit tests: `npm test`

## The Problems

---

The tests should provide some guidance for what is required.

### `firstTenNums()`

Should log all numbers from 1 to 10 using a `for` loop.

### `manyEvens()`

Should `return` an array all the _even_ numbers between 1 and 100 using a `for` loop.

### `manyOdds()`

Use a `while` loop and `push` all odd numbers between 3 and 103 inclusive, into an array and then return the array.

### `arraySum()`

should `return` the sum of all the values in an array, use a loop of your choice.

### `sumToN()`

Using either a `for` or `while` loop compute the sum of all the digits from 1 up to some number, _n_. _Hint:_ For this and the remaining problems, it may help to declare a variable at the start of the function and then update it in a loop before returning it at the end of the function.

### `countDown()`

Given some number _n_, loop from _n_ down to 1 using either a `for` or a `while` loop and push each number into an array. Return the array.

### `factorial()`

Should return the factorial, e.g., 3!, for a given number. To compute a factorial, take all the digits from 1 up to the number and multiple them together. Thus, for 5, we would have to multiple 1 _ 2 _ 3 _ 4 _ 5 which gives 120 as the answer.
[Factorial!](https://en.wikipedia.org/wiki/Factorial)

### `funkyText()`

Should capitalize every other letter in a string. It should return a new string.

### `multiplicationTable()`

Should console.log() out a multiplication table ( or "times table" ) up to 10 in the format of "a X b is c".

### `activityLog()`

Should `console.log()` that each
person is doing each activity in order.
For example:
first, log "Eric went on a bike ride", then "Eric
played badminton"... After logging "Eric is going to the deli...", do the same for each activity.
This task also requires a nested loop

## Bonus

---

### `lowestCommonMult()`

Compute the _least common multiple_ of two numbers. For example, since 8 _ 2 = 16 and 4 _ 4 is 16, then 16 is a multiple of both 4 and 8 (not including each other). 24 and 32 are also multiples of 8 and 4, but since 16 is the smallest, it gets the coveted title of _least common multiple_. _Hint:_ It may help to write a `for` loop starting with whichever of the two arguments is larger, and then incrementing by the same larger argument. In the body of the. loop, check if the current number is a multiple of both arguments, but not equal to either of them.

### `fib()`

Should compute the _nth_ Fibonacci number, beginning with 0. The first 14 numbers of the Fibonacci sequence are `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...` So `fib(1)` should return 0 and `fib(8)` should return 13. This is a tough one! Check out the [wikipedia article for Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number) for a refresher if need be. A good strategy for tackling this problem is manually checking for the first few numbers in the sequence, and then set a `last` and `secondToLast` variables. Start a loop and each time, calculate the sum of `last` and `secondToLast` before updating those two variables. When you've reached the `nth` digit, return it and you're done!

If you're finished with all the functions and want an additional challenge, uncomment the test that's commented out in `countdown.test.js` and see if you can get it to pass.
