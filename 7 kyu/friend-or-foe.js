'use strict';

// console.log('hello') 

// NAME OF THE KATA : Friend or Foe?
// URL : https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript


/* 

INSTRUCTIONS :
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

Note: keep the original order of the names in the output.

*/



// SOLUTION
function friend(friends){
    //your code here
    // METHOD 1
    // let friendNames = [];
    // friends.forEach( fr => {
    //     if(fr.length === 4){
    //         friendNames.push(fr);
    //     }

    // })
    // console.log(friendNames);

    // METHOD 2
    let friendNames = friends.filter(name => name.length === 4);
    console.log(friendNames);
}





// SAMPLE TESTS
friend(["Ryan", "Kieran", "Mark"]); // ["Ryan", "Mark"]
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]); // ["Ryan"]
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]); // ["Jimm", "Cari", "aret"]
friend(["Love", "Your", "Face", "1"]); // ["Love", "Your", "Face"]