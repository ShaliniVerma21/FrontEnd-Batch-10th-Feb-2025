let rows = 5;
let char1 = "$";
let char2 = "%";

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop - I -> runs for `rows-1` no. of times
// forms a character triangle
for (let n = 1; n <= rows - 1; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += char1;
   }
   pattern += "\n";
}

// outer loop - II -> runs for `rows` no. of times
// forms an inverse character triangle
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 6 - n; num++) {
      pattern += char2;
   }
   pattern += "\n";
}

console.log(pattern);