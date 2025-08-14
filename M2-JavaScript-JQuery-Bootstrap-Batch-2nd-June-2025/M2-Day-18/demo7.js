//Example-1 using class, objects, functions and constructors, variables.
//Flipcart Application

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

// 2. ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.cartItems = [];
    }

    // Method to add a product to the cart
    addProduct(product, quantity) {
        if (product.quantity >= quantity) {
            this.cartItems.push({ product, quantity });
            product.quantity -= quantity; // Reduce available quantity
            console.log(`${quantity} of ${product.name} added to cart.`);
        } else {
            console.log(`Not enough ${product.name} in stock.`);
        }
    }

    // Method to calculate total price
    calculateTotal() {
        return this.cartItems.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    // Method to display cart items
    displayCart() {
        this.cartItems.forEach(item => {
            console.log(`${item.quantity} x ${item.product.name} - $${item.product.price * item.quantity}`);
        });
    }
}

//3. Usage
// Creating product instances
const product1 = new Product("Laptop", 999.99, 10);
const product2 = new Product("Smartphone", 499.99, 5);
const product3 = new Product("Headphones", 199.99, 20);

// Displaying product details
console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

// Creating a shopping cart instance
const cart = new ShoppingCart();

// Adding products to the cart
cart.addProduct(product1, 1);
cart.addProduct(product2, 2);
cart.addProduct(product3, 3);

// Displaying cart items
console.log("Cart Items:");
cart.displayCart();

// Calculating total price
const total = cart.calculateTotal();
console.log(`Total Price: $${total.toFixed(2)}`);