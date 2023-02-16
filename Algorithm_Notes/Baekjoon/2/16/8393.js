const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();
let num = 0;

for (let i = Number(input); i > 0; i--) {
    num += i;
}

console.log(num);
