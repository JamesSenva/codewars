'use strict';

// console.log('hello') 

// NAME OF THE KATA : Volume of a Cuboid
// URL : https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript


/* 

INSTRUCTIONS :
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

*/



// SOLUTION
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // your code here
      console.log(length * width * height);
    }
  }




// SAMPLE TESTS
Kata.getVolumeOfCuboid(1,2,2); //  4
Kata.getVolumeOfCuboid(6,2,5); // 60