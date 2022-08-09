/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Mongoose";
animal["name"] = "Charlie";
animal.noises = [];

console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Grr";
noises.push("Squeak");
noises.unshift("Quack");
noises[noises.length] = "Meow";

console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
noises.push("Bark");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // object.property
 * // object["property"]
 * // for (var key in object) {
 * //   object.key; object.object[key]}
 * 2. What are the different ways of accessing elements on arrays?
 * // object[i]
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
  species: "Duck",
  name: "Jerome",
  noises: ["Quack", "Honk", "Sneeze", "Woosh"]
}

var platypus = {
  species: "Platypus",
  name: "Kevin",
  noises: ["Grmph", "Heeey", "Chomp", "Honk"],
}

var wombat = {};
wombat.species = "Wombat";
wombat.name = "Barry";
wombat.noises = [];
wombat.noises.push("Squeak");
wombat.noises.push("Hiccup");
wombat.noises.push("Nibble");
wombat.noises.push("Peep");
wombat["friends"] = [];
wombat.friends.push(friends);


animals.push(wombat);
animals.push(platypus);
animals.push(duck);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
// list will be an array to hold a number of similar data types

//friends.concat(animals);

function getRandom(){
  return Math.random();
}

friends.push(animals[getRandom(animals)]["name"]);
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}