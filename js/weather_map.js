(function () {
    "use strict";
//El Paso, TX 31.76550444474006, -106.4925112493456

// current weather
    $.get("https://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        q: "El Paso, US",
        units: "imperial"
    }).done(function (weather) {
        console.log(weather);

        $('#currentTemp').html(`<p>${weather.main.temp}</p>`)
    })

//5 day forecast
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: "El Paso, US",
        units: "imperial"
    }).done(function (weather) {
        console.log(weather);

        $('#forecastTemp').html(`${weather.list[0].main.temp}`)
    })


    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-106.2772, 31.7031], // starting position [lng, lat]
        zoom: 10, // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());

})();