"use strict";

// favorite color exercise

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");

alert("Great, " + favoriteColor + " is my favorite color too!");

// previous lesson exercise

// You have rented some movies for your kids:
// The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

alert("Movies for your kids");

var littleMermaid = Number(prompt("The Little Mermaid number of days"));
var brotherBear = Number(prompt("Brother Bear number of days"));
var hercules = Number(prompt("Hercules number of days"));

var pricePerDay = 3;

var priceTotal = pricePerDay * (littleMermaid + brotherBear + hercules);

alert("Total price is $" + priceTotal);

// Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

alert("Working as a contractor for 3 companies");

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

var googleHours = Number(prompt("Hours worked for Google"));
var amazonHours = Number(prompt("Hours worked for Amazon"));
var facebookHours = Number(prompt("Hours worked for Facebook"));

var payTotal = ((googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours));

alert("Total pay is $" + payTotal);

// A student can be enrolled in a class
// only if the class is not full and the class schedule does not conflict with her current schedule.

alert("Class enrollment");

var classFull = prompt("Is class full");

var studentSchedule = prompt("Does class conflict with current schedule?");

var canEnroll = (classFull && studentSchedule) == "no";

alert("Can student enroll? " + canEnroll);

// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

alert("Product offer");

var numberOfItems = Number(prompt("Number of items"));

var expired = prompt("Is offer expired?");

var premiumMember = prompt("Is person a Premium Member?");

var canApply = ((numberOfItems > 2) && (expired = "no")) || ((expired = "no") && (premiumMember = "yes"));

alert("Can Offer be applied? " + canApply);