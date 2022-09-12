
/**
 * *****************
 * *** FUNCTIONS ***
 * *****************
 * 
 * 0: A Function is a reusable piece of code. It can be defined after the keyword "function".
 * 
 * 1: A Function will sometimes expect parameters (function(para1, para2)).
 * these can be any data-type including other functions. These placeholders 
 * are called "parameters" and will later be "passed" what we call "arguments"
 * for the code block to execute on/with at the time of the invocation (or the "function call")
 * to determine the return.
 * 
 * 2: The two phases for functions are the Function Declaration (assigning what the function will do)
 * and the Function Call (or the Invocation) where we will execute the function on what we pass into it.
 * 
 * 3: After these (parameters) mentioned in #1, we now have a NAMED function. 
 * We will {write a code block inside curly braces} in the Declaration
 * which will be executed whenever we call the function.
 * 
 */

/**
 * 4: Assigning function to a variable:
 */// FUNCTION DEFINITION // EXPRESSION vs. DECLARATION

const functionExpression = function(width, height) { // Assigns our function to a variable during definition. Will not be hoisted.
    return width * height;
  };
  
  // FUNCTION CALL / INVOCATION
  console.log(functionExpression(3, 4));             // Prints --> 12 (as return) // Where there once were parameters 
                                                     // inside parenthesis are now "argument" values to be manipulated.
  
  function functionDeclaration(width,height){        // Assigns our function a name. Will be hoisted.
  return width * height;                             // optional output "return" keyword used here.
  };


/**
 * Function Arguments that are passed to a function are actually an
 * object that can be iterated through or accessed. ex: arguments[i], arguments.length
 */

/**
 * 5: 
 *    a. Parameters are the optional inputs a function takes. We specify these by wrapping them 
 * inside parenthesis immediately following the "function" keyword during definition (declaration/expression).
 * What replaces these later at the call/invocation phase will be the arguments accepted by the original parameters.
 * 
 *    b. Optional outputs from functions follow the "return" keyword. If the function has a return then 
 * that value is what the function will resolve to.
 */


/** // SCOPE
 * 6: Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
 * Block Scope: variables declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.
 * Variables declared within curly braces are refernced as within block scope.
 * 
 * Additionally, functions have access to variables declared inside the function's parent scope, inside it's own scope, and the global scope.
 * Variables declared inside of a function are within that function's local scope, these variables are not accessible to functions outside of this scope.
 */


 var space = " ";                                  // declare a globally accessed variable that our function WILL have access to

 function pizza(){                                 // function declaration

     let cheese = "cheese";                        // a let that is function scoped (declared in a function)

     function topping(){                           // another function in the block

         const pepperoni = "pepperoni";            // a declaration inside the internal function

         console.log(cheese + space + pepperoni);  // this console log will print a message with access to variables in the global scope and its parent scope
     }
     topping();                                    // call the inside function
 }
 pizza();                                          // we call the function and it calls the inside function and prints to console "cheese pepperoni"

 //console.log(cheese);                            // if we try to console log "cheese" we get a reference error because it is inside the block-scope of pizza()


 /** // CLOSURE
  * 7: A "closure" is a function that retains access to an outer (enclosing) function's variables
  * even after the outer function has returned. Closures work with complex datatypes (Objects, Arrays, Functions)
  */

 // example:

 function doSomething(){                              // function declaration
    let name = "Colin";                               // function scoped variables
    let age = 31;                                     // *
    return function(){                                // *
        return name + " is " + age + " years old."    // 2x Closures that will be held onto
    }                                                 // *
 }                                                    // *
 let func = doSomething();                            // global scope function expression
                                                      // *
 console.log(func());                                 // function call in the global scope prints --> "Colin is 31 years old." (from child/function scope)