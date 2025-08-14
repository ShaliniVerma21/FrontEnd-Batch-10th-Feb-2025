//Methode Overriding

// Base class
class Animal {
    speak() {
        return "Some sound";
    }
}

// Subclass Dog
class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

// Subclass Cat
class Cat extends Animal {
    speak() {
        return "Meow!";
    }
}

// Function to demonstrate runtime polymorphism
function makeAnimalSpeak(animal) {
    console.log(animal.speak());
}

// Usage
const myDog = new Dog();
const myCat = new Cat();

makeAnimalSpeak(myDog); // Output: Woof!
makeAnimalSpeak(myCat); // Output: Meow!