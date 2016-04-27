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
<<<<<<< HEAD
  newCampArray.push(newCamp.question0.value);
  newCampArray.push(newCamp.question1.value);
  newCampArray.push(newCamp.question2.value);
  newCampArray.push(newCamp.question3.value);
  newCampArray.push(newCamp.question4.value);
  newCampArray.push(newCamp.question5.value);
  newCampArray.push(newCamp.question6.value);
  newCampArray.push(newCamp.question7.value);
  newCampArray.push(newCamp.question8.value);
  newCampArray.push(newCamp.question9.value);
=======
  newCampArray.push(newCamp.campName.value);
  newCampArray.push(newCamp.comfort.value);
  newCampArray.push(newCamp.isolation.value);
  newCampArray.push(newCamp.accessibility.value);
  newCampArray.push(newCamp.pet.value);
  newCampArray.push(newCamp.family.value);
  newCampArray.push(newCamp.activities.value);
  newCampArray.push(newCamp.areaType.value);
  newCampArray.push(newCamp.long.value);
>>>>>>> e00e7ec44ea216d13749100710c2a5fc01855741
  localStorage.setItem('newCamp', JSON.stringify(newCampArray));
  newCamp.reset();
  thankUser();
};

function thankUser() {
  document.getElementById("campQuestions").setAttribute("display", "none");
  document.getElementById("frame").setAttribute("display", "none");
  document.getElementById("iFrame").setAttribute("display", "none");
  document.getElementById("campQuestions").innerHTML = "Thank you for submitting a new camp!";
}
