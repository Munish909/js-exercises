// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted

function replace(arr, valueToReplace, newValue) {
  let index1 = arr.indexOf(valueToReplace);
  let index2 = arr.indexOf(newValue);
  //let index3 = arr.slice(index1, index2);
  let slic1 = arr.slice(0, index1);
  let slic2 = arr.slice(index1 + 1);
  
 // let arr3 = arr.slice(index1 - 1)
 // let arr4 = arr2.concat(arr1).concat(arr3);
 let arr1 = slic1.concat(newValue).concat(slic2);
  return arr1; // complete this statement
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 3, 2);
var newNames = replace(names, "Ashleigh", "Rares");

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);

/*
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Rares, Mozafar]
*/
