'use strict';

// console.log('hello')

// NAME OF THE KATA : Exes and Ohs
// URL : https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript


/*

INSTRUCTIONS :
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/



// SOLUTION
function XO(str) {

  let x = [];
  let o = [];

  const letter = str.toLowerCase().split('');

  // method 1
  // letter.forEach( l => {
  //   if (l == 'x'){
  //     x.push(l);
  //   } else if (l == 'o'){
  //     o.push(l);
  //   }
  // })

  //console.log(x.length == o.length);

  // method 2
  console.log(letter.filter( l => l == 'x').length == letter.filter( l => l == 'o').length);

}




// SAMPLE TESTS
XO('xo'); //  true
XO("xxOo"); //  true
XO("xxxm");  // false
XO("Oo");  // false
XO("ooom");  // false
