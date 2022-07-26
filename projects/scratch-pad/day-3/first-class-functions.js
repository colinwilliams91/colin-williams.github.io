// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
        if (value > base){
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
        if (value < base){
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        if (string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        if (string[string.length -1].toLowerCase() === endsWith.toLowerCase()){
            return true;
    } else {
        return false;
    }

}  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I: Array of strings and a Function to modify a string
O: Return input Array of strings, modified.
C: Loop over input Array, modify and "collect" (push?) results into "some" collection
E: N/A
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

    var modifiedStrings = [];
    for (var i = 0; i < strings.length; i++){
        modifiedStrings.push(modify(strings[i]));
    }
    return modifiedStrings;


    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: Array of Strings, Function to test input strings and return Boolean
O: Boolean
C:
E:
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // intialize empty array
    var testedStrings = [];
    // set up for loop to iterate over input array
    for (var i = 0; i < strings.length; i++){
        // pass iterations of input array into test function
        if (test(strings[i]) === true){
            // if test is true, push iteration into new array
            testedStrings.push(strings[i]);
        // create else statement to determine false outcome
        } else {
            return false;
        }
    }
    // once loop is complete and all true answers are pushed to output array, return true
    return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
