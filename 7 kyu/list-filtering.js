'use strict';

// console.log('hello') 

// NAME OF THE KATA : List Filtering
// URL : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript


/* 

INSTRUCTIONS :
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/



// SOLUTION
function filter_list(l) {
    // Return a new array with the strings filtered out
    // console.log(l.filter( n => typeof n === 'number'));
    console.log(l.filter( n => Number.isInteger(n) ));

  }




// SAMPLE TESTS
filter_list([1,2,'a','b']); //[1,2]
filter_list([1,'a','b',0,15]); //[1,0,15]
filter_list([1,2,'aasf','1','123',123]); //[1,2,123]