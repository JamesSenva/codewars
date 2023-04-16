'use strict';

// console.log('hello') 

// NAME OF THE KATA : Square(n) Sum
// URL : https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript


/* 

INSTRUCTIONS :
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

*/



// SOLUTION
function squareSum(numbers){
    console.log(numbers.map( n => Math.pow(n, 2)).reduce( (acc, curr) => acc + curr, 0));
}





// SAMPLE TESTS
squareSum([1,2]); // 5
squareSum([0, 3, 4, 5]); // 50
squareSum([]); // 0