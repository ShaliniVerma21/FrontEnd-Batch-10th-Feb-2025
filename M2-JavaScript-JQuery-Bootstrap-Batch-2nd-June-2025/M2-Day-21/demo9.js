//Example 9: Encapsulation with Factory Functions
function createPerson(name) {
    let age = 0; // Private variable

    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        setAge: function(newAge) {
            if (newAge >= 0) {
                age = newAge;
            }
        }
    };
}

const person = createPerson('Alice');
person.setAge(25);
console.log(person.getName()); // Alice
console.log(person.getAge()); // 25