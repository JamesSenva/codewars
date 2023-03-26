'use strict';

// console.log('hello') 

// NAME OF THE KATA : Are You Playing Banjo?
// URL : https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript


/* 

INSTRUCTIONS :
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.

*/



// SOLUTION
function areYouPlayingBanjo(name) {
    // Implement me
    console.log(name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`);
  }




// SAMPLE TESTS
areYouPlayingBanjo("Adam"); // "Adam does not play banjo"
areYouPlayingBanjo("Paul"); // "Paul does not play banjo"
areYouPlayingBanjo("Ringo"); // "Ringo plays banjo"
areYouPlayingBanjo("bravo"); // "bravo does not play banjo"
areYouPlayingBanjo("rolf"); // "rolf plays banjo"