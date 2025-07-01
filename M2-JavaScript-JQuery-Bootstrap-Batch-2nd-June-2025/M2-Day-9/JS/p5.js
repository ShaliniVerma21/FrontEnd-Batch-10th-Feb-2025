let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // Inner Loop - I -> for the spaces
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }

   // Inner Loop - II -> for the numbers
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += num;
   }

   pattern += "\n";
}
console.log(pattern);