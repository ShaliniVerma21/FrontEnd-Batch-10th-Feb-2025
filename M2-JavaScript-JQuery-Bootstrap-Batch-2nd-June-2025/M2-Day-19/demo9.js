//Example-9 using class, objects, functions,constructors, variables and Inheritance Concepts

//E-commerce Product System

// Base class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        return `${this.name} - Price: $${this.price}`;
    }
}

// Subclass for DigitalProduct
class DigitalProduct extends Product {
    constructor(name, price, fileSize) {
        super(name, price);
        this.fileSize = fileSize;
    }

    displayInfo() {
        return `${super.displayInfo()}, File Size: ${this.fileSize} MB`;
    }
}

// Subclass for PhysicalProduct
class PhysicalProduct extends Product {
    constructor(name, price, weight) {
        super(name, price);
        this.weight = weight;
    }

    displayInfo() {
        return `${super.displayInfo()}, Weight: ${this.weight} kg`;
    }
}

// Usage
const digitalProd = new DigitalProduct("E-Book", 15, 5);
const physicalProd = new PhysicalProduct("Coffee Mug", 10, 0.5);

console.log(digitalProd.displayInfo()); // Output: E-Book - Price: $15, File Size: 5 MB
console.log(physicalProd.displayInfo()); // Output: Coffee Mug - Price: $10, Weight: 0.5 kg