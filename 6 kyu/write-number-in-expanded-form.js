'use strict';

// console.log('hello') 

// NAME OF THE KATA : Write Number in Expanded Form
// URL : https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


/* 

INSTRUCTIONS :
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2(https://www.codewars.com/kata/write-number-in-expanded-form-part-2)!!

*/



// SOLUTION
function expandedForm(num) {
    // Your code here
    const numStr = num.toString().split('').reverse().map((n, i) => n * Math.pow(10, i)).filter(n => n > 0).reverse().join(' + ');
    console.log(numStr);
}

/* 
- convert the number to string
- split it
- reverse it
- map it where the arguments are the number(n) and index(i)
    - multiply the number(n) with the value of base number 10 to the power of index(i)
- filter it to show only the number(n) > 0
- reverse again
- join it with ' + '

*/



// SAMPLE TESTS
expandedForm(12); // '10 + 2'
expandedForm(42); // '40 + 2'
expandedForm(70304); // '70000 + 300 + 4'