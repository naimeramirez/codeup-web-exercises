(function (){
    "use strict";

    const userName = 'naimeramirez';

    function getData(user) {
        return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': GITHUB_API_TOKEN}})
            .then(response => response.json())
            .then(data => {
                console.log(data[0].created_at);
            });
    };

    getData(userName);

    function wait(x) {
        return new Promise((resolve) => {
            setTimeout(() => {
                    resolve('Here is your data: ...');
            }, x);
        });
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



})();