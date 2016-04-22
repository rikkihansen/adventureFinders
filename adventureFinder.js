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
campArray.push(new Camp("Beverly Beach", 'yes', 'yes', 'yes', 'no', "Coastal", 0, 4, 4, 3, 4, [29.5147, -81.1445]));
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

//Removes all objects WITH the inputed property value from the availableCamp array---------------
function questionFilter(property, propertyValue) {
  availableCamp = availableCamp.filter(function( Camp ) {
    return Camp[property] !== propertyValue;
  });
}

//Radio Button Onclick: Removes all objects with a value equal to or less than the selected input--------------------------
function giveRadioValue(inputName, property){
  var radios = document.getElementsByName(inputName);
  var myValue = this.value;
  for(var i = 0; i < radios.length; i++) {
    radios[i].onclick = function() {
      for (var y=0; y < radios.length; y++) {
        questionFilter(property,this.value--);
        }
        console.log(availableCamp);
      }
    }
  }

// displaying questions------------------------------------------
  var x = 0;
  function displayQuestion () {
      var question = document.getElementById("question");
<<<<<<< HEAD
      console.log(question);
=======
      return(question);
      for (var x=0; x < 1; x++) {
>>>>>>> staging
        var radioId = "radio" + x;
        return(radioId);
        var questionNumber = document.getElementById(radioId);
        return(questionNumber);
        questionNumber.style.display = "block";
        x++;
      }
    
// adding eventlistener ----------------------------------------
displayQuestion();

<<<<<<< HEAD
function displayResults() {

=======
//Functions that fun on pageload---------------------------------
window.onload= function() {
  makeArrayCopy();
>>>>>>> staging
}
