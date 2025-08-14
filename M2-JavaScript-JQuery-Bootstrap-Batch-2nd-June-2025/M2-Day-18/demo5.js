//Polymorphism
//1. Method overriding
class MathsOperation {
    add(a, b, c) {
        if (c != undefined) {
            return a + b + c;
        }
        else {
            return a + b;
        }
    }

    multiply(a, b, c) {
        if (c != undefined) {
            return a * b * c;
        }
        else {
            return a * b;
        }
    }
}

//create object
let maths = new MathsOperation();

//functions calling
console.log(maths.add(10, 20, 30)); //40
console.log(maths.add(10, 20)); //30
console.log(maths.multiply(10, 20, 30)); //6000
console.log(maths.multiply(10, 20)); //200