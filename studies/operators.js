/**
 * ***********************
 * ****** OPERATORS ******
 * ***********************
 * 
 * 0: In JavaScript, an operator is a symbol used to perform operations on operands (values and variables).
 * They can be mathematical, logical, comparative, or assigning.
 *  
 * *************
 * *************
 * 1: ASSIGNMENT
 * An assignment operator assigns a value to its left operand based on the value of its right operand.
 * It uses the = alone or combined with a variety of other symbols to perform other assignments. 
 * *************
 * *************
 * 
 */


//s_i_g_n_//_m_e_a_n_i_n_g_//_n_a_m_e_
 x = f()   // x = f()      // Assignment	
 x += f()  // x = x + f()  // Addition assignment
 x -= f()  // x = x - f()  // Subtraction assignment	
 x *= f()  // x = x * f()  // Multiplication assignment	
 x /= f()  // x = x / f()  // Division assignment	
 x %= f()  // x = x % f()  // Remainder assignment	
 x **= f() // x = x ** f() // Exponentiation assignment


 /**
  * *************
  * *************
  * 2. ARITHMETIC
  * An arithmetic operator takes numerical values as their 
  * operands and returns a single numerical value after 
  * performing its corresponding operation.
  * *************
  * *************
  * 
  */


// Operator	 Description                    Example
//   +	    // Addition                     1 + 1 = 2
//   -	    // Subtraction                  2 - 1 = 1
//   *	    // Multiplication               2 * 2 = 4
//   **	    // Exponentiation (ES6)         2 ** 2 = 4
//   /	    // Division                     4 / 2 = 2
//   %	    // Modulus (Division Remainder) 7 % 2 = 1 (7 / 2 = 3 remainder of 1)
//   ++	    // Increment                    1++ = 2
//   --	    // Decrement                    2-- = 1


 /**
  * *************
  * *************
  * 3. COMPARISON
  * A comparison operator compares its operands and returns
  * a logical value based on whether the comparison is true.
  * The operands can be numerical, string, logical, or object values.
  * In most cases, if the two operands are not of the same type,
  * JavaScript attempts to convert them to an appropriate type
  * for the comparison. This behavior generally results in comparing
  * the operands numerically. The sole exceptions to type conversion
  * within comparisons involve the === and !== operators, which perform
  * strict equality and inequality comparisons. These operators do not
  * attempt to convert the operands to compatible types before checking equality.
  * *************
  * *************
  * 
  */


//___Operator______Description______Examples_returning_true__
//***********************************************************
//   Equal  	Returns true if the      3 == var1
//    (==)      operands are equal.	    "3" == var1
//                                       3 == "3"
// Not equal    Returns true if the      var1 != 4
//    (!=)      operands are not equal   var2 != "3"
//   	
// Strict equal Returns true if the 
//    (===)     operands are equal and   3 === var1
//              of the same type
//   	
// Strict not   Returns true if the      3 !== '3'
//  equal (!==)	operands are of the same var1 !== "3"
//              type but not equal,
//              or are of different type.
//
// Greater than Returns true if the  	 var2 > var1
//    (>)       left operand is greater "12" > 2                      
//              than the right operand.
//
// Greater than  Returns true if the     var1 >= 3
// or equal (>=) left operand is  	     var2 >= var1
//               greater than or equal
//               to the right operand.
//   
// Less than    Returns true if the left var1 < var2
//    (<)	    operand is less than     "2" < 12 
//              the right operand.
//
//   Less than  Returns true if the     var1 <= var2
// or equal (<=) left operand is less 	var2 <= 5
//              than or equal to the             
//              right operand.
//
//


 /**
  * *************
  * *************
  * 4. LOGICAL
  * Logical operators are typically used with Boolean (logical) values;
  * when they are, they return a Boolean value. However, the && and || operators
  * actually return the value of one of the specified operands, so if these
  * operators are used with non-Boolean values, they may return a non-Boolean value.
  * *************
  * *************
  * 
  */


//___Operator_______________Usage_______Description_____________________________________________  EXAMPLES:
//**********************************************************************************************
//   Logical AND (&&)   expr1 && expr2	Returns expr1 if it can be converted to false;            if (10 > 5 && 10 / 2 === 5){
//                                      otherwise, returns expr2. Thus, when used with                return true; // --> returns true because 
//                                      Boolean values, && returns true if both operands          }                       BOTH conditions are true
//                                      are true; otherwise, returns false.
//
//   Logical OR (||)	expr1 || expr2	Returns expr1 if it can be converted to true; otherwise,    if (10 > 5 || 10 < 5){
//                                      returns expr2. Thus, when used with Boolean values,           return true; // --> returns true because 
//                                      || returns true if either operand is true; if both are    }                       ONE of the conditions are true
//                                      false, returns false.
//
//   Logical NOT (!)	    !expr	      Returns false if its single operand that can be             let x = true;
//                                      converted to true; otherwise, returns true.               if (!x){
//                                                                                                    return false; // !x === false, so return false (because x === true)
//                                                                                                }


 /**
  * ***********
  * ***********
  * 5. UNARY
  * A unary operation is an operation with only one operand.
  * ***********
  * ***********
  * 
  */

let x = 1;
  //unary plus
  +x;         // returns --> 1, converts to positive number         
  //unary negation
  -x;         // returns --> -1, converts to negative number   
  //increment
  x++;        // returns --> 2, adds 1 to operand
  //decrement
  x--;        // returns --> to 0, subtracts 1 from operand
  //logical not
  !x;         // returns --> false, converts to Boolean and negates the operand
  //typeof
  typeof(x);  // returns --> "number", returns a string of the operand's datatype


   /**
  * *************
  * *************
  * 6. TERNARY
  * The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
  * a condition followed by a question mark (?), then an expression to execute if the condition
  * is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
  * *************
  * *************
  * 
  */


    function passBootcamp(didHomework) { // if the argument that is passed in resolves to true or false
        return (didHomework ? "You pass the exam!" : "You fail the exam."); // ternary operates much like an if / else statement
      }
      
      console.log(passBootcamp(1 + 1 === 2));  // expected output --> "You pass the exam!"
      
      console.log(passBootcamp(false));        // expected output --> "You fail the exam."
      
      console.log(passBootcamp(null));         // expected output --> "You fail the exam."