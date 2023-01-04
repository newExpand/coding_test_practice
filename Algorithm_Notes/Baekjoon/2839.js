const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString();
let number = Number(input);
let count = 0;

while (true) {
  if (number % 5 === 0) {
    console.log(number / 5 + count);
    break;
  }

  if (number < 0) {
    console.log(-1);
    break;
  }

  count++;
  number -= 3;
}
