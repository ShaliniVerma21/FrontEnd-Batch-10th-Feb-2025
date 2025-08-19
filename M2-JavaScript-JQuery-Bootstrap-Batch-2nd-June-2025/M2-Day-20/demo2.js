//2. Expense Tracker
class Expense {
    constructor(description, amount) {
        this.description = description;
        this.amount = amount;
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }

    addExpense(expense) {
        this.expenses.push(expense);
        console.log(`Expense added: ${expense.description} - $${expense.amount}`);
    }

    getTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
}

const expenseTracker = new ExpenseTracker();
expenseTracker.addExpense(new Expense('Groceries', 50));
expenseTracker.addExpense(new Expense('Utilities', 100));
console.log(`Total expenses: $${expenseTracker.getTotalExpenses()}`); // Outputs: Total expenses: $150