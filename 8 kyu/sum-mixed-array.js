'use strict';

// console.log('hello') 

// NAME OF THE KATA : Sum Mixed Array
// URL : https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript


/* 

INSTRUCTIONS :
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/



// SOLUTION
function sumMix(x){
    console.log(x.reduce((acc, cur) => acc + +cur, 0 ));
}




// SAMPLE TESTS
sumMix([9, 3, '7', '3']); // 22
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']); // 41
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]); // 42