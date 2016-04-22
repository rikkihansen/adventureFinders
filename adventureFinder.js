/// Start of adventrueFinder -----------
var Camp = function (campName, carCamp, rv, cabin, backpack, environment, difficulty, amenities, family, pet, activities, latlong) {
  this.campName= campName;
  this.carCamp= carCamp;
  this.rv= rv;
  this.cabin = cabin;
  this.backpack= backpack;
  this.environment= environment;
  this.difficulty= difficulty;
  this.amenities= amenities;
  this.family= family;
  this.pet= pet;
  this.activities= activities;
  this.latlong= latlong;
};

// Making empty Array to push camp data into ----------
var campArray = new Array ();
campArray.push(new Camp('Jefferson Park', 'no', 'no', 'no', 'yes', 'Forest', 3, 0, 0, 3, 0, [44.71005, -121.80559]));
campArray.push(new Camp('Elk Mountain', 'no', 'no', 'no', 'yes', 'Mountain', 3, 0, 0, 3, 0, [45.33468, -121.60756]));
campArray.push(new Camp('Grand Valley/Badger Valley', 'no', 'no', 'no', 'yes', 'Mountain', 4, 0, 0, 0, 0, [43.2011000, -89.9348500]));
campArray.push(new Camp('Timberline Trail Near Umbrella Falls', 'no', 'no', 'no', 'yes', 'Forest', 1, 0, 3, 3, 0, [45.32892, -121.66086]));
campArray.push(new Camp("Lost Lake", 'yes', 'no', 'yes', 'no', "Mountain", 1, 2, 4, 1, 3, [45.4900, -121.8223]));
campArray.push(new Camp("Olallie Lake", 'no', 'no', 'yes', 'no', "Mountain", 1, 4, 4, 2, 3, [44.807903, -121.788338]));
campArray.push(new Camp("LaPine State Park", 'yes', 'yes', 'yes', 'no', "Forest", 0, 4, 4, 3, 4, [43.4606, -121.3048]));
campArray.push(new Camp("Backpacking/Primitive", 'yes', 'yes', 'yes', 'no', "Beverly Beach", "Coastal", 0, 4, 4, 3, 4, [29.5147, -81.1445]));
campArray.push(new Camp("Honeyman Memorial State Park", 'yes', 'yes', 'yes', 'no', "Coastal", 0, 3, 4, 2, 1, [43.9272, -124.1086]));
campArray.push(new Camp("Harris Beach State Park", 'yes', 'yes', 'yes', 'no', "Coastal", 0, 3, 4, 2, 1, [42.0654, -123.3094]));
campArray.push(new Camp("South Beach State Park", 'yes', 'yes', 'yes', 'no', "Coastal", 0, 3, 4, 2, 1, [43.9272, -124.1086]));
campArray.push(new Camp("Sunset Bay State Park", 'yes', 'yes', 'yes', 'no', "Coastal", 0, 3, 4, 3, 2, [43.3306, -124.3730]));

//Make new array to 'clones' campArray, use to splice out results ------------------
var availableCamp = new Array ();
   function makeArrayCopy() {
     for(var index=0; index < campArray.length; index++) {
       availableCamp.push(campArray[index])
     }
   }

//Removes all items with the inputed value from the availableCamp array
function questionFilter(property, arrayValue) {
  availableCamp = availableCamp.filter(function( Camp ) {
    return Camp[property] !== arrayValue;
  });
}

window.onload= function() {
  makeArrayCopy();
}

// displaying questions------------------------------------------
  var x = 0;
  function displayQuestion () {
      var question = document.getElementById("question");
        var radioId = "radio" + x;
        var questionNumber = document.getElementById(raidoId);
        questionNumber.style.display = "block"; x++;
      }

    function nextQuestion () {
        var
    }
// adding eventlistener ----------------------------------------
  // // var radio = document.getElementById("quesion");
  //     radio.addEventListener('clicked', function() {
  //       // var questionHolder = document.getElementById("question");
  //     var radioQuestions = document.getElementById("radio0");
  //   });
  //
   if (radioQuestions.onclick) {
     radioQuestions.style.display = "none";
   }

// Call Functions ---------------------------------------------------
displayQuestion();
