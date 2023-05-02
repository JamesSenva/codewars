'use strict';

// console.log('hello') 

// NAME OF THE KATA : Convert number to reversed array of digits
// URL : https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript


/* 

INSTRUCTIONS :
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]

*/



// SOLUTION
function digitize(n) {
    //code here
    console.log(String(n).split('').reverse().map(num => +num));
}




// SAMPLE TESTS
digitize(35231); //[1,3,2,5,3]
digitize(0); //[0]