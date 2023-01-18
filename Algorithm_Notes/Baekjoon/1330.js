const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath, "utf8").toString().split(" ").map(Number);

const num1 = input[0];
const num2 = input[1];

if (num1 > num2) console.log(">");
if (num1 < num2) console.log("<");
if (num1 === num2) console.log("==");