//5.E-commerce Product Management
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Product added: ${product.name}`);
    }

    listProducts() {
        console.log("Products:");
        this.products.forEach(product => {
            console.log(`${product.name} - $${product.price}`);
        });
    }
}

const productManager = new ProductManager();
productManager.addProduct(new Product('Laptop', 999));
productManager.addProduct(new Product('Smartphone', 499));
productManager.listProducts();