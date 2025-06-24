//1. If Statement – Real World Examples

// 1. Temperature check
let temp = 35;
if (temp > 30) console.log("It's hot outside.");

// 2. Rain check
let isRaining = true;
if (isRaining) console.log("Take an umbrella.");

// 3. Product availability
let inStock = true;
if (inStock) console.log("Product is available.");

// 4. Library membership
let isMember = true;
if (isMember) console.log("You can borrow books.");

// 5. Light status
let lightOn = true;
if (lightOn) console.log("The room is bright.");

// 6. WiFi connection
let isConnected = true;
if (isConnected) console.log("You are online.");

// 7. Water tank level
let tankFull = true;
if (tankFull) console.log("Stop the motor.");

// 8. Student enrolled
let enrolled = true;
if (enrolled) console.log("Access the course materials.");

// 9. Weekend check
let day = "Sunday";
if (day === "Sunday") console.log("It’s a holiday!");

// 10. Door locked
let doorLocked = true;
if (doorLocked) console.log("The house is secure.");


//2. If-Else Statement

// 1. Password check
let enteredPassword = "admin123";
let correctPassword = "admin123";
if (enteredPassword === correctPassword) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// 2. Seat booking
let seatsAvailable = 0;
if (seatsAvailable > 0) {
  console.log("Seats available for booking.");
} else {
  console.log("House full.");
}

// 3. Shopping cart
let cartItems = 0;
if (cartItems > 0) {
  console.log("Proceed to checkout.");
} else {
  console.log("Your cart is empty.");
}

// 4. Mobile battery
let battery = 15;
if (battery < 20) {
  console.log("Low battery. Please charge.");
} else {
  console.log("Battery level is sufficient.");
}

// 5. Age verification for alcohol
let age = 17;
if (age >= 21) {
  console.log("You can buy alcohol.");
} else {
  console.log("You are underage.");
}

// 6. Bank balance check
let balance = 1000;
let withdraw = 1500;
if (balance >= withdraw) {
  console.log("Withdrawal successful.");
} else {
  console.log("Insufficient funds.");
}

// 7. Email validation
let email = "user@example.com";
if (email.includes("@")) {
  console.log("Valid email.");
} else {
  console.log("Invalid email.");
}

// 8. Fan status
let fanOn = false;
if (fanOn) {
  console.log("Fan is running.");
} else {
  console.log("Fan is off.");
}

// 9. Gym open check
let currentTime = 20; // 24-hour format
if (currentTime < 22) {
  console.log("Gym is open.");
} else {
  console.log("Gym is closed.");
}

// 10. Fever check
let temperature = 101;
if (temperature > 100) {
  console.log("You have a fever.");
} else {
  console.log("Normal temperature.");
}


// 3. If-Else-If Ladder

// 1. Weather condition
let temp = 25;
if (temp > 35) {
  console.log("Hot");
} else if (temp > 25) {
  console.log("Warm");
} else if (temp > 15) {
  console.log("Cool");
} else {
  console.log("Cold");
}

// 2. Traffic signal
let signal = "yellow";
if (signal === "red") {
  console.log("Stop");
} else if (signal === "yellow") {
  console.log("Ready");
} else if (signal === "green") {
  console.log("Go");
} else {
  console.log("Invalid signal");
}

// 3. Exam result
let marks = 75;
if (marks >= 90) {
  console.log("Excellent");
} else if (marks >= 75) {
  console.log("Very Good");
} else if (marks >= 60) {
  console.log("Good");
} else if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 4. BMI classification
let bmi = 28;
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

// 5. Hotel room pricing
let roomType = "Deluxe";
if (roomType === "Standard") {
  console.log("Price: ₹2000");
} else if (roomType === "Deluxe") {
  console.log("Price: ₹3500");
} else if (roomType === "Suite") {
  console.log("Price: ₹5000");
} else {
  console.log("Invalid room type");
}

// 6. Electricity bill slab
let units = 270;
if (units <= 100) {
  console.log("No charge");
} else if (units <= 200) {
  console.log("₹2 per unit");
} else if (units <= 300) {
  console.log("₹3 per unit");
} else {
  console.log("₹5 per unit");
}

// 7. Driving license eligibility
let age = 16;
if (age < 16) {
  console.log("Not eligible");
} else if (age === 16) {
  console.log("Eligible for learner's license");
} else if (age >= 18) {
  console.log("Eligible for driving license");
}

// 8. Online order status
let status = "shipped";
if (status === "ordered") {
  console.log("Your order has been placed.");
} else if (status === "shipped") {
  console.log("Your order is on the way.");
} else if (status === "delivered") {
  console.log("Your order has been delivered.");
} else {
  console.log("Unknown status.");
}

// 9. Exam grading
let percentage = 68;
if (percentage >= 90) {
  console.log("Distinction");
} else if (percentage >= 70) {
  console.log("First Class");
} else if (percentage >= 50) {
  console.log("Second Class");
} else {
  console.log("Fail");
}

// 10. Mobile signal strength
let signalStrength = 1;
if (signalStrength === 5) {
  console.log("Full signal");
} else if (signalStrength >= 3) {
  console.log("Good signal");
} else if (signalStrength >= 1) {
  console.log("Poor signal");
} else {
  console.log("No signal");
}


//4. Nested If-Else

// 1. Student scholarship
let grade = "A";
let familyIncome = 40000;
if (grade === "A") {
  if (familyIncome < 50000) {
    console.log("Eligible for full scholarship");
  } else {
    console.log("Eligible for partial scholarship");
  }
} else {
  console.log("Not eligible for scholarship");
}

// 2. Online course access
let loggedIn = true;
let coursePurchased = true;
if (loggedIn) {
  if (coursePurchased) {
    console.log("Access granted to course");
  } else {
    console.log("Buy the course to access");
  }
} else {
  console.log("Please login to continue");
}

// 3. Flight check-in
let hasTicket = true;
let passport = true;
if (hasTicket) {
  if (passport) {
    console.log("Proceed to check-in");
  } else {
    console.log("Passport is required");
  }
} else {
  console.log("No ticket found");
}

// 4. Movie booking
let isWeekend = true;
let seatsLeft = 5;
if (isWeekend) {
  if (seatsLeft > 0) {
    console.log("Book your tickets now!");
  } else {
    console.log("No seats available");
  }
} else {
  console.log("Try booking on weekend");
}

// 5. Loan approval
let creditScore = 750;
let income = 50000;
if (creditScore >= 700) {
  if (income >= 30000) {
    console.log("Loan Approved");
  } else {
    console.log("Low income");
  }
} else {
  console.log("Low credit score");
}

// 6. Student exam attempt
let registered = true;
let hasAdmitCard = false;
if (registered) {
  if (hasAdmitCard) {
    console.log("Allowed to write exam");
  } else {
    console.log("Bring admit card");
  }
} else {
  console.log("Not registered");
}

// 7. Job interview
let shortlisted = true;
let available = false;
if (shortlisted) {
  if (available) {
    console.log("Attend interview");
  } else {
    console.log("Schedule not suitable");
  }
} else {
  console.log("Not shortlisted");
}

// 8. Sports team selection
let passedFitness = true;
let passedSkillTest = true;
if (passedFitness) {
  if (passedSkillTest) {
    console.log("Selected for team");
  } else {
    console.log("Improve skills");
  }
} else {
  console.log("Improve fitness");
}

// 9. Water purifier
let powerOn = true;
let tankEmpty = false;
if (powerOn) {
  if (!tankEmpty) {
    console.log("Purifier is working");
  } else {
    console.log("Refill tank");
  }
} else {
  console.log("Switch on the power");
}

// 10. Attendance rule
let isPresent = true;
let isLate = true;
if (isPresent) {
  if (isLate) {
    console.log("Half-day marked");
  } else {
    console.log("Full-day marked");
  }
} else {
  console.log("Absent");
}


//5. Switch Statement

// 1. Payment method
let method = "UPI";
switch (method) {
  case "Credit Card":
    console.log("Paying with credit card");
    break;
  case "Debit Card":
    console.log("Paying with debit card");
    break;
  case "UPI":
    console.log("Paying via UPI");
    break;
  case "Cash":
    console.log("Paying with cash");
    break;
  default:
    console.log("Unknown payment method");
}

// 2. Movie rating
let rating = "PG";
switch (rating) {
  case "G":
    console.log("General Audience");
    break;
  case "PG":
    console.log("Parental Guidance");
    break;
  case "PG-13":
    console.log("Teens allowed");
    break;
  case "R":
    console.log("Restricted");
    break;
  default:
    console.log("Unknown rating");
}

// 3. Browser detection
let browser = "Firefox";
switch (browser) {
  case "Chrome":
    console.log("Using Chrome");
    break;
  case "Firefox":
    console.log("Using Firefox");
    break;
  case "Safari":
    console.log("Using Safari");
    break;
  default:
    console.log("Unknown browser");
}

// 4. Weekday
let weekday = 5;
switch (weekday) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 5. Grade letters
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  default:
    console.log("Fail");
}

// 6. Food menu
let item = "Pizza";
switch (item) {
  case "Burger":
    console.log("Burger costs ₹100");
    break;
  case "Pizza":
    console.log("Pizza costs ₹250");
    break;
  case "Sandwich":
    console.log("Sandwich costs ₹80");
    break;
  default:
    console.log("Item not available");
}

// 7. Language selection
let lang = "hi";
switch (lang) {
  case "en":
    console.log("Hello");
    break;
  case "hi":
    console.log("Namaste");
    break;
  case "fr":
    console.log("Bonjour");
    break;
  default:
    console.log("Language not supported");
}

// 8. Notification type
let notification = "email";
switch (notification) {
  case "sms":
    console.log("SMS sent");
    break;
  case "email":
    console.log("Email sent");
    break;
  case "push":
    console.log("Push notification sent");
    break;
  default:
    console.log("Unknown notification type");
}

// 9. Ticket type
let type = "VIP";
switch (type) {
  case "Regular":
    console.log("Regular entry");
    break;
  case "VIP":
    console.log("VIP lounge access");
    break;
  case "VVIP":
    console.log("Meet & Greet access");
    break;
  default:
    console.log("Invalid ticket");
}

// 10. Subscription plan
let plan = "Gold";
switch (plan) {
  case "Free":
    console.log("Limited features");
    break;
  case "Silver":
    console.log("Basic features");
    break;
  case "Gold":
    console.log("All premium features");
    break;
  default:
    console.log("Unknown plan");
}
