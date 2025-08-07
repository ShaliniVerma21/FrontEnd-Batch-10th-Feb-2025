//Example-9 Banking System

// Class: Account
class Account {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber; // Unique account number
        this.accountHolder = accountHolder;  // Name of the account holder
        this.balance = balance;               // Current balance of the account
    }

    // Method to deposit money into the account
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount; // Increase balance
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money from the account
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount; // Decrease balance
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Method to display account information
    displayInfo() {
        console.log(`Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: $${this.balance}`);
    }
}

// Class: Customer
class Customer {
    constructor(name) {
        this.name = name; // Name of the customer
        this.accounts = []; // Array to hold customer's accounts
    }

    // Method to add an account to the customer
    addAccount(account) {
        this.accounts.push(account);
        console.log(`Account ${account.accountNumber} added for ${this.name}.`);
    }

    // Method to display all accounts of the customer
    displayAccounts() {
        console.log(`Accounts for ${this.name}:`);
        this.accounts.forEach(account => account.displayInfo());
    }
}

// Class: Bank
class Bank {
    constructor(name) {
        this.name = name; // Name of the bank
        this.customers = []; // Array to hold customers
    }

    // Method to add a customer to the bank
    addCustomer(customer) {
        this.customers.push(customer);
        console.log(`Customer ${customer.name} added to ${this.name}.`);
    }

    // Method to display all customers of the bank
    displayCustomers() {
        console.log(`Customers of ${this.name}:`);
        this.customers.forEach(customer => {
            console.log(customer.name);
        });
    }
}

// Example usage
const bank = new Bank("My Bank");

// Create customers
const customer1 = new Customer("Alice");
const customer2 = new Customer("Bob");

// Add customers to the bank
bank.addCustomer(customer1);
bank.addCustomer(customer2);

// Create accounts for customers
const account1 = new Account("123456", customer1.name, 1000);
const account2 = new Account("654321", customer2.name, 500);

// Add accounts to customers
customer1.addAccount(account1);
customer2.addAccount(account2);

// Display all customers
bank.displayCustomers();

// Perform transactions
account1.deposit(500); // Alice deposits $500
account1.withdraw(200); // Alice withdraws $200
account1.withdraw(1500); // Attempt to withdraw more than balance

// Display account information
customer1.displayAccounts();
customer2.displayAccounts();