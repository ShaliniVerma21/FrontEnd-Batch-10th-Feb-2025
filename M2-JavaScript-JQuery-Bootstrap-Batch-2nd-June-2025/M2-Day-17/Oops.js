/*
==============================================================================
Object-Oriented Programming (OOP) in JavaScript
==============================================================================

What is OOP (Object-Oriented Programming)?
---------------------------------------------------
OOP is a programming style that organizes code into objects — self-contained units
that hold both data (properties) and behavior (methods).

JavaScript supports OOP through:
1️. Object Literals
2️. Constructor Functions (Pre-ES6)
3️. ES6+ Classes (Modern & Preferred)

Real-life Examples:
Think of a website like Amazon. Each "User", "Product", or "Order" is an object:
- A User has properties: name, email, address.
- A Product has methods: addToCart(), applyDiscount().
- These are defined using Classes and instantiated into real objects.

---------------------------------------------------
What is a Class?
---------------------------------------------------
A class is a blueprint/template for creating objects.

Syntax:
*/
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    display() {
      console.log(`${this.name} costs ₹${this.price}`);
    }
  }
  
  /*
  
  Real-life Example:
  A "Product" page on Flipkart uses a class like this to define details
  for mobiles, laptops, etc.
  
  ---------------------------------------------------
  What is an Object?
  ---------------------------------------------------
  An object is a real-world instance (living / non-living being) of a class.
  
  Syntax:
  */
  const mobile = new Product("iPhone 14", 79999);
  mobile.display(); // Output: iPhone 14 costs ₹79999
  
  /*

  Analogy:
  The iPhone 14 is an actual product created from the generic "Product" class.
  
  ---------------------------------------------------
  What is a Constructor?
  ---------------------------------------------------
  A constructor is a special method that runs when an object is created from a class.
  It initializes object properties.
  
  Constructor always uses: `constructor()`
  
  ---------------------------------------------------
  What is a Method?
  ---------------------------------------------------
  A method is a function defined inside a class that performs an action using the object.
  
  In above example: `display()` is a method of class `Product`.
  
  ---------------------------------------------------
  What is a Property?
  ---------------------------------------------------
  A property is a variable inside a class representing data.
  
  In the `Product` class: `name` and `price` are properties.
  
  ==============================================================================
  4 Main Pillars of OOP with Real-World Website Examples
  ==============================================================================
  
  1️.Encapsulation – Data and Methods Wrapped Together
  ---------------------------------------------------
  Concept:
  Encapsulation hides the internal state of an object and only exposes a public interface.
  
  Use private fields using `#` (ES2022+)
  
  Example:
  */
  class BankAccount {
    #balance = 0; // Private property
  
    constructor(accountHolder) {
      this.accountHolder = accountHolder;
    }
  
    deposit(amount) {
      if (amount > 0) this.#balance += amount;
    }
  
    getBalance() {
      return `₹${this.#balance}`;
    }
  }
  
  const acc1 = new BankAccount("Shalini");
  acc1.deposit(10000);
  console.log(acc1.getBalance()); // ₹10000
  
  /*
  Analogy:
  Bank apps don’t expose your balance variable directly – 
  you only get to see it through a method like `getBalance()`.
  
  ---------------------------------------------------
  
  2️. Inheritance – Reusability using Classes
  ---------------------------------------------------
  Concept:
  A child class can inherit properties/methods from a parent class.
  
  Syntax: `extends`, `super()`
  
  Example:
  */
  class User {
    constructor(name) {
      this.name = name;
    }
  
    login() {
      console.log(`${this.name} logged in.`);
    }
  }
  
  class Admin extends User {
    deleteUser(user) {
      console.log(`${this.name} deleted ${user}`);
    }
  }
  
  const admin1 = new Admin("Shalini");
  admin1.login();           // Shalini logged in.
  admin1.deleteUser("Amit"); // Shalini deleted Amit
  
  /*
  Analogy:
  An Admin Dashboard on a CMS like WordPress extends the basic User functionality
  but adds admin privileges (e.g., deleting users).
  
  ---------------------------------------------------
  
  3️. Polymorphism – One Method, Many Behaviors
  ---------------------------------------------------
  Concept:
  Same method name, different behavior depending on the object.
  
  Example:
  */
  class Notification {
    send() {
      console.log("Sending general notification");
    }
  }
  
  class EmailNotification extends Notification {
    send() {
      console.log("Sending email...");
    }
  }
  
  class SMSNotification extends Notification {
    send() {
      console.log("Sending SMS...");
    }
  }
  
  const messages = [new Notification(), new EmailNotification(), new SMSNotification()];
  messages.forEach(msg => msg.send());
  
  /*
  Analogy:
  Instagram notifies you through Push, SMS, or Email — all using `.send()` in different ways.
  
  ---------------------------------------------------
  
  4️.Abstraction – Hide Complexity, Show Only Essentials
  ---------------------------------------------------
  Concept:
  Abstraction hides inner implementation and shows only important features.
  
  Example using private methods:
  */
  class PaymentGateway {
    #connectToServer() {
      console.log("Connecting to payment server...");
    }
  
    makePayment(amount) {
      this.#connectToServer();
      console.log(`Payment of ₹${amount} done.`);
    }
  }
  
  const payment = new PaymentGateway();
  payment.makePayment(999);
  
  /*
  Analogy:
  While paying via Razorpay on a website, you don’t know how the backend server connects.
  You only use `makePayment()` — that's abstraction.
  
  ==============================================================================
  Summary Table
  ==============================================================================
  
  | OOP Concept      | Description                              | Real-Life Example              |
  |------------------|------------------------------------------|-------------------------------|
  | Class            | Blueprint for objects                    | "Product" class on Amazon     |
  | Object           | Instance of a class                      | Actual iPhone 14 listing      |
  | Constructor      | Initializes object properties            | Runs when you `new` a class   |
  | Method           | Function inside a class                  | `addToCart()` on Product      |
  | Property         | Variable in a class                      | `price`, `title`, `rating`    |
  | Encapsulation    | Hides internal state                     | Bank balance in apps          |
  | Inheritance      | Child inherits from parent               | Admin extends User            |
  | Polymorphism     | Same method, different behavior          | `.send()` in SMS/Email/Push   |
  | Abstraction      | Hide logic, show interface               | Razorpay `makePayment()` call |
  ==============================================================================
  */
  