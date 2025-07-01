let rows = 3;
let variable = 1;
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // Inner Loop - I -> for the spaces
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }

   // Inner Loop - II -> for the series of numbers
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += variable;
      variable++;
   }

   pattern += "\n";
}
console.log(pattern);