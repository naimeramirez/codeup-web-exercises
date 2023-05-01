(function () {
    "use strict";
    //El Paso, TX 31.76165, -106.48552
    var elPaso = {
        lon: -106.48552,
        lat: 31.76165
    };

// current weather
    function currentWeather(lat, lon) {
        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lon,
            units: "imperial"
        }).done(function (weather) {
            // console.log(weather);
            $('#currentCity').html(`${weather.name}`);
            $('#currentTemp').html(`Current Temperature: ${weather.main.temp.toString().slice(0, 2)}°F`);
            $('#currentWeatherIcon').html(`<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">`);
            $('#currentWeather').html(`${weather.weather[0].description}`);
            $('#currentHumidity').html(`Humidity: ${weather.main.humidity}%`);
            $('#currentWind').html(`Wind: ${weather.wind.speed} mph`);
            $('#currentPressure').html(`Pressure: ${weather.main.pressure} hPa`);
        });
    }

//5 day forecast
    function forecastDay(day) {
        var html = `<div class="col">`;
        html += `<div class="card">`;
        html += `<div class="card-header">${day.dt_txt.slice(0, 10)}</div>`;
        html += `<div class="card-body">`;
        html += `<p class="card-title fw-bold">${day.main.temp_min.toString().slice(0, 2)}°F / ${day.main.temp_max.toString().slice(0, 2)}°F</p>`;
        html += `<img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png">`;
        html += `<p class="card-text fw-bold">${day.weather[0].description}</p>`;
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

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: "El Paso, US",
        units: "imperial"
    }).done(function (weather) {
        // console.log(weather);
        // console.log(weather.list);
        $('#forecastCards').html(forecastDays(weather.list));
    });

// mapbox
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-106.48, 31.76], // starting position [lng, lat]
        zoom: 10, // starting zoom
    });
// draggable marker
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(elPaso)
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        $('#coordinates').css('display', 'block');
        $('#coordinates').html(`Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`);
        var longitude = lngLat.lng;
        var latitude = lngLat.lat;
        return longitude, latitude;
    }

    marker.on('dragend', onDragEnd);

    map.addControl(new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    }));


    currentWeather(elPaso.lat, elPaso.lon);


})();