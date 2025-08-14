/*Example-4 using class, objects, functions,constructors, variables 
and Inheritance , polymorphism Concepts*/

//Chat Application

// Base class for Message
class Message {
    constructor(sender, timestamp) {
        this.sender = sender;
        this.timestamp = timestamp || new Date(); // Automatically set the timestamp to now if not provided
    }

    // Method to display message details
    displayInfo() {
        return `Sender: ${this.sender}\nTimestamp: ${this.timestamp.toLocaleString()}`;
    }
}

// Subclass for TextMessage
class TextMessage extends Message {
    constructor(sender, content) {
        super(sender);
        this.content = content; // Specific property for text messages
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Text Message\nContent: ${this.content}`;
    }
}

// Subclass for ImageMessage
class ImageMessage extends Message {
    constructor(sender, imageUrl) {
        super(sender);
        this.imageUrl = imageUrl; // Specific property for image messages
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Image Message\nImage URL: ${this.imageUrl}`;
    }
}

// Subclass for VideoMessage
class VideoMessage extends Message {
    constructor(sender, videoUrl) {
        super(sender);
        this.videoUrl = videoUrl; // Specific property for video messages
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}\nType: Video Message\nVideo URL: ${this.videoUrl}`;
    }
}

// Example Usage
const textMessage = new TextMessage("Alice", "Hello, how are you?");
const imageMessage = new ImageMessage("Bob", "http://example.com/image.jpg");
const videoMessage = new VideoMessage("Charlie", "http://example.com/video.mp4");

// Displaying message information
console.log(textMessage.displayInfo());
console.log("--------------------------------------------------");
console.log(imageMessage.displayInfo());
console.log("--------------------------------------------------");
console.log(videoMessage.displayInfo());