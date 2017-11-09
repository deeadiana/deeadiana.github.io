console.log("Hello");
var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var inputField = document.getElementById("myCredits");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");
var numberOfBoxes = 0;

init();

function init() {
    generateButton.addEventListener("click", generate);
    calculateButton.addEventListener("click", calculateCredits);
}

function createInputBox(elementId) {
    var inputContainerElement = document.getElementById("inputContainer");

    var inputElem = document.createElement("input");
    inputElem.id = elementId;

    var labelElem = document.createElement("label");
    var text = document.createTextNode("Credits");
    labelElem.appendChild(text);
    labelElem.appendChild(inputElem);

    inputContainerElement.appendChild(labelElem);
}

function createBoxes() {

    for (var i = 1; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBox("input" + i);
    }
}

function generate() {
    numberOfBoxes = document.getElementById("numberOfBoxes").value;
    createBoxes();
}
function calculateCredits() {

    for (var i = 1; i <= numberOfBoxes; i++) {
        var inputElemValue = document.getElementById("input" + i).value;
        console.log(inputElemValue);
        sumOfCredits += parseInt(InputElemValue);
    }
}
