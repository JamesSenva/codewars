'use strict';

// console.log('hello') 

// NAME OF THE KATA : Keep Hydrated!
// URL : https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript


/* 

INSTRUCTIONS :
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/



// SOLUTION
function litres(time) {
    console.log(Math.floor(time * 0.5));
}




// SAMPLE TESTS
litres(2); // 1, 'should return 1 litre'
litres(1.4); // 0, 'should return 0 litres'
litres(12.3); // 6, 'should return 6 litres'
litres(0.82); // 0, 'should return 0 litres'
litres(11.8); // 5, 'should return 5 litres'
litres(1787); // 893, 'should return 893 litres'
litres(0); // 0, 'should return 0 litres'