const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();
let str = "*".repeat(Number(input)).split("");

console.log(str.join(""));

for (let i = 0; i < Number(input); i++) {
    str[i] = " ";

    console.log(str.join(""))
}


