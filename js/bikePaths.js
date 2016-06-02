function getFiveRacks(data) {
  
  // Create Map
  var nashvilleCoords = new google.maps.LatLng(36.1627, -86.7816);
   var mapOptions = {
      zoom: 12,
      center: nashvilleCoords
    }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Add each of five markers
  for (var i = 0; i < 5; i++) {

    // Get current racks lat and lon
    var lat = data[i].lat;
    var lon = data[i].lon;
    
    // Store in LatLng var
    var myLatlng = new google.maps.LatLng(lat,lon);

    // Create marker based on LatLng
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Bike Rack"
    });

    // Add marker to map
    marker.setMap(map);

    // Create new marker
    // var marker = new google.maps.Marker({
    //   position: newLatLon,
    //   map: map,
    //   title: "h"
    // });

  }
}

function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

// Create XMLHttpRequest object
var xmlhttp = new XMLHttpRequest();

// Create logic for when readyState changes
xmlhttp.onreadystatechange = function() {
  // Check ready state and status
  if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {

    // Parse and store responseText
    var data = JSON.parse(xmlhttp.responseText);
    
    getFiveRacks(data);
  }
};

// Open request
xmlhttp.open('GET', "https://data.nashville.gov/resource/yjju-hypq.json?$$app_token=0A2X4s8PMWGYIA2Rnt7wql5HZ");

// Send request
xmlhttp.send();