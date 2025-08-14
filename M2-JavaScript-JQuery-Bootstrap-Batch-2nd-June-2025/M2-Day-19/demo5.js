//Example-5 using class, objects, functions and constructors, variables.
//e-learning system in JavaScript

//1. Course Class
class Course {
    constructor(title, description, slots) {
        this.title = title;
        this.description = description;
        this.slots = slots; // Available slots for enrollment
    }

    // Method to display course details
    display() {
        return `Course: ${this.title}\nDescription: ${this.description}\nAvailable Slots: ${this.slots}`;
    }
}

//2. Student Class
class Student {
    constructor(name) {
        this.name = name;
        this.enrolledCourses = []; // Array to hold enrolled courses
    }

    // Method to enroll in a course
    enroll(course) {
        if (course.slots > 0) {
            this.enrolledCourses.push(course);
            course.slots--; // Reduce available slots
            console.log(`${this.name} has enrolled in ${course.title}.`);
        } else {
            console.log(`Sorry, no slots available for ${course.title}.`);
        }
    }

    // Method to display enrolled courses
    displayEnrolledCourses() {
        if (this.enrolledCourses.length === 0) {
            console.log(`${this.name} is not enrolled in any courses.`);
        } else {
            console.log(`${this.name}'s Enrolled Courses:`);
            this.enrolledCourses.forEach(course => {
                console.log(course.display());
            });
        }
    }
}

//3. Usage
// Creating course instances
const course1 = new Course("JavaScript Basics", "Learn the fundamentals of JavaScript.", 3);
const course2 = new Course("Advanced CSS", "Deep dive into CSS for advanced styling.", 2);
const course3 = new Course("React for Beginners", "Introduction to React and building user interfaces.", 0); // No slots available

// Displaying course details
console.log(course1.display());
console.log(course2.display());
console.log(course3.display());

// Creating student instances
const student1 = new Student("Alice");
const student2 = new Student("Bob");

// Enrolling students in courses
student1.enroll(course1); // Alice enrolls in JavaScript Basics
student1.enroll(course2); // Alice enrolls in Advanced CSS
student1.enroll(course3); // Alice tries to enroll in React for Beginners (no slots)

student2.enroll(course1); // Bob enrolls in JavaScript Basics
student2.enroll(course3); // Bob tries to enroll in React for Beginners (no slots)

// Displaying enrolled courses for each student
student1.displayEnrolledCourses();
student2.displayEnrolledCourses();