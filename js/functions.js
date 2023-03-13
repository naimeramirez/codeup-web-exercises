"use strict";

(function (){


// Write a function that accepts and multiplies 3 numbers and alerts the browser with the result

function numMultiply(numOne, numTwo, numThree){
    return numOne * numTwo * numThree;
}

alert(numMultiply(2, 2, 2));

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello (name) {
    return ("Hello, " + name);
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello(prompt("What is your name?"));

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Naime";

console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num){
    console.log(num);
    return num == 2;
}

console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercentage, billTotal){
    return billTotal * tipPercentage;
}

    console.log(calculateTip("0.20", "20"));
    console.log(calculateTip("0.25", "25.50"));
    console.log(calculateTip("0.15", "33.42"));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var userTotal = Number(prompt("Bill Total"));
var userPercentageInput = Number("0." + prompt("Tip Percentage"));
var userPercentage = userPercentageInput.toFixed(2);

    console.log("Bill Total $" + userTotal);
    console.log("Tip Percentage " + userPercentage);
    console.log(calculateTip(userTotal, userPercentage));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(price, discount){

    var priceConvert = Number(price);
    var discountConvert = Number(discount);
    var discountDecimal = discountConvert / 100;
    var discountAmount = priceConvert * discountDecimal;
    return priceConvert - discountAmount;
}

    console.log(applyDiscount("100", "20"));
    console.log(applyDiscount("45.99", "12"));

var userPrice = prompt("What is the price?");
var userDiscountInput =prompt("Discount Percentage");

    console.log("Original Price $" + userPrice);
    console.log("Discount = " + userDiscountInput + "%");
    console.log("Price after Discount: $" + applyDiscount(userPrice, userDiscountInput));

})();