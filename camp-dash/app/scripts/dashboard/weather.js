'use strict';

var latitude;
var longitude;
var tempF;
  
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
    init();
  }


  function error() {
    $('#dispCity').text('Unable to retrieve your location');
    $('#weather-value').text('Turn on location');
  }

 navigator.geolocation.getCurrentPosition(success, error);
}
//init after coordinates are recieved

function init() {
  var api = 'https://api.openweathermap.org/data/2.5/weather?';
  var key = '&appid=c206c23ffceb3192352454f2000a0b75';
  var lat = 'lat=' + latitude;
  var lon = 'lon=' + longitude;
  var unitImp = '&units=imperial'
  var urlFromIP = api + lat + '&' + lon + key + unitImp;

  $(document).ready(function() {
    getWeather();
    getCity();

    //Get weather by using open weather map api 
     function getWeather() {
    $.ajax({
      url: urlFromIP,
      success: function(parsed_json) {
        tempF = parsed_json.main.temp;
        $('#weather-value').text(Math.round(tempF) + '°');
      }
    });
  }

  //Get city by coordiantes using google api reverse geolocation
      function getCity() {
        var cityName;

        $.ajax({
          url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude,
          data: {},
          success: function(data) {

           $('#dispCity').html(data);
            $.each( data['results'],function(i, val) {
                $.each( val['address_components'],function(i, val) {
                    if (val['types'] == 'locality,political') {
                        if (val['long_name']!='') {
                            $('#dispCity').html(val['long_name']);
                        }
                        else {
                            $('#dispCity').html('unknown');
                        }
                        
                    }
                });
            });
          
  
          }
        });
  }

  //close document ready
  });

  //close init
} 

 
