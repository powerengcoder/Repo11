var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets){
var myNewPets = [];
myNewPets.push("Bird", "Fish");

var firstPet = [];
firstPet = myNewPets.shift();

var lastPet = [];
lastPet = myNewPets.pop();

myNewPets.push("Bird", "Fish");
myNewPets.unshift("Lion");

return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;