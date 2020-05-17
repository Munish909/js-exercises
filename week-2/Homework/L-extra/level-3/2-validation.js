// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

var excludedNums = [6, 14, 91, 111];

function validate1(num){
return typeof num === "number";
  }

function validate2(num){
return num % 1 === 0;
  }

function validate3(num){
return excludedNums.includes(num) === false;
  }



function validate(number){
// if(validate1(number) === true && validate2(number) === true && validate3(number) === false){
//   return true;
// }
// else{
//   return false;
// }
return (validate1(number) && validate2(number) && validate3(number));
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/*
  EXPECTED RESULT
  ---------------
  false
  false
  true
  true
  false
*/


