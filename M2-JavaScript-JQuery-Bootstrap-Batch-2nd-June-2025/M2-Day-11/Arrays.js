// Array
// Array is a collection of elements of the same type

// create an array
let numbers = [1, 2, 3, 4, 5];

// access an element in the array
console.log(numbers[0]); // output: 1
console.log(numbers[1]); // output: 2
console.log(numbers[2]); // output: 3
console.log(numbers[3]); // output: 4
console.log(numbers[4]); // output: 5

// length of array
console.log("Length of the array: " + numbers.length); // output: 5

// insert data in an array
numbers.push(6, 7, 8);
console.log(numbers); // output: [1, 2, 3, 4, 5, 6, 7, 8]

// remove data from an array (removes element from last)
numbers.pop();
console.log(numbers); // output: [1, 2, 3, 4, 5, 6, 7]

// remove data from start
numbers.shift();
console.log(numbers); // output: [2, 3, 4, 5, 6, 7]

// unshift (adding element in starting)
numbers.unshift(1);
console.log(numbers); // output: [1, 2, 3, 4, 5, 6, 7]

// reduce (convert an array into a single number by adding all elements)
let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum of array elements: " + sum); // output: 28

// join (converts an array into a string)
let str = numbers.join('-');
console.log("Joined string: " + str); // output: "1-2-3-4-5-6-7"

// slice (returns a shallow copy of a portion of an array)
let slicedArray = numbers.slice(1, 4);
console.log("Sliced array (index 1 to 4): " + slicedArray); // output: [2, 3, 4]

// splice (changes the contents of an array by removing or replacing existing elements)
numbers.splice(2, 1, 99); // removes 1 element at index 2 and adds 99
console.log("Array after splice: " + numbers); // output: [1, 2, 99, 4, 5, 6, 7]

// forEach (executes a provided function once for each array element)
numbers.forEach((num) => {
    console.log("Current number: " + num);
});

// map (creates a new array with the results of calling a provided function on every element)
let doubled = numbers.map(num => num * 2);
console.log("Doubled array: " + doubled); // output: [2, 4, 198, 8, 10, 12, 14]

// filter (creates a new array with all elements that pass the test implemented by the provided function)
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers: " + evenNumbers); // output: [2, 4, 6]

// find (returns the value of the first element that passes a test)
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number: " + firstEven); // output: 2

// includes (determines whether an array includes a certain value)
let hasFive = numbers.includes(5);
console.log("Array includes 5: " + hasFive); // output: true

// sort (sorts the elements of an array in place and returns the sorted array)
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted array: " + sortedNumbers); // output: [1, 2, 4, 5, 6, 7, 99]

// reverse (reverses the elements of an array in place)
let reversedNumbers = numbers.reverse();
console.log("Reversed array: " + reversedNumbers); // output: [99, 7, 6, 5, 4, 2, 1]

// concat (merges two or more arrays)
let moreNumbers = [8, 9, 10];
let combinedArray = numbers.concat(moreNumbers);
console.log("Combined array: " + combinedArray); // output: [99, 7, 6, 5, 4, 2, 1, 8, 9, 10]

// fill (fills all the elements of an array from a start index to an end index with a static value)
let filledArray = new Array(5).fill (0);
console.log("Filled array: " + filledArray); // output: [0, 0, 0, 0, 0]

// flat (creates a new array with all sub-array elements concatenated into it recursively up to the specified depth)
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log("Flattened array: " + flatArray); // output: [1, 2, 3, 4, 5, 6]

// every (tests whether all elements in the array pass the test implemented by the provided function)
let allEven = numbers.every(num => num % 2 === 0);
console.log("All numbers are even: " + allEven); // output: false

// some (tests whether at least one element in the array passes the test implemented by the provided function)
let hasOdd = numbers.some(num => num % 2 !== 0);
console.log("Array has at least one odd number: " + hasOdd); // output: true

// indexOf (returns the first index at which a given element can be found in the array, or -1 if it is not present)
let indexOfFour = numbers.indexOf(4);
console.log("Index of 4: " + indexOfFour); // output: index of 4

// lastIndexOf (returns the last index at which a given element can be found in the array, or -1 if it is not present)
let lastIndexOfTwo = numbers.lastIndexOf(2);
console.log("Last index of 2: " + lastIndexOfTwo); // output: index of 2

// fill (fills all the elements of an array from a start index to an end index with a static value)
let filledArrayWithValue = new Array(5).fill(7);
console.log("Filled array with 7: " + filledArrayWithValue); // output: [7, 7, 7, 7, 7]

// keys (returns a new Array Iterator object that contains the keys for each index in the array)
let keysIterator = numbers.keys();
console.log("Keys in the array:");
for (let key of keysIterator) {
    console.log(key); // output: index values
}

// values (returns a new Array Iterator object that contains the values for each index in the array)
let valuesIterator = numbers.values();
console.log("Values in the array:");
for (let value of valuesIterator) {
    console.log(value); // output: values in the array
}

// entries (returns a new Array Iterator object that contains the key/value pairs for each index in the array)
let entriesIterator = numbers.entries();
console.log("Entries in the array:");
for (let entry of entriesIterator) {
    console.log(entry); // output: [index, value] pairs
}




//========================================================================
//Shopping Cart Example
//========================================================================

// Create an array to hold the items in the shopping cart
let shoppingCart = [];

// Function to add an item to the cart
function addItem(item) {
    shoppingCart.push(item);
    console.log(`${item.name} has been added to the cart.`);
}

// Function to remove an item from the cart by name
function removeItem(itemName) {
    const index = shoppingCart.findIndex(item => item.name === itemName);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        console.log(`${itemName} has been removed from the cart.`);
    } else {
        console.log(`${itemName} is not in the cart.`);
    }
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total price: $${total.toFixed(2)}`);
}

// Function to display the items in the cart
function displayCart() {
    if (shoppingCart.length === 0) {
        console.log("Your shopping cart is empty.");
    } else {
        console.log("Items in your shopping cart:");
        shoppingCart.forEach(item => {
            console.log(`- ${item.name}: $${item.price.toFixed(2)}`);
        });
    }
}

// Function to clear the cart
function clearCart() {
    shoppingCart = [];
    console.log("Your shopping cart has been cleared.");
}

// Adding items to the cart
addItem({ name: "Laptop", price: 999.99 });
addItem({ name: "Mouse", price: 25.50 });
addItem({ name: "Keyboard", price: 45.00 });

// Displaying the cart
displayCart(); // Output: Items in your shopping cart

// Calculating the total price
calculateTotal(); // Output: Total price: $1070.49

// Removing an item from the cart
removeItem("Mouse");
displayCart(); // Output: Updated cart without the mouse

// Calculating the total price again
calculateTotal(); // Output: Updated total price

// Clearing the cart
clearCart();
displayCart(); // Output: Your shopping cart is empty.