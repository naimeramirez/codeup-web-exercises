'use strict';

(function(){



// functions
// - code to be reusable
// - keep our code organized
// - speficity
// -task based

// alert("hello world");

// defining functions:

    var nameOfVar = "this is just a string"

// keys: function, (), (parameters), {}, ;

// defining a function doesn't mean that it's getting executed, we're simply setting it up
    function nameOfTheFunction(){
        // code lives inside of curly brackets
        // scope
        // block of code
        // this code is what will be executed
    };

// how to execute the function:
// callTheNameOfTheFnWeWantToRun();

// CREATE A FUNCTION THAT ALERTS A WELCOME MESSAGE


// defining a function:
    function handleWelcomeMessage(){
        // what do we want to be executed?
        alert("welcome to the website!");
    }

// execute the function:
// handleWelcomeMessage();

// CREATE A FUNCTION THAT ADDS 2 NUMBERS
// // define the function
// // add 2 numbers inside of the fn
// // create variables that hold 2 numbers
//

    function addTwoNums(){
        // return keyword:
        // - return an output from the function
        // - lives at the END of the function block
        // - exit the block of code, once something is returned
        return 2+6; // 8
    }

// console.log(addTwoNums()); // logging the result of addTwoNums being executed ... to the console


// PARAMETERS/ARGUMENTS
// CREATE A FUNCTION THAT ACCEPTS 2 NUMBERS AND RETURNS THE SUM OF THOSE TWO NUMBERS
// alt/option + command + spacebar
// ✅ 1. create a function
// ✅ 2. accept 2 numbers
// ✅ 3. add the two numbers
// ✅ 4. return sum
// ✅ 5. execute the function
// ✅ 6. pass in the actual values
// ✅ 7. console log our results

// function returnSum(numOne, numTwo){ // parameters are just placeholders for potential values/data
//     console.log("numOne: ", numOne)
//     console.log("numTwo: ", numTwo)
//     return numOne + numTwo;
// };
//
// // execute:
// console.log(returnSum(13, 90)); // arguments are the actual values


// Write a function that accepts and multiplies 3 numbers and alerts the browser with the result

// 1. define a function
// 2. accepts 3 parameters
// 3. multiply the 3 numbers together
//4.  alert the result of #3
// 5. execute the function & pass in 3 numbers as the arguments

// this is an example of a VOID function -> meaning nothing gets 'returned' / no output

//1 - 2
// function multiply(numOne, numTwo, numThree){
//     // 3-4:
//    var result =  numOne * numTwo * numThree
//     alert("my result is: " + result);
// }
//
// // 5.
// console.log(multiply(12, 3, 17));

// EXAMPLES FROM CURRICULUM

// function increment(x) {
//     return x + 1;
// }



// var four = increment(3);
// var six = increment(increment(increment(3)));
//
// console.log(four) // 4
//
// console.log('six: ', six); // 6


// function increment(someNumber) {
//     return someNumber + 1; // 19
//     console.log('you will never see this.');
//     return someNumber + 2; // This will never run
// }
//
// increment(18);


//  anonymous

// var increment = function(x) {
//     return x + 1;
// };
//
// var two = increment(1);

// a peak into the future in using anon functions:

// var numbers = [2,4,6,8];
//
// numbers.forEach(function(num){
//     console.log(num += 5);
// })


// args & params examples:

// write a function that accepts the users input and alerts a welcome message with their name


// ✅write a function
// ✅ function accepts 1 parameter (usersName)
// ✅ alert("welcome" + usersName)
// prompt user for name and store name in variable
// execute the function


// function sayHello(userName){
//     console.log(userName);
//
//     alert("welcome, " + userName);
//
// }
//
// var nameInput = prompt("what\'s your name?");
//
// sayHello(nameInput);

// write a function that accepts a string and converts it to lower case
// 1. write a function
// 2. accept 1 parameter
// 3. convert param -> lowercase
// 4. return the result (after lowercased)
// 5. execute the function
//

// function convertToLower(param){
//     console.log('param: ', param);
//     var lowerCase = param.toLowerCase();
//     return lowerCase;
// }
//
// console.log(convertToLower("WELCOME TO CODEUP!!!"));
// console.log(convertToLower("and OVER AND OVER AGAIAN"));
// console.log(convertToLower("HeLLo WoRLD"));



// GLOBAL SCOPE

// declare a global variable
// var globalVar = "Look, I'm Global!";
//
// // define the sayHello function
// function sayHello() {
//     // globalVar is accessible here since the sayHello function scope is a sub-scope of the global scope
//     alert(globalVar);
// }
//
// sayHello();

// var globalVar = "Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     var strawberry = "strawberry"; // declare a local variable
//
//     return strawberry;
//     // alert("line 198 " + strawberry); // localVar is accessible here
//     // alert(globalVar); // globalVar is accessible here
// }
//
// // function localScopeCheck(){
// //     console.log("line 203: " + strawberry);
// // }
//
// var resultOfScopeExample = scopeExample();
// console.log(resultOfScopeExample);
// // localScopeCheck();
// // alert(" line 207: " + strawberry); // localVar is NOT accessible here and this will produce an error
//
//
//
//
// var favoriteVeggie = "spinach";
//
// function favoriteFoods(veggie, junk){
//     var favoriteFruit = "mango";
//
//     console.log("my fave foods are: " + favoriteFruit + ',' + favoriteVeggie + ',' + veggie + ',' + junk);
//
//
// }
//
// function favoriteJunkFood(){
//
//     var fries = 'mcDonald\'s'
//
//     return fries;
// }
//
// var bestFriesInTown = favoriteJunkFood()
//
// favoriteFoods(favoriteVeggie, bestFriesInTown);


    alert('welcome to paradise!');

// IIFE
// define a function and immediately invoke (i.e. call) it
    (function () {
        var iffeVar = "I'm local to the IIFE.";
        alert(iffeVar);
    })();

// alert(iffeVar); // undefined























// execute functions

// syntax

// parameters vs arguments - placeholders vs. actual values

// questions:
// - go over storing functions as variables with example
// - defining functions, examples
// IIFE with examples
// - go over curriculum examples

})()