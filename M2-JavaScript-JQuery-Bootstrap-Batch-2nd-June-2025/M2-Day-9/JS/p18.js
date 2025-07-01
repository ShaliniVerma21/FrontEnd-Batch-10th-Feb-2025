let n=5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === 1 || i === n || k === 1 || k === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
  for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === 1 || i === n || k === 1 || k === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }