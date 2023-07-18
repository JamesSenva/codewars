'use strict';

// console.log('hello') 

// NAME OF THE KATA : Beginner Series #4 Cockroach
// URL : https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/javascript


/* 

INSTRUCTIONS :
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/



// SOLUTION
// Formula: for an approximate result, multiply the speed value by 27.778
function cockroachSpeed(s) {
    console.log(Math.floor(s * 27.778));
}




// SAMPLE TESTS
cockroachSpeed(1.08); // 30
cockroachSpeed(1.09); // 30
cockroachSpeed(0); // 0