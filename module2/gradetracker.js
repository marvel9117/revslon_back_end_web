// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Initialize an empty array to store grades
let grades = [];

// Function to add a new grade
function addGrade() {
    try {
        let grade = parseFloat(prompt("Enter a grade (0-100): "));
        if (isNaN(grade) || grade < 0 || grade > 100) {
            throw new Error("Invalid input! Grade must be a number between 0 and 100.");
        }
        grades.push(grade);
        console.log(`Grade ${grade} added successfully!`);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Function to calculate the average grade
function calculateAverage() {
    try {
        if (grades.length === 0) {
            throw new Error("No grades available to calculate average.");
        }
        let total = grades.reduce((sum, grade) => sum + grade, 0);
        let average = total / grades.length;
        console.log(`The average grade is: ${average.toFixed(2)}`);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Function to find the highest grade
function findHighestGrade() {
    try {
        if (grades.length === 0) {
            throw new Error("No grades available to find the highest grade.");
        }
        let highest = Math.max(...grades);
        console.log(`The highest grade is: ${highest}`);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Function to find the lowest grade
function findLowestGrade() {
    try {
        if (grades.length === 0) {
            throw new Error("No grades available to find the lowest grade.");
        }
        let lowest = Math.min(...grades);
        console.log(`The lowest grade is: ${lowest}`);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Function to display all grades
function displayGrades() {
    try {
        if (grades.length === 0) {
            throw new Error("No grades to display.");
        } else {
            console.log("All Grades: " + grades.join(", "));
        }
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Main menu
function mainMenu() {
    let choice;
    do {
        console.log("\n--- Student Grade Management ---");
        console.log("1. Add New Grade");
        console.log("2. Calculate Average Grade");
        console.log("3. Find Highest Grade");
        console.log("4. Find Lowest Grade");
        console.log("5. Display All Grades");
        console.log("6. Exit");

        try {
            choice = prompt("Choose an option (1-6): ");

            if (!["1", "2", "3", "4", "5", "6"].includes(choice)) {
                throw new Error("Invalid choice! Please enter a number between 1 and 6.");
            }

            switch (choice) {
                case "1":
                    addGrade();
                    break;
                case "2":
                    calculateAverage();
                    break;
                case "3":
                    findHighestGrade();
                    break;
                case "4":
                    findLowestGrade();
                    break;
                case "5":
                    displayGrades();
                    break;
                case "6":
                    console.log("Exiting program. Goodbye!");
                    break;
            }
        } catch (error) {
            console.log("Error: " + error.message);
        }
    } while (choice !== "6");
}

// Start the program
mainMenu();
