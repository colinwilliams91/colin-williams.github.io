/**
 * ***********************
 * ****** VARIABLES ******
 * ***********************
 * 
 * 0: To hold things in memory during the life-cycle of a program we can use variables. Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type. Variables are called so because once created,
 * we can CHANGE the value (and type of value) to which they point. (they "vary")
 * 
 * ******************
 * ******************
 * 1: DECLARATION && ASSIGNMENT: These are the two phases of using variables.
 * Variables are declared with a declaritive keyword: let, var, and const. What follows 
 * will become the variable's name followed by what it is assigned to.
 *
*/

// ******************
// I. Declaration ***
// ******************
var newVar;

/**
 * At the declaration phase, the variable newVar is undefined because we have NOT initialized
 * or assigned it to anything.
 */
console.log(newVar); // prints --> undefined

// ******************
// II. Assignment ***
// ******************
newVar = "new variable!"; 
console.log(newVar); // prints --> "new variable"

// **********************
// III. Re-assignment ***
// **********************
newVar = "my name is Colin"; 
console.log(newVar); // prints --> "my name is Colin"

// examples:
var myVariable = 1; // number
var myVariable = true; // re-assigned to boolean
myVariable = "string"; // re-assigned to string
// re-assign only works with var and let (not with const)

/*****************
 * ***************
 * 2. VAR, LET, && CONST: the three declaritive keywords that signify
 * that we are creating a variable. 
 * 
 */

// **********
// I. var ***
// **********
// A var statment will declare a variable. If we declare a variable with var inside of a function it will be function scoped (only giving access inside its function),
// if var is declared outside of any fuction (in the global scope) it will be accessed globally and hoisted (we will discuss hoisting next). 
// Variables with var can be re-assigned. To avoid messy variable access we try to always use let unless specifically needed somewhere post ES6.


 var myName = "Colin"; // this is a globally scoped var
 console.log(myName);  // prints --> "Colin".
                       // because var myName was declared globally it is available anywhere in this program.

 
 function nameChanger(){    // function 
     var name1 = "Anthony"; // name1 is a declared var
     console.log(name1);    // prints --> "Anthony" when function is called below:
 }

 nameChanger();         // prints --> "Anthony"
 // console.log(name1); // we know that a var variable with this name exists, but we cannot access it outside of its function-scope.
                        // this will throw a reference error.

 // ***********
 // II. let ***
 // ***********
 // A let statement will declare a variable. A let declared variable will be block or function scoped (we will discuss this in functions: scope section) 
 // and only accessed from within functions, conditions, or loops (anything with code "block" curly braces). let variables will not be hoisted and initialized
 // (they will hoist and return "unitiialized" error) and therefore can only be accessed after the code interpreter has hit its declarative line of code. 
 // lets can be re-assigned within their scope. 

 let dog = "chad"; // globally scoped let variable

 function newDog(){
    let newDog1 = "brad"; // --> this is a local/function scoped let variable
    // console.log(newDog1); // --> this would actually print --> "brad" to console because we are accessing the variable inside our function
 }

 console.log(dog); // prints --> "chad" to the console because "dog" is a globally scoped variable accessible anywhere
 // console.log(newDog1); // throws an error, because this variable is function scoped and only accesible inside our newDog function



 // console.log(fruit); // ReferenceError: Cannot access 'fruit' before initialization
 let fruit = "orange";  // console.log call above will not work because let has to be initialized before the call.
 console.log(fruit);    // prints --> "orange"
 fruit = "apple";       // re-assigning let
 console.log(fruit);    // prints --> "apple"

 // **************
 // III. const ***
 // **************
 // A const statement will declare a variable. Const variables are block or function scoped (like let) but they *cannot* be re-assigned.
 // Exactly like let, they will be hoisted but uninitialized. Const are constant variables and can not be re-assigned, however, this is 
 // different from immutable (covered later). Const can initialize an array or an object which can be manipulated but cannot change 
 // its data-type. 

// console.log(num); // Throws ReferenceError as the variable value is uninitialized.
const num = 6;       // initialization
// num = 7;          // throws error TypeError assignment to constant variable.


/*******************
 * *****************
 * 3. HOISTING: Functions as well as some variables are brought up to the top of their scope before the interpreter hits the line of code that contains them.
 * Despite this, variables will all remain uninitialized until we hit the line containing their initialization. In the case of var, the variables
 * declaration is hoisted but will remain "undefined" where as let and const are hoisted as well, but, will return errors and be innaccesible/uninitialized
 * before their declaration. We can use functions in our program above their declarative lines because of this. 
 */ 

// -- interpreter starts here --

                           // the equivalent of: var lastName;

function nameMe(){
    let firstName = "Colin"; // this "let" variable will not be hoisted and therefore will not even return "undefined" but will throw an error.
}

var lastName = "Williams"; // the var lastName will be "hoisted" to the top of the code but its value will remain "undefined" 
                           // until the code interpreter actually hits this line.