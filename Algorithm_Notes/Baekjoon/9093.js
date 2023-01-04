const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
input.shift();

let result = input.map((x) => {
  let arr = x.split(" ").map((y) => {
    let reverseString = y.replace(/\r/g, "").split("").reverse().join("");
    return reverseString;
  });

  return arr.join(' ');
});

console.log(result.join('\n'))
