//Example-8 using class, objects, functions,constructors, variables and Inheritance Concepts

//School Management System

// Base class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Subclass for Student
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    displayInfo() {
        return `${super.displayInfo()}, Grade: ${this.grade}`;
    }
}

// Subclass for Teacher
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    displayInfo() {
        return `${super.displayInfo()}, Subject: ${this.subject}`;
    }
}

// Usage
const student = new Student("John", 16, "10th Grade");
const teacher = new Teacher("Mr. Smith", 40, "Mathematics");

console.log(student.displayInfo()); // Output: Name: John, Age: 16, Grade: 10th Grade
console.log(teacher.displayInfo()); // Output: Name: Mr. Smith, Age: 40, Subject: Mathematics