/// Start of adventrueFinder -----------
var Camp = function (campType, campName, environment, difficulty, amenities, family, pet, activities, latlong) {
  this.campType= campType;
  this.campName= campName;
  this.environment= environment;
  this.difficulty= difficulty;
  this.amenities= amenities;
  this.family= family;
  this.pet= pet;
  this.activities= activites;
  this.latlong= latlong;
};

// Making empty Array to push camp data into ----------
var campArray = new Array ();
campArray.push(new Camp());
campArray.push(new Camp());
campArray.push(new Camp());
campArray.push(new Camp());
campArray.push(new Camp());
campArray.push(new Camp());
campArray.push(new Camp());
campArray.push(new Camp(['Tent', 'Cabin/Yurt', 'RV/Trailer'], "Honeyman Memorial State Park", "Coastal", 0, 3, 4, 2, 1, [43.9272, -124.1086]));
campArray.push(new Camp(['Tent', 'Cabin/Yurt', 'RV/Trailer'], "Harris Beach State Park", "Coastal", 0, 3, 4, 2, 1, [42.0654, -123.3094]));
campArray.push(new Camp(['Tent', 'Cabin/Yurt', 'RV/Trailer'], "South Beach State Park", "Coastal", 0, 3, 4, 2, 1, [43.9272, -124.1086]));
campArray.push(new Camp(['Tent', 'Cabin/Yurt', 'RV/Trailer'], "Sunset Bay State Park", "Coastal", 0, 3, 4, 3, 2, [43.3306, -124.3730]));
