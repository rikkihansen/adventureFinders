// camp object constructor

var newCampArray = new Array();
//var Camp = add when Cass updates
var button = document.getElementById("formBtn")
button.addEventListener("click", function() {
    event.preventDefault();
    newCamp = this.form;
    evaluateForm(newCamp);
    //buildCampArray(newCamp);
});

//check to see if all inputs have data
function evaluateForm(newCamp) {
    var formIsValid = true;
    if (newCamp.campName.value == "") {
        newCamp.campName.setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.comfort.value == "") {
      document.getElementById("comfort").setAttribute("class", "required");
      formIsValid = false;

    }
    if (newCamp.isolation.value == "") {
        document.getElementById("isolation").setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.accessibility.value == "") {
        document.getElementById("accessibility").setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.pet.value == "") {
        document.getElementById("pet").setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.family.value == "") {
        document.getElementById("family").setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.activities.value == "") {
        document.getElementById("activities").setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.areaType.value == "") {
        document.getElementById("areaType").setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.lat.value == "") {
        document.getElementById("location").setAttribute("class", "required");
        newCamp.lat.setAttribute("class", "required");
        formIsValid = false;
    }
    if (newCamp.long.value == "") {
        document.getElementById("location").setAttribute("class", "required");
        newCamp.long.setAttribute("class", "required");
        formIsValid = false;
    }
    console.log(formIsValid);
    if (formIsValid) {
        buildCampArray(newCamp);
    };
}


//build array of user input
function buildCampArray(newCamp) {
    newCampArray.push(newCamp.campName.value);
    newCampArray.push(newCamp.comfort.value);
    newCampArray.push(newCamp.isolation.value);
    newCampArray.push(newCamp.accessibility.value);
    newCampArray.push(newCamp.pet.value);
    newCampArray.push(newCamp.family.value);
    newCampArray.push(newCamp.activities.value);
    newCampArray.push(newCamp.areaType.value);
    newCampArray.push(newCamp.lat.value);
    newCampArray.push(newCamp.long.value);
    localStorage.setItem('newCamp', JSON.stringify(newCampArray));
    newCamp.reset();
    thankUser();
};

function thankUser() {
    document.getElementById("campQuestions").setAttribute("display", "none");
    document.getElementById("frame").setAttribute("display", "none");
    document.getElementById("iFrame").setAttribute("display", "none");
    document.getElementById("campQuestions").innerHTML = "Thank you for submitting a new camp!";
};
