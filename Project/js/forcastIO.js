function weather(){
  var apiKey = 'c12f65638a922a770c490b96cf26ea37';
  var url = 'https://api.forecast.io/forecast/';
  var weatherData;

  $.getJSON(url + apiKey + "/" + lat + "," + lng + "?callback=?", function(weatherData) {
    console.log(weatherData);
    // debugger;
  });
}
	
