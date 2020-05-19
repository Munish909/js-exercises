// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

function remove(arr, index) {
   let arr1 = arr.slice(0, index);// complete this statement
   let arr2 = arr.slice(index + 1);
let arr3 = arr1.concat(arr2);
return arr3;
}

/*
  DO NOT EDIT BELOW THIS LINEs
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, 1);

console.log(newNumbers);
console.log(newNames);

/*
  EXPECTED RESULT
  ---------------
  [1, 2]
  [Irina, Mozafar]
*/