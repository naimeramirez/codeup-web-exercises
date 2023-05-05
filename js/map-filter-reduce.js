(function (){
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

//    Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    const languagesX3 = users.filter(users => users.languages.length >= 3);
    console.log(languagesX3);

    // var threeLanguages = users.filter(function (person) {
    //     return person.languages.length > 2;
    // })
    // let threeLangs = users.filter((user)=> user.languages.length > 2);

//    Use .map to create an array of strings where each element is a user's email address
    const emailAddress = users.map(users => users.email);
    console.log(emailAddress);

    // var useEmail = users.map(function (person) {
    //     return person.email;
    // });
    // const filteredEmails = user.map(user=> {
    //     return user.email;
    // });

//    Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    const years = users.reduce((total, person) => {
        return (total + person.yearsOfExperience);
    }, 0);
    console.log(years);

    // var totalExp = users.reduce(function(total, person){
    //     return total + person.yearsOfExperience;
    // }, 0);

    const averageYears = years / users.length;
    console.log(averageYears);

    // const totalExp = users.reduce((total,userYoe)=> {
    //     return total + userYoe.yearsOfExperience;
    // },0);
    //
    // const averageExp = totalExp / users.length;

//    Use .reduce to get the longest email from the list of users.
//     const longestEmail = emailAddress.reduce((longest, current) => {
//         if (current.length > longest) {
//             longest = current;
//         }
//     }, 0);


    var longestEmail = users.reduce(function (longEmail, person){
        if (person.email.length > longEmail.length) {
            longEmail = person.email;
        }
        return longEmail;
    }, "");
        console.log(longestEmail);

    // const longestEmail = users.reduce((email, usersEmail)=> (email.length > usersEmail.email.length) ? email : usersEmail.email, "");
    // console.log(longestEmail);

//    Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//     const instructors = users.reduce((names, person) => {
//         return person.name;
//     }, "");
//     console.log("Your instructors are: " + instructors);

    const instructors = users.reduce(function (names, person) {
        if (names === "") {
            names = "Your instructors are: " + person.name;
        } else if (names !== "") {
            names += ", " + person.name;
        }
        return names;
    }, "");
    console.log(instructors);

//    Use .reduce to get the unique list of languages from the list of users.

    // const nameString = users.reduce((nString, usersName)=> {
    //     return nString + (usersName.name + " ");
    // },"Your instructors are: ");
    //
    // console.log(nameString);

})();