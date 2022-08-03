// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: input Array
O: print values of array
C: iterate through array with loop
E: n/a
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // establish for loop using index up to array.length
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: object
O: return array containing input object's keys
C: n/a
E: n/a
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // initialize array literal to store keys
var arr = [];
    // iterate through object with for in loop
for (var key in object){
    // push each key to var array
  arr.push(key);
}
  // return our var array with new values added
  return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: object
O: console.log keys from input object
C: loop over object
E: n/a
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Object
O: Array containing input object's values
C: N/A
E: N/A
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    // initialize new array to conatin input object's values
  var arr = [];
    // iterate through object using for in loop
    for (var key in object){
      arr.push(object[key]);
    }
  // return array with new pushed values
  return arr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: object
O: return number of key/value pairs within input object
C: create a variable to store each key/value pair as an incrementing number
E:
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var number = [];
  for (var key in object){
    number++;
  }
  return number;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I:
O:
C:
E:
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
