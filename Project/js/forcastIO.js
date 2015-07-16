function weather(){
	// debugger;
  var apiKey = 'c12f65638a922a770c490b96cf26ea37';
  var url = 'https://api.forecast.io/forecast/';
  var weatherData;
  var currentTime;
  var sunrise;
  var sunset;

  $.getJSON(url + apiKey + "/" + lat + "," + lng + "?callback=?", function(weatherData) {

  	currentTime = weatherData.currently.time;
  	sunrise = weatherData.daily.data[0].sunriseTime;
		sunset = weatherData.daily.data[0].sunsetTime;

		if (currentTime < sunrise || currentTime > sunset) {
			scene.children[0].material.color.set("#404040");
		}	

		if (weatherData.currently.cloudCover < .50) {
			scene.add(sunMesh);
			console.log(weatherData.currently.cloudCover);
		} 
		else {
			scene.children[0].material.color.set("#00FFAA");
		}
	

  });

  //   $.ajax({
  // 	url: url + apiKey + "/" + lat + "," + lng + "?callback=?",
  // 	dataType: 'json'
  // }).done(function(weatherData){
  // 	currentTime = weatherData.currently.time;
  // 	sunrise = weatherData.daily.data[0].sunriseTime;
		// sunset = weatherData.daily.data[0].sunsetTime;

		// if (currentTime < sunrise || currentTime > sunset) {
		// 	scene.children[0].material.color.set("#404040");
		// 	// debugger;
		// 	console.log("set night color")
		// }
  // });
}
	