//Example-7 using class, objects, functions,constructors, variables and Inheritance Concepts

//Employee Management System
// Base class
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    displayInfo() {
        return `Employee ID: ${this.id}, Name: ${this.name}`;
    }
}

// Subclass for FullTimeEmployee
class FullTimeEmployee extends Employee {
    constructor(name, id, salary) {
        super(name, id);
        this.salary = salary;
    }

    displayInfo() {
        return `${super.displayInfo()}, Salary: $${this.salary}`;
    }
}

// Subclass for PartTimeEmployee
class PartTimeEmployee extends Employee {
    constructor(name, id, hourlyRate) {
        super(name, id);
        this.hourlyRate = hourlyRate;
    }

    displayInfo() {
        return `${super.displayInfo()}, Hourly Rate: $${this.hourlyRate}`;
    }
}

// Usage
const fullTimeEmp = new FullTimeEmployee("Alice", 1, 60000);
const partTimeEmp = new PartTimeEmployee("Bob", 2, 20);

console.log(fullTimeEmp.displayInfo()); // Output: Employee ID: 1, Name: Alice, Salary: $60000
console.log(partTimeEmp.displayInfo()); // Output: Employee ID: 2, Name: Bob, Hourly Rate: $20