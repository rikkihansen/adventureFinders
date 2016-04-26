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
  newCampArray.push(newCamp.question1.value);
  newCampArray.push(newCamp.question2.value);
  newCampArray.push(newCamp.question3.value);
  newCampArray.push(newCamp.question4.value);
  newCampArray.push(newCamp.question5.value);
  newCampArray.push(newCamp.question6.value);
  newCampArray.push(newCamp.question7.value);
  newCampArray.push(newCamp.lat.value);
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
