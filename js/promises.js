(function (){
    "use strict";

    const userName = 'naimeramirez';

    let commits = [];

    function getData(user) {
        return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': GITHUB_API_TOKEN}})
            .then(response => response.json())
            .then(data => {
                data.forEach(pushEvent => {
                    console.log(pushEvent);
                    if (pushEvent.type === 'PushEvent'){
                        commits.push(pushEvent.created_at);
                    }
                })
            });
    };

    getData(userName);
    console.log(commits);


})();