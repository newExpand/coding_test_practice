const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();
const number = Number(input);

const DP = Array.from({ length: number + 1 }, () => 0);

for (let i = 2; i <= number; i++) {
    DP[i] = DP[i - 1] + 1;

    if (i % 2 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
}

console.log(DP[number])