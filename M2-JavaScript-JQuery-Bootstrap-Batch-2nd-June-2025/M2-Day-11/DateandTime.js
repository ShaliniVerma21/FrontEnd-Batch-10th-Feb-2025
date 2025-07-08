// Date and Time Objects & Builtin Methods

//==============================================
// Date Object
//==============================================
// The Date object is used to work with dates and times.
// It is a built-in object in JavaScript.
//==============================================
let today = new Date();
console.log(today);

// Specific Date
let birthday = new Date('1990-01-01');
console.log(birthday);

//Built In methods
//==============================================

// The Date object has several built-in methods that can be used to manipulate dates and times.
//==============================================

//getting date components
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
//==============================================

// Setting date components
let d = new Date();
d.setFullYear(2022);
d.setMonth(5);
d.setDate(15);
d.setHours(10);
d.setMinutes(30);
d.setSeconds(0);
console.log(d);

//================================================

//adding or substracting time
console.log(today.getDate()+7);
console.log(today.getDate()-7);

//================================================

//formatting Dates
let date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toUTCString());

//================================================

//Comparision of Dates
let date1 = new Date('2022-01-01');
let date2 = new Date('2022-01-01');
console.log(date1.getTime() === date2.getTime());
console.log(date1>date2);

//================================================

//getting TimeStamp
console.log(today.getTime());
console.log(today.getTimezoneOffset());

//===============================================

//Event Management System Example

//=================================================

//==============================================
// Date Object
//==============================================
// The Date object is used to work with dates and times.
// It is a built-in object in JavaScript.
//==============================================

// Create an array to hold events
let events = [];

// Function to add an event
function addEvent(eventName, eventDate) {
    let event = {
        name: eventName,
        date: new Date(eventDate) // Convert string to Date object
    };
    events.push(event);
    console.log(`Event "${eventName}" has been added on ${event.date.toDateString()}.`);
}

// Function to display all events
function displayEvents() {
    if (events.length === 0) {
        console.log("No events scheduled.");
        return;
    }
    console.log("Scheduled Events:");
    events.forEach(event => {
        console.log(`- ${event.name} on ${event.date.toDateString()}`);
    });
}

// Function to remove an event by name
function removeEvent(eventName) {
    const index = events.findIndex(event => event.name === eventName);
    if (index !== -1) {
        events.splice(index, 1);
        console.log(`Event "${eventName}" has been removed.`);
    } else {
        console.log(`Event "${eventName}" not found.`);
    }
}

// Function to check if an event is today
function checkTodayEvents() {
    let today = new Date();
    let todayString = today.toDateString();
    let todayEvents = events.filter(event => event.date.toDateString() === todayString);
    
    if (todayEvents.length > 0) {
        console.log("Today's Events:");
        todayEvents.forEach(event => {
            console.log(`- ${event.name} on ${event.date.toDateString()}`);
        });
    } else {
        console.log("No events scheduled for today.");
    }
}

// Function to get the time remaining until the next event
function timeUntilNextEvent() {
    let now = new Date();
    let upcomingEvents = events.filter(event => event.date > now);
    
    if (upcomingEvents.length === 0) {
        console.log("No upcoming events.");
        return;
    }
    
    // Sort events by date
    upcomingEvents.sort((a, b) => a.date - b.date);
    let nextEvent = upcomingEvents[0];
    let timeDiff = nextEvent.date - now; // Difference in milliseconds
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    console.log(`Time until next event "${nextEvent.name}": ${days} days, ${hours} hours, and ${minutes} minutes.`);
}

// Adding events
addEvent("Birthday Party", "2023-10-15");
addEvent("Meeting with Team", "2023-10-10");
addEvent("Conference", "2023-10-20");

// Displaying all events
displayEvents(); // Output: List of scheduled events

// Checking today's events
checkTodayEvents(); // Output: Events scheduled for today

// Time until the next event
timeUntilNextEvent(); // Output: Time until the next event

// Removing an event
removeEvent("Meeting with Team");
displayEvents(); // Output: Updated list of scheduled events

// Checking the timestamp of an event
let eventDate = new Date("2023-10-15");
console.log(`Timestamp for the event: ${eventDate.getTime()}`); // Output: Timestamp for the event