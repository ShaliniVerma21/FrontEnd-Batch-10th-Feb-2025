/*
Abstraction is the concept of hiding the complex reality while exposing only 
the necessary parts. It allows developers to focus on interactions at a higher level 
without needing to understand the intricate details of the implementation.

Examples- whatsapp message, phone call etc.

In JavaScript, abstraction can be achieved through:

1. Functions: By creating functions that encapsulate complex logic, you can provide 
a simple interface for users.

2.Classes: With ES6 classes, you can create objects that encapsulate data and behavior, 
providing a clear interface for users.

3. Modules: JavaScript modules allow you to expose only certain parts of your code 
while keeping the rest private.

*/
import { calculateArea1 } from "./circle.js";
//1. functions
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

console.log(calculateArea(5)); // Outputs: 78.53981633974483
console.log(calculateArea1(10));




