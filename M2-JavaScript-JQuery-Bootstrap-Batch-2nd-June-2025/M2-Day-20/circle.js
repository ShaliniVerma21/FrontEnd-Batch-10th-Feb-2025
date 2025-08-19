//2. classes
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // Outputs: 78.53981633974483

//3.Modules
// circle.js
const PI = Math.PI;

function calculateArea1(radius) {
    return PI * radius * radius;
}

export { calculateArea1 };