const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n");
const [width, height] = input.shift().split(" ").map(Number);
const arr = [];

const whiteBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function whiteFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (input[i + x][j + y] !== whiteBoard[i][j]) {
        count++;
      }
    }
  }
  return count;
}

function blackFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (input[i + x][j + y] !== blackBoard[i][j]) {
        count++;
      }
    }
  }
  return count;
}


for (let i = 0; i < width - 7; i++) {
  for (let j = 0; j < height - 7; j++) {
    arr.push(whiteFirst(i, j));
    arr.push(blackFirst(i, j));
  }
}

console.log(Math.min(...arr));
