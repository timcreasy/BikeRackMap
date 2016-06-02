// Create XMLHttpRequest object
var xmlhttp = new XMLHttpRequest();

// Create logic for when readyState changes
xmlhttp.onreadystatechange = function() {
  // Check ready state and status
  if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {

    // Parse and store responseText
    var data = JSON.parse(xmlhttp.responseText);
    
    console.log(data);
  }
};

// Open request
xmlhttp.open('GET', "https://data.nashville.gov/resource/yjju-hypq.json?$$app_token=0A2X4s8PMWGYIA2Rnt7wql5HZ");

// Send request
xmlhttp.send();