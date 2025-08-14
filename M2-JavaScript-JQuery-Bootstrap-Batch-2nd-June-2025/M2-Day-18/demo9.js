/*Example-3 using class, objects, functions,constructors, variables 
and Inheritance , polymorphism Concepts*/

//Task Management Tool

// Base class for Task
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.createdAt = new Date(); // Automatically set the creation date
        this.completed = false; // Task is initially not completed
    }

    // Method to mark the task as completed
    complete() {
        this.completed = true;
    }

    // Method to display task details
    displayInfo() {
        return `Title: ${this.title}\nDescription: ${this.description}\nCreated At: ${this.createdAt.toLocaleString()}\nCompleted: ${this.completed}`;
    }
}

// Subclass for SimpleTask
class SimpleTask extends Task {
    constructor(title, description) {
        super(title, description);
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Simple Task`;
    }
}

// Subclass for RecurringTask
class RecurringTask extends Task {
    constructor(title, description, frequency) {
        super(title, description);
        this.frequency = frequency; // Specific property for recurring tasks
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Recurring Task\nFrequency: ${this.frequency}`;
    }
}

// Example Usage
const task1 = new SimpleTask("Buy groceries", "Milk, Bread, Eggs");
const task2 = new RecurringTask("Water plants", "Water the indoor plants", "Weekly");

// Marking the first task as completed
task1.complete();

// Displaying task information
console.log(task1.displayInfo());
console.log("--------------------------------------------------");
console.log(task2.displayInfo());