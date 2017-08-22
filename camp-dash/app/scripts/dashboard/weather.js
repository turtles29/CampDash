'use strict';

var latitude, longitude, tempF, weatherId;

window.onload = function() {
  if (!localStorage.lat) geoFindMe();
  else init();
};

//geoFindme is the geolocation; will retrieve coordinates
function geoFindMe() {
  if (!navigator.geolocation)
    $('#dispCity').text('Unable to retrieve your location'),
    $('#weather-value').text('Turn on location');

  function success(position) {
    localStorage.lat = position.coords.latitude,
    localStorage.lon = position.coords.longitude;

    init();
  }

  function error() {
    $('#dispCity').text('Unable to retrieve your location'),
    $('#weather-value').text('Allow location');
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

function init() {
  var api = 'https://api.openweathermap.org/data/2.5/weather?',
  key = '&appid=c206c23ffceb3192352454f2000a0b75',
  lat = 'lat=' + localStorage.lat,
  lon = 'lon=' + localStorage.lon,
  unitImp = '&units=imperial',
  urlFromIP = api + lat + '&' + lon + key + unitImp;

  $(document).ready(function() {
    getWeather(), getCity();

    //Get weather by using open weather map api
    function getWeather() {
      $.ajax({
        url: urlFromIP,
        success: function(json) {
          tempF = json.main.temp, weatherId = json.weather[0].id;
          $('#weather-value').text(Math.round(tempF) + '°');
          getIcon(weatherId);
        }
      })
    }

    //Get city by coordiantes using google api reverse geolocation
    function getCity() {
      var cityName;

      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + localStorage.lat + ',' + localStorage.lon,
        data: {},
        success: function(data) {
          $('#dispCity').html(data);
          $.each(data['results'], function(i, val) {
            $.each(val['address_components'], function(i, val) {
              if (val['types'] == 'locality,political') {
                if (val['long_name']!='') $('#dispCity').html(val['long_name']);
                else $('#dispCity').html('unknown');
              }
            })
          })
        }
      })
    }
  })
}

function getIcon(id) {
  let icon;
  if (id > 199 && id < 233) icon = 'thunderstorm';
	else if (id > 299 && id < 322) icon = 'drizzle';
	else if (id > 499 && id < 532) icon = 'rain';
	else if (id > 599 && id < 623) icon = 'snow';
	else if (id === 800) icon = 'clear';
	else if (id > 800 && id < 805 ) icon = 'cloud';
  $('#weather-container').prepend('<img id="weather-icon" src="images/icons/' + icon + '.svg"/>');
}