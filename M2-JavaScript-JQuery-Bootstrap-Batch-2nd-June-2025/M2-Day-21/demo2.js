//Example 2: Using Classes with Private Fields
class Person {
    #name; // Private field

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }
}

const person = new Person('Alice');
console.log(person.getName()); // Alice
person.setName('Bob');
console.log(person.getName()); // Bob