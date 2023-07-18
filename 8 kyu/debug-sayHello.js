'use strict';

// console.log('hello') 

// NAME OF THE KATA : Grasshopper - Debug sayHello
// URL : https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript


/* 

INSTRUCTIONS :
Debugging sayHello function

The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock

*/



// SOLUTION
function sayHello(name) {
    console.log(`Hello, ${name}`);
}




// SAMPLE TESTS
sayHello('Mr. Spock'); // 'Hello, Mr. Spock'
sayHello('Captain Kirk'); // 'Hello, Captain Kirk'
sayHello('Liutenant Uhura'); // 'Hello, Liutenant Uhura'
sayHello('Dr. McCoy'); // 'Hello, Dr. McCoy'