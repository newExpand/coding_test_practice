const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();



let star = "*".repeat(Number(input) * 2).split("");
let start = Number(input) - 1;
let end = Number(input);
let result,
    top,
    bottom = [];

for (let i = 0; i < Number(input); i++) {
    bottom.push(star.join(""));
    star[start] = " ";
    star[end] = " ";
    start--;
    end++;
}

top = bottom.slice().reverse().slice(0, -1);

result = top.concat(bottom).join("\n");

console.log(result);