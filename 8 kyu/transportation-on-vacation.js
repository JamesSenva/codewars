'use strict';

// console.log('hello') 

// NAME OF THE KATA : Transportation on vacation 
// URL : https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript


/* 

INSTRUCTIONS : After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

*/



// SOLUTION
function rentalCarCost(d) {
    // Your solution here
    const rent = 40;
    if(d >= 7){
        console.log((rent * d) - 50);
    }else if(d >= 3){
        console.log((rent * d) - 20);
    }else{
        console.log(rent * d);
    }
  }





// SAMPLE TESTS
rentalCarCost(1); // 40
rentalCarCost(2); // 80
rentalCarCost(3); // 100
rentalCarCost(4); // 140
rentalCarCost(5); // 180
rentalCarCost(6); // 220
rentalCarCost(7); // 230
rentalCarCost(8); // 270
rentalCarCost(9); // 310
rentalCarCost(10); // 350