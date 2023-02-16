const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

console.log(input);
