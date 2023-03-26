'use strict';

// console.log('hello') 

// NAME OF THE KATA : Beginner Series #2 Clock
// URL : https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript


/* 

INSTRUCTIONS 
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59

*/



// SOLUTION
function past(h, m, s){
    //#Happy Coding! ^_^
    const hoursMS = h * 60 * 60 * 1000;
    const minutesMS = m * 60 * 1000;
    const secondsMS = s * 1000;
    
     console.log(hoursMS + minutesMS + secondsMS);
  }




// SAMPLE TESTS
past(0,1,1) // 61000
past(1,1,1) // 3661000
past(0,0,0) // 0
past(1,0,1) // 3601000
past(1,0,0) // 3600000