/*Example-10 using class, objects, functions,constructors, variables 
and Inheritance , polymorphism Concepts*/

//Content Management System (CMS)

// Base class for Content
class Content {
    constructor(title, author, date) {
        this.title = title;
        this.author = author;
        this.date = date;
    }

    // Method to display content details
    displayInfo() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nDate: ${this.date}`;
    }
}

// Subclass for Article
class Article extends Content {
    constructor(title, author, date, wordCount) {
        super(title, author, date);
        this.wordCount = wordCount; // Specific property for articles
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Article\nWord Count: ${this.wordCount}`;
    }
}

// Subclass for Video
class Video extends Content {
    constructor(title, author, date, duration) {
        super(title, author, date);
        this.duration = duration; // Specific property for videos
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Video\nDuration: ${this.duration} minutes`;
    }
}

// Example Usage
const article1 = new Article("Understanding JavaScript", "Alice Smith", "2023-01-15", 1200);
const video1 = new Video("JavaScript Basics", "Bob Johnson", "2023-02-20", 15);

// Displaying content information
console.log(article1.displayInfo());
console.log("--------------------------------------------------");
console.log(video1.displayInfo());