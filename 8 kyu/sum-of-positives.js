'use strict';

// console.log('hello') 

// NAME OF THE KATA: Sum of positive
// URL : https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript


/* 

INSTRUCTIONS :

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/



// SOLUTION
function positiveSum(arr) {
    // METHOD 1
    // filter the values that are positive (> 0), then reduce it to get the total of those values
    console.log(arr.filter( num => num > 0).reduce((acc, cur) => acc + cur, 0));


    // // METHOD 2
    // // empty array to store only positive values
    // let positives = [];

    // // iterate over arrays to push the positives to the above array
    // arr.forEach( num => {
    //     if(num > 0){
    //         positives.push(num);
    //     }
    // })

    // // use reduce method to get the total of all the values in positives
    // console.log(positives.reduce((acc, cur) => acc + cur, 0));

}




// SAMPLE TESTS
positiveSum([1,2,3,4,5]); // 15
positiveSum([1,-2,3,4,5]); // 13
positiveSum([]); // 0
positiveSum([-1,-2,-3,-4,-5]); // 0
positiveSum([-1,2,3,4,-5]); // 9