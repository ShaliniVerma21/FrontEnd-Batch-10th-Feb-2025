/*Example-1 using class, objects, functions,constructors, variables 
and Inheritance , polymorphism Concepts*/

//Game Development Framework

// Base class for GameObject
class GameObject {
    constructor(name, position) {
        this.name = name;
        this.position = position; // Position represented as an object { x: number, y: number }
    }

    // Method to display object details
    displayInfo() {
        return `Name: ${this.name}\nPosition: (${this.position.x}, ${this.position.y})`;
    }

    // Method to move the object
    move(x, y) {
        this.position.x += x;
        this.position.y += y;
    }
}

// Subclass for Player
class Player extends GameObject {
    constructor(name, position, health) {
        super(name, position);
        this.health = health; // Specific property for players
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Player\nHealth: ${this.health}`;
    }

    // Method to take damage
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} took ${amount} damage. Health is now ${this.health}.`);
    }
}

// Subclass for Enemy
class Enemy extends GameObject {
    constructor(name, position, attackPower) {
        super(name, position);
        this.attackPower = attackPower; // Specific property for enemies
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Enemy\nAttack Power: ${this.attackPower}`;
    }

    // Method to attack a player
    attack(player) {
        console.log(`${this.name} attacks ${player.name} for ${this.attackPower} damage!`);
        player.takeDamage(this.attackPower);
    }
}

// Subclass for Item
class Item extends GameObject {
    constructor(name, position, effect) {
        super(name, position);
        this.effect = effect; // Specific property for items
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Item\nEffect: ${this.effect}`;
    }
}

// Example Usage
const player = new Player("Hero", { x: 0, y: 0 }, 100);
const enemy = new Enemy("Goblin", { x: 5, y: 5 }, 15);
const healthPotion = new Item("Health Potion", { x: 2, y: 2 }, "Restores 20 health");

// Displaying object information
console.log(player.displayInfo());
console.log("--------------------------------------------------");
console.log(enemy.displayInfo());
console.log("--------------------------------------------------");
console.log(healthPotion.displayInfo());

// Simulating an attack
enemy.attack(player);
console.log("--------------------------------------------------");
console.log(player.displayInfo());