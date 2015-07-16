
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
var lat;
var lng;

function initialize(_panoLoader) {
  var markers = [];
  var mapContainer = document.getElementById('map-canvas');
  var mapOptions = {
    styles: snazzyMap,
    disableDefaultUI: true,
    maxZoom: 15
  }

  var map = new google.maps.Map(mapContainer, mapOptions);

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(48.86084921560872, 2.3457845983642756),
      new google.maps.LatLng(48.85237842604095, 2.35865920163576));
  map.fitBounds(defaultBounds);


  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function(marker) {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      });

      updataPano(marker);
      markers.push(marker);
      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  function updataPano(marker) {
    lat = Number(marker.position.lat().toFixed(3));
    lng = Number(marker.position.lng().toFixed(3))
    console.log(lat, lng);
    $("canvas").remove();
    _panoLoader.load(new google.maps.LatLng(lat, lng));

    // // calling the weather data
    // weather();

  }

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

