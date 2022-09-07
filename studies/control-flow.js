/**
 * ********************
 * *** CONTROL-FLOW ***
 * ********************
 * 
 * 0: The control flow is the order in which the computer executes statements in a script.
 * Code is run in order from the first line in the file to the last line, unless the computer
 * runs across the (extremely frequent) structures that change the control flow,
 * such as conditionals and loops (loops will get their own section).
 * Conditionals act much like the logical or (||) operator and create a fork in the "flow"
 * of the program. They facilitate two separate paths the code can follow.
 * 
 */

/**
 * ********************
 * *** CONDITIONALS ***
 * ********************
 */

// **********
// *** If ***
// **********
let myName = "Colin";
if (myName === "Colin"){
    console.log("Colin is my name.");
}

/**
 * Using an "if" statement provides one additional "path" the code can follow. 
 * The interpreter will either pass the "if" test (resolve to true) and navigate 
 * into the code that follows, or it will fail (!true) and continue down its current scope.
 * We will wrap the test before the curly brackets (code block) of the "if" statement.
 */

// ***************
// *** Else-If ***
// ***************
if (myName !== "Colin"){
    console.log("Colin is not my name.");
} else if (myName === "Colin"){
    console.log("Colin is my name.");
}

/**
 * Adding an "else if" condition after an "if" statement will create an either-or
 * paradigm where the code will only continue if one of the two specific conditions
 * are met (true). Both the "if" and "else if" statements need parenthetical tests.
 * "if else-if" chains are usually designed to catch specific scenarios.
 */

// ************
// *** Else ***
// ************
if (myName === "Colin"){
    console.log("Colin is my name.");
} else {
    console.log("Colin is not my name.");
}

/**
 * Although these two examples will act similarly, this "if else" chain would 
 * be more fitting. An "if else" chain is designed to allow the code to follow
 * a path regardless of its "false" resolution. The "else" condition will apply
 * as long as the specific "if" condition is *not* met. 
 */

// **************
// *** SWITCH ***
// **************
switch(expression) {
    case x: // if expression resolves --> x
      // code block
      break;
    case y: // if expression resolves --> y
      // code block
      break;
    default: // if expression resolves --> anything else
      // code block
  }

/**
 * The switch statement evaluates an expression, matching the expression's
 * value against a series of case clauses, and executes statements after the
 * first case clause with a matching value, until a break statement is encountered.
 * The default clause of a switch statement will be jumped to if no case matches
 * the expression's value. Switch operates much like an "if else-if else" chain.
 */