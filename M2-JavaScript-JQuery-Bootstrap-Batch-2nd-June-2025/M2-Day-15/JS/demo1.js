//Basic DOM

// Check the whole HTML document
console.log(document);

// Get the HTML code as text
console.log(document.documentElement.outerHTML);

// Get just the <head> and <body>
console.log(document.head);
console.log(document.body);

// Inspect Elements
// Get element by ID
console.log(document.getElementById('yourId'));

// Get elements by class name
console.log(document.getElementsByClassName('yourClass'));

// Get elements by tag name
console.log(document.getElementsByTagName('div'));

// Modern way: querySelector
console.log(document.querySelector('.yourClass'));
console.log(document.querySelectorAll('div'));

// Check Element Details
let el = document.querySelector('h1');
console.dir(el); // Show properties/methods
console.log(el.innerText);  // Text inside element
console.log(el.innerHTML);  // HTML inside element
console.log(el.attributes); // All attributes

//Check DOM Hierarchy
console.log(document.body.children);  // Child elements
console.log(document.body.firstElementChild); // First child
console.log(document.body.lastElementChild);  // Last child
console.log(document.body.parentElement);     // Parent element

//Event-Based DOM Testing
document.addEventListener('click', function(event){
    console.log(event.target); // Element clicked
});
