//Example-4 using class, objects, functions and constructors, variables.
// Country Delight-like application in JavaScript

//1. Product Class
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to display product details
    display() {
        return `${this.name} - Price: $${this.price}, Available: ${this.quantity}`;
    }
}

//2. Order Class
class Order {
    constructor() {
        this.orderItems = [];
    }

    // Method to add a product to the order
    addProduct(product, quantity) {
        if (product.quantity >= quantity) {
            this.orderItems.push({ product, quantity });
            product.quantity -= quantity; // Reduce available quantity
            console.log(`${quantity} of ${product.name} added to order.`);
        } else {
            console.log(`Not enough ${product.name} in stock.`);
        }
    }

    // Method to calculate total price
    calculateTotal() {
        return this.orderItems.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    // Method to display order items
    displayOrder() {
        this.orderItems.forEach(item => {
            console.log(`${item.quantity} x ${item.product.name} - $${item.product.price * item.quantity}`);
        });
    }
}

//3. Usage
// Creating product instances
const product1 = new Product("Fresh Milk", 2.50, 100);
const product2 = new Product("Organic Eggs", 3.00, 50);
const product3 = new Product("Whole Wheat Bread", 2.00, 30);

// Displaying product details
console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

// Creating an order instance
const order = new Order();

// Adding products to the order
order.addProduct(product1, 2);
order.addProduct(product2, 1);
order.addProduct(product3, 3);

// Displaying order items
console.log("Order Items:");
order.displayOrder();

// Calculating total price
const total = order.calculateTotal();
console.log(`Total Price: $${total.toFixed(2)}`);