let n=5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j <= i) {
        str += String.fromCharCode(64 + i + j - 1);
      } else {
        str += String.fromCharCode(64 + 2 * i - j);
      }
    }
    console.log(str);
  }