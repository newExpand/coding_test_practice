const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath, "utf8").toString().split("\n");
