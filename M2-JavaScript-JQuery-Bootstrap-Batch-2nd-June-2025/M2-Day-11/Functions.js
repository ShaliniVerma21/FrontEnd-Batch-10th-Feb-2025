//print message on console
console.log("Hello Students!! Welcome to day11 session");

//print message on webpage
document.write("Hello Students!! Welcome to day11 session");

//Functions in Javascript (block of code that can be defined once and used many times)
//1. parameterized functions  2.non-parameterized functions



// 1. User Defined Functions

//1. function to print message on console
function printMessage() {
    console.log("Hello Students!! Welcome to day11 session");
}

// call the function
printMessage();

//2.function to add 2 numbers
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

//call the functions
console.log(add(10, 20));
console.log(add(4,5));


//3. function to find factorial of a number
// 5! = 5*4*3*2*1 = 120
function factorial(num) {
    if(num==0 || num==1)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1);
    }
}

// call the function
console.log(factorial(5));
console.log(factorial(0));


//2. Built-in functions

let Text="Welcome to JavaScript Classes";

console.log(Text.length);

console.log(Text.toUpperCase());
console.log(Text.toLowerCase());
console.log(Text.split(" "));


//====================================================================
//Library Management System Example
//====================================================================

// Print message on console
console.log("Welcome to the Library Management System");

// Print message on webpage
document.write("Welcome to the Library Management System<br><br>");

// Array to hold the collection of books
let library = [];

// 1. User Defined Functions

// Function to add a new book to the library
function addBook(title, author, year, genre) {
    let book = {
        title: title,
        author: author,
        year: year,
        genre: genre
    };
    library.push(book);
    console.log(`Book "${title}" by ${author} has been added to the library.`);
}

// Function to display all books in the library
function displayBooks() {
    if (library.length === 0) {
        console.log("No books available in the library.");
        return;
    }
    console.log("Books in the Library:");
    library.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.year}) - Genre: ${book.genre}`);
    });
}

// Function to search for a book by title
function searchBookByTitle(title) {
    let foundBooks = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBooks.length > 0) {
        console.log("Search Results:");
        foundBooks.forEach(book => {
            console.log(`- "${book.title}" by ${book.author} (${book.year}) - Genre: ${book.genre}`);
        });
    } else {
        console.log(`No books found with the title containing "${title}".`);
    }
}

// Function to calculate the average publication year of all books
function calculateAverageYear() {
    if (library.length === 0) {
        console.log("No books available to calculate the average year.");
        return;
    }
    let totalYears = library.reduce((acc, book) => acc + book.year, 0);
    let averageYear = totalYears / library.length;
    console.log(`Average Publication Year: ${Math.round(averageYear)}`);
}

// Function to remove a book by title
function removeBook(title) {
    const index = library.findIndex(book => book.title.toLowerCase() === title.toLowerCase());
    if (index !== -1) {
        library.splice(index, 1);
        console.log(`Book "${title}" has been removed from the library.`);
    } else {
        console.log(`Book "${title}" not found in the library.`);
    }
}

// 2. Built-in Functions

// Adding books to the library
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
addBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
addBook("1984", "George Orwell", 1949, "Dystopian");
addBook("Moby Dick", "Herman Melville", 1851, "Adventure");
addBook("War and Peace", "Leo Tolstoy", 1869, "Historical Fiction");

// Displaying all books
displayBooks(); // Output: List of all books in the library

// Searching for a book
searchBookByTitle("1984"); // Output: Details of the book "1984"
searchBookByTitle("Harry Potter"); // Output: Not found message

// Calculating the average publication year
calculateAverageYear(); // Output: Average publication year

// Removing a book
removeBook("Moby Dick"); // Output: Confirmation of removal
displayBooks(); // Output: Updated list of books

// Removing a non-existent book
removeBook("The Catcher in the Rye"); // Output: Not found message

// Using built-in string methods
let exampleText = "Welcome to the Library Management System";
console.log("Text Length: " + exampleText.length); // Output: Length of the string
console.log("Uppercase: " + exampleText.toUpperCase()); // Output: Uppercase version of the string
console.log("Lowercase: " + exampleText.toLowerCase()); // Output: Lowercase version of the string
console.log("Split Text: ", exampleText.split(" ")); // Output: Array of words

// Using built-in array methods
let years = library.map(book => book.year);
console.log("Publication Years: " + years); // Output: Array of publication years
console.log("Oldest Book Year: " + Math.min(...years)); // Output: Oldest book year
console.log("Newest Book Year: " + Math.max(...years)); // Output: Newest book year
console.log("Sorted Publication Years: " + years.sort((a, b) => a - b)); // Output: Sorted array of publication years

// Function to find books by genre
function findBooksByGenre(genre) {
    let foundBooks = library.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    if (foundBooks.length > 0) {
        console.log(`Books in the genre "${genre}":`);
        foundBooks.forEach(book => {
            console.log(`- "${book.title}" by ${book.author} (${book.year})`);
        });
    } else {
        console.log(`No books found in the genre "${genre}".`);
    }
}

// Finding books by genre
findBooksByGenre("Fiction"); // Output: List of fiction books
findBooksByGenre("Science Fiction"); // Output: Not found message