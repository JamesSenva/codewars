'use strict';

// console.log('hello') 

// NAME OF THE KATA : Two to One
// URL : https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript


/* 

INSTRUCTIONS :
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/



// SOLUTION
function longest(s1, s2) {
    // concat two strings, split them and sort them to convert into an array
    let str = (s1 + s2).split('').sort();

    // empty [] is an acc
    // if the current value is not found in acc [] - it returns -1 and pushes it to acc []
    // return acc to use the acc for the next iteration to check if cur value exists
    // join it to return the string
    const uniqueVals = str.reduce((acc, cur) => {
        if(acc.indexOf(cur) === -1){
            acc.push(cur);
        }
        return acc;
    }, [] ).join('');
    console.log(uniqueVals);
  }




// SAMPLE TESTS
longest("aretheyhere", "yestheyarehere"); // "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding"); // "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions"); // "acefghilmnoprstuy"