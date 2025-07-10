//Special Operators 

/*
 1.Spread Operator (...):

The spread operator allows an iterable (like an array or string) to be expanded in 
places where zero or more arguments or elements are expected. It is often used to 
create copies of arrays or to merge arrays.
 */
// Print message on console
console.log("Using Spread Operator");

// Sample arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merging arrays using the spread operator
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array
const copiedArray = [...array1];
console.log("Copied Array:", copiedArray); // Output: [1, 2, 3]



/*
2.Rest Parameters (...):

The rest parameters syntax allows a function to accept an indefinite number of 
arguments as an array. This is useful when you want to handle multiple arguments 
without explicitly defining them.
*/

// Print message on console
console.log("Using Rest Parameters");

// Function to calculate the sum of any number of arguments
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum of 1, 2, 3:", sum(1, 2, 3)); // Output: 6
console.log("Sum of 4, 5, 6, 7:", sum(4, 5, 6, 7)); // Output: 22


/*
3.Destructuring Assignment:

Destructuring assignment is a syntax that allows unpacking values from arrays 
or properties from objects into distinct variables. This makes it easier to work 
with complex data structures.
*/

// Print message on console
console.log("Using Destructuring Assignment");

// Sample object
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Destructuring the object
const { name, age, city } = person;
console.log(`Name: ${name}, Age: ${age}, City: ${city}`); // Output: Name: Alice, Age: 30, City: New York

// Sample array
const colors = ["red", "green", "blue"];

// Destructuring the array
const [firstColor, secondColor] = colors;
console.log(`First Color: ${firstColor}, Second Color: ${secondColor}`); // Output: First Color: red, Second Color: green


/*
4.Nullish Coalescing Operator (??):

The nullish coalescing operator returns the right-hand operand when the left-hand 
operand is null or undefined. This is useful for providing default values.
*/

// Print message on console
console.log("Using Nullish Coalescing Operator");

// Sample variables
const userInput = null; // Simulating a case where user input is null
const defaultValue = "Default Value";

// Using nullish coalescing operator
const finalValue = userInput ?? defaultValue;
console.log("Final Value:", finalValue); // Output: Final Value: Default Value

// Another example
const anotherInput = 0; // 0 is a falsy value but not null or undefined
const anotherFinalValue = anotherInput ?? defaultValue;
console.log("Another Final Value:", anotherFinalValue); // Output: Another Final Value: 0



//========================================================================
//Real-World Example: Shopping Cart System
//========================================================================

// Print message on console
console.log("Welcome to the Shopping Cart System");

// Sample products
const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Tablet", price: 299.99 },
];

// 1. Using Spread Operator
function addProductsToCart(cart, ...newProducts) {
    return [...cart, ... newProducts]; // Merging existing cart with new products
}

// Initial cart
let cart = [];

// Adding products to the cart
cart = addProductsToCart(cart, products[0], products[1]);
console.log("Cart after adding products:", cart);

// 2. Using Rest Parameters
function calculateTotalPrice(...items) {
    return items.reduce((total, item) => total + item.price, 0);
}

// Calculate total price of items in the cart
let totalPrice = calculateTotalPrice(...cart);
console.log(`Total Price: $${totalPrice.toFixed(2)}`); // Output: Total price of items

// 3. Using Destructuring Assignment
function displayProductDetails({ name, price }) {
    console.log(`Product: ${name}, Price: $${price.toFixed(2)}`);
}

// Display details of each product in the cart
cart.forEach(product => displayProductDetails(product));

// 4. Using Nullish Coalescing Operator
function getDiscountedPrice(price, discount) {
    const discountAmount = discount ?? 0; // If discount is null or undefined, use 0
    return price - discountAmount;
}

// Example usage of the discount function
let discountedPrice = getDiscountedPrice(cart[0].price, null); // No discount
console.log(`Discounted Price of ${cart[0].name}: $${discountedPrice.toFixed(2)}`); // Output: Price without discount

discountedPrice = getDiscountedPrice(cart[0].price, 100); // With discount
console.log(`Discounted Price of ${cart[0].name}: $${discountedPrice.toFixed(2)}`); // Output: Price with discount

// Additional Examples of Special Operators
let cartCopy = [...cart];
console.log("Cart Copy:", cartCopy);

const firstProduct = cart[0];
const { id, name1, price } = firstProduct;
console.log(`Extracted Product - ID: ${id}, Name: ${name1}, Price: $${price.toFixed(2)}`);

function logProductNames(...productNames) {
    console.log("Product Names:", productNames.join(", "));
}

logProductNames(...cart.map(product => product.name1));

const userDiscount = null; // Simulating a case where the user discount is not set
const finalDiscount = userDiscount ?? 10; // Default to 10 if userDiscount is null or undefined
console.log(`Final Discount: $${finalDiscount}`); // Output: Final Discount: $10