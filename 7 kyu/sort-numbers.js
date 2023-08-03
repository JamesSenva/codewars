'use strict';

// console.log('hello') 

// NAME OF THE KATA : Sort Numbers
// URL : https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript


/* 

INSTRUCTIONS :
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/



// SOLUTION
function solution(nums){
    console.log(nums ? nums.sort( (a, b) => a-b) : [])
}




// SAMPLE TESTS
solution([1,2,3,10,5]); // [1,2,3,5,10]
solution(null); // []
solution([]); // []
solution([2, 20, 10]); // [2,10,20]
solution([20, 2, 10]); // [2,10,20]