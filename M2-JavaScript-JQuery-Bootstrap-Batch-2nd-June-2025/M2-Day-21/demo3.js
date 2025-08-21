//Example 3: Using IIFE (Immediately Invoked Function Expression)
//This is a self-executing anonymous function that is executed immediately when 
// the script is loaded

const bankAccount = (function() {
    let balance = 0; // Private variable

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log('Insufficient funds');
            } else {
                balance -= amount;
                console.log(`Withdrew: ${amount}`);
            }
        },
        getBalance: function() {
            return balance;
        }
    };
})();

bankAccount.deposit(100);
bankAccount.withdraw(50);
console.log(bankAccount.getBalance()); // 50