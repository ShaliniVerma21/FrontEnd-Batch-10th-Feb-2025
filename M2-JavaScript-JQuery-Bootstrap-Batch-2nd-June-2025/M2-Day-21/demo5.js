//Example 5: Using Symbols for Private Properties
const _age = Symbol('age');

class Employee {
    constructor(name, age) {
        this.name = name;
        this[_age] = age; // Private property
    }

    getAge() {
        return this[_age];
    }
}

const emp = new Employee('John', 30);
console.log(emp.getAge()); // 30
console.log(emp[_age]); // undefined