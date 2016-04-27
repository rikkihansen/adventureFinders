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
