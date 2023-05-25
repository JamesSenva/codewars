'use strict';

// console.log('hello') 

// NAME OF THE KATA : Counting Duplicates
// URL : https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript


/* 

INSTRUCTIONS :
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/



// SOLUTION
function duplicateCount(text){
    // conver the text to same case and split it to an array
    let arr = text.toLowerCase().split('');

    // check if the first and last index of the element is same
    const count = arr.filter( ele => arr.indexOf(ele) !== arr.lastIndexOf(ele));

    // find the unique items
    const unique = Array.from(new Set(count));

    // return the length of the unique element
    console.log(unique.length);
}



/* EXPLANATION

This code defines a function named duplicateCount that takes a string as an argument and returns the number of unique characters that appear more than once in the string.

First, the function converts the input string to lowercase using the toLowerCase() method and then splits it into an array of characters using the split() method.

Next, the function uses the Array.prototype.filter() method to create a new array containing only the characters that appear more than once in the original array. This is done by checking if the first index of a character in the array is different from its last index using the Array.prototype.indexOf() and Array.prototype.lastIndexOf() methods.

After that, the function uses the Set object and the Array.from() method to create a new array containing only the unique characters from the filtered array.

Finally, the function returns the length of this unique array, which represents the number of unique characters that appear more than once in the input string.

*/ 





// SAMPLE TESTS
duplicateCount(""); // 0
duplicateCount("abcde"); // 0
duplicateCount("aabbcde"); // 2
duplicateCount("aabBcde"); // 2,"should ignore case"
duplicateCount("Indivisibility"); // 1
duplicateCount("Indivisibilities"); // 2, "characters may not be adjacent"