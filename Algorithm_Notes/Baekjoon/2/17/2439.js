const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();
let arr = new Array(Number(input)).fill(" ");

for (let i = Number(input) - 1; i >= 0; i--) {
    arr[i] = "*";
    console.log(arr.join(""))
}