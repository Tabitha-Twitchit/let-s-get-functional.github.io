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



var firstLetterCount = function(array, char){
    let total = 0;

    total  = _.reduce(array, function(seed, customer){
        if(customer.name[0].toLowerCase() === char.toLowerCase()){
            seed++;
        }
        return seed;
    }, 0);
    return total;
};

// the number as output indicates it still needs an accumulator

// how to check correct char[0] or charAt? Also case insensitive

// you could add all with the letter into an array and return the array length

// the use of another input, almost seems like it wants somethings besides reduce


var friendFirstLetterCount = function(array, givenName, char){
    // in the streamlined version we assign found to be the object corresponding 
    // to the given name. 
    let found = array.find(customer => customer.name === givenName);
    
    // if this is Truthy, execute the logic...
    if(found) {
        // return a the result of a reduce function with this anonymous callback
        // the callback refs the found obj's friends array, abd provides a usual
        // accumulator var (count), a current friend to check, and a seed of 0 
        return _.reduce(found.friends, (count, friend) => {
            if (friend.name[0].toLowerCase() === char.toLowerCase()){
                count++;
            }
            return count;
        }, 0);
    }
    // A BIG DIF HERE is that we only return this 0 if the other logic isn't met
    // e.g. no found customer, or no friends of the given letter.
    return 0;

    // leaving original, more verbos method for ref:
    // total = _.reduce(found.friends, function(seed, currentFriend){
    //     if(currentFriend.name[0].toLowerCase() === char.toLowerCase()){
    //       seed++;
    //     }
    //     return seed;
    // }, 0);
    // return total;
};

// find a given object from the array based on a property value

// access another property on that same object

// iterate through all values of that property

// named customer
    // >friends list
        // > each friend  

// OK so the given customer is a name so I think we need to first find
// the object with that name then call reduce...


var friendsCount = function(array, friendName){
    let outputArr = [];
    
    // hrm wondering if we could actually just for loop the outer loop
    // THEN call a higher function on each to search the friends
    for(let i = 0; i < array.length; i++){
        if (_.some(array[i].friends, function(currentFriend){
            return currentFriend.name.toLowerCase() === friendName.toLowerCase();
            })) {
                outputArr.push(array[i].name);
            }
    // console.log(array[i].name);
    }
    console.log(outputArr);
    console.log(Array.isArray(outputArr));
    return outputArr;
};

friendsCount(customers, "Olga Newton");
// If a customer has X friend...
    // Push customer's name into new array
        // return array

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
