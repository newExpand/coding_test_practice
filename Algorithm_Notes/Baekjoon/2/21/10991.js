const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

let result;

for (let i = 1; i <= Number(input); i++) {
    result = " ".repeat(Number(input) - i) + "* ".repeat(i);
    console.log(result);
}
