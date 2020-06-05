/*
    Write code in the space provided so that the expected values output
*/

let dog = {
    name: 'Rex',
    wantsToPlay: false
};

// WRITE CODE BELOW THIS LINE

dog.wantsToPlay = true

// WRITE CODE ABOVE THIS LINE


//DO NOT MODIFY BELOW
console.log(dog.name);
console.log(dog.wantsToPlay);

// it should output:
// Rex
// true


/*
Given the following house - follow the instructions below.

Make sure you run the file after and it outputs the correct results.
*/

let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
    },
  };
  
  /*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
  
    WRITE YOUR CODE BELOW
  */
  house.address = '51 Berkley Road';
  house.previousOwners = ["Brian M.", "Fiona S."];
  house.currentOwner.lastName = "Montgomery";


  // - change the address of "house" to '51 Berkley Road'
  // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
  // - change the last name of the current owner of "house" to "Montgomery"
  
  /*
    DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  console.log(
    `Expected result: 51 Berkley Road. Actual result: ${house.address}`
  );
  console.log(
    `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
  );
  console.log(
    `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
  );