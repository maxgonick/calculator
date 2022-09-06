function plus(firstInput, secondInput) {
  return parseFloat(firstInput) + parseFloat(secondInput);
}

function minus(firstInput, secondInput) {
  return parseFloat(firstInput) - parseFloat(secondInput);
}

function multiply(firstInput, secondInput) {
  return parseFloat(firstInput) * parseFloat(secondInput);
}

function divide(firstInput, secondInput) {
  if (secondInput == 0) return NaN;
  else return parseFloat(firstInput) / parseFloat(secondInput);
}

function operate(functionInput, firstInput, secondInput) {
  switch (functionInput) {
    case "plus":
      return plus(firstInput, secondInput);
    case "minus":
      return minus(firstInput, secondInput);
    case "multiply":
      return multiply(firstInput, secondInput);
    case "divide":
      return divide(firstInput, secondInput);
  }
}

function switchStatementOperation(input) {
  console.log(input);
  switch (input) {
    case "divide":
      operation = input;
      break;
    case "multiply":
      operation = input;
      break;
    case "plus":
      operation = input;
      break;
    case "minus":
      operation = input;
      break;
  }
}

function wordToNumber(stringInput) {
  switch (stringInput) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    case "zero":
      return 0;
    case "point":
      return ".";
    default:
      return "";
  }
}

//globals
let inputOne = "";
let inputOneBool = false;
let inputTwo = "";
let inputTwoBool = false;
let operation = "";
let operationBool = false;
let result = "";

const numberButtons = document.querySelectorAll("#number-container > button");
const operationButtons = document.querySelectorAll(
  "#operation-container > button"
);
const resultSelector = document.querySelector(".result");

//Listeners for number input
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    resultSelector.textContent += wordToNumber(button.className);
    if (inputOneBool == false) {
      if (button.className === "sign") {
        if (resultSelector.textContent != "") {
          resultSelector.textContent =
            parseFloat(resultSelector.textContent) * -1.0;
          inputOne = resultSelector.textContent;
        }
        return;
      }
      inputOne = resultSelector.textContent;
    } else {
      if (button.className === "sign") {
        if (resultSelector.textContent != "") {
          resultSelector.textContent =
            parseFloat(resultSelector.textContent) * -1.0;
          inputTwo = resultSelector.textContent;
        }
        return;
      }
      inputTwo = resultSelector.textContent;
    }
  });
});

//Listener for Operators

operationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (
      button.className === "divide" ||
      button.className === "multiply" ||
      button.className === "plus" ||
      button.className === "minus"
    ) {
      inputOneBool = true;
      operation = button.className;
      resultSelector.textContent = "";
    } else if (button.className === "equal") {
      result = operate(operation, inputOne, inputTwo);
      resultSelector.textContent = result;
      inputOne = result;
      inputOneBool = false;
      inputTwo = "";
      operation = "";
      operationBool = false;
    } else if (button.className === "all-clear") {
      inputOne = "";
      inputTwo = "";
      inputOneBool = false;
      inputTwoBool = false;
      resultSelector.textContent = "";
    }
  });
});
