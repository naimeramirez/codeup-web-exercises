"use strict"; // it reads js

console.log("hey this is my js file from js-with-html");

var mySchool = "codeup";

console.log(mySchool);

console.log("mySchool is awesome!!");

console.log(mySchool, "is awesome");

console.log(mySchool + " is amazing!");

alert("Hey! this is an Alert");

var likesPizza = confirm("Do you like pizza");
// confirm messages return boolean, so it's a value we can store and use again
console.log(likesPizza);

var bestToppings = prompt(message:"what toppings do you like on your pizza?");
// return a string
console.log(bestToppings);

var person1 = prompt(message: "what's your name?"); //string
var personAge = Number(prompt(message: "what's your age?")); //number
var clubAgeLimit = 21;
var canGetIn = false;

console.log(personAge);

canGetIn = personAge > clubAgeLimit;
console.log("can " + person1 + " get into the club: ", canGetIn);