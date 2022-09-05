function add(firstInput, secondInput) {
  return firstInput + secondInput;
}

function minus(firstInput, secondInput) {
  return firstInput - secondInput;
}

function multiply(firstInput, secondInput) {
  return firstInput * secondInput;
}

function divide(firstInput, secondInput) {
  if (secondInput == 0) return null;
  else return firstInput / secondInput;
}

function operate(functionInput, firstInput, secondInput) {
  switch (functionInput) {
    case "add":
      return add(firstInput, secondInput);
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

//globals
let inputOne;
let inputOneBool = false;
let inputTwo;
let inputTwoBool = false;
let operation;
let operationBool = false;
let result;

const numberButtons = document.querySelectorAll("#number-container > button");
const operationButtons = document.querySelectorAll(
  "#operation-container > button"
);
const resultSelector = document.querySelector("#result");

//Setting up listeners for numbers
numberButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (inputOneBool === false) {
      inputOne = element.textContent;
      inputOneBool = true;
      console.log(`input one is ${inputOne}`);
      return;
    } else if (inputOneBool === true && inputTwoBool === false) {
      inputTwo = element.textContent;
      inputTwoBool = true;
      console.log(`input two is ${inputTwo}`);
      return;
    } else {
      return;
    }
  });
});

//Setting up listeners for operations
operationButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (operationBool === false) {
      switchStatementOperation(element.className);
      operationBool = true;
    } else if (operationBool === true) {
      result = operate(operation, inputOne, inputTwo);
      console.log(result);
      inputOneBool = false;
      inputTwoBool = false;
      resultSelector.textContent = result;
    }
    return;
  });
});
