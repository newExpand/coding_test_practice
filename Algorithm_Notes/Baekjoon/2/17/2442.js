const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

let arr = '';

for (let i = 1; i <= Number(input); i++) {
    arr = " ".repeat(Number(input) - i) + "*".repeat(i * 2 - 1);
    console.log(arr);
}


