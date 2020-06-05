/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/
// let laptop = {
//     brand: "Lenovo",
//     screenSize: 17,
//     isTouchscreen: true,
//     ram: "16gb",
//     memory: "1tb",
//     usbPort: 5,
//     cdDrive: true
//   };

//   console.log(laptop.memory);
//   console.log(laptop);
//   console.log(laptop.brand, laptop.screenSize, laptop.memory);


/*
Given the following house - follow the instructions below.

Make sure you run the file after and it outputs the correct results.
*/

// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//       firstName: "Margaret",
//       lastName: "Conway",
//     },
//   };
  
//   /*
//     DO NOT EDIT ANYTHING ABOVE THIS LINE
  
//     WRITE YOUR CODE BELOW
//   */
 
// house.address = "51 Berkley Road";
// house.previousOwners = ["Brian M.", "Fiona S."];
// house.currentOwner.lastName = "Montgomery";

  
//   // - change the address of "house" to '51 Berkley Road'
//   // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
//   // - change the last name of the current owner of "house" to "Montgomery"
  
//   /*
//     DO NOT EDIT ANYTHING BELOW THIS LINE
//   */
  
//   console.log(
//     `Expected result: 51 Berkley Road. Actual result: ${house.address}`
//   );
//   console.log(
//     `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
//   );
//   console.log(
//     `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
//   );





  /*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
*/

let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
      isForSale: false
    },
  };
  
  let newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez",
  };
  
  house.currentOwner = newCurrentOwner;
  house.previousOwners [1] = "Stephen B.";
  house.isForSale = false;
  /*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
  
    WRITE YOUR CODE BELOW
  */
  
  // - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
  // - from the list of previous owners, replace only "John A." with "Stephen B."
  // - give the house a new property called 'isForSale' with the value 'false'
  
  /*
    DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  console.log(
    `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
      house.currentOwner === newCurrentOwner
    }`
  );
  console.log(
    `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
  );
  console.log(`Expected result: false. Actual result: ${house.isForSale}`);