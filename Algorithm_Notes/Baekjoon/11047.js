const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [n, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n");
let len = parseInt(n.split(" ")[0]);
let money = parseInt(n.split(" ")[1]);
let input2 = input.map(Number);
let count = 0;

for (let i = len - 1; i >= 0; i--) {
  if (input2[i] <= money) {
    count += parseInt(money / input2[i]);
    money = money % input2[i];
  }
}

console.log(count)
