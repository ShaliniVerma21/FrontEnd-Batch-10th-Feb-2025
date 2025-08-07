//Example-3 LinkedIn Profile Management

// Class: Experience
class Experience {
    constructor(title, company, startDate, endDate) {
        this.title = title;        // Job title
        this.company = company;    // Company name
        this.startDate = startDate; // Start date of the job
        this.endDate = endDate;    // End date of the job
    }

    // Method to display experience details
    displayExperience() {
        console.log(`${this.title} at ${this.company} (${this.startDate} - ${this.endDate})`);
    }
}

// Class: Education
class Education {
    constructor(degree, institution, startDate, endDate) {
        this.degree = degree;      // Degree obtained
        this.institution = institution; // Educational institution
        this.startDate = startDate; // Start date of education
        this.endDate = endDate;    // End date of education
    }

    // Method to display education details
    displayEducation() {
        console.log(`${this.degree} from ${this.institution} (${this.startDate} - ${this.endDate})`);
    }
}

// Class: Profile
class Profile {
    constructor(user) {
        this.user = user;          // User associated with the profile
        this.experiences = [];     // Array to hold work experiences
        this.educations = [];      // Array to hold educational qualifications
    }

    // Method to add experience
    addExperience(experience) {
        this.experiences.push(experience);
        console.log(`Added experience: ${experience.title} at ${experience.company}`);
    }

    // Method to add education
    addEducation(education) {
        this.educations.push(education);
        console.log(`Added education: ${education.degree} from ${education.institution}`);
    }

    // Method to display the complete profile
    displayProfile() {
        console.log(`Profile of ${this.user.name}:`);
        console.log(`Email: ${this.user.email}`);
        console.log(`Experiences:`);
        this.experiences.forEach(exp => exp.displayExperience());
        console.log(`Education:`);
        this.educations.forEach(edu => edu.displayEducation());
    }
}

// Class: User
class User {
    constructor(name, email) {
        this.name = name;          // User's name
        this.email = email;        // User's email
        this.profile = new Profile(this); // Create a new profile for the user
    }

    // Method to display user information
    displayUserInfo() {
        console.log(`:User  ${this.name}, Email: ${this.email}`);
    }
}

// Example usage
const user1 = new User("Alice Johnson", "alice.johnson@example.com");
user1.displayUserInfo(); // Display user information

// Create experiences
const exp1 = new Experience("Software Engineer", "Tech Company", "2020-01", "2022-06");
const exp2 = new Experience("Senior Developer", "Another Tech Company", "2022-07", "Present");

// Add experiences to the user's profile
user1.profile.addExperience(exp1);
user1.profile.addExperience(exp2);

// Create education entries
const edu1 = new Education("Bachelor of Science in Computer Science", "University of Technology", "2016-09", "2020-06");
const edu2 = new Education("Master of Science in Software Engineering", "University of Advanced Studies", "2020-09", "2022-06");

// Add education to the user's profile
user1.profile.addEducation(edu1);
user1.profile.addEducation(edu2);

// Display the complete profile
user1.profile.displayProfile();