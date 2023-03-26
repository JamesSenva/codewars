'use strict';

// console.log('hello') 

// NAME OF THE KATA : Reverse words
// URL : https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript


/* 

INSTRUCTIONS :

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/



// SOLUTION
function reverseWords(str) {
    // Go for it
    let newStr = [];

    // split the string into array of words, split each word reverse - join it and push to newStr
    let words = str.split(' ').forEach( w => newStr.push(w.split('').reverse().join('')));

    // reverse each word
    // words.forEach(w => {
    //   newStr.push(w.split('').reverse().join(''));
    // });

    // join each word with space
    console.log(newStr.join(' '));
  }




// SAMPLE TESTS
reverseWords('The quick brown fox jumps over the lazy dog.'); //  'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords('apple'); //  'elppa');
reverseWords('a b c d'); //  'a b c d'
reverseWords('double  spaced  words'); //  'elbuod  decaps  sdrow'