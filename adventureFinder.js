/// Start of adventrueFinder -----------
var camp = function (campType, campName, environment, difficulty, amenities, family, pet, activities, latlong) {
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
campArray.push(new Camp(["Tent", "RV/Trailer", "Cabin/Yurt", "Backpacking/Primitive"], "Beverly Beach", "Coastal", 0, 4, 4, 3, 4, [29.5147, -81.1445]));
campArray.push(new Camp(["Tent", "RV/Trailer", "Cabin/Yurt"], "LaPine State Park", "Forest", 0, 4, 4, 3, 4, [43.4606, -121.3048]));
campArray.push(new Camp(["Cabin/Yurt"], "Olallie Lake", "Mountain", 1, 4, 4, 2, 3, [44.807903, -121.788338]));
campArray.push(new Camp(["Tent", "Cabin/Yurt"], "Lost Lake", "Mountain", 1, 2, 4, 1, 3, [45.4900, -121.8223]));
campArray.push();
campArray.push();
campArray.push();
campArray.push();
campArray.push();
campArray.push();
