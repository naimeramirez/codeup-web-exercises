"use strict";

(function (){
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue
// prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers between 1 and 50,
//except for the number the user entered.

var num = prompt('input an odd number between 1 and 50');

for (var i = 1; i < 50; i += 2) {

    if ((num % 2 !== 0) && (num >= 1) && (num < 50)) {
        continue;
    }
    console.log("Here is an odd number: " + i);

    if (i === num) {
        console.log("your number");
        continue;
    }
}


})()