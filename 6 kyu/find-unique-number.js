'use strict';

// console.log('hello') 

// NAME OF THE KATA : Find the unique number
// URL : https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript


/* 

INSTRUCTIONS :
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique

*/



// SOLUTION
function findUniq(arr) {
    // do magic
    let unique = arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
    console.log(unique);
  }
  
/* 
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
*/



// SAMPLE TESTS
findUniq([ 1, 0, 0 ]); // 1
findUniq([ 0, 1, 0 ]); // 1
findUniq([ 0, 0, 1 ]); // 1
findUniq([ 1, 1, 1, 2, 1, 1 ]); // 2
findUniq([ 1, 1, 2, 1, 1 ]); // 2
findUniq([ 3, 10, 3, 3, 3 ]); // 10