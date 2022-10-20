/*
    Assignment #4
    Dylan Reed
*/

$(function () {
  // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
  // function to calculate the distance in metres between two lat/long pairs on Earth
  // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
  // Aren't those cool variable names? Yah gotta love JavaScript
  function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    var toRadians = function (num) {
      return (num * Math.PI) / 180;
    };
    var R = 6371000; // radius of Earth in metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2 - lat1);
    var Δλ = toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  /*
    If geolocation has been alowed, do the folowing: 
    1. Use geolocation to find the current location of the users machine and display it in the div#locationhere. 
    2. Check to see if a location value is already stored in localstorage. If there is one do the following: 
        Retrieve it, add it to a new tag of your choosing and display that new tag on the page below the current location. 
        Display a message below both locations in a header tag of your choosing (h1, h2 etc) that welcomes them back to the page (as they are a returning visitor) 
        Compare the location value from localstorage with the location value you got from the geolocation command using the function I have provided you in the script.js file. 
        Display this value to the user below your welcome message that tels the user they traveled that distance (in meters) since their last visit to that page. 
    3. If there is no location value already stored in localstorage, in header tag welcome the user to the page for the first time. 
    4. After your localstorge check conditions are complete, store the current location values in localstorage, replacing the old value if there is one. 
    BONUS: (1 mark): Display the accuracy of each geolocation along with their values, and display distance in kilometers instead of meters, followed by the letters km, without changing the function code you were provided in the script.js.
    */

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var accuracy = position.coords.accuracy;
      var location = lat + ', ' + lon;
      var distance = 0;
      var oldLocation = localStorage.getItem('location');
      $('#locationhere').text(location);
      if (oldLocation) {
        var oldLocationArray = oldLocation.split(', ');
        var oldLat = oldLocationArray[0];
        var oldLon = oldLocationArray[1];
        //     distance = calcDistanceBetweenPoints(oldLat, oldLon, lat, lon);
        //     $('#locationhere').append(
        //       '<p>You have traveled ' +
        //         distance +
        //         ' meters since your last visit.</p>'
        //     );
        //   } else {
        //     $('#locationhere').append(
        //       '<p>Welcome to the page for the first time!</p>'
        //     );
        distance = calcDistanceBetweenPoints(oldLat, oldLon, lat, lon);
        distance = distance / 1000;
        $('#locationhere').append(
          '<p>You have traveled ' + distance + ' km since your last visit.</p>'
        );
        $('#locationhere').append('<p>Accuracy: ' + accuracy + ' meters.</p>');
      } else {
        $('#locationhere').append(
          '<p>Welcome to the page for the first time!</p>'
        );
        $('#locationhere').append('<p>Accuracy: ' + accuracy + ' meters.</p>');
      }
      localStorage.setItem('location', location);
    });
  } else {
    $('#locationhere').text('Geolocation is not supported by this browser.');
  }
});
