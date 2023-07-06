'use strict';

// console.log('hello') 

// NAME OF THE KATA : Reversed Strings
// URL : https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript


/* 

INSTRUCTIONS :
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/



// SOLUTION
function solution(str){
  console.log(str.split('').reverse().join(''));
}




// SAMPLE TESTS
solution(''); // ''
solution('hello'); // 'olleh'
solution('h'); // 'h'
solution('world'); // 'dlrow'