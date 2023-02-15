const filePath = "./example.txt";
const input = require("fs").readFileSync(filePath, "utf8").toString().trim().split("\n");
const len = input.shift();

for (let i = 0; i < len; i++) {
    let num = input[i].split(" ").map(Number);

    console.log(`Case #${i+1}: ${num[0] + num[1]}`);
}
