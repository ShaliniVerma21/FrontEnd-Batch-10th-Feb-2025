//Example-10 E-commerce System

// Class: Product
class Product {
    constructor(id, name, price, stock) {
        this.id = id;          // Unique identifier for the product
        this.name = name;      // Name of the product
        this.price = price;    // Price of the product
        this.stock = stock;    // Available stock for the product
    }

    // Method to display product information
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Stock: ${this.stock}`);
    }
}

// Class: Customer
class Customer {
    constructor(name, email) {
        this.name = name;      // Customer's name
        this.email = email;    // Customer's email
        this.cart = new Cart(); // Customer's shopping cart
    }

    // Method to display customer information
    displayInfo() {
        console.log(`Customer Name: ${this.name}, Email: ${this.email}`);
    }
}

// Class: Cart
class Cart {
    constructor() {
        this.items = [];       // Array to hold items in the cart
    }

    // Method to add a product to the cart
    addProduct(product, quantity) {
        if (product.stock >= quantity) {
            this.items.push({ product, quantity });
            product.stock -= quantity; // Reduce stock in the product
            console.log(`Added ${quantity} of ${product.name} to the cart.`);
        } else {
            console.log(`Not enough stock for ${product.name}. Available: ${product.stock}`);
        }
    }

    // Method to remove a product from the cart
    removeProduct(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            const removedItem = this.items[index];
            removedItem.product.stock += removedItem.quantity; // Restore stock
            this.items.splice(index, 1); // Remove item from cart
            console.log(`Removed ${removedItem.product.name} from the cart.`);
        } else {
            console.log(`Product not found in the cart.`);
        }
    }

    // Method to calculate total price of items in the cart
    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }

    // Method to display cart items
    displayCart() {
        console.log("Items in Cart:");
        this.items.forEach(item => {
            console.log(`${item.quantity} x ${item.product.name} - $${item.product.price} each`);
        });
        console.log(`Total: $${this.calculateTotal()}`);
    }
}

// Class: Order
class Order {
    constructor(customer, cart) {
        this.customer = customer; // Customer who placed the order
        this.cart = cart;         // Cart associated with the order
        this.orderDate = new Date(); // Date of the order
    }

    // Method to display order summary
    displayOrderSummary() {
        console.log(`Order Summary for ${this.customer.name}:`);
        this.cart.displayCart();
        console.log(`Order Date: ${this.orderDate}`);
    }
}

// Example usage
const product1 = new Product(1, "Laptop", 999.99, 10);
const product2 = new Product(2, "Smartphone", 499.99, 20);
const product3 = new Product(3, "Headphones", 199.99, 15);

// Create a customer
const customer = new Customer("John Doe", "john.doe@example.com");
customer.displayInfo(); // Display customer information

// Add products to the cart
customer.cart.addProduct(product1, 1); // Add 1 Laptop
customer.cart.addProduct(product2, 2); // Add 2 Smartphones
customer.cart.addProduct(product3, 3); // Add 3 Headphones

// Display cart items
customer.cart.displayCart();

// Remove a product from the cart
customer.cart.removeProduct(2); // Remove Smartphone from cart

// Display updated cart items
customer.cart.displayCart();

// Create an order
const order = new Order(customer, customer.cart);
order.displayOrderSummary();