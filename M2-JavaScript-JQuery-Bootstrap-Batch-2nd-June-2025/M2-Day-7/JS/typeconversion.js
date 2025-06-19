//Implicit Conversion

//Number to String
let num = 5;
console.log("The answer is " + num); // "The answer is 5"

//String to Number
let str = "5";
console.log(str * 2); // 10

//Boolean to Number
let bool = true;
console.log(bool * 2); // 2

//Null and Undefined to Primitive
let nullValue = null;
console.log(nullValue + 2); // NaN
let undefinedValue = undefined;
console.log(undefinedValue + 2); // NaN



//explicit type conversion

//String()
let num1 = 5;
console.log(String(num1)); // "5"

//Number()
let str1 = "5";
console.log(Number(str1)); // 5

//Boolean()
let str2 = "true";
console.log(Boolean(str2)); // true

//parseInt() and parseFloat()
let str3 = "5.5";
console.log(parseInt(str3)); // 5
console.log(parseFloat(str3)); // 5.5

//toString()
let num2 = 5;
console.log(num2.toString()); // "5"
