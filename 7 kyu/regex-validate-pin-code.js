'use strict';

// console.log('hello') 

// NAME OF THE KATA : Regex validate PIN code
// URL : https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript


/* 

INSTRUCTIONS :
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/



// SOLUTION
function validatePIN (pin) {
    //return true or false
    let regex = /^\d{4}(\d{2})?$/;
    console.log(regex.test(pin));
  }





// SAMPLE TESTS
validatePIN("1"); // false, "Wrong output for '1'"
validatePIN("12"); // false, "Wrong output for '12'"
validatePIN("123"); // false, "Wrong output for '123'"
validatePIN("12345"); // false, "Wrong output for '12345'"
validatePIN("1234567"); // false, "Wrong output for '1234567'"
validatePIN("-1234"); // false, "Wrong output for '-1234'"
validatePIN("1.234"); // false, "Wrong output for '1.234'"
validatePIN("-1.234"); // false, "Wrong output for '-1.234'"
validatePIN("00000000"); // false, "Wrong output for '00000000'"
validatePIN("a234"); // false, "Wrong output for 'a234'"
validatePIN(".234"); // false, "Wrong output for '.234'"
validatePIN("1234"); // true, "Wrong output for '1234'")
validatePIN("0000"); // true, "Wrong output for '0000'")
validatePIN("1111"); // true, "Wrong output for '1111'")
validatePIN("123456"); // true, "Wrong output for '123456'")
validatePIN("098765"); // true, "Wrong output for '098765'")
validatePIN("000000"); // true, "Wrong output for '000000'")
validatePIN("123456"); // true, "Wrong output for '123456'")
validatePIN("090909"); // true, "Wrong output for '090909'")