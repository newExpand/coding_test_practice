const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();
let str = "";

for (let i = Number(input); i > 0; i--) {
    str = "*".repeat(i);
    console.log(str);
}
