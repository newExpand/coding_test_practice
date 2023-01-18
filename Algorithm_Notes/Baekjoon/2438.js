const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath, "utf8").toString();
let len = Number(input);
let str = "";

for (let i = 0; i < len; i++) {
    str += "*";
    console.log(str)
}


