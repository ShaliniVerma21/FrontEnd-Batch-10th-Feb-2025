/*
Encapsulation is a fundamental concept in object-oriented programming that restricts 
direct access to some of an object's components and can prevent the accidental 
modification of data. In JavaScript, encapsulation can be achieved using closures, 
classes, and modules.
*/

//Example 1: Using Closures
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement());  // 1