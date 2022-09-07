/**
 * *************
 * *** LOOPS ***
 * *************
 * 
 * 0: Loops repeat an action some number of times. (Note that it's possible that number could be zero!)
 * Various loop mechanisms offer different ways to determine the start and end points of the loop.
 * There are various situations that are more easily served by one type of loop over the others.
 * Loops can be used to iterate over plural data. Recursion effectively acts as a loop as it will 
 * continue until a condition is met. 
 * 
 */

let myArr = [0, 1, 2, 3, 4, 5];

// ***********
// *** FOR ***
// ***********
for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}

/**
 * A for-loop acts as a control flow statment which will iterate until a specific ondition is met. 
 * Inside the loop there is some instruction that is executed for every iteration. 
 * We will establish three things inside parenthesis following the "for" keyword:
 * 
 * for ( initialValue; stopCondition; change ){
 *     // --> followed by code block
 * }
 * 
 * The initialValue is what we will start at, stopCondition is when our looping variable knows to stop,
 * and the change is what will happen to our looping variable after each iteration.
 */

for (let i = myArr.length - 1; i >= 0; i--){
    console.log(myArr[i]);
}

/**
 * To reverse our loop we just switch the initialValue and the stopCondition (more-or-less).
 * (myArr.length) will be the total number of values inside the array (- 1 ) will give us the index
 * of the final value. StopCondition has to be (>=) 0 if we want it to stop AT 0, otherwise it will stop
 * at 1 with (>). Finally, our change will be decrement (--) to approach 0 instead of increment (++).
 */


// *************
// *** WHILE ***
// *************
let i = 5;              // first initialize a value
while(i < 10){          // if i is less than the number 10, execute the code in the block 
    console.log(i);     // this console logs the current value of i
    i++;                // and this increments i, eventually hitting the number 10 and exiting the loop
}

/**
 * A "while" loop achieves a similar effect to a "for" loop. However its syntax is different:
 * 
 * : initialize looping variable
 * : while keyword(stopCondition){
 * : codeblock // {}
 * : change to loopingVariable
 * }
 * A while statement executes its statements as long as a specified condition evaluates to true.
 * It is similar to a repeating "if" statement.
 */

let student = {
    name: "Colin",
    age: 31,
    hobbies: ["video games", "coding", "guitar"]
};

// ****************
// *** FOR...IN ***
// ****************
for (let key in student){ // syntax for...in
    console.log(key); // prints --> name \n age \n hobbies
}

/**
 * The for...in statement iterates a specified variable over all the enumerable properties of an object.
 * For each distinct property, JavaScript executes the specified statements. This will continue until all 
 * properties of an object have been iterated over. 
 */