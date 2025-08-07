//Example-7 Social Media Platform

// Class: User
class User {
    constructor(username) {
        this.username = username; // Username of the user
        this.posts = [];          // Array to hold user's posts
    }

    // Method to create a new post
    createPost(content) {
        const post = new Post(content, this);
        this.posts.push(post); // Add the post to the user's posts
        console.log(`${this.username} created a new post: "${content}"`);
    }

    // Method to display all posts by the user
    displayPosts() {
        console.log(`Posts by ${this.username}:`);
        this.posts.forEach(post => post.displayInfo());
    }
}

// Class: Post
class Post {
    constructor(content, user) {
        this.content = content; // Content of the post
        this.user = user;       // User who created the post
        this.likes = 0;         // Number of likes on the post
    }

    // Method to like the post
    like() {
        this.likes++;
        console.log(`${this.user.username} liked the post: "${this.content}"`);
    }

    // Method to display post information
    displayInfo() {
        console.log(`"${this.content}" - Likes: ${this.likes} (by ${this.user.username})`);
    }
}

// Class: SocialMedia
class SocialMedia {
    constructor() {
        this.users = []; // Array to hold users
    }

    // Method to add a user to the platform
    addUser (user) {
        this.users.push(user);
        console.log(`User  ${user.username} has joined the platform.`);
    }

    // Method to display all users
    displayUsers() {
        console.log("Users on the platform:");
        this.users.forEach(user => console.log(user.username));
    }
}

// Example usage
const socialMedia = new SocialMedia();

// Create users
const user1 = new User("Alice");
const user2 = new User("Bob");

// Add users to the social media platform
socialMedia.addUser (user1);
socialMedia.addUser (user2);

// Users create posts
user1.createPost("Hello, world!");
user1.createPost("Just had a great lunch!");
user2.createPost("Excited for the weekend!");

// Users like posts
user1.posts[0].like(); // Alice likes her own post
user2.posts[0].like(); // Bob likes Alice's first post

// Display all posts by users
user1.displayPosts();
user2.displayPosts();

// Display all users on the platform
socialMedia.displayUsers();