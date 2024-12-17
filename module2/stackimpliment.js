//Stack Implimentation 

class Stack {
    constructor() {
        this.items = []; 
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty/underflow"; 
        }
        return this.items.pop();
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in stack";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}


//Reversing a string using stack
function reverseString(input) {
    const stack = new Stack();
    let reversed = "";

    // Push each character onto the stack
    for (let char of input) {
        stack.push(char);
    }

    // Pop characters to form the reversed string
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    return reversed;
}


//This is my  Example Usage
const originalString = "Marvel";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString); 
console.log("Reversed String:", reversedString); 
