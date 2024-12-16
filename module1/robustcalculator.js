//Robust Calculator

const prompt = require('prompt-sync')();

console.log("Welcome to the Robust Calculator!");

function isValidNumber(value) {
  return !isNaN(value) && value !== "";
}

try {
  let num1 = prompt("Enter first number: ");
  if (!isValidNumber(num1)) {
    throw new Error("Invalid input: First number must be a valid number.");
  }
  num1 = parseFloat(num1);

  let num2 = prompt("Enter second number: ");
  if (!isValidNumber(num2)) {
    throw new Error("Invalid input: Second number must be a valid number.");
  }
  num2 = parseFloat(num2);

  let operation = prompt("Enter operation (+, -, *, /): ");
  if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
    throw new Error("Invalid operation: Please enter a valid operation (+, -, *, /).");
  }

  let result;
  
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      throw new Error("Error: Division by zero is not allowed.");
    } else {
      result = num1 / num2;
    }
  }

  console.log("The result is: " + result);

} catch (error) {
  console.log("Error: " + error.message);
}

