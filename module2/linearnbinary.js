// this is a basic linear seach algorithim

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}




// this is a  binarysearch algorithim
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


//testing my functions(usage)
let numbers = [10, 20, 30, 40, 50];
let target = 30;

//test linear seach
console.log("Testing Linear Search:");
console.log(linearSearch(numbers, target));
console.log(linearSearch(numbers, 60));

//testing  binary search
console.log("Testing Binary Search:");
console.log(binarySearch(numbers, target));
console.log(binarySearch(numbers, 60));
