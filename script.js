let convertFrom = document.getElementById("from")
let convertTo = document.getElementById("to")
let toBeConverted = document.getElementById("value")
let calculateTheAnswer = document.getElementById("calculate")
let answerElement = document.getElementById("answers")

let headingElement = document.createElement("h5");
headingElement.textContent = "";
document.body.appendChild(headingElement);

function error() {
    headingElement.textContent = "Enter a valid input";
    answerElement.value = "";
}

function calculate() {
    if (convertFrom.value === "celsius") {
        let toBeConvertedValue = toBeConverted.value;
        if (toBeConvertedValue === "") {
            //answerElement.value = "Enter a valid number";
            //headingElement.textContent = "Enter a valid number";
            error()
        } else if (convertTo.value === "fahrenheit") {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerOfTheValue = parseFloat((parseFloat(toBeConvertedValue) * (9 / 5)) + 32);
            answerElement.value = answerOfTheValue;
            headingElement.textContent = "";
        } else if (convertFrom.value === convertTo.value) {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerElement.value = toBeConvertedValue;
            headingElement.textContent = "";
        } else if (convertTo.value === "kelvin") {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerOfTheValue = parseFloat(parseFloat(toBeConvertedValue) + 273.15);
            answerElement.value = answerOfTheValue;
            headingElement.textContent = "";
        }

    }
    if (convertFrom.value === "fahrenheit") {
        let answerOfTheValue = 0;
        let toBeConvertedValue = toBeConverted.value;
        if (toBeConvertedValue === "") {
            /*answerElement.value = "Enter a valid number";
            headingElement.textContent = "Enter a valid number";*/
            error();
        } else if (convertFrom.value === convertTo.value) {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerElement.value = toBeConvertedValue;
            headingElement.textContent = "";
        } else if (convertTo.value === "kelvin") {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerOfTheValue = parseFloat(parseFloat(toBeConvertedValue) + 459.67) * (5 / 9);
            answerElement.value = answerOfTheValue;
            headingElement.textContent = "";
        } else if (convertTo.value === "celsius") {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerOfTheValue = parseFloat((parseFloat(toBeConvertedValue) - 32) * (5 / 9));
            answerElement.value = answerOfTheValue;
            headingElement.textContent = "";
        }
    }
    if (convertFrom.value === "kelvin") {
        let toBeConvertedValue = toBeConverted.value;
        if (toBeConvertedValue === "") {
            /*answerElement.value = "Enter a valid number";
            headingElement.textContent = "Enter a valid number";*/
            error();
        } else if (convertTo.value === "fahrenheit") {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerOfTheValue = parseFloat((parseFloat(toBeConvertedValue) * (9 / 5)) - 459.67);
            answerElement.value = answerOfTheValue;
            headingElement.textContent = "";
        } else if (convertFrom.value === convertTo.value) {
            let toBeConvertedValue = toBeConverted.value;
            answerElement.value = toBeConvertedValue;
            headingElement.textContent = "";
        } else if (convertTo.value === "celsius") {
            let answerOfTheValue = 0;
            let toBeConvertedValue = toBeConverted.value;
            answerOfTheValue = parseFloat(parseFloat(toBeConvertedValue) - 273.15);
            answerElement.value = answerOfTheValue;
            headingElement.textContent = "";
        }

    }
}
