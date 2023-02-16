const filePath = "./example.txt";
const input = require("fs").readFileSync(filePath, "utf8").toString().split(" ").map(Number);

console.log(input[0] + input[1]);
