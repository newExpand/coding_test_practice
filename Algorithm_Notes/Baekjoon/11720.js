const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim().split('\n');
input.shift();

let result = [...input.join("")].reduce((acc, cur) => {
    return acc + Number(cur);
}, 0)

console.log(result);
