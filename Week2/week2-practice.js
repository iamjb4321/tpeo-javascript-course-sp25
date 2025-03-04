// WEEK 2 PRACTICE: 
// Task: Write a function named convertFeetToInches that takes in a parameter named length that represents the length of an object in feet and returns the length converted to inches.
// After writing the function, add code that calls the function with lengths of 1 foot, 3 feet, and 30 feet and outputs these lengths converted to inches to the terminal.

function convertFeetToInches(length) {
    return length * 12;
}

// initializing variable to store the return
var inches = convertFeetToInches(1);
console.log("1 foot to inches: " + inches);

// calling function within the console.log itself
console.log("3 foot to inches: " + convertFeetToInches(3));

// calling function and using backticks syntax, called a "template literal"
// ${expression} is called a "placeholder"
console.log(`30 foot to inches: ${convertFeetToInches(30)}`);