'use strict';

// console.log('hello') 

// NAME OF THE KATA : String repeat
// URL : https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript


/* 

INSTRUCTIONS :
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/



// SOLUTION
function repeatStr (n, s) {
    console.log(s.repeat(n));
}




// SAMPLE TESTS
repeatStr(3, "*"); // "***"
repeatStr(5, "#"); // "#####"
repeatStr(2, "ha "); // "ha ha "