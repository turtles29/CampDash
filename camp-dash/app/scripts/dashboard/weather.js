'use strict';

var latitude;
var longitude;
var coordinates;

window.onload = function() {
	geoFindMe();
};

//geoFindme is the geolocation; will check for coordinates
function geoFindMe() {

  if (!navigator.geolocation){
    $('#dispCity').text('Unable to retrieve your location');
    $('#weather-value').text('Turn on location');
  }

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    coordinates= latitude + ',' + longitude;
  }


  function error() {
    $('#dispCity').text('Unable to retrieve your location');
    $('#weather-value').text('Turn on location');
  }

 navigator.geolocation.getCurrentPosition(success, error);
}