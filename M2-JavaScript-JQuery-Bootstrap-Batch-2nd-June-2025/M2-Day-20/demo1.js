/*
Abstraction in programming is a fundamental concept that allows developers to hide 
complex implementation details and expose only the necessary parts of a system. 
In JavaScript, abstraction can be achieved through various means, such as functions, 
classes, and modules. 
*/


//1. Bank Account Management
class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        let _balance = balance; // Private variable

        this.deposit = function (amount) {
            _balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${_balance}`);
        };

        this.withdraw = function (amount) {
            if (amount > _balance) {
                console.log("Insufficient funds!");
            } else {
                _balance -= amount;
                console.log(`Withdrew: $${amount}. New balance: $${_balance}`);
            }
        };

        this.getBalance = function () {
            return _balance;
        };
    }
}

const account = new BankAccount('123456');
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance()); // Outputs: 50