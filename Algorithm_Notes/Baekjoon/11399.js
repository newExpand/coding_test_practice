const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
let len = parseInt(input.shift());
let numberArr = input.join("").split(" ").map(Number);

let result = numberArr
  .sort((a, b) => a - b)
  .reduce((acc, cur, i) => {
    return acc + cur * (len - i);
  }, 0);

console.log(result);
