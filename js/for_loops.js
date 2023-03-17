"use strict";

(function () {

//Create a function named showMultiplicationTable that accepts a number and
//console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var j = i * num;
        console.log(num + " x " + i + " = " + j);
    }
}
showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
//and output to the console whether each number is odd or even.
for (var i = 0; i < 10; i++) {
    var random = (Math.floor(Math.random() * 200) + 20);

    if (random % 2 === 0) {
        console.log(random + " is even");
    } else {
        console.log(random + " is odd")
    }
}

//Create a for loop that uses console.log to create the output shown below.
for (var i = 1; i < 10; i++) {
    var str = "";
    //nested loop
    for (var j = 0; j < i; j++) {
        str = str + i;
    }
    console.log(str);
}

for(let i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}

//Create a for loop that uses console.log to create the output shown below.
for (var i = 100; i >= 5; i-=5) {
    console.log(i);
}

})()