//Objects

//1. Person Object
const Person = {
    name: 'John',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
};
//display complete data
console.log(Person);

//display specific data
console.log(Person.name);
console.log(Person.age);
console.log(Person.occupation);
console.log(Person.address.street);
console.log(Person.address.city);
console.log(Person.address.zip);

//2. Laptop Object
const Laptop = {
    brand: 'Apple',
    model: 'MacBook Pro',
    processor: 'Intel Core i7',
    ram: '16GB',
    storage: '512GB',
    color: 'Space Gray',
    price: 1999.99,
};
//display complete data
console.log(Laptop);

//display specific data
console.log(Laptop.brand);
console.log(Laptop.model);
console.log(Laptop.processor);
console.log(Laptop.ram);
console.log(Laptop.storage);


//3. Linkedin Profile Object
const LinkedinProfile = {
    firstName: 'Purva',
    lastName: 'Raut',
    headline: 'Software Engineer at Google',
    location: 'Mumbai',
    experience: [
        {
            title: 'Software Engineer',
            company: 'ABC Company',
            duration: 'Jan 2020 - Present',
        },
        {
            title: 'Junior Software Engineer',
            company: 'XYZ Company',
            duration: 'Jan 2018 - Dec 2019',
        },
    ],
    education: [
        {
            institution: 'Anytown University',
            degree: 'Bachelor of Science in Computer Science',
            duration: 'Jan 2014 - Dec 2017',
        },
        {
            institution: 'Anytown High School',
            degree: 'High School Diploma',
            duration: 'Jan 2010 - Dec 2013',
        },
    ],
    skills: ['JavaScript', 'Python', 'Java', 'C++'],
    certifications: ['Certified Scrum Master', 'Certified Agile Practitioner'],
};

//display data
console.log(LinkedinProfile);

//display specific data
console.log(LinkedinProfile.firstName);
console.log(LinkedinProfile.lastName);
console.log(LinkedinProfile.headline);
console.log(LinkedinProfile.experience);
console.log(LinkedinProfile.education);

// Built-in Methods of Objects
//Object.keys()
console.log(Object.keys(LinkedinProfile));
//Object.values()
console.log(Object.values(LinkedinProfile));
//Object.entries()
console.log(Object.entries(LinkedinProfile));
//Object.freez()
console.log(Object.freeze(LinkedinProfile));

//=========================================================
//Car Management System Example
//=========================================================

// Print message on console
console.log("Welcome to the Car Management System");

// Print message on webpage
document.write("Welcome to the Car Management System<br><br>");

// Array to hold the collection of cars
let carInventory = [];

// 1. User Defined Functions

// Function to create a car object
function createCar(make, model, year, price) {
    return {
        make: make,
        model: model,
        year: year,
        price: price,
        // Method to display car details
        displayDetails: function() {
            return `${this.year} ${this.make} ${this.model} - Price: $${this.price.toFixed(2)}`;
        }
    };
}

// Function to add a car to the inventory
function addCar(make, model, year, price) {
    let car = createCar(make, model, year, price);
    carInventory.push(car);
    console.log(`Car "${car.displayDetails()}" has been added to the inventory.`);
}

// Function to display all cars in the inventory
function displayCars() {
    if (carInventory.length === 0) {
        console.log("No cars available in the inventory.");
        return;
    }
    console.log("Cars in the Inventory:");
    carInventory.forEach((car, index) => {
        console.log(`${index + 1}. ${car.displayDetails()}`);
    });
}

// Function to calculate the average price of cars
function calculateAveragePrice() {
    if (carInventory.length === 0) {
        console.log("No cars available to calculate the average price.");
        return;
    }
    let totalPrice = carInventory.reduce((acc, car) => acc + car.price, 0);
    let averagePrice = totalPrice / carInventory.length;
    console.log(`Average Car Price: $${averagePrice.toFixed(2)}`);
}

// Function to find a car by make and model
function findCar(make, model) {
    let foundCars = carInventory.filter(car => car.make.toLowerCase() === make.toLowerCase() && car.model.toLowerCase() === model.toLowerCase());
    if (foundCars.length > 0) {
        console.log("Search Results:");
        foundCars.forEach(car => {
            console.log(`- ${car.displayDetails()}`);
        });
    } else {
        console.log(`No cars found with make "${make}" and model "${model}".`);
    }
}

// Function to remove a car by make and model
function removeCar(make, model) {
    const index = carInventory.findIndex(car => car.make.toLowerCase() === make.toLowerCase() && car.model.toLowerCase() === model.toLowerCase());
    if (index !== -1) {
        let removedCar = carInventory.splice(index, 1);
        console.log(`Car "${removedCar[0].displayDetails()}" has been removed from the inventory.`);
    } else {
        console.log(`Car "${make} ${model}" not found in the inventory.`);
    }
}

// 2. Built-in Methods

// Adding cars to the inventory
addCar("Toyota", "Camry", 2020, 24000);
addCar("Honda", "Civic", 2019, 22000);
addCar("Ford", "Mustang", 2021, 30000);
addCar("Chevrolet", "Malibu", 2018, 19000);
addCar("Tesla", "Model 3", 2022, 35000);

// Displaying all cars
displayCars(); // Output: List of all cars in the inventory

// Calculating the average price
calculateAveragePrice(); // Output: Average price of the cars

// Finding a car
findCar("Honda", "Civic"); // Output: Details of the Honda Civic
findCar("BMW", "X5"); // Output: Not found message

// Removing a car
removeCar("Ford", "Mustang"); // Output: Confirmation of removal
displayCars(); // Output: Updated list of cars

// Removing a non-existent car
removeCar("Nissan", "Altima"); // Output: Not found message

// Using built-in object methods
let carDetails = {
    make: "Subaru",
    model: "Outback",
    year: 2021,
    price: 27000
};

// Using Object.keys() to get the properties of the car
console.log("Car Properties: ", Object.keys(carDetails)); // Output: Array of property names

// Using Object.values() to get the values of the car
console.log("Car Values: ", Object.values(carDetails)); // Output: Array of property values

// Using Object.entries() to get key-value pairs of the car
console.log("Car Entries: ", Object.entries(carDetails)); // Output: Array of key-value pairs

// Using Object.assign() to create a new car object with additional properties
let additionalFeatures = { color: "Blue", mileage: 15000 };
let newCar = Object.assign({}, carDetails, additionalFeatures);
console.log("New Car with Features: ", newCar); // Output: New car object with additional properties

// Using Object.freeze() to prevent modifications to the car object
Object.freeze(carDetails);
try {
    carDetails.price = 26000; // Attempting to change the price
} catch (error) {
    console.log("Error: Cannot modify a frozen object."); // Output: Error message
}

// Function to update car price
function updateCarPrice(make, model, newPrice) {
    let car = carInventory.find(car => car.make.toLowerCase() === make.toLowerCase() && car.model.toLowerCase() === model.toLowerCase());
    if (car) {
        car.price = newPrice;
        console.log(`Updated price of ${car.displayDetails()}`);
    } else {
        console.log(`Car "${make} ${model}" not found in the inventory.`);
    }
}

// Updating the price of a car
updateCarPrice("Toyota", "Camry", 25000); // Output: Confirmation of price update
displayCars(); // Output: Updated list of cars with new prices