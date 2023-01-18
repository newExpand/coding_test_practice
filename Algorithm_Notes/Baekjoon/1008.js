const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath, "utf8").toString().split(" ");

const num1 = input[0];
const num2 = input[1];

console.log(num1 / num2);