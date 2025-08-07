// Example-1: Library Management

// Class: Book
class Book {
    constructor(title, author, year) {
        this.title = title;      // Title of the book
        this.author = author;    // Author of the book
        this.year = year;        // Year of publication
        this.isCheckedOut = false; // Status of the book (checked out or not)
    }

    // Method to display book information
    displayInfo() {
        console.log(`Title: ${this.title}, 
Author: ${this.author}, 
Year: ${this.year}, 
Status: ${this.isCheckedOut ? 'Checked Out' : 'Available'}`);
    }
}

// Class: Library
class Library {
    constructor(name) {
        this.name = name;        // Name of the library
        this.books = [];         // Array to hold books
    }

    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }

    // Method to remove a book from the library
    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Removed book: ${book.title}`);
        } else {
            console.log(`Book not found: ${book.title}`);
        }
    }

    // Method to list all books in the library
    listBooks() {
        console.log(`Books in ${this.name}:`);
        this.books.forEach(book => book.displayInfo());
    }

    // Method to search for a book by title
    searchBook(title) {
        const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Found books matching "${title}":`);
            foundBooks.forEach(book => book.displayInfo());
        } else {
            console.log(`No books found matching "${title}".`);
        }
    }

    // Method to check out a book
    checkOutBook(book) {
        if (book.isCheckedOut) {
            console.log(`The book "${book.title}" is already checked out.`);
        } else {
            book.isCheckedOut = true;
            console.log(`Checked out book: ${book.title}`);
        }
    }

    // Method to return a book
    returnBook(book) {
        if (!book.isCheckedOut) {
            console.log(`The book "${book.title}" is not checked out.`);
        } else {
            book.isCheckedOut = false;
            console.log(`Returned book: ${book.title}`);
        }
    }
}

// Example usage
const myLibrary = new Library("City Library");

// Create some book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// List all books in the library
myLibrary.listBooks();

// Search for a book by title
myLibrary.searchBook("1984");
myLibrary.searchBook("Moby Dick");

// Check out a book
myLibrary.checkOutBook(book1);
myLibrary.checkOutBook(book1); // Attempt to check out again

// List all books to see the updated status
myLibrary.listBooks();

// Return a book
myLibrary.returnBook(book1);
myLibrary.returnBook(book1); // Attempt to return again

// List all books to see the updated status
myLibrary.listBooks();

// Remove a book from the library
myLibrary.removeBook(book2);
myLibrary.listBooks(); // List remaining books