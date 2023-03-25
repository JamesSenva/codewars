'use strict';

// console.log('hello') 

// NAME OF THE KATA : Highest and Lowest
// URL : https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript


/* 

INSTRUCTIONS 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

*/



// SOLUTION
function highAndLow(numbers){
    // split the string with space so it will remove all the spaces between numbers
    let nums = numbers.split(' ');
    
    // store high and low values inside a variable
    let high = Math.max(...nums);
    let low = Math.min(...nums);
    
    console.log(`${high} ${low}`)
  }




// SAMPLE TESTS
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9"
highAndLow("1 2 3"); // "3 1"