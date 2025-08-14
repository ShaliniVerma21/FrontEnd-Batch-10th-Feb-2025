/*Example-2 using class, objects, functions,constructors, variables 
and Inheritance , polymorphism Concepts*/

//Zepto Application

// Base class for Item
class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date(); // Automatically set the creation date
    }

    // Method to display item details
    displayInfo() {
        return `Name: ${this.name}\nDescription: ${this.description}\nCreated At: ${this.createdAt.toLocaleString()}`;
    }
}

// Subclass for Task
class Task extends Item {
    constructor(name, description, dueDate) {
        super(name, description);
        this.dueDate = dueDate; // Specific property for tasks
        this.completed = false; // Task is initially not completed
    }

    // Method to mark the task as completed
    complete() {
        this.completed = true;
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Task\nDue Date: ${this.dueDate.toLocaleString()}\nCompleted: ${this.completed}`;
    }
}

// Subclass for Event
class Event extends Item {
    constructor(name, description, eventDate) {
        super(name, description);
        this.eventDate = eventDate; // Specific property for events
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Event\nEvent Date: ${this.eventDate.toLocaleString()}`;
    }
}

// Example Usage
const task1 = new Task("Finish Project", "Complete the final project for the course", new Date("2023-12-01"));
const event1 = new Event("Team Meeting", "Discuss project progress and next steps", new Date("2023-11-15"));

// Marking the task as completed
task1.complete();

// Displaying item information
console.log(task1.displayInfo());
console.log("--------------------------------------------------");
console.log(event1.displayInfo());