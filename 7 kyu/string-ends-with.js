'use strict';

// console.log('hello') 

// NAME OF THE KATA : String ends with?
// URL : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript


/* 

INSTRUCTIONS :
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/



// SOLUTION
function solution(str, ending){
    // TODO: complete
    console.log(str.endsWith(ending));
}




// SAMPLE TESTS
solution('abcde', 'cde'); // true
solution('abcde', 'abc'); // false