// A simple calculator using basic concepts: variables, data types, and operators.

console.log("Welcome to the Simple Calculator!");


let num1 = 10;
let num2 = 5;
let operation = "+";

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        result = num1 / num2;
    }
} else {
    console.log("Error: Invalid operation.");
}

// Display the result if it was calculated
if (result !== undefined) {
    console.log("The result is: " + result);
}
