// define several functions
function firstFunction() {
    alert("Just about to call second function");
    secondFunction();
}
function secondFunction() {
    alert("Just about to call third function");
    thirdFunction();
}
function thirdFunction() {
    alert("Just about to call fourth function");
    fourthfunction();
}
function fourthFunction() {
    alert("Just about to change the headline");
    headline.innerHTML = "You clicked the headline!";
}

// grab the headline element

// alert("I'm in the file!");

var headline = document.getElementById("mainHeading");
// add a click event handler
headline.onclick = function() {

    alert("Just about to call first function");

    firstFunction();
    
    alert("I've called first function");

};





