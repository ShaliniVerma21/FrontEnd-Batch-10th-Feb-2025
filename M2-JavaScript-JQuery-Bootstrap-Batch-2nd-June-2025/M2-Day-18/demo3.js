//2. Multilevel Inheritance

// Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

// Intermediate subclass
class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

// Subclass of Dog
class Puppy extends Dog {
    speak() {
        return `${this.name} whines.`;
    }
}

// Usage
const puppy = new Puppy("Max");
console.log(puppy.speak()); // Output: Max whines.