function add(firstInput, secondInput) {
  return firstInput + secondInput;
}

function subtract(firstInput, secondInput) {
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
  return functionInput(firstInput, secondInput);
}
