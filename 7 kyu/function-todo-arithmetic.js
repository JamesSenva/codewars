'use strict';

// console.log('hello')

// NAME OF THE KATA : Make a function that does arithmetic!
// URL : https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript


/*

INSTRUCTIONS :
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5

Try to do it without using if statements!

*/



// SOLUTION

// elseif solution
// function arithmetic(a, b, operator){
//   if(operator == 'add'){
//     console.log(a + b);
//   } else if(operator == 'subtract'){
//     console.log(a - b);
//   } else if(operator == 'multiply'){
//     console.log(a * 2);
//   } else if(operator == 'divide'){
//     console.log(a / b);
//   }
// }

// switch statements
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      console.log(a + b);
      break;
    case 'subtract':
      console.log(a - b);
      break;
    case 'multiply':
      console.log(a * b);
      break;
    case 'divide':
      console.log(a / b);
      break;
  }
}




// SAMPLE TESTS
arithmetic(8, 2, "subtract"); // 6, "'subtract' should return a minus b!"
arithmetic(1, 2, "add"); // 3, "'add' should return the two numbers added together!"
arithmetic(5, 2, "multiply"); // 10, "'multiply' should return a multiplied by b!"
arithmetic(8, 2, "divide"); // 4, "'divide' should return a divided by b!"
