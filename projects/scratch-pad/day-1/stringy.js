// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Function takes in an input string
O: Function returns the length of the input string
C: N/A
E: N/A
*/

function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return length of input string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // return input string through toLowerCase method
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // return input string through toUpperCase method
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // initialize new variable "words" and assign to our string .split into an array. next using .map method call a function for each element 
    // call toLowerCase function to enforce lower case per each element in our array
    let words = string.split(" ").map(toLowerCase);
    return words.join("-");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: a letter in a string
O: a boolean value
C: make case insensitive
E:
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// establish new variables with consistent lower cases
var lowerString = string.toLowerCase();
var lowerChar = char.toLowerCase();
// create switch case to compare first index of string with char
    switch(lowerString[0]) {
        case lowerChar:
            return true;
            break;
        default:
            return false;
            break;
    }

}

    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: String and single character
O: true if string ends with input character, false otherwise
C: case insensitive
E:
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// establish new variables with consistent lower cases
var lowerString = string.toLowerCase();
var lowerChar = char.toLowerCase();
// accessing last index of string and comparing it strictly to char
  if (lowerString[lowerString.length - 1] === lowerChar) {
    return true;
  }
  else {
    return false;
  }
  
}
    // YOUR CODE ABOVE HERE //


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: 2 strings
O: 1 concatenated string
C: n/a
E: n/a
*/

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
        // use "+" operator to concatenate strings passed as argument/parameters?
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: any number of strings
O: 1 concatenated string
C: store all arguments in an array
E:
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
        // use join method to concatenate all elements passed from args array
    return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: 2 strings
O: the longest of the 2 strings
C: .length
E: they are the same length
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length){
        return stringOne;
    }
    else if (stringOne.length < stringTwo.length){
        return stringTwo;
    }
    else {
        return "they are equal";
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings
O: return 1, -1, or 0 respectively for which input string is higher or lower in alphabetical order
C: return 0 if input strings are equal
E: n/a
*/
function sortAscending(stringOne, stringTwo){
    // YOUR CODE BELOW HERE //
        //test strings value. "higher" in alphabetical value should actually be an integer closer to 0
    if (stringOne < stringTwo){
    return 1;
  }
  else if (stringOne > stringTwo){
    return -1;
  }
  else if (stringOne === stringTwo){
    return 0;
  }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne > stringTwo){
        return 1;
      }
      else if (stringOne < stringTwo){
        return -1;
      }
      else if (stringOne === stringTwo){
        return 0;
      }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
