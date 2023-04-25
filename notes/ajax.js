//--------------------------------------------
// GOOD TO REMEMBER:

// template literals:
var mySchool = 'codeup';
var templateLiteral = `I will graduate from ${mySchool} in 2023.`
var concatenationSentence = 'I will graduate from ' + mySchool + ' in 2023.';

// accessing nested items in an object:
var cerberus = {
    numStudents: 20,
    location: 'remote',
    gradYear: 2023,
    program: 'webdev',
    instructors: ['lola', 'doc rob', 'kenneth', 'laura'],
    topicsCovered: {
        html: ['elements', 'tags', 'attributes'],
        css: ['bootstrap', 'flexbox', 'media queries']
    }
}

var currentInstructor = cerberus.instructors[3]; // 'laura'


// looping through arrays && looping through arrays nested in objects
var arrayOfCssTopics = cerberus.topicsCovered.css;
// or
cerberus.topicsCovered.css.forEach(function(topic){
    console.log(`I can't believe I learned about ${topic} during css`)
})

// chaining methods
console.log($('ul').children().first().next().next().next().html()); // list item three


// callback functions

function handleUserInput(){
    return Number(prompt("What's your favorite digit?"));
}

$('#doubleBtn').click(function(){
    alert(handleUserInput() * 2);
})



//--------------------------------------------
// 📌 What is AJAX

// 📌 What is XML

// 📌 What is JSON

// 📌 What's a client

// 📌 What's a server

// 📌 What's a request

// 📌 Types of requests

// 📌 What's a response
//--------------------------------------------


//  📌 AJAX REQUESTS USING JQUERY