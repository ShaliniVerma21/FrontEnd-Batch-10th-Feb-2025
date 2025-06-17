//=============================== Operator =====================================
//Specific Character used to perform any operation or calculation or comparision. 
//===============================================================================

//arithmetic operator
let x=10;
let y=20;
let result;

//addition
console.log("Addition result : "+(result=x+y));

//subtraction
console.log("Subtraction result : "+(result=x-y));

//multiplication
console.log("Multiplication result : "+(result=x*y));

//devision
console.log("Devision result : "+(result=x/y));

//exponentiation
console.log("Exponentiation result : "+(result=x**y));

//Modulous
console.log("Modulous result : "+(result=x%y));


//=============================== Unary Operator =====================================

//increament and decrement x=10,y=20

//postfix
result=x++;
console.log("Increament result : "+ x);//x=11
result=y--;
console.log("Decreament result : "+y);//x=19

console.log(x+2);//expected output=13
console.log(y+3);//expected output=22

//prefix
console.log("Prefix Unary operator");
let x11=30;
let y11=40;
result=++x11;
console.log("Increament result : "+ x11);//x=31
result=--y11;
console.log("Decreament result : "+y11);//x=39

console.log(x11+2);//expected output=33
console.log(y11+3);//expected output=42

let s=2;
let t=3;
console.log("Post increment : "+(s++));//s=2
console.log(s);//s=3
console.log("Post decrement : "+(t--));//t=3
console.log(t);//t=2
console.log("pre increment : "+ (++s));//s=4
console.log(s);//4
console.log("pre decrement : "+(--t));//t=1
console.log(t);//1


//Assignment Operator
let x1=5;//assigning value
let y1=4;

//addition
console.log("Addition result : "+(x1+=y1));

//subtraction
console.log("Subtraction result : "+(x1-=y1));

//multiplication
console.log("Multiplication result : "+(x1*=y1));

//devision
console.log("Devision result : "+(x1/=y1));

//exponentiation
console.log("Exponentiation result : "+(x**=y1));

//Modulous
console.log("Modulous result : "+(x1%=y1));
