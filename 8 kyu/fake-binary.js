'use strict';

// console.log('hello') 

// NAME OF THE KATA : Fake Binary
// URL : https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript


/* 

INSTRUCTIONS :
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/



// SOLUTION
function fakeBin(x){
    // split the number
    // map it based on 0 or 1 to return a new array
    // join it 
    console.log(x.split('').map( n => n < 5 ? 0 : 1).join(''));
  }




// SAMPLE TESTS
fakeBin('45385593107843568'); // '01011110001100111'
fakeBin('509321967506747'); // '101000111101101')
fakeBin('366058562030849490134388085'); // '011011110000101010000011011'