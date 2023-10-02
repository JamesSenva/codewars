'use strict';

// console.log('hello')

// NAME OF THE KATA : Plural
// URL : https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript


/*

INSTRUCTIONS :
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

    You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.

*/



// SOLUTION
// function plural(n) {
//   if(n < 1 || n > 1){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

function plural(n) {
  console.log( n < 1 || n > 1 ? true : false);
}





// SAMPLE TESTS
plural(0); // true, "Plural for 0"
plural(0.5); // true, "Plural for 0.5"
plural(1); // false, "Plural for 1"
plural(100); // true, "Plural for 100"
plural(Infinity); // true, "Plural for Infinity"
