const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

let result = "";
for (let i = 0; i < Number(input); i++) {
    result += i + 1 + "\n";
}

console.log(result);