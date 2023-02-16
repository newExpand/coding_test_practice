const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim().split(" ").map(Number);

const day = new Date(`2007-${input[0]}-${input[1]}`).getDay();
const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

console.log(arr[day]);
