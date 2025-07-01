let rows = 4;

// variable contains the next element of the pattern
let variable = 1;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += variable+" ";
      variable++;
   }
   pattern += "\n";
}
console.log(pattern);