'use strict';

// console.log('hello') 

// NAME OF THE KATA : Find the next perfect square!
// URL : https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript


/* 

INSTRUCTIONS :
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/



// SOLUTION
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    // return -1;
    const nextSquare = Math.ceil(Math.sqrt(sq)) == Math.floor(Math.sqrt(sq)) ? Math.pow((Math.sqrt(sq) + 1), 2) : -1;

    console.log(nextSquare);
}





// SAMPLE TESTS
findNextSquare(121); // 144, "Wrong output for 121"
findNextSquare(625); // 676, "Wrong output for 625"
findNextSquare(319225); // 320356, "Wrong output for 319225"
findNextSquare(15241383936); // 15241630849, "Wrong output for 15241383936"
findNextSquare(155); // -1, "Wrong output for 155"
findNextSquare(342786627); // -1, "Wrong output for 342786627"