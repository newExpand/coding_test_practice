const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim().split("\n");
input.shift();

let a = input[0].split(" ");

console.log(Math.min(...a), Math.max(...a));

// let max = Math.max(...input.join("").split(" ").map(Number));
// let min = Math.min(...input.join("").split(" ").map(Number));

// console.log(`${min} ${max}`);
