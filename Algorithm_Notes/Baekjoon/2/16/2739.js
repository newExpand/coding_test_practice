const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim();

for (let i = 1; i < 10; i++) {
    console.log(`${Number(input)} * ${i} = ${Number(input) * i}`);
}