'use strict';

// console.log('hello') 

// NAME OF THE KATA : Calculate average 
// URL : https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript


/* 

INSTRUCTIONS :
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.



*/



// SOLUTION
function findAverage(array) {
    // your code here
    // return 0;
    console.log(array.reduce( (acc, cur) => acc + cur) / array.length);
}




// SAMPLE TESTS
findAverage([1,1,1]); // 1
findAverage([1,2,3]); // 2
findAverage([1,2,3,4]); // 2.5