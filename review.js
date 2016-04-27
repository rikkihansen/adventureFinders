// camp object constructor

var newCampArray = new Array();
//var Camp = add when Cass updates
var button = document.getElementById("formBtn")
button.addEventListener("click", function() {
    event.preventDefault();
    newCamp = this.form;
    buildCampArray(newCamp);
});

function buildCampArray(newCamp) {
  newCampArray.push(newCamp.campName.value);
  newCampArray.push(newCamp.comfort.value);
  newCampArray.push(newCamp.isolation.value);
  newCampArray.push(newCamp.accessibility.value);
  newCampArray.push(newCamp.pet.value);
  newCampArray.push(newCamp.family.value);
  newCampArray.push(newCamp.activities.value);
  newCampArray.push(newCamp.areaType.value);
  newCampArray.push(newCamp.long.value);
  localStorage.setItem('newCamp', JSON.stringify(newCampArray));
  newCamp.reset();
  thankUser();
};

function thankUser() {
  document.getElementById("campQuestions").innerHTML = "";
  document.getElementById("frame").innerHTML = "";
  document.getElementById("campQuestions").innerHTML = "Thank you for submitting a new camp!";
}
