/// Start of adventrueFinder -----------
var Camp = function(campName, carCamp, rv, cabin, backpack, forest, mountain, coast, difficulty, amenities, family, pet, activities, latlong) {
    this.campName = campName;
    this.carCamp = carCamp;
    this.rv = rv;
    this.cabin = cabin;
    this.backpack = backpack;
    this.forest = forest;
    this.mountain = mountain;
    this.coastal = coast;
    this.difficulty = difficulty;
    this.amenities = amenities;
    this.family = family;
    this.pet = pet;
    this.activities = activities;
    this.latlong = latlong;
};

// Making empty Array to push camp data into ----------
var campArray = new Array();
campArray.push(new Camp('Jefferson Park', false, false, false, true, true, false, false, 3, 0, 0, 3, 0, [44.71005, -121.80559]));
campArray.push(new Camp('Elk Mountain', false, false, false, true, false, true, false, 3, 0, 0, 3, 0, [45.33468, -121.60756]));
campArray.push(new Camp('Grand Valley/Badger Valley', false, false, false, true, false, true, false, 4, 0, 0, 0, 0, [43.2011000, -89.9348500]));
campArray.push(new Camp('Timberline Trail Near Umbrella Falls', false, false, false, true, true, false, false, 1, 0, 3, 3, 0, [45.32892, -121.66086]));
campArray.push(new Camp("Lost Lake", true, false, true, false, false, true, false, 1, 2, 4, 1, 3, [45.4900, -121.8223]));
campArray.push(new Camp("Olallie Lake", false, false, true, false, false, true, false, 1, 4, 4, 2, 3, [44.807903, -121.788338]));
campArray.push(new Camp("LaPine State Park", true, true, true, false, true, false, false, 0, 4, 4, 3, 4, [43.4606, -121.3048]));
campArray.push(new Camp("Beverly Beach", true, true, true, false, false, false, true, 0, 4, 4, 3, 4, [29.5147, -81.1445]));
campArray.push(new Camp("Honeyman Memorial State Park", true, true, true, false, false, false, true, 0, 3, 4, 2, 1, [43.9272, -124.1086]));
campArray.push(new Camp("Harris Beach State Park", true, true, true, false, false, false, true, 0, 3, 4, 2, 1, [42.0654, -123.3094]));
campArray.push(new Camp("South Beach State Park", true, true, true, false, false, false, true, 0, 3, 4, 2, 1, [43.9272, -124.1086]));
campArray.push(new Camp("Sunset Bay State Park", true, true, true, false, false, false, true, 0, 3, 4, 3, 2, [43.3306, -124.3730]));

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

//Removes all objects with a value equal to or less than the selected input--------------------------
function radioScale(inputName, property) {
    var radios = document.getElementsByName(inputName);
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('click', function() {
            for (var y = parseInt(this.value) - 1; y >= 0; y--) {
                questionFilter(property, y);
            }
            console.log(availableCamp);
            listenAction();
        });
    }

}


//Removes all objects with a "false" value for the object property selected--------------------------------
function radioTag(inputID, property) {
    var radios = document.getElementById(inputID);
    radios.addEventListener('click', function() {
        questionFilter(property, false);
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
    radioTag('in1a', 'carCamp');
    radioTag('in1b', 'rv');
    radioTag('in1c', 'cabin');
    radioTag('in1d', 'backpack');
    radioTag('in2a', 'mountain');
    radioTag('in2b', 'coastal');
    radioTag('in2c', 'forest');
    radioScale('question3', 'amenities');
    radioScale('question4', 'difficulty');
    radioScale('question5', 'family');
    radioScale('question6', 'pet');
    radioScale('question7', 'activities');
}

// initialize and add interactive Leafletjs map centered on Oregon with custom icons
var mymap = L.map('mapid').setView([44.5, -120.0964], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFtZXNjc21pdGgiLCJhIjoiY2luOWM1Z25sMXBsMnR5bHk0Nzlmc2J1dyJ9.97nb1uyTiSLTmXvbdYdWoA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> <a href="http://www.freepik.com/free-vector/map-pin-colourful-set_802102.htm">Designed by Freepik</a>',
    maxZoom: 18,
    id: 'jamescsmith.pog160l4',
    accessToken: 'pk.eyJ1IjoiamFtZXNjc21pdGgiLCJhIjoiY2luOWM1Z25sMXBsMnR5bHk0Nzlmc2J1dyJ9.97nb1uyTiSLTmXvbdYdWoA'
}).addTo(mymap);
var myIcon = L.icon({
    iconUrl: 'images/nature.png',
    iconSize: [30, 30],
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

function showUserResults() {
    removeMarkers(); //removes all markers from maps
    addMarkers(); //updates map with remioaning markers in availableCamp
    console.log(x);
    removeQuestion();
    x = 7;
    displayQuestion();
    console.log("user results");
}
