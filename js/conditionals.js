"use strict";

(function(){

/* ########################################################################## */
// Notes examples

//var weather = Math.floor((Math.random() * 3) + 1);

//var  weather = 49;

// if (weather > 70 || weather === 70 ) {
//     console.log("bring sunglasses");
// } else if (weather > 50 && weather < 70 ){
//     console.log("bring a sweater");
// } else {
//     console.log("stay home");
//     }
//

// var pass = "theSecretPassword";
//
// var userGuess = prompt("guess the password");
//
// if (userGuess === pass) {
//     alert("you are a winner");
// }else {
//    alert("try again next time");
// }

// var message;
// var success = confirm("is this successful?");
//
// if (success) {
//     message = "Operation successful.";
// } else {
//     message = "Oops, something went wrong";
// }
//
//     console.log("message: ", message);

//*** Can be re-written as:

// var message = (success) ? "Operation successful." : "Opps, something whent wrong.";

    // var pizzaPreference = prompt("What kind of pizza do you like?");
    //
    // switch(pizzaPreference) {
    //     case "pineapple and hot sauce":
    //         alert("What a coincidence, that's my favorite!");
    //         break;
    //     case "cheese":
    //         alert("Just plain cheese? Okay...");
    //         break;
    //     default:
    //         alert(pizzaPreference + " isn't my favorite, but let's order some!");
    //         break;
    // }


// var weather = "cold" + " ";
// function checkWeather(weather){
//     if (weather == "sunny"){
//         return "bring sunnies";
//     }else if (weather == "chilly"){
//         return "bring sweater";
//     }else {
//         return "wear whatever you want";
//     }
// }
//
//     console.log(checkWeather(weather));

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(colorString){
//     if (colorString === "blue") {
//         alert("blue is the color of the sky");
//     } else if (colorString === "red") {
//         alert("Strawberries are red");
//     } else {
//         alert("I don't know anything about that color");
//     }
// };

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     console.log(randomColor);
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// var analyzeColor = prompt("What is your favorite color");
//
// switch (analyzeColor) {
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "red":
//         alert("Strawberries are red");
//         break;
//     default:
//         alert("I don't know anything about that color");
//
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var favoriteColor = prompt("What is your favorite color?");
// analyzeColor(favoriteColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal (luckyNumber, totalAmount) {
//     if (luckyNumber == 1) {
//         return totalAmount - (totalAmount * .10);
//     }else if (luckyNumber == 2) {
//         return totalAmount - (totalAmount * .25);
//     }else if (luckyNumber == 3) {
//         return totalAmount - (totalAmount * .35);
//     }else if (luckyNumber == 4) {
//         return totalAmount - (totalAmount * .50);
//     }else if (luckyNumber == 5) {
//         return totalAmount - (totalAmount * 1);
//     }else
//         return totalAmount;
// }

//var newPrice = calculateTotal(5,100);
//    console.log("Your total is: $" + newPrice);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var totalBill = prompt("What is your bill total?");
//
// alert("Your lucky number is: " + luckyNumber + " Price before discount: $" + totalBill +
//     " Price after discount: $" + (calculateTotal(luckyNumber, totalBill)));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var confirmNumber = confirm("Would you like to enter a number?");

if (confirmNumber === true) {

    var userNumber = Number(prompt("Enter a number"));

        if (isNaN(userNumber)){
                alert("That is not a number");
        } else {

            ///whether the number is even or odd
            function evenOrOdd(num){
                if (num === 0) {
                    alert(userNumber + " is not even or odd");
                } else if (num % 2 === 0){
                    alert(userNumber + " is an even number");
                } else {
                    alert(userNumber + " is an odd number");
                }

            }

            evenOrOdd(userNumber);

            // what the number plus 100 is
            alert(userNumber + " + 100 = " + (userNumber + 100));

            //if the number is negative or positive
            if (userNumber < 0 ) {
                alert(userNumber + " is a negative number");
            } else if (userNumber > 0) {
                alert(userNumber + " is a positive number");
            } else {
                    alert(userNumber + " is not negative or positive");
            }
        }
}else
    alert("action cancelled");


})()