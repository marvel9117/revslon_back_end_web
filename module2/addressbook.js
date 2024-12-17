const prompt = require('prompt-sync')();

// Address Book Object
let addressBook = {};

// Function to add a new contact
function addContact(name, phone, email, address) {
    try {
        if (!name || !phone || !email || !address) {
            throw new Error("All fields (name, phone, email, address) are required.");
        }
        if (addressBook[name]) {
            throw new Error(`${name} already exists in the address book.`);
        }

        addressBook[name] = {
            phone: phone,
            email: email,
            address: address
        };
        console.log(`${name} has been added to the address book.`);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Function to search for a contact by name
function searchContact(name) {
    try {
        if (!name) {
            throw new Error("Name is required for searching.");
        }
        if (addressBook[name]) {
            console.log("Contact details:");
            console.log(`Name: ${name}`);
            console.log(`Phone: ${addressBook[name].phone}`);
            console.log(`Email: ${addressBook[name].email}`);
            console.log(`Address: ${addressBook[name].address}`);
        } else {
            throw new Error(`${name} not found in the address book.`);
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Function to display all contacts
function displayContacts() {
    try {
        if (Object.keys(addressBook).length === 0) {
            throw new Error("No contacts in the address book.");
        }
        console.log("All contacts:");
        for (let name in addressBook) {
            console.log(`Name: ${name}`);
            console.log(`Phone: ${addressBook[name].phone}`);
            console.log(`Email: ${addressBook[name].email}`);
            console.log(`Address: ${addressBook[name].address}`);
            console.log("-----");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Function to interact with the Address Book (add, search, display)
function addressBookUsage(action) {
    try {
        if (action === "add") {
            let name = prompt("Enter the contact name:");
            let phone = prompt("Enter the contact phone number:");
            let email = prompt("Enter the contact email:");
            let address = prompt("Enter the contact address:");
            addContact(name, phone, email, address);
        } else if (action === "search") {
            let name = prompt("Enter the name of the contact you want to search:");
            searchContact(name);
        } else if (action === "display") {
            displayContacts();
        } else {
            throw new Error("Invalid action. Please choose 'add', 'search', or 'display'.");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Main interaction loop
function startAddressBook() {
    try {
        let action = prompt("What would you like to do? (add, search, display)");

        while (action !== "exit") {
            addressBookUsage(action);
            action = prompt("What would you like to do next? (add, search, display, or exit to quit)");
        }

        console.log("Goodbye!");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Start the address book application
startAddressBook();

