// Loops in JavaScript

// 1. For Loop
/*
Syntax : 

for (initialization; condition; increment/decrement) {
// code to be executed
}

Example : 
for (let i = 0; i>=5; i++)
{
  console.log(i);
}
*/

//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//fruits
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//break
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

//continue
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// 2. While Loop
/*
Syntax: 
while (condition) {
// code to be executed
increment/decrement
}

example: 
let i = 0;
while (i<5)
// code to be executed
i++;
}
 */

//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let j = 0;
while (j < arr.length) {
  if (arr[j] === target) {
    console.log(`Found ${target} at index ${j}`);
    break;
  }
  j++;
}

// 3. Do-While Loop
/*
Syntax:
do {
// code to be executed
increment/decrement
} while (condition);

Example:
let i = 0;
do {
console.log(i);
i++;
} while (i<5);
 */

//do while loop
let i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 < 5);

//coin flip
let flip;
do {
  flip = Math.random() < 0.5 ? "Heads" : "Tails";
  console.log(`You got: ${flip}`);
} while (flip === "Heads");

// 4. For-In Loop
/*
Syntax:
for (let variable in object) {
// code to be executed
}

Example:
let person = {
name: "John",
age: 30
};  
for (let key in person) {
console.log(`${key}: ${person[key]}`);
}
*/

//for in loop
const person1 = { name: "John", age: 30, occupation: "Developer" };
for (let prop in person1) {
  console.log(`${prop}: ${person1[prop]}`);
}

const address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

const person = { name: "John", age: 30, address: address };

for (let prop in person) {
  if (typeof person[prop] === "object") {
    for (let subProp in person[prop]) {
      console.log(`${prop}.${subProp}: ${person[prop][subProp]}`);
    }
  } else {
    console.log(`${prop}: ${person[prop]}`);
  }
}

// 5. For-Of Loop
/*
Syntax:
for (let variable of iterable) {
// code to be executed
}

Example:
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
console.log(number);
}
*/

//for of loop
const fruitss = ["apple", "banana", "cherry"];
for (let fruit of fruitss) {
  console.log(fruit);
}

const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num * 2);
}
