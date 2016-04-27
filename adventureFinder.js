/// Start of adventrueFinder -----------
var Camp = function(campName, comfort, isolation, accessibility, pet, family, activities, areaType, latlong) {
    this.campName = campName;
    this.comfort = comfort;
    this.isolation = isolation;
    this.accessibility = accessibility;
    this.pet = pet;
    this.family = family;
    this.activities = activities;
    this.areaType = areaType;
    this.latlong = latlong;
};

// Making empty Array to push camp data into ----------
var campArray = new Array();
campArray.push(new Camp('Jefferson Park', 0, 3, 1, 2, 0, 0, "forest", [44.71005, -121.80559]));
campArray.push(new Camp('Elk Mountain', 0, 2, 2, 3, 1, 0, "mountain", [45.33468, -121.60756]));
campArray.push(new Camp('Grand Valley/Badger Valley', 0, 3, 0, 1, 1, 0, "forest", [43.2011000, -89.9348500]));
campArray.push(new Camp('Timberline Trail Near Umbrella Falls', 0, 3, 0, 0, 0, 0, "forest", [45.32892, -121.66086]));
campArray.push(new Camp("Lost Lake", 1, 1, 3, 1, 3, 3, "forest", [45.4900, -121.8223]));
campArray.push(new Camp("Olallie Lake", 1, 2, 1, 2, 2, 2, "mountain", [44.807903, -121.788338]));
campArray.push(new Camp("LaPine State Park", 2, 1, 2, 1, 2, 3, "forest", [43.4606, -121.3048]));
campArray.push(new Camp("Beverly Beach", 2, 2, 2, 1, 3, 3, "coastal", [29.5147, -81.1445]));
campArray.push(new Camp("Honeyman Memorial State Park", 1, 1, 3, 2, 2, 2, "coastal", [43.9272, -124.1086]));
campArray.push(new Camp("Harris Beach State Park", 1, 0, 3, 2, 2, 3, "coastal", [42.0654, -123.3094]));
campArray.push(new Camp("South Beach State Park", 2, 0, 3, 3, 3, 2, "coastal", [43.9272, -124.1086]));
campArray.push(new Camp("Sunset Bay State Park", 3, 1, 2, 0, 2, 0, "coastal", [43.3306, -124.3730]));

//Creates counters for campsite properties; used to determine the filter value in the finder survey
var comfortCounter = 0;
var isolationCounter = 0;
var accessibilityCounter = 0;
var petCounter = 0;
var familyCounter = 0;
var activitiesCounter = 0;
var areaCounter = 0;

//Make new array to 'clones' campArray, use to splice out results ------------------
var availableCamp = new Array();

function makeArrayCopy() {
    for (var index = 0; index < campArray.length; index++) {
        availableCamp.push(campArray[index])
    }
    addMarkers(); //adds available Camps to map
}

//Filters out all objects WITH a given property falue-----------------------------
function questionFilter(property, propertyValue) {
    availableCamp = availableCamp.filter(function(Camp) {
        return Camp[property] !== propertyValue;
    });
}

//Removes all objects with a "false" value for the object property selected, and increases the counter for that property
function buttonBinder(inputID, property, counter) {
    var radios = document.getElementById(inputID);
    radios.addEventListener('click', function() {
    questionFilter(property, counter);
        console.log(availableCamp.length);
        console.log(availableCamp);
    listenAction();
    });
}

//listener Functions
function listenAction() {
    if (availableCamp.length == 0) {
        availableCamp = JSON.parse(localStorage.getItem("camps"));
        showUserResults();
    } else if (availableCamp.length <= 3) {
        showUserResults();
    } else {
        removeMarkers(); //removes all markers from maps
        addMarkers(); //updates map with remioaning markers in availableCamp
        removeQuestion();
        x++;
        saveCampResults();
        displayQuestion();
    }
}

// displaying questions------------------------------------------
var x = 0;

function displayQuestion() {
        var question = document.getElementById("question");
        var radioId = "radio" + x;
        var questionNumber = document.getElementById(radioId);
        questionNumber.style.display = "block";
    }

// show and hiding questions on Finder page --------------------------
function removeQuestion() {
    console.log(x);
    var radioId = "radio" + x;
    var questionNumber = document.getElementById(radioId);
    questionNumber.style.display = "none";
}

//Functions that fun on pageload---------------------------------
window.onload = function() {
    getCampResults();
    buttonBinder('comfort0', 'comfort', comfortCounter++);
    buttonBinder('comfort1', 'comfort', comfortCounter++);
    buttonBinder('comfort2', 'comfort', comfortCounter++);
    buttonBinder('comfort3', 'comfort', comfortCounter++);
    buttonBinder('isolation0', 'isolation', isolationCounter++);
    buttonBinder('isolation1', 'isolation', isolationCounter++);
    buttonBinder('isolation2', 'isolation', isolationCounter++);
    buttonBinder('isolation3', 'isolation', isolationCounter++);
    buttonBinder('accessibility0', 'accessibility', accessibilityCounter++);
    buttonBinder('accessibility1', 'accessibility', accessibilityCounter++);
    buttonBinder('accessibility2', 'accessibility', accessibilityCounter++);
    buttonBinder('accessibility3', 'accessibility', accessibilityCounter++);
    buttonBinder('activities0', 'activities', activitiesCounter++);
    buttonBinder('activities1', 'activities', activitiesCounter++);
    buttonBinder('activities2', 'activities', activitiesCounter++);
    buttonBinder('activities3', 'activities', activitiesCounter++);
    buttonBinder('family0', 'family', familyCounter++);
    buttonBinder('family1', 'family', familyCounter++);
    buttonBinder('family2', 'family', familyCounter++);
    buttonBinder('family3', 'family', familyCounter++);
    buttonBinder('pet0', 'pet', petCounter++);
    buttonBinder('pet1', 'pet', petCounter++);
    buttonBinder('pet2', 'pet', petCounter++);
    buttonBinder('pet3', 'pet', petCounter++);
    buttonBinder('forest', 'forest', areaCounter++);
    buttonBinder('coastal', 'coastal', areaCounter++);
    buttonBinder('mountain', 'mountain', areaCounter++);
}

// initialize and add interactive Leafletjs map centered on Oregon with custom icons
var mymap = L.map('mapid').setView([45.523, -122.6764], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFtZXNjc21pdGgiLCJhIjoiY2luOWM1Z25sMXBsMnR5bHk0Nzlmc2J1dyJ9.97nb1uyTiSLTmXvbdYdWoA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> <a href="http://www.freepik.com/free-vector/map-pin-colourful-set_802102.htm">Designed by Freepik</a>',
    maxZoom: 18,
    id: 'jamescsmith.pog160l4',
    accessToken: 'pk.eyJ1IjoiamFtZXNjc21pdGgiLCJhIjoiY2luOWM1Z25sMXBsMnR5bHk0Nzlmc2J1dyJ9.97nb1uyTiSLTmXvbdYdWoA'
}).addTo(mymap);
var myIcon = L.icon({
    iconUrl: 'images/nature.png',
    iconSize: [35, 35],
    iconAnchor: [15, 30],
});

var markers = new L.layerGroup(); //groups all camp markers into a group to ease placement and removal

//function that places markers on latlong in campArray objects
function addMarkers() {
    for (var index = 0; index < availableCamp.length; index++) {
        var markerLatLng = campArray[index].latlong;
        // console.log(markerLatLng);
        var marker = new L.marker(markerLatLng, {
            icon: myIcon
        });
        marker.bindPopup(availableCamp[index].campName);
        marker.on('mouseover', function(e) {
            this.openPopup();
        });
        marker.on('mouseout', function(e) {
            this.closePopup();
        });
        markers.addLayer(marker);
    }
    mymap.addLayer(markers);
}

// function to remove markers
function removeMarkers() {
    mymap.removeLayer(markers);
    markers.clearLayers();
}

//save user progress in local storage
function saveCampResults() {
    localStorage.setItem('camps', JSON.stringify(availableCamp));
    localStorage.setItem('question', JSON.stringify(x));
}

//return user progress in local storage
function getCampResults() {
    if (localStorage.getItem("camps") != null) {
        availableCamp = JSON.parse(localStorage.getItem("camps"));
        x = parseInt(JSON.parse(localStorage.getItem("question")));
        addMarkers();
    } else {
        makeArrayCopy();
    };
    removeQuestion();
    displayQuestion();
}

function resetDisplay() {
  var radioId = "radio" + x;
  var questionNumber = document.getElementById(radioId);
  questionNumber.style.display = "none";
  var question = document.getElementById("question");
  var radioId = "radio0";
  var questionNumber = document.getElementById(radioId);
  questionNumber.style.display = "block";
  x = 0;
}

//Reset button: clears out local storage
document.getElementById("reset").addEventListener("click", function(){
    localStorage.clear();
    resetDisplay();
    availableCamp = [];
    makeArrayCopy();
    console.log(x);
    console.log(availableCamp.length);
});

//When called, can display a list of all camp names remaining in the availableCamp array---------------
function winningCamps() {
  var finish = "";
  for (var i = 0; i < availableCamp.length; i++) {
    finish += "<li>"+ availableCamp[i].campName + "</li>";
  }
  document.getElementById('results').innerHTML = finish;
}

function showUserResults() {
    removeMarkers(); //removes all markers from maps
    addMarkers(); //updates map with remioaning markers in availableCamp
    console.log(x);
    removeQuestion();
    x = 7;
    displayQuestion();
    winningCamps();
    console.log("user results");
}
