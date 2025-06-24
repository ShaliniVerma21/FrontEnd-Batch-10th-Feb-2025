//Decision Making Statements

//1. If Statement
/*
 Syntax : 
 if (condition)
 {
 // code to be executed if condition is true
 }
 */

//Example

//voting
let age = 25;

if (age >= 18) {
  console.log("You are eligible to vote");
}

//2. If-else Statement
/*
Syntax :
if (condition)
{
// code to be executed if condition is true
}
else
{
// code to be executed if condition is false
}
*/

//Example

//voting
age = 25;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//3. If-else-if(Ladder)
/*
Syntax :
if (condition1)
{
// code to be executed if condition1 is true
}
else if (condition2)
{
// code to be executed if condition2 is true
}
else if (condition3)
{
// code to be executed if condition2 is true
}
.
.
.
else
{
// code to be executed if all conditions are false
}
*/
//Example

//voting
age = 25;

if (age === 18) {
  console.log("You are eligible to vote");
} else if (age === 0) {
  console.log("New Born people are not eligible to vote");
} else if (age === 15) {
  console.log("You will be eligible to vote after 3 years");
} else if (age >= 40) {
  console.log("Absolutly, You are eligible to vote");
} else if (age > 18) {
  console.log("yes,You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//if statement
let x = 5;
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal to 10");
}

//Grades
let score = 87;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//Day of week
let Day = 3; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

if (Day === 1) {
  console.log("Today is Monday");
} else if (Day === 2) {
  console.log("Today is Tuesday");
} else if (Day === 3) {
  console.log("Today is Wednesday");
} else if (Day === 4) {
  console.log("Today is Thursday");
} else if (Day === 5) {
  console.log("Today is Friday");
} else if (Day === 6) {
  console.log("Today is Saturday");
} else {
  console.log("Today is Sunday");
}

//age category
let $age = 25;

if ($age < 18) {
  console.log("You are a minor");
} else if ($age < 30) {
  console.log("You are a young adult");
} else if ($age < 50) {
  console.log("You are an adult");
} else if ($age < 65) {
  console.log("You are a senior citizen");
} else {
  console.log("You are an elderly person");
}

//4. If-else(Nested)
/*
Syntax :
if (condition)
// code to be executed if condition is true
{
if (condition)
{
// code to be executed if condition is true
if (condition)
{
// code to be executed if condition is true
}
else
{
// code to be executed if condition is false
}
}
else
{
// code to be executed if condition is false
}
}
else
{
// code to be executed if condition is false
}
*/

//Example

// Job Application Eligibility Checker
// Sample applicant details
let applicantName = "Shalini Verma";
age = 26;
let qualification = "Graduate"; // Options: "Graduate", "Postgraduate", "Diploma"
let experience = 3; // in years

// Job Application Logic using Nested if-else
if (age >= 21) {
  if (qualification === "Graduate" || qualification === "Postgraduate") {
    if (experience >= 2) {
      console.log(`${applicantName} is eligible for the job.`);
    } else {
      console.log(
        `${applicantName} is not eligible: Minimum 2 years experience required.`
      );
    }
  } else {
    console.log(`${applicantName} is not eligible: Graduation is mandatory.`);
  }
} else {
  console.log(
    `${applicantName} is not eligible: Must be at least 21 years old.`
  );
}

//5. Switch Statement
/*
Syntax:
switch (expression) {
case value1:
         // code to be executed if expression equals value1
          break;
case value2:
          // code to be executed if expression equals value2
          break;
case value3:
          // code to be executed if expression equals value3
          break;
// Add more cases as needed
default: // Optional
          // code to be executed if expression does not match any case
           break;
}
*/
//switch
let color = "blue";

switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "green":
    console.log("The color is green");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "yellow":
    console.log("The color is yellow");
    break;
  default:
    console.log("Unknown color");
}

//HTTp status
let statusCode = 404;

switch (statusCode) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Internal Server Error");
    break;
  default:
    console.log("Unknown status code");
}
