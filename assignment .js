console.log("hello")// Add function with default values
function add(a = 0, b = 0) {
    return a + b;
}
console.log("Add:", add(5));

// Subtract function with default values
function subtract(a = 0, b = 0) {
    return a - b;
}
console.log("Subtract:", subtract(10));

// Multiply function using rest parameter
function multiply(...numbers) {
    if (numbers.length === 0) return 0; 
    return numbers.reduce((acc, num) => acc * num, 1);
}
console.log("Multiply:", multiply(2, 3, 4));

// Divide function using rest parameter
function divide(...numbers) {
    if (numbers.length === 0) return "No numbers";
    return numbers.reduce((acc, num) => acc / num);
}
console.log("Divide:", divide(100, 2, 5));

//Task 2 
// 1) Add function → Check for undefined arguments
function add(a, b) {
    if (a === undefined || b === undefined) {
        return "Error: Missing arguments!";
    }
    return a + b;
}

// 2) Subtract function → Using ES6 default parameters
function subtract(a = 0, b = 0) {
    return a - b;
}

// 3) Multiply function → Using Rest Parameters
function multiply(...nums) {
    return nums.reduce((acc, val) => acc * val, 1);
}

// 4) Divide function → Using 'arguments' object
function divide() {
    if (arguments.length < 2) {
        return "Error: Need at least two numbers!";
    }
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}

// ---------------------
// Testing the functions
// ---------------------

console.log("Add:", add(5, 3));          // 8
console.log("Add (missing):", add(5));   // Error
console.log("Subtract:", subtract(10, 4)); // 6
console.log("Subtract (default):", subtract(10)); // 10 - 0 = 10
console.log("Multiply:", multiply(2, 3, 4)); // 24
console.log("Divide:", divide(100, 5, 2));   // 10
