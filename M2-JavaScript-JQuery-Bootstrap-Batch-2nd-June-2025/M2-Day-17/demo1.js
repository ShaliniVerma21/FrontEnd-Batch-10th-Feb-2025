// Example-1: Car Class

class Car {
  // Constructor to initialize the car's properties
  constructor(name, model, year, color, speed) {
    this.name = name; // Name of the car manufacturer
    this.model = model; // Model of the car
    this.year = year; // Year of manufacture
    this.color = color; // Color of the car
    this.speed = speed; // Current speed of the car in km/h
  }

  // Method to accelerate the car by a specified increment
  accelerate(increment) {
    this.speed += increment; // Increase the speed
    console.log(`Car's Speed is ${this.speed} km/h`); // Display the current speed
  }

  // Method to apply brakes and decrease the car's speed
  brake(decrement) {
    this.speed -= decrement; // Decrease the speed
    // Ensure speed does not go below zero
    if (this.speed < 0) {
      this.speed = 0; // Set speed to 0 if it goes negative
    }
    console.log(`Car's Speed is ${this.speed} km/h`); // Display the current speed
  }

  // Method to display the car's information
  displayInfo() {
    console.log(`Name: ${this.name}, 
Model: ${this.model}, 
Year: ${this.year}, 
Color: ${this.color}, 
Speed: ${this.speed} km/h`); // Display all car properties
  }
}

// Create an object of the Car class
let car1 = new Car("Toyota", "Camry", 2015, "Red", 100);
car1.displayInfo(); // Display information about car1
car1.accelerate(50); // Accelerate car1 by 50 km/h
car1.brake(20); // Apply brakes to car1 by 20 km/h

// Create another object of the Car class
let car2 = new Car("Honda", "Civic", 2018, "Blue", 120);
car2.displayInfo(); // Display information about car2
car2.accelerate(30); // Accelerate car2 by 30 km/h
car2.brake(10); // Apply brakes to car2 by 10 km/h
