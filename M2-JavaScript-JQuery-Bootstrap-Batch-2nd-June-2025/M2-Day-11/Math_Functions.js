// Print message on console
console.log("Welcome to the Math Utility Tool");

// Print message on webpage
document.write("Welcome to the Math Utility Tool<br><br>");

// 1. User Defined Functions

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2); // Area = π * r^2
}

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width; // Area = length * width
}

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height; // Area = 0.5 * base * height
}

// Function to generate a random integer between min and max (inclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Random integer between min and max
}

// Function to calculate the mean (average) of an array of numbers
function calculateMean(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

// Function to calculate the median of an array of numbers
function calculateMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b); // Sort the array
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2; // Return median
}

// Function to calculate the standard deviation of an array of numbers
function calculateStandardDeviation(numbers) {
    const mean = calculateMean(numbers);
    const variance = calculateMean(numbers.map(num => Math.pow(num - mean, 2))); // Variance = mean of squared differences
    return Math.sqrt(variance); // Standard deviation = sqrt(variance)
}

// 2. Using Math Built-in Functions

// Calculate the area of a circle with radius 5
const circleArea = calculateCircleArea(5);
console.log(`Area of Circle (radius 5): ${circleArea.toFixed(2)}`); // Output: Area of Circle

// Calculate the area of a rectangle with length 10 and width 5
const rectangleArea = calculateRectangleArea(10, 5);
console.log(`Area of Rectangle (10 x 5): ${rectangleArea}`); // Output: Area of Rectangle

// Calculate the area of a triangle with base 8 and height 5
const triangleArea = calculateTriangleArea(8, 5);
console.log(`Area of Triangle (base 8, height 5): ${triangleArea}`); // Output: Area of Triangle

// Generate a random integer between 1 and 100
const randomInteger = getRandomInteger(1, 100);
console.log(`Random Integer between 1 and 100: ${randomInteger}`); // Output: Random Integer

// Sample array of numbers for statistical calculations
const sampleNumbers = [10, 20, 30, 40, 50];

// Calculate the mean of the sample numbers
const mean = calculateMean(sampleNumbers);
console.log(`Mean of Sample Numbers: ${mean}`); // Output: Mean

// Calculate the median of the sample numbers
const median = calculateMedian(sampleNumbers);
console.log(`Median of Sample Numbers: ${median}`); // Output: Median

// Calculate the standard deviation of the sample numbers
const stdDev = calculateStandardDeviation(sampleNumbers);
console.log(`Standard Deviation of Sample Numbers: ${stdDev.toFixed(2)}`); // Output: Standard Deviation

// Additional Examples of Math Built-in Functions

// Using Math.abs() to get the absolute value
const negativeNumber = -42;
console.log(`Absolute Value of ${negativeNumber}: ${Math.abs(negativeNumber)}`); // Output: Absolute Value

// Using Math.ceil() to round up
const decimalNumber = 4.3;
console.log(`Ceiling of ${decimalNumber}: ${Math.ceil(decimalNumber)}`); // Output: Ceiling

// Using Math.floor() to round down
console.log(`Floor of ${decimalNumber}: ${Math.floor(decimalNumber)}`); // Output: Floor

// Using Math.max() and Math.min() to find maximum and minimum values
const maxNumber = Math.max(...sampleNumbers);
const minNumber = Math.min(...sampleNumbers);
console.log(`Maximum Number: ${maxNumber}, Minimum Number: ${minNumber}`); // Output: Max and Min
