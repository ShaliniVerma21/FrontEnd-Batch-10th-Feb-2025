/*
What is an Object?
An object is a collection of key-value pairs. It allows you to store multiple values in a single variable.
*/

// Example of an object-Person
const Person = {
  name: "Shalini",
  age: 28,
  isDeveloper: true,
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

console.log(Person.name); // Shalini
console.log(Person.greet()); // Hello, I'm Shalini

//AdharCard Object
const AdharCard = {
  name: "Shalini",
  age: 28,
  address: "Delhi",
  isVerified: true,
  verify: function () {
    return `Your Adhar Card is ${
      this.isVerified ? "Verified" : "Not Verified"
    }`;
  },
};

//access data
console.log(AdharCard.name); // Shalini
console.log(AdharCard.verify()); // Your Adhar Card is Verified

/*
What is an Array?
An array is an ordered collection of items (elements), which can be of any type.
*/

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]); // Banana

//Array Methods
fruits.push("Orange"); // Add to end
fruits.pop(); // Remove from end
fruits.unshift("Guava"); // Add to start
fruits.shift(); // Remove from start

fruits.forEach((fruit) => console.log(fruit));

//students array
const students = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 21 },
];
//access data
console.log(students[0].name); // John
console.log(students[1].age); // 22

/*
What is a Function?
A function is a reusable block of code that performs a specific task.
*/

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Shalini")); // Hello, Shalini!

// Function Types

// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow Function
const divide = (a, b) => a / b;

// Anonymous Function (used in callbacks)
setTimeout(function () {
  console.log("Hello after 1 second");
}, 1000);

//Built-in JavaScript Objects

//1. Date Object : Used to work with dates and times.

const now = new Date(); // Current date & time
console.log(now); // Output: Current date & time
const specificDate = new Date("2024-07-01");
console.log(specificDate); // Output: 2024-07-01T00:00
const fromTimestamp = new Date(1712092800000);
console.log(fromTimestamp); // Output: 2024-07-01T00:00


// Getting values
console.log(now.getFullYear());
console.log(now.getMonth()); // 0-11
console.log(now.getDate());

// Setting values
specificDate.setFullYear(2025);
specificDate.setMonth(11); // December
specificDate.setDate(25);

// Formatting
console.log(now.toLocaleString());
console.log(now.toISOString());
console.log(now.toDateString());

// Difference between dates
const d1 = new Date("2024-01-01");
const d2 = new Date("2024-07-01");
const diffInDays = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log(diffInDays); // 181 days

// Add days to a date
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
console.log(addDays(now, 5));

//2. Math Object : Used to perform mathematical operations.
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // Random number between 0-1
console.log(Math.max(1,2,3,4,4));

//3.Object Object : Contains methods for manipulating objects.

const user = { name: "Shalini", age: 27 };
console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.values(user)); // ['Shalini', 27]
console.log(Object.entries(user)); // [['name', 'Shalini'], ['age', 27]]

const copy = Object.assign({}, user);
console.log(copy);

//4. Array Object : Built-in methods for array manipulation.
const nums = [1, 2, 3, 4, 5];

console.log(nums.map((x) => x * 2)); // [2, 4, 6, 8, 10]
console.log(nums.filter((x) => x > 2)); // [3, 4, 5]
console.log(nums.reduce((a, b) => a + b, 0)); // 15
console.log(nums.includes(3)); // true

//5. Function Object : Functions are also objects in JavaScript.

function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello.name); // sayHello
console.log(sayHello.length); // 1 (number of parameters)
console.log(typeof sayHello); // function

// Function as a property
const person = {
  name: "Shalini",
  speak: function () {
    return "Speaking...";
  },
};

console.log(person.speak()); // Speaking...
