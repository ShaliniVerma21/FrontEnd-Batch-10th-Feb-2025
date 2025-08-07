//Example-5 Online Exam Application

// Class: Question
class Question {
    constructor(questionText, options, correctAnswer) {
        this.questionText = questionText; // The text of the question
        this.options = options;             // Array of answer options
        this.correctAnswer = correctAnswer; // The correct answer
    }

    // Method to display the question and options
    display() {
        console.log(this.questionText);
        this.options.forEach((option, index) => {
            console.log(`${index + 1}: ${option}`);
        });
    }

    // Method to check if the provided answer is correct
    isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}

// Class: Exam
class Exam {
    constructor(title) {
        this.title = title;                // Title of the exam
        this.questions = [];                // Array to hold questions
        this.score = 0;                    // User's score
    }

    // Method to add a question to the exam
    addQuestion(question) {
        this.questions.push(question);
    }

    // Method to start the exam
    start() {
        console.log(`Starting exam: ${this.title}`);
        this.questions.forEach((question, index) => {
            console.log(`\nQuestion ${index + 1}:`);
            question.display();
        });
    }

    // Method to evaluate the answers
    evaluate(answers) {
        this.questions.forEach((question, index) => {
            if (question.isCorrect(answers[index])) {
                this.score++;
            }
        });
        console.log(`\nYour score: ${this.score} out of ${this.questions.length}`);
    }
}

// Class: User
class User {
    constructor(name) {
        this.name = name; // User's name
    }

    // Method to take an exam
    takeExam(exam) {
        exam.start();
        const answers = this.getAnswers(exam.questions.length);
        exam.evaluate(answers);
    }

    // Method to simulate getting answers from the user
    getAnswers(numQuestions) {
        const answers = [];
        for (let i = 0; i < numQuestions; i++) {
            // Simulating user input (for demonstration purposes)
            // In a real application, you would get this from user input
            answers.push(Math.floor(Math.random() * 4) + 1); // Random answer between 1 and 4
        }
        return answers;
    }
}

// Example usage
const exam = new Exam("JavaScript Basics");

// Create questions
const question1 = new Question("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Lisbon"], "3");
const question2 = new Question("Which of the following is a JavaScript data type?", ["String", "HTML", "CSS", "XML"], "1");
const question3 = new Question("What does 'DOM' stand for?", ["Document Object Model", "Data Object Model", "Document Object Module", "Data Object Module"], "1");

// Add questions to the exam
exam.addQuestion(question1);
exam.addQuestion(question2);
exam.addQuestion(question3);

// Create a user
const user = new User("Alice");

// User takes the exam
user.takeExam(exam);