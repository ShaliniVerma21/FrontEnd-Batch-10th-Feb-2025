/*Example-3 using class, objects, functions,constructors, variables 
and Inheritance , polymorphism Concepts*/

//Banking Applications

// Base class for Account
class Account {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance; // Default balance is 0
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }

    // Method to display account details
    displayInfo() {
        return `Account Number: ${this.accountNumber}\nAccount Holder: ${this.accountHolder}\nBalance: $${this.balance}`;
    }
}

// Subclass for SavingsAccount
class SavingsAccount extends Account {
    constructor(accountNumber, accountHolder, balance, interestRate) {
        super(accountNumber, accountHolder, balance);
        this.interestRate = interestRate; // Specific property for savings accounts
    }

    // Method to apply interest
    applyInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(`Interest applied: $${interest}. New balance: $${this.balance}.`);
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Savings Account\nInterest Rate: ${this.interestRate}%`;
    }
}

// Subclass for CheckingAccount
class CheckingAccount extends Account {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
        super(accountNumber, accountHolder, balance);
        this.overdraftLimit = overdraftLimit; // Specific property for checking accounts
    }

    // Overriding the withdraw method to include overdraft
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Checking Account\nOverdraft Limit: $${this.overdraftLimit}`;
    }
}

// Example Usage
const savingsAccount = new SavingsAccount("SA12345", "Alice", 1000, 2.5);
const checkingAccount = new CheckingAccount("CA67890", "Bob", 500, 200);

// Displaying account information
console.log(savingsAccount.displayInfo());
console.log("--------------------------------------------------");
console.log(checkingAccount.displayInfo());

// Performing transactions
savingsAccount.deposit(200);
savingsAccount.withdraw(100);
savingsAccount.applyInterest();

console.log("--------------------------------------------------");

checkingAccount.deposit(300);
checkingAccount.withdraw(600); // Should allow due to overdraft
checkingAccount.withdraw(200); // Should fail due to insufficient funds