(function () {
    "use strict";
    //El Paso, TX 31.76165, -106.48552
    var elPaso = {
        lng: -106.48552,
        lat: 31.76165
    };

// current weather
    function currentWeather(lng, lat) {
        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (weather) {
            // console.log(weather);
            $('#current-city').html(`${weather.name}`);
            $('#current-temp').html(`Current Temperature: ${weather.main.temp.toString().slice(0, 2)}°F`);
            $('#current-icon').html(`<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">`);
            $('#current-weather').html(`${weather.weather[0].description}`);
            $('#current-humidity').html(`Humidity: ${weather.main.humidity}%`);
            $('#current-wind').html(`Wind: ${weather.wind.speed} mph`);
            $('#current-pressure').html(`Pressure: ${weather.main.pressure} hPa`);
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

    function forecastWeather(lng, lat) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (weather) {
            // console.log(weather);
            // console.log(weather.list);
            $('#forecast-cards').html(forecastDays(weather.list));
        })
    }

// mapbox
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-106.48, 31.76], // starting position [lng, lat]
        zoom: 15, // starting zoom
    });

// draggable marker
    const marker = new mapboxgl.Marker({
        draggable: true
    })

    function setMarker(cords) {
        marker.setLngLat(cords)
        marker.addTo(map);
        map.flyTo({
            center: cords,
            zoom: 15,
            essential: true
        })
    }

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        currentWeather(lngLat.lng, lngLat.lat);
        forecastWeather(lngLat.lng, lngLat.lat);
        map.flyTo({
            center: lngLat,
            zoom: 15,
            essential: true
        })
    }

    marker.on('dragend', onDragEnd);

    // city search

    var geocoder = new MapboxGeocoder({
        accessToken: MAPBOX_KEY,
        placeholder: "El Paso, TX",
        mapboxgl: mapboxgl
    })
    // map.addControl(geocoder);
    geocoder.addTo('#geocoder-container');

    function searchSelect(result) {
        // console.log(result);
        // console.log(result.result.center);
        var cityInfo = {
            lng: result.result.center[0],
            lat: result.result.center[1]
        };
        currentWeather(cityInfo.lng, cityInfo.lat);
        forecastWeather(cityInfo.lng, cityInfo.lat);
        setMarker(cityInfo);
    }

    geocoder.on('result', searchSelect);

    // navigation controls
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    }));

// first call from El Paso
    currentWeather(elPaso.lng, elPaso.lat);
    forecastWeather(elPaso.lng, elPaso.lat);
    setMarker(elPaso);
})();