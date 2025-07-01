let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      // Print only boundary stars
      if (num === 1 || num === n || n === rows) pattern += "*";
      else {
         pattern += " ";
      }
   }
   pattern += "\n";
}
console.log(pattern);