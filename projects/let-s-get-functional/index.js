// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./colin-williams.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array){
    // use _.filter() to return new array of male customers
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    }); // => [<male>, <male>, <male>]
    // return the length of the array of male customers
    return males.length;
};

var femaleCount = function(array){
    // use _.reduce() to filter out a number of female customers
    return _.reduce(customers, function(accumulator, element, index){
        if (element.gender === 'female'){
            return accumulator += 1;
        }
        return accumulator;
    }, 0);
    // return a number === female customers
    
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return current;
        }
        return accumulator;
    });
    return oldest.name;
}

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if (current.age < accumulator.age){
            return current;
        }
        return accumulator;
    });
    return youngest.name;
}

var averageBalance = function(array){
    
    let money = _.map(array, function(customer){
        return parseFloat(customer.balance.substring(1).replace(",", ""));
    });

    let totalBalance = _.reduce(money, function(accumulator, current){
        return accumulator += current
    });

    return totalBalance / array.length;

}

var firstLetterCount = function(array, letter){
    let output = _.reduce(array, function(accumulator, current){
        if (current.name[0] === letter.toUpperCase()){
            accumulator += 1;
        } 
        return accumulator;
    }, 0);
    return output;
};

var friendFirstLetterCount = function(array, customer, letter){

    for (let i = 0; i < array.length; i++){
        if (array[i].name === customer){
            return firstLetterCount(array[i].friends, letter);
        }
    }
}

// SOLVED with REDUCE
// var friendFirstLetterCount = function(array, customer, letter){
//     var friendly = _.reduce(array, function(acc, current){
//          // determine if the current item matches the input customer
//             if(current.name === customer){
//                 // iterate through current friends property
//               for(var j = 0; j < current.friends.length; j++){
//                 //determine if current friends names first letter uppercased matches the given letter uppercased
//                 if(current.friends[j].name.charAt(0).toUpperCase() === letter.toUpperCase()){
//                     //add and assign accumulator to 1
//                     acc += 1;
//                 }

//                }    
//             }//return accumulator
//              return acc;
//     }, 0);//return my friendly function
//     return friendly;
// };



// SOLVED with _.FILTER && _.MAP
var friendsCount = function(array, name){
    // use _.filter and _.map
    let filtered = _.filter(array, function(customer){
        for (let i = 0; i < customer.friends.length; i++){
            if (customer.friends[i].name === name){
                return true;
            }
        } return false;
    });
    let output = _.map(filtered, function(customer){
        return customer.name;
    });
    return output;
}

//SOLVED with REDUCE
// var friendsCount = function(arr, name){
//     var friendList = _.reduce(arr, function(acc, current){
//         //iterating through my current friends property
//             for(var i = 0; i < current.friends.length; i++){
//                 //determining if my current name has a given name in its friends list
//                 if(current.friends[i].name === name){
//                     //if so it will push the current name of the customer into my accumulator array
//                     acc.push(current.name);
//                 }
               
//             } //return accumulator array
//             return acc;
//     },[]); //return my friendList function
//     return friendList;
// };

// SOLVED with NESTED FOR LOOPS
// var friendsCount = function(array, name){
//     let customerNames = [];
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; array[i].friends.length; j++){
//             if (array[i].friends[j] === name){
//                 customerNames.push(array[i].name);
//             }
//         }
//     }
//     return customerNames;
// }



var topThreeTags = function(array){
    let tagHolder = [];
    for (let i = 0; i < array.length; i++){
        tagHolder.push(array[i].tags)
    }
    let flatArray = [].concat(...tagHolder);

    let reduced = _.reduce(flatArray, function(accumulator, current){
        return accumulator[current] ? ++accumulator[current] : accumulator[current] = 1, accumulator;
    }, {});
    //console.log(reduced);

    let objArray = Object.entries(reduced);
    //console.log(objArray);

    let sorted = objArray.sort(function (a, b){
        return b[1] - a[1]; // a[1] - b[1] with .reverse()
    });//.reverse();
    //console.log(sorted);

    let finalArr = [];
    for (let i = 0; i < 3; i++){
        finalArr.push(sorted[i][0]);
    }
    return finalArr;
    console.log(finalArr);
}

// reduce iterates through an array to accumulate and return a value
// the callback function determines how we accumulate or how we make the accumulator and current interact
// what we define in our reduce invocation


var genderCount = function(array, output={}){
      // base
  if (array.length === 0){
    // return ??
  return output;

  }
  // recursion
  
  if (output[array[0].gender]){
      output[array[0].gender] += 1;
  } else {
    output[array[0].gender] = 1;
  }
  return genderCount(array.slice(1), output);
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
