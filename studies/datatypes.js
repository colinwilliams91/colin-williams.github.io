/**
 * ***********************
 * ****** DATATYPES ******
 * ***********************
 * 
 * 0: Javascript has 2 main categories that most datatypes fit into; simple/primitive and complex. Before listing them,
 * datatypes will determine how the data will be handled (what operations will be performed) 
 * and what the program should expect from the data. 
 * 
 * **********************
 * **********************
 * 1: PRIMITIVE DATATYPES
 * In JavaScript, a primitive (primitive value, primitive data type) 
 * is data that is not an object and has no methods or properties.
 * All primitives are immutable; that is, they cannot be altered. (we will cover this in copy by value/reference)
 * **********************
 * **********************
 * 
 */

// **************
// *** Number ***
// **************
let num = 6; // 6 is our *number* assignment to variable num

/**
 * Numbers represent a positive or negative integer.
 */

console.log(num);     // prints --> 6

console.log(num + 8); // prints --> 14 // we can perform mathematical operations with numbers

// **************
// *** String ***
// **************
let string = "string"; // "string" is our assignment of a string

/**
 * Strings are sequential characters (can be letters, numbers, symbols, whitespace, etc...)
 * that corespond to a number value using UTF-16 code (this allows them to use .sort() by default). Strings
 * can also be manipulated in other ways (see string manipulation) much like arrays because they are 0-indexed. 
 */

console.log(string); // prints --> "string"

// ***************
// *** Boolean ***
// ***************
let boolean = true; // true is our "boolean" assignment to variable boolean

/**
 * Booleans can be one of two values: true or false (essentially 0 or 1).
 * In some cases it will imply the existence of a value or its non-existence.
 */

console.log(boolean); // prints --> true

// *****************
// *** Undefined ***
// *****************
let no; // declaring a variable without assigning a value (initializing) will assign it to undefined.

/**
 * Undefined is much like how it sounds: not defined. It means something exists but that it has no value.
 * Undefined is actually a property of the global object. 
 */

console.log(no); // prints --> undefined

function example(x, y){ // example function
    return x + y;       // concatenate two arguments
}

console.log(example("me ",)); // prints --> me undefined // undefined stands in for the absence of a value.
                              // the above example demonstrates when undefined occurs with passed in arguments.

// ************
// *** Null ***
// ************
let empty = null; // Assigning null to a variable.  

/**
 * Null is *actually* a value. It is a non-number representation of zero. As opposed to undefined,
 * null represents intentionally empty.
 */

console.log(empty); // prints --> null
example("me", empty); // prints --> menull // in null's emptyness it is still a value.

// ***********
// *** NaN ***
// ***********
example(4,); // returns --> NaN 

/**
 * NaN or "Not a Number" represents exactly that. It is usually the result of trying to perform mathematical
 * operations that cannot compute. In the above example trying to add 4 + undefined will result in NaN. 
 * Depending on the datatype some types can perform operations that numbers can also perform and will not
 * result in NaN, e.g.: 4 + "me" --> 4me (because strings can use the + operator).
 */

// ****************************
// *** Infinity / -Infinity ***
// ****************************
let big = Infinity;    // assigning variable to Infinity
let small = -Infinity; // assigning variable to -Infinity

/**
 * Infinity is the same as the value of the global object's Infinity property and is a number.
 * -Infinity is the same bug negative. The highest and lowest possible numbers. 
 */


/**********************
 * ********************
 * 2: COMPLEX DATATYPES
 * Complex data types can hold collections of values and more complex entities.
 * Objects, Arrays and Functions are all complex datatypes (and are actually all types of objects).
 * The idea of these collections is to store multiple entries inside a single thing
 * (with arrays they act as an ordered list)(and with objects data is stored as pairs)
 * Unlike primitive datatypes complex ones can be altered.
 * ********************
 * ********************
 * 
 */

// **************
// *** Object ***
// **************
let student = {                                 // create a new instance of an object
    name:"Colin",                               // property: name, which has the key "name" the string "Colin" as the value.
    home: "New Orleans",                        // property: home, value === string "New Orleans"
    studies: ["Computer Science", "Javascript"] // property: studies is the array containing "Computer Science" and "Javascript" strings.
};

/**
 * The object is a complex data type that allows you to store collections of data. An object contains properties,
 * defined as a key-value pair. A property key (name) is always a string, but the value can be any data type,
 * like strings, numbers, booleans, or complex data types like arrays, function and other objects.
 * Objects can be iterated over using "for-in" loops. Object's properties and values can be accessed using Dot or Bracket notation.
 */

// *************
// *** Array ***
// *************
const research = ["Computer Science", "Javascript"];
research.push("Html"); // will add "Html" as a new index at the end of the array.
research.pop();        // will remove the last index of the array by default.
console.log(research); // print --> ["Computer Science", "Javascript"]

/**
 * An array is a type of object used for storing multiple values in single variable.
 * Each value (also called an element) in an array has a numeric position, known as its index,
 * and it may contain data of any data type: numbers, strings, booleans, functions, objects,
 * and even other arrays. The array index starts from 0, so that the first array element is arr[0] not arr[1].
 */

// ****************
// *** Function ***
// ****************         
console.log(foo());                 // ERROR! foo wasn't loaded yet// Function Expression
var func = function() { return 6; } // Function Expression

                                 
console.log(foo());           // prints --> 5. Declarations are loaded before any code can run.  
function func() { return 5; } // Function Declaration

/**
 * The function is a reusable object that executes a block of code. 
 * Because of this it is possible to assign them to variables.
 * Function declarations load before any code is executed while Function
 * expressions load only when the interpreter reaches that line of code.
 * Similar to the var statement, function declarations are hoisted to the
 * top of other code. Function expressions aren’t hoisted, which allows
 * them to retain a copy of the local variables from the scope where
 * they were defined. Functions can take in parameters and those are called 
 * arguements during that functions call/invocation.
 */


/****************************
 * **************************
 * 3: BY COPY // BY REFERENCE
 * Primitive values are immutable, so, in order to manipulate them our program will
 * make an identical copy and perform operations on it, and therefore must be stored 
 * somewhere else. By Reference means the mutations are occuring in reference to the
 * original object (object, array, function). Complex datatypes can be manipulated 
 * by copy or by reference but primitive datatypes must be operated on by copy. 
 * **************************
 * **************************
 * 
 */

 // There is no way to change a primitive datatype once it's assigned 
 let a = "Basketball"; // we define a string 
 a[2] = "e";           // we try to redefine the 3rd index as the letter e
 console.log(a);       // still prints --> "Basketball" because must by copied to modify.

// If we try this with an array...
let b = ["C","O","L", "I", "N"];
b[0] = "K";            // reassign the 0 index to "K"
console.log(b);        // prints --> "["K","O","L", "I", "N"]" because we can mutate the original value with complex datatypes (by reference).


 
 
 
 
 
 
 