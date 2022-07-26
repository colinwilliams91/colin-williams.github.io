/**
 * ***************************
 * *** STRING MANIPULATION ***
 * ***************************
 * 
 * 0: A string is a sequence of characters wrapped in single or double-quotes.
 * 
 * 1: Strings are a primitive and immutable data-type.
 * 
 * 2: We can use .methods() to manipulate strings.
 * 
 * 3: We can also use operators to manipulate strings.
 * 
 * 4: We can use bracket ([]) notation to access characters in a string just like arrays.
 * 
 */

// METHODS for STRING MANIPULATION:
/*  .concat() *
    .indexOf() *
    .lastIndexOf()
    .charAt()
    .match()
    .replace() *
    .split()
    .slice() 
    .length *
    .substring() *
    .search() *
    .toUpperCase() *
    .toLowerCase()
    .trim()
*/

/**
 * @function .concat(): will connect multiple strings into one new string.
 * 
 * syntax:
 * firstString.concat("anything you want to connect", moreStrings)
 * 
 */

 var str1 = "coding is";
 var str2 = "frustrating!";
 var str3 = "annoying!";
 var str4 = "great!";
 
 var str5 = str1.concat(" ", str4);
 console.log(str5); // => "coding is great!"

 /**
  * @function .indexOf(): will return the index of a sequence of characters you designate inside double quotes. 
  * (this will include spaces and only return the first occurence of your targeted characters)
  * 
  * syntax:
  * string.indexOf("input")
  * 
  */

  str5.indexOf("great!");
  console.log(str5.indexOf("great!")); // => 10

  /**
  * @function replace(): will search the string for a specific value and replace it with an input value.
  * 
  * syntax:
  * string.replace("searchForThis", "replaceWithThis")
  */

    var str6 = "I hate coding!";
    var str7 = str6.replace("hate", "love");
    console.log(str7); // => "I love coding"

/**
* @function substring(): will take two parameters (start, end) and returns the characters between
* these two indexes. For some reason it excludes the end index(?) but includes the start.
* 
* syntax:
* string.substring(1, 100)
* 
*/

str7.substring(2, 6);
console.log(str7.substring(2, 6)); // => "love"


// OPERATORS for STRING MANIPULATION
// (+) Will concat or combine multiple strings.
// (=) Will assign a string to something.
// (+=) Will concat and assign (append) string values to existing variable (in a copy)

// CONCATENATE OPERATOR
// (+)

console.log("My name is" + " " + "Colin Williams.") // --> "My name is Colin Williams."

// CONCATENATE-ASSIGNMENT OPERATOR
// (+=)

let firstName = "Colin";
let fullName = firstName += " Williams";
console.log(fullName); // --> "Colin Williams"

// ASSIGNMENT OPERATOR
// (=)

const a = 'a';
const b = 'b';
console.log(a); // --> "a"

