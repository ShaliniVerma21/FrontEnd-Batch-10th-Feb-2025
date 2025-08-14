/*Example-2 using class, objects, functions,constructors, variables 
and Inheritance , polymorphism Concepts*/

//Social Media Application

// Base class for Post
class Post {
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.date = new Date(); // Automatically set the date to now
    }

    // Method to display post details
    displayInfo() {
        return `Author: ${this.author}\nContent: ${this.content}\nDate: ${this.date.toLocaleString()}`;
    }
}

// Subclass for TextPost
class TextPost extends Post {
    constructor(author, content) {
        super(author, content);
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Text Post`;
    }
}

// Subclass for ImagePost
class ImagePost extends Post {
    constructor(author, content, imageUrl) {
        super(author, content);
        this.imageUrl = imageUrl; // Specific property for image posts
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Image Post\nImage URL: ${this.imageUrl}`;
    }
}

// Subclass for VideoPost
class VideoPost extends Post {
    constructor(author, content, videoUrl) {
        super(author, content);
        this.videoUrl = videoUrl; // Specific property for video posts
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Video Post\nVideo URL: ${this.videoUrl}`;
    }
}

// Example Usage
const textPost = new TextPost("Alice", "Hello, world!");
const imagePost = new ImagePost("Bob", "Check out this cool picture!", "http://example.com/image.jpg");
const videoPost = new VideoPost("Charlie", "Watch my new video!", "http://example.com/video.mp4");

// Displaying post information
console.log(textPost.displayInfo());
console.log("--------------------------------------------------");
console.log(imagePost.displayInfo());
console.log("--------------------------------------------------");
console.log(videoPost.displayInfo());