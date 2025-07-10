//Strings Manupulation & functions, logics on it.

// Print message on console
console.log("Welcome to the Extended Text Analysis Tool");

// Print message on webpage
document.write("Welcome to the Extended Text Analysis Tool<br><br>");

// Sample text for analysis
let sampleText = "JavaScript is a versatile programming language. JavaScript is widely used for web development.";

// 1. User Defined Functions

// Function to count the number of words in a string
function countWords(text) {
    let words = text.trim().split(/\s+/);
    return words.length;
}

// Function to count the number of sentences in a string
function countSentences(text) {
    let sentences = text.split(/[.!?]+/).filter(Boolean);
    return sentences.length;
}

// Function to find the longest word in a string
function findLongestWord(text) {
    let words = text.trim().split(/\s+/);
    let longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    return longestWord;
}

// Function to reverse the text
function reverseText(text) {
    return text.split('').reverse().join('');
}

// Function to check if the text is a palindrome
function isPalindrome(text) {
    let cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedText === cleanedText.split('').reverse().join('');
}

//differnt logic for palindrom.

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to remove duplicate words from a string
function removeDuplicateWords(text) {
    let words = text.toLowerCase().split(/\s+/);
    let uniqueWords = [...new Set(words)];
    return uniqueWords.join(' ');
}

// Function to count the occurrences of a specific word
function countWordOccurrences(text, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'gi' for global and case-insensitive
    let matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Function to extract all email addresses from a string
function extractEmails(text) {
    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(emailRegex) || [];
}

// 2. Built-in String Methods

// Count words in the sample text
let wordCount = countWords(sampleText);
console.log(`Word Count: ${wordCount}`); // Output: Number of words

// Count sentences in the sample text
let sentenceCount = countSentences(sampleText);
console.log(`Sentence Count: ${sentenceCount}`); // Output: Number of sentences

// Find the longest word
let longestWord = findLongestWord(sampleText);
console.log(`Longest Word: "${longestWord}"`); // Output: Longest word in the text

// Reverse the text
let reversedText = reverseText(sampleText);
console.log("Reversed Text: ", reversedText); // Output: Reversed text

// Check if the text is a palindrome
let palindromeText = "A man, a plan, a canal, Panama!";
console.log(`Is the text a palindrome? ${isPalindrome(palindromeText)}`); // Output: true or false

// Capitalize the first letter of each word
let capitalizedText = capitalizeFirstLetter(sampleText);
console.log("Capitalized Text: ", capitalizedText); // Output: Capitalized text

// Remove duplicate words
let textWithDuplicates = "JavaScript JavaScript is is a versatile versatile programming programming language.";
let uniqueText = removeDuplicateWords(textWithDuplicates);
console.log("Text without Duplicates: ", uniqueText); // Output: Text without duplicate words

// Count occurrences of a specific word
let occurrences = countWordOccurrences(sampleText, "JavaScript");
console.log(`Occurrences of "JavaScript": ${occurrences}`); // Output: Number of occurrences

// Extract email addresses from a string
let emailSampleText = "Please contact us at support@example.com or sales@example.com for more information.";
let emails = extractEmails(emailSampleText);
console.log("Extracted Emails: ", emails); // Output: Array of extracted email addresses

// Replace a word in the text
let updatedText = replaceWord(sampleText, "JavaScript", "JS");
console.log("Updated Text: ", updatedText); // Output: Text with "JavaScript" replaced by "JS"

// Additional String Manipulation Examples

// Using built-in string methods
let exampleString = " Hello, World!   ";

// Trim whitespace from both ends
console.log("Trimmed String: '" + exampleString.trim() + "'"); // Output: 'Hello, World!'

// Convert to uppercase
console.log("Uppercase: " + exampleString.toUpperCase()); // Output: '   HELLO, WORLD!   '

// Convert to lowercase
console.log("Lowercase: " + exampleString.toLowerCase()); // Output: '   hello, world!   '

// Split the string into an array
let splitString = exampleString.split(", ");
console.log("Split String: ", splitString); // Output: Array of split strings

// Join an array into a string
let joinedString = splitString.join(" - ");
console.log("Joined String: " + joinedString); // Output: '   Hello - World!   '

// Check if the string includes a substring
console.log("Includes 'World': " + exampleString.includes("World")); // Output: true

// Find the index of a substring
console.log("Index of 'World': " + exampleString.indexOf("World")); // Output: Index of 'World'

// Replace a substring
let replacedString = exampleString.replace("World", "JavaScript");
console.log("Replaced String: " + replacedString); // Output: '   Hello, JavaScript!   '