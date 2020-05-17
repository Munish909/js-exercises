// 1. Write a function (`capitalise`) that capitalises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `capitalise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function capitalise(str) {
  let tidyString = tidyUpString(str);
  let lowerCase = tidyString.slice(1);
  let obj = tidyString[0].toUpperCase(str);
  let upperCase = obj.concat(lowerCase);

  return upperCase;// complete this function
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidyAndCapitalised = mentors.map(capitalise);

console.log(mentorsTidyAndCapitalised);


/*
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
