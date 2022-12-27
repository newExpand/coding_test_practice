const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
input.shift();
const stack = [];

const methodOBJ = {
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => (stack[0] ? 0 : 1),
  top: () => stack[stack.length - 1] || -1,
  push: (item) => {
    stack.push(item.split(" ")[1]);
    return "";
  },
};

const result = input.reduce(
    (acc, cur) => {
        let trimString = cur.trim();
       return  acc + (methodOBJ[trimString] ? `${methodOBJ[trimString]()}\n` : methodOBJ.push(trimString));
    }, ""
);

console.log(result)