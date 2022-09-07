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


// Operator	 Description
//   +	    // Addition
//   -	    // Subtraction
//   *	    // Multiplication
//   **	    // Exponentiation (ES6)
//   /	    // Division
//   %	    // Modulus (Division Remainder)
//   ++	    // Increment
//   --	    // Decrement


 /**
  * *************
  * *************
  * 2. COMPARISON
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