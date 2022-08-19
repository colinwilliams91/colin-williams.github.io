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

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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