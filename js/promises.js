(function (){
    "use strict";

    const userName = 'naimeramirez';

    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_API_TOKEN}})
        .then(response => response.json())
        .then(data => console.log((data)));


})();