(function () {
    "use strict";
//El Paso, TX 31.76550444474006, -106.4925112493456

// current weather
    $.get("https://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        q: "El Paso, US",
        units: "imperial"
    }).done(function (weather) {
        // console.log(weather);
        $('#currentCity').html(`${weather.name}`);
        $('#currentTemp').html(`Current Temperature: ${weather.main.temp}°F`);
        $('#currentWeatherIcon').html(`<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">`);
        $('#currentWeather').html(`Description: ${weather.weather[0].description}`);
        $('#currentHumidity').html(`Humidity: ${weather.main.humidity}%`);
        $('#currentWind').html(`Wind Speed: ${weather.wind.speed} mph`);
        $('#currentPressure').html(`Pressure: ${weather.main.pressure} hPa`);
    });

//5 day forecast
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: "El Paso, US",
        units: "imperial"
    }).done(function (weather) {
        // console.log(weather);

        function forecastDay(day) {
            var html = `<div class="col">`;
            html += `<div class="card">`;
            html += `<div class="card-header">${day.dt_txt.slice(0,9)}</div>`;
            html += `<div class="card-body">`;
            html += `<p class="card-title">${day.main.temp_min}°F / ${day.main.temp_max}°F</p>`;
            html += `<img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png">`;
            html += `<p class="card-text">${day.weather[0].description}</p>`;
            html += `<p class="card-text">Humidity: ${day.main.humidity}%</p>`;
            html += `<p class="card-text">Wind: ${day.wind.speed} mph</p>`;
            html += `<p class="card-text">Pressure: ${day.main.pressure} hPa</p>`;
            html += `</div>`;
            html += `</div>`;
            html += `</div>`;
            return html;
        }

        function forecastDays(days) {
            var html = '';
            for (var i = 0; i < days.length; i += 8) {
                // console.log(days[i]);
                html += forecastDay(days[i]);
            }
            return html;
        }

        $('#forecastCards').html(forecastDays(weather.list));

        console.log(weather.list);

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