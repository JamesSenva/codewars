'use strict';

// console.log('hello') 

// NAME OF THE KATA : Remove exclamation marks
// URL : https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript


/* 

INSTRUCTIONS :
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/



// SOLUTION
function removeExclamationMarks(s) {
    // console.log(s.replace(/!/gi, ''));
       console.log(s.replaceAll('!', ''));
  }




// SAMPLE TESTS
removeExclamationMarks("Hello World!"); // "Hello World"