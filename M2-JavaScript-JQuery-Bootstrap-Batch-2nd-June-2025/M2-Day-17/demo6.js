//Example-6 Online Booking System

// Class: Service
class Service {
    constructor(name, price) {
        this.name = name;  // Name of the service
        this.price = price; // Price of the service
    }

    // Method to display service information
    displayInfo() {
        console.log(`Service: ${this.name}, Price: $${this.price}`);
    }
}

// Class: Customer
class Customer {
    constructor(name, email) {
        this.name = name;  // Customer's name
        this.email = email; // Customer's email
    }

    // Method to display customer information
    displayInfo() {
        console.log(`Customer Name: ${this.name}, Email: ${this.email}`);
    }
}

// Class: Booking
class Booking {
    constructor(customer, service, date) {
        this.customer = customer; // Customer who made the booking
        this.service = service;   // Service being booked
        this.date = date;         // Date of the booking
    }

    // Method to display booking details
    displayBookingDetails() {
        console.log(`Booking Details:`);
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Service: ${this.service.name}`);
        console.log(`Date: ${this.date}`);
        console.log(`Total Price: $${this.service.price}`);
    }
}

// Class: BookingSystem
class BookingSystem {
    constructor() {
        this.services = []; // Array to hold available services
        this.bookings = []; // Array to hold bookings
    }

    // Method to add a service to the system
    addService(service) {
        this.services.push(service);
        console.log(`Service "${service.name}" added to the system.`);
    }

    // Method to create a booking
    createBooking(customer, service, date) {
        const booking = new Booking(customer, service, date);
        this.bookings.push(booking);
        console.log(`Booking created for ${customer.name} on ${date}.`);
        return booking;
    }

    // Method to display all services
    displayServices() {
        console.log("Available Services:");
        this.services.forEach(service => service.displayInfo());
    }

    // Method to display all bookings
    displayBookings() {
        console.log("All Bookings:");
        this.bookings.forEach(booking => booking.displayBookingDetails());
    }
}

// Example usage
const bookingSystem = new BookingSystem();

// Create services
const service1 = new Service("Spa Treatment", 100);
const service2 = new Service("Haircut", 50);
const service3 = new Service("Massage", 80);

// Add services to the booking system
bookingSystem.addService(service1);
bookingSystem.addService(service2);
bookingSystem.addService(service3);

// Create customers
const customer1 = new Customer("Alice", "alice@example.com");
const customer2 = new Customer("Bob", "bob@example.com");

// Create bookings
const booking1 = bookingSystem.createBooking(customer1, service1, "2023-10-01");
const booking2 = bookingSystem.createBooking(customer2, service2, "2023-10-02");

// Display all services
bookingSystem.displayServices();

// Display all bookings
bookingSystem.displayBookings();