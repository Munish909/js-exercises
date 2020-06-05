/* 
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

let travelDestinations = [destination1, destination2, destination3, destination4];

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/


function lessThan500(destinations){
if (destinations.distanceKms < 500){
    return true;
}
else {
    return false
}
}
let within500Kms = travelDestinations.filter(lessThan500);  // Complete here

function distanceLessThan500kms(destination){
    return destination.destinationName;
}
let destinationNamesWithin500Kms = within500Kms.map(distanceLessThan500kms);


function transportByFerry(destinations){
    if (destinations.transportations.includes("ferry")){
        return true;
    }
    else {
        return false
    }
    }
    let byFerry = travelDestinations.filter(transportByFerry);  // Complete here
    
    function destinationByFerry(destination){
        return destination.destinationName;
    }
    let destinationNameReachableByFerry = byFerry.map(destinationByFerry);
   // Complete here
 
function transportByTrainAndMoreThan300(destinations){
    if (destinations.transportations.includes("train") && destinations.distanceKms > 300) {
        return true;
    }
    else{
        return false;
    }
}
let byTrain = travelDestinations.filter(transportByTrainAndMoreThan300);

function byTrain300kms(destinations){
    return destinations.destinationName;
}


let destinationNamesMoreThan300KmsAwayByTrain = byTrain.map(byTrain300kms);  // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`);
