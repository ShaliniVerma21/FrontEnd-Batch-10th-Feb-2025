//1. Real-World For Loop Examples

// 1. Creating pagination buttons
for (let page = 1; page <= 5; page++) {
  console.log(`Page ${page} button created`);
}

// 2. Display product ratings as stars
for (let i = 0; i < 5; i++) {
  console.log(i < 3 ? "★" : "☆"); // 3 stars out of 5
}

// 3. Highlight top 3 search results
const results = ["A", "B", "C", "D", "E"];
for (let i = 0; i < 3; i++) {
  console.log(`Highlight result: ${results[i]}`);
}

// 4. Show first 5 items in shopping cart
const cartItems = ["T-shirt", "Shoes", "Cap", "Belt", "Watch", "Sunglasses"];
for (let i = 0; i < 5; i++) {
  console.log(`Cart Item: ${cartItems[i]}`);
}

// 5. Populate dropdown with years
for (let year = 2000; year <= 2025; year++) {
  console.log(`<option value="${year}">${year}</option>`);
}

// 6. Show days of week
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

// 7. Validate 3 OTP digits
const otp = [1, 2, 3];
for (let i = 0; i < otp.length; i++) {
  console.log(`Digit ${i + 1}: ${otp[i]}`);
}

// 8. Load 10 blog post summaries
for (let post = 1; post <= 10; post++) {
  console.log(`Loading blog post ${post}`);
}

// 9. Truncate long titles
const titles = ["JavaScript Basics", "React Introduction", "Async Programming"];
for (let i = 0; i < titles.length; i++) {
  console.log(titles[i].slice(0, 10) + "...");
}

// 10. Display 5 latest comments
const comments = ["Nice!", "Well done", "Loved it", "Informative", "Thanks!", "Great"];
for (let i = 0; i < 5; i++) {
  console.log(`Comment: ${comments[i]}`);


//2. Real-World While Loop Examples

// 1. Scroll to bottom to load all content
let scrollY = 0;
while (scrollY < 1000) {
  console.log(`Scrolled to ${scrollY}px`);
  scrollY += 200;
}

// 2. Keep checking if user is active
let active = true;
let seconds = 0;
while (active && seconds < 5) {
  console.log(`User active for ${seconds} seconds`);
  seconds++;
}

// 3. Retry form submission until successful
let submitted = false;
let attempts = 0;
while (!submitted && attempts < 3) {
  console.log("Trying to submit...");
  attempts++;
  if (attempts === 2) submitted = true;
}

// 4. Fetch limited notifications
let index = 0;
const notifs = ["Like", "Comment", "Share"];
while (index < notifs.length) {
  console.log(`Notification: ${notifs[index]}`);
  index++;
}

// 5. Load product batches
let loaded = 0;
while (loaded < 30) {
  console.log(`Loading item ${loaded + 1}`);
  loaded += 10;
}

// 6. Countdown before redirect
let countdown = 5;
while (countdown > 0) {
  console.log(`Redirecting in ${countdown} seconds`);
  countdown--;
}

// 7. Wait till form is filled
let filled = 0;
const fields = 3;
while (filled < fields) {
  console.log(`Filled ${filled + 1} of ${fields}`);
  filled++;
}

// 8. Polling a server every second (mock)
let tries = 0;
while (tries < 3) {
  console.log("Checking for new message...");
  tries++;
}

// 9. Show intro slides
let slide = 0;
while (slide < 3) {
  console.log(`Showing intro slide ${slide + 1}`);
  slide++;
}

// 10. Process tags one by one
let tags = ["js", "html", "css"];
let k = 0;
while (k < tags.length) {
  console.log(`Processing tag: ${tags[k]}`);
  k++;
}


// 3. Real-World Do...While Loop Examples

// 1. Show welcome popup at least once
let showPopup = true;
do {
  console.log("Welcome to the site!");
  showPopup = false;
} while (showPopup);

// 2. Retry API call until success or limit
let success = false;
let tries = 0;
do {
  console.log("Attempting API call...");
  tries++;
  if (tries === 2) success = true;
} while (!success && tries < 3);

// 3. Ask for newsletter signup at least once
let askSignup = true;
do {
  console.log("Would you like to sign up?");
  askSignup = false;
} while (askSignup);

// 4. Keep animating while visible
let isVisible = true;
let frame = 0;
do {
  console.log(`Animating frame ${frame}`);
  frame++;
} while (isVisible && frame < 5);

// 5. Show security tips at least once
let showTips = true;
do {
  console.log("🔒 Secure your account!");
  showTips = false;
} while (showTips);

// 6. Load search results while pages remain
let page = 1;
do {
  console.log(`Loading page ${page} results`);
  page++;
} while (page <= 3);

// 7. Try login again if failed
let login = false;
let loginAttempts = 0;
do {
  console.log("Login attempt...");
  loginAttempts++;
  if (loginAttempts === 2) login = true;
} while (!login && loginAttempts < 3);

// 8. Always show cookie notice
let cookiesAccepted = false;
do {
  console.log("Please accept cookies 🍪");
  cookiesAccepted = true;
} while (!cookiesAccepted);

// 9. Run image compression until complete
let images = 3;
do {
  console.log(`Compressing image ${images}`);
  images--;
} while (images > 0);

// 10. Ensure rating is submitted at least once
let rated = false;
do {
  console.log("Please rate your experience 🌟");
  rated = true;
} while (!rated);


//4. Real-World For...In Loop Examples (Object Iteration)

// 1. Show user profile fields
const user = { name: "Alice", age: 25, email: "alice@example.com" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// 2. Form validation errors
const errors = { name: "Required", email: "Invalid", password: "Too short" };
for (let field in errors) {
  console.log(`${field} Error: ${errors[field]}`);
}

// 3. Show prices by product ID
const prices = { p101: 100, p102: 150, p103: 200 };
for (let id in prices) {
  console.log(`Product ${id}: ₹${prices[id]}`);
}

// 4. Update user settings
const settings = { theme: "dark", font: "medium", notifications: "on" };
for (let option in settings) {
  console.log(`Setting ${option}: ${settings[option]}`);
}

// 5. Language translations
const translations = { hello: "Hola", goodbye: "Adiós" };
for (let word in translations) {
  console.log(`${word} → ${translations[word]}`);
}

// 6. Show order summary
const order = { item1: "Laptop", item2: "Mouse", total: "$1050" };
for (let key in order) {
  console.log(`${key}: ${order[key]}`);
}

// 7. API response fields
const response = { status: 200, message: "OK", time: "2s" };
for (let field in response) {
  console.log(`${field}: ${response[field]}`);
}

// 8. Admin panel permissions
const permissions = { create: true, edit: true, delete: false };
for (let role in permissions) {
  console.log(`${role} allowed: ${permissions[role]}`);
}

// 9. Iterate theme colors
const themeColors = { primary: "#ff0000", secondary: "#00ff00" };
for (let color in themeColors) {
  console.log(`${color} → ${themeColors[color]}`);
}

// 10. Dashboard metrics
const metrics = { users: 1000, visits: 5000, bounceRate: "45%" };
for (let metric in metrics) {
  console.log(`${metric}: ${metrics[metric]}`);


// 5. Real-World For...Of Loop Examples (Arrays, Strings, etc.)

// 1. Display top menu items
const menuItems = ["Home", "About", "Contact"];
for (let item of menuItems) {
  console.log(`Menu: ${item}`);
}

// 2. Iterate over product list
const products = ["Phone", "Laptop", "Tablet"];
for (let product of products) {
  console.log(`Product: ${product}`);
}

// 3. Animate sliders
const slides = ["Slide1", "Slide2", "Slide3"];
for (let slide of slides) {
  console.log(`Show: ${slide}`);
}

// 4. Loop through entered tags
const tags = ["tech", "coding", "design"];
for (let tag of tags) {
  console.log(`Tag: ${tag}`);
}

// 5. Process uploaded files
const files = ["img1.jpg", "img2.png"];
for (let file of files) {
  console.log(`Uploading: ${file}`);
}

// 6. Display testimonials
const reviews = ["Great service", "Loved it", "Highly recommended"];
for (let review of reviews) {
  console.log(`Review: ${review}`);
}

// 7. Loop over characters of a username
const username = "Shalini";
for (let char of username) {
  console.log(char);
}

// 8. Render FAQ questions
const faqs = ["What is this?", "How to use?", "Is it free?"];
for (let question of faqs) {
  console.log(`FAQ: ${question}`);
}

// 9. Play background music notes
const notes = ["C", "D", "E", "F"];
for (let note of notes) {
  console.log(`Play note: ${note}`);
}

// 10. Loop over recent messages
const messages = ["Hi", "How are you?", "Bye"];
for (let msg of messages) {
  console.log(`Message: ${msg}`);
}


//6. Real-World Break & Continue Examples

// 1. Stop carousel after 3 slides
const slides = ["s1", "s2", "s3", "s4"];
for (let i = 0; i < slides.length; i++) {
  if (i === 3) break;
  console.log(`Showing: ${slides[i]}`);
}

// 2. Skip disabled form fields
const fields = ["name", "email", "disabled", "password"];
for (let field of fields) {
  if (field === "disabled") continue;
  console.log(`Validating: ${field}`);
}

// 3. Exit loading spinner if user cancels
let loading = true;
for (let i = 0; i < 5; i++) {
  if (!loading) break;
  console.log("Loading...");
  if (i === 2) loading = false;
}

// 4. Skip empty reviews
const reviews = ["Nice", "", "Great"];
for (let r of reviews) {
  if (!r) continue;
  console.log(`Review: ${r}`);
}

// 5. Stop when correct password entered
const attempts = ["123", "admin", "password"];
for (let pass of attempts) {
  console.log(`Trying: ${pass}`);
  if (pass === "admin") {
    console.log("Access granted");
    break;
  }
}

// 6. Skip already liked posts
const posts = [{ id: 1, liked: true }, { id: 2, liked: false }];
for (let post of posts) {
  if (post.liked) continue;
  console.log(`Liking post ${post.id}`);
}

// 7. Exit loop after finding user
const users = ["alice", "bob", "charlie"];
for (let user of users) {
  if (user === "bob") {
    console.log(`Found ${user}`);
    break;
  }
}

// 8. Skip hidden products
const products = [{ name: "A", visible: false }, { name: "B", visible: true }];
for (let p of products) {
  if (!p.visible) continue;
  console.log(`Product: ${p.name}`);
}

// 9. End poll on first 100 votes
for (let votes = 1; votes <= 150; votes++) {
  if (votes > 100) break;
  console.log(`Vote count: ${votes}`);
}

// 10. Skip banned words in comment
const words = ["great", "spam", "awesome"];
for (let word of words) {
  if (word === "spam") continue;
  console.log(`Allowed word: ${word}`);
}


/*********************Patterns**********************************/

//1. Star Rating Pattern (★★★★★☆☆)Used on product review pages.

let rating = 3; // out of 5
let stars = "";
for (let i = 1; i <= 5; i++) {
  stars += (i <= rating) ? "★" : "☆";
}
console.log(stars); // Output: ★★★☆☆

//2. Checkerboard UI Pattern Used in image galleries or game boards (e.g., chess).

let gridSize = 4;
for (let row = 0; row < gridSize; row++) {
  let pattern = "";
  for (let col = 0; col < gridSize; col++) {
    pattern += (row + col) % 2 === 0 ? "⬜" : "⬛";
  }
  console.log(pattern);
}
/* Output:
⬜⬛⬜⬛
⬛⬜⬛⬜
⬜⬛⬜⬛
⬛⬜⬛⬜
*/

//3. Dynamic Star Pyramid Pattern Used for user reviews, trophies, leaderboards.

let levels = 5;
for (let i = 1; i <= levels; i++) {
  console.log(" ".repeat(levels - i) + "★".repeat(i));
}
/* Output:
    ★
   ★★
  ★★★
 ★★★★
★★★★★
*/

//4. Form Field Completion Tracker Shows a visual indicator of form progress (✓ or ✗)

let fields = { name: "Shalini", email: "", password: "12345" };
for (let field in fields) {
  let status = fields[field] ? "✓" : "✗";
  console.log(`${field}: ${status}`);
}
/* Output:
name: ✓
email: ✗
password: ✓
*/

//5. Password Strength Meter (Simple Visual) Useful in user registration.

let password = "abc123XYZ!";
let strength = password.length;
let meter = "";

for (let i = 1; i <= 10; i++) {
  meter += (i <= strength) ? "█" : "░";
}
console.log(`Strength: ${meter}`);

//6. Dynamic Calendar Row Builder Used on event listing or calendar websites.

for (let week = 1; week <= 4; week++) {
  let weekRow = "";
  for (let day = 1; day <= 7; day++) {
    weekRow += `Day${(week - 1) * 7 + day}\t`;
  }
  console.log(weekRow);
}
/* Output:
Day1	Day2	Day3	Day4	Day5	Day6	Day7
Day8	Day9	Day10	Day11	Day12	Day13	Day14
...
*/

// 7. Like Counter Pattern Display ❤️ icons based on like counts.

let likeCount = 4;
let pattern = "";
for (let i = 0; i < 5; i++) {
  pattern += (i < likeCount) ? "❤️" : "🤍";
}
console.log(`Likes: ${pattern}`);

//8. Product Grid with Rows & Columns Used in e-commerce cards layout.

let products = ["Shoe", "Watch", "T-shirt", "Cap", "Bag", "Glasses"];
let columns = 3;
for (let i = 0; i < products.length; i++) {
  process.stdout.write(products[i] + "\t");
  if ((i + 1) % columns === 0) console.log(); // New row
}
/* Output:
Shoe    Watch   T-shirt
Cap     Bag     Glasses
*/

//9. Notification Dot Pattern Red dot when unread notifications exist.

let notifications = [true, false, true, true]; // unread=true
for (let i = 0; i < notifications.length; i++) {
  console.log(`Notification ${i + 1}: ${notifications[i] ? "🔴" : "⚪"}`);
}

//10. Responsive Layout Column Star Used to visualize responsive rows on admin dashboards.

let sections = 3;
for (let i = 0; i < sections; i++) {
  let layout = "";
  for (let j = 0; j <= i; j++) {
    layout += "🟥";
  }
  console.log(`Row ${i + 1}: ${layout}`);
}
/* Output:
Row 1: 🟥
Row 2: 🟥🟥
Row 3: 🟥🟥🟥
*/
