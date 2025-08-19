//Example 2: Using Classes for Abstraction
class Car {
    constructor(brand) {
        this.brand = brand;
        this.isRunning = false;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`${this.brand} car started.`);
        } else {
            console.log(`${this.brand} car is already running.`);
        }
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`${this.brand} car stopped.`);
        } else {
            console.log(`${this.brand} car is already stopped.`);
        }
    }
}

// Usage
const myCar = new Car('Toyota');
myCar.start(); // Toyota car started.
myCar.start(); // Toyota car is already running.
myCar.stop();  // Toyota car stopped.