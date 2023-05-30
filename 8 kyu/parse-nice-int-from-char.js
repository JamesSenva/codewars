'use strict';

// console.log('hello') 

// NAME OF THE KATA : https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
// URL : Parse nice int from char problem


/* 

INSTRUCTIONS :
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

*/



// SOLUTION
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
    console.log(parseInt(inputString));
}




// SAMPLE TESTS
getAge("4 years old"); // 4