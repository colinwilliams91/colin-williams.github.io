////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start < end ? 1 : -1) {
  let output = [];
  
  if (start === end){
    return output;
  }
  if (step > 0) {
    for (let i = start; i <= end; i += step) output.push(i);
    } else {
    for (let i = start; i >= end; i += step) output.push(i);
    }
    return output;
  } 

// *** WHY DOES THIS BREAK INDEX.HTML ??? ***
//   if (start === end){
//     return output;
//   } else if (end > 0){
//     for (i = start; i <= end; i += step){
//       output.push(i);
//     }
//   } else if (end < 0){
//     for (i = start; i >= end; i -+ step){
//     output.push(i);
//     }
//   }
//   return output;
// }

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, output=0) {
  if (array.length === 0){
    return output;
  } else if (array.length === 1){
    output += array[0];
  } else {
    output += (array[0]);
  }
  return sum(array.slice(1), output);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--){
    output.push(array[i]);
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }

  //return array.reverse();
}

// [1, 2, 3, 4, 5]
// 
/**
 * old === array[i] // --> 2
 * 2 === 5 - 1 // --> 4
 * 4 === old
 */


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];
  // iterate over list
  for (let i = list; i; i = i.rest){
    // push values from list to array
    array.push(i.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  // returns object to top of list
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
    if (!list){
      return undefined;
    } else if (number === 0){
      return list.value;
    } else {
      return nth(list.rest, number - 1);
    }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y){
  // determine if x and y are BOTH not objects
  if (typeof x !== "object" && typeof y !== "object"){
    return x === y;
  }
  // determine if either x or y is not an object
  if (typeof x !== "object" || typeof y !== "object"){
    return false;
  }
  // create array of keys for x
  let xKeys = Object.keys(x); // ["a", "b"]
  // create array of keys for y
  let yKeys = Object.keys(y); // ["a", "b"]
  // determine if the length of the arrays is not equal
  if (xKeys.length !== yKeys.length){
    return false;
  }
  // iterate through one of the array of keys
  for (let i = 0; i < xKeys.length; i++){
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])){
      return false;
    }
  }
  return true;

  //return JSON.stringify(x) === JSON.stringify(y) ? true : false;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
