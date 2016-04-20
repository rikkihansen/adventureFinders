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
campArray.push(new camp('Backpacking/Primitive','Jefferson Park', 'Forest', 3, 0, 0, 3, 0, [44.71005, -121.80559]));
campArray.push(new camp('Backpacking/Primitive', 'Elk Mountain', ['Forest', 'Mountain',] 3, 0, 0, 3, 0, [45.33468, -121.60756]));
campArray.push(new camp('Backpacking/Primitive', 'Grand Valley/Badger Valley', ['Forest', 'Mountain',], 4, 0, 0, 0, 0, [43.2011000, -89.9348500]));
campArray.push(new camp('Backpacking/Primitive' 'Timberline Trail Near Umbrella Falls', 'Forest', 1, 0, 3, 3, 0, [45.32892, -121.66086]));
campArray.push();
campArray.push();
campArray.push();
campArray.push();
campArray.push();
campArray.push();
