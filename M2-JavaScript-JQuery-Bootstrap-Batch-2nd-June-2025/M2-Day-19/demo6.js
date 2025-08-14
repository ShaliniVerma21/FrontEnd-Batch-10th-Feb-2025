//Example-6 using class, objects, functions,constructors, variables and Inheritance Concepts

//Example 1: Vehicle Management System
// Base class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Subclass for Car
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    displayInfo() {
        return `${super.displayInfo()} with ${this.doors} doors`;
    }
}

// Subclass for Motorcycle
class Motorcycle extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type;
    }

    displayInfo() {
        return `${super.displayInfo()} - ${this.type} motorcycle`;
    }
}

// Usage
const car = new Car("Toyota", "Camry", 2020, 4);
const motorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2019, "Cruiser");

console.log(car.displayInfo()); // Output: 2020 Toyota Camry with 4 doors
console.log(motorcycle.displayInfo()); // Output: 2019 Harley-Davidson Street 750 - Cruiser motorcycle