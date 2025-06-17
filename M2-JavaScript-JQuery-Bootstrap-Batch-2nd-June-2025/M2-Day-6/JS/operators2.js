//Relational Operators or Comparision Operators
let a = 5;
let b = 10;

console.log(a == b);//false
console.log(a != b); //true

console.log(a === b);//false  {value and type must be equals in case of ===}
let c = '5';
console.log(a === c); // false (different data type)

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//{== is a loose quality operator that checks values only not data type...}
console.log('5' == 5); // true (coerced to number) 

console.log(null == undefined); // true (both are "falsy" values)


//Ternary Operators

//Syntax -->   Condition ? 'true statement' : 'false Statement';

let iSAdmin = true;
let message = iSAdmin? 'You are an admin' : 'You are not an admin';
console.log(message); // "You are an admin"

let age = 25;
let eligibleToVote = age >= 18? true : false;
console.log(eligibleToVote); // true


//Logical Operators

//and
let isAdmin = true;
let isModerator = true;
let hasPermission = isAdmin && isModerator;
console.log(hasPermission); // true

//or
let isAdmin1 = false;
let isModerator1 = true;
let hasPermission1 = isAdmin1 || isModerator1;
console.log(hasPermission1); // true

//not
let isAdmin2 = true;
let isNotAdmin = !isAdmin2;
console.log(isNotAdmin); // false

let $age = 25;
let hasDriverLicense = true;
let canRentCar = $age >= 21 && hasDriverLicense;
console.log(canRentCar); // true

let userName = 'John';
let defaultUserName = 'Guest';
let displayName = userName || defaultUserName;
console.log(displayName); // "John"

let isAdmin3 = false;
let isNotAdmin3 = !isAdmin3;
console.log(isNotAdmin3); // true

