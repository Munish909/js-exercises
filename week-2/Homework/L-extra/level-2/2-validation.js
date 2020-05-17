// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement



function validate1(num) {
  let numType = typeof num;
  return numType === "number";  
  }
  

  function validate2(num){
  
    return num > 0;
  }
  

  function validate3(num){
  
    return num <= 100; 

  }
  // const valid = [validate1, validate2, validate3];
  function validate (number){
    
    if (validate1(number) === true && validate2(number) === true && validate3(number) === true){
      return true;
    }
    else{
      return false;
    }
  }
//  OR

//return (validate1(number) && validate2(number) && validate3(number))

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/*
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
