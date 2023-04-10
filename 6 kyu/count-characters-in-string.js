'use strict';

// console.log('hello') 

// NAME OF THE KATA : Count characters in your string
// URL : https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript


/* 

INSTRUCTIONS :
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/



// SOLUTION
function count(string) {
    // TODO
    // return {};
    // convert the string to an array
    const count = string.split('').reduce( (str, s) => {
        const currCount = str[s] ?? 0;
        return (
            {
                ...str,
                [s]: currCount + 1,
            }
        )
    }, {});
    console.log(count);


}


// SAMPLE TESTS
count(''); // {}
count('a'); // {'a': 1}
count('ab'); // {'a': 1, 'b': 1}
count('aba'); // {'a': 2, 'b': 1}
count('ABC'); // {'A': 1, 'B': 1, 'C': 1}