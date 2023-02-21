const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

let result;

for (let i = 1; i <= Number(input); i++) {
    if (i === 1) {
        result = " ".repeat(Number(input) - i) + "*";
    } else if (i !== Number(input)) {
        result = " ".repeat(Number(input) - i) + "*" + " ".repeat(2 * (i - 1) - 1) + "*";
    } else {
        result = "*".repeat(i * 2 - 1);
    }
    console.log(result);
}
