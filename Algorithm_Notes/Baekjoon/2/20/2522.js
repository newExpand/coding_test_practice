const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

for (let i = 1; i < Number(input); i++) {
    console.log(" ".repeat(Number(input) - i) + "*".repeat(i));
}


for (let i = 0; i < Number(input); i++) {
    console.log(" ".repeat(i) + "*".repeat(Number(input) - i));
}