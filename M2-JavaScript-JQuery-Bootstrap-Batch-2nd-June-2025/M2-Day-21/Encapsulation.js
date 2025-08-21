/*
Encapsulation is the bundling of data (attributes) and methods (functions) that 
operate on the data into a single unit or class. It restricts direct access to some 
of the object's components, which can prevent the accidental modification of data.

In JavaScript, encapsulation can be achieved through:

1. Using Closures: You can create private variables using closures.
2. Using Symbols: You can use symbols to create private properties.
3. Using Classes: You can use classes to encapsulate data and methods.
4. Using Modules: You can use modules to encapsulate data and methods.
5. Using Classes with Private Fields: ES2022 introduced private class fields,
 which are prefixed with #.
*/

//1. using closures
//outer function
function createCircle(radius) {
    let area = Math.PI * radius * radius; // Private variable

    return {
        //innerfunction
        getArea: function() {
            return area; // Public method to access the private variable
        }
    };
}

const circle = createCircle(5);
console.log(circle.getArea()); // Outputs: 78.53981633974483


//2. Using Classes with Private Fields

class Circle {
    #radius; // Private field

    constructor(radius) {
        this.#radius = radius;
    }

    area() {
        return Math.PI * this.#radius * this.#radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // Outputs: 78.53981633974483
// console.log(myCircle.#radius); 
// SyntaxError: Private field '#radius' must be declared in an enclosing class