//Example-8 Game Development

// Class: Character
class Character {
    constructor(name, health, attackPower) {
        this.name = name;          // Name of the character
        this.health = health;      // Health points of the character
        this.attackPower = attackPower; // Attack power of the character
    }

    // Method to attack another character
    attack(target) {
        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage.`);
        target.takeDamage(this.attackPower); // Inflict damage on the target
    }

    // Method to take damage
    takeDamage(amount) {
        this.health -= amount; // Reduce health by the damage amount
        console.log(`${this.name} takes ${amount} damage. Remaining health: ${this.health}`);
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
        }
    }

    // Method to check if the character is alive
    isAlive() {
        return this.health > 0;
    }
}

// Class: Enemy
class Enemy extends Character {
    constructor(name, health, attackPower) {
        super(name, health, attackPower); // Call the parent constructor
    }

    // Method to perform a special attack
    specialAttack(target) {
        const specialDamage = this.attackPower * 2; // Double damage for special attack
        console.log(`${this.name} performs a special attack on ${target.name} for ${specialDamage} damage.`);
        target.takeDamage(specialDamage);
    }
}

// Class: Game
class Game {
    constructor() {
        this.characters = []; // Array to hold all characters in the game
    }

    // Method to add a character to the game
    addCharacter(character) {
        this.characters.push(character);
        console.log(`${character.name} has entered the game.`);
    }

    // Method to start the battle between characters
    startBattle(character1, character2) {
        console.log(`Battle starts between ${character1.name} and ${character2.name}!`);
        while (character1.isAlive() && character2.isAlive()) {
            character1.attack(character2); // Character 1 attacks Character 2
            if (character2.isAlive()) {
                character2.attack(character1); // Character 2 attacks Character 1
            }
        }
        console.log("Battle has ended.");
    }
}

// Example usage
const game = new Game();

// Create characters
const hero = new Character("Hero", 100, 20);
const goblin = new Enemy("Goblin", 50, 10);

// Add characters to the game
game.addCharacter(hero);
game.addCharacter(goblin);

// Start the battle
game.startBattle(hero, goblin);