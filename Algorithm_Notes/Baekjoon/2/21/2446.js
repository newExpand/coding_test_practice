const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

let str1 = [],
    str2,
    result;

for (let i = 1; i <= Number(input); i++) {
    str1.push(" ".repeat(Number(input) - i) + "*".repeat(i * 2 - 1));
}

str2 = str1.slice().reverse().slice(0, -1);

result = str2.concat(str1).join("\n");

console.log(result);
