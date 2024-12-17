// Array Manipulation Program

// Function to sort an array in ascending order
function sortAscending(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// Function to sort an array in descending order
function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

// Function to reverse an array
function reverseArray(arr) {
  return arr.slice().reverse();
}

// Function to find the second largest element in an array
function findSecondLargest(arr) {
  let uniqueArr = [...new Set(arr)]; 
  if (uniqueArr.length < 2) {
    throw new Error("Array must have at least two unique elements.");
  }
  uniqueArr.sort((a, b) => b - a); 
  return uniqueArr[1]; 
}

// Function to remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


