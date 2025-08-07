// Example-1: Employee Management

// Class-1: Employee
class Employee {
    constructor(name, age, department, position, salary) {
        this.name = name;          // Employee's name
        this.age = age;            // Employee's age
        this.department = department; // Department where the employee works
        this.position = position;  // Employee's job title
        this.salary = salary;      // Employee's salary
    }

    // Method to display employee information
    displayInfo() {
        console.log(`Name: ${this.name}, 
Age: ${this.age}, 
Department: ${this.department},
Position: ${this.position},
Salary: $${this.salary}`); // Display salary with a dollar sign
    }
}

// Class-2: Company
class Company {
    constructor(name, location) {
        this.name = name;          // Company name
        this.location = location;  // Company location
        this.employees = [];       // Array to hold employees
    }

    // Method to hire a new employee
    hireEmployee(employee) {
        this.employees.push(employee); // Add employee to the employees array
        console.log(`Hired Employee: ${employee.name}`); // Confirm hiring
    }

    // Method to list all employees in the company
    listEmployees() {
        console.log(`Employees of ${this.name} located in ${this.location}:`);
        this.employees.forEach(employee => {
            employee.displayInfo(); // Display information for each employee
        });
    }

    // Method to display company information
    displayInfo() {
        console.log(`Company Name: ${this.name},
Location: ${this.location}`);
    }
}

// Create a new Company instance
let comp = new Company("ABC Corporation", "New York");
comp.displayInfo(); // Display company information

// Hire new employees
comp.hireEmployee(new Employee("John", 30, "Sales", "Salesman", 50000));
comp.hireEmployee(new Employee("Alice", 25, "Marketing", "Marketing Manager", 60000));
comp.hireEmployee(new Employee("Jane", 28, "Marketing", "Marketing Executive", 55000));

// List all employees in the company
comp.listEmployees();