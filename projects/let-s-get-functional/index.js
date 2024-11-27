#!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**  * THERE IS NO INDEX.HTML TO preview / view tests
 * 
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
 *      In terminal type "cd .."
 * 
 * then the directory changes to your name, then paste and run the code below (no extra spaces /asteriscs)
 * 
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.

// WHAT YOU ARE TRYING TO DO HERE IS USE THE FUNCTIONS LIBRARY to accomplish the tasks below
//  _.Map , Filter, Reduce, Each, Index etc.
*/

var maleCount = function(array) {
    let males = _.filter(array, (customer) => customer.gender === "male");
return males.length;
};

var femaleCount = function(array){
    // assign females the value of the reduce method with the following anonymous func
    let females = _.reduce(array, function(seed, customer){
        // if the current element's gender is female
        if(customer.gender ==="female"){
            // increment the seed
            seed++;
        }
        // this is the return statement FOR THE CALLBACK INSIDE REDUCE
        return seed;
    // cryptically this is the initial value for the seed. It's down here because it's the third
    // argument for reduce, after the func, hence after curly braces
    }, 0);
    // console.log(females);
    return females;
};

// console.log(femaleCount(customers));

var oldestCustomer = function(array){
    let oldestName = "";
    let oldestAge = 0;
    // let oldestIndex = 0;

    oldestName = _.reduce(array, function(seed, customer){ 
        if (customer.age > oldestAge){
            oldestAge = customer.age;
            seed = customer.name;
        }
        return seed;
    }, "");
    return oldestName;
};

// this needs sommme kind of comparative logic, each against the prev...

// take the 0 index age value and add it to the accumulator...call it oldest

// also record the index of oldest... (or just assign oldest as the object that is currently oldest?)

// compare the age value each time, just don't record over the oldest ones, don't confuse oldest and current.

var youngestCustomer = function(array){
    let youngestName = "";
    let youngestAge = 100000;

    youngestName = _.reduce(array, function(seed, customer){ 
        if (customer.age < youngestAge){
            youngestAge = customer.age;
            seed = customer.name;
        }
        return seed;
    }, "");
    return youngestName;
};;

var averageBalance = function(array){
    let divisor = array.length;
    let sum = 0;
    // let average = 0;
    
    sum = _.reduce(array, function(seed, customer){
        // weird syntax here between chained methods and the regular expression
        // the statement resolves the string method in parentheses before the outer
        // number and finally applying it to the seed value.
        return seed += Number(customer.balance.replace(/[$,]/g, ""));
    }, 0);

    let average = sum / divisor;
    return average;
    //  definite reduce problem, and definite seed problem because it generates new data

    // go through arrays and accumulate the sum

    // needs to drop leading dollar sign maybe and convert string to num
    // somewhere in here
    /*
    let str = "$3,227.53";
    let newStr = str.replace(/[$,]/g, "");

    console.log(newStr); 
    console.log(Number(newStr));
    */

    // bring the sum out and divide by array length

};



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
