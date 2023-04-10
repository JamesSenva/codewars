'use strict';

// console.log('hello') 

// NAME OF THE KATA : Binary Addition
// URL : https://www.codewars.com/kata/551f37452ff852b7bd000139


/* 

INSTRUCTIONS :
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/



// SOLUTION
function addBinary(a,b) {
    const sum = (a + b).toString(2);
    console.log(sum);
}




// SAMPLE TESTS
addBinary(1,2); // 11
addBinary(1,4); // 101
