//1. Single Inheritance

/*
Inheritance in JavaScript is a mechanism that allows one class (the child class or subclass) 
to inherit properties and methods from another class (the parent class or superclass). 
This promotes code reusability and establishes a relationship between classes.
*/

//Animal Class (Parent Class/SuperClass)
class Animal {
    constructor(name, age, gender, color) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.color = color;
    }
    sound() {
        return "Animal Make Sound";
    }
}

//Dog Class (Child Class/SubClass)
class Dog extends Animal {
    constructor(name, age, gender, color, breed) {
        super(name, age, gender, color); // Calling the parent class constructor
        this.breed = breed;
    }
    sound() {
        return "Dog Barks";
    }
}

//create objects
let dog1 = new Dog("Buddy", 3, "Male", "Brown", "german shefford");
console.log(dog1.name); // Output: Buddy
console.log(dog1.age); // Output: 3
console.log(dog1.gender); // Output: Male
console.log(dog1.color); // Output: Brown
console.log(dog1.breed); // Output: german shefford
console.log(dog1.sound()); // Output: Dog Barks
