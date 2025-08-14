//3. Hierarchical Inheritance

// Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

// Subclass 1
class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

// Subclass 2
class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
    }
}

// Usage
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
console.log(dog.speak()); // Output: Buddy barks.
console.log(cat.speak()); // Output: Whiskers meows.