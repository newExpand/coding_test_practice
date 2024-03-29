function answer(dwarf) {
    let result = [];
    let sum = dwarf.reduce((acc, cur) => acc + cur, 0) - 100;
    let faker = [];

    for (let i = 0; i < dwarf.length; i++) {
        for (let j = i + 1; j < dwarf.length; j++) {
            // console.log(i, j);
            if (sum === dwarf[i] + dwarf[j]) {
                faker.push(dwarf[i], dwarf[j]);
            }
        }
    }

    result = dwarf.filter((df) => !faker.includes(df));

    return result;
}

let input = [
    [1, 5, 6, 7, 10, 12, 19, 29, 33],
    [25, 23, 11, 2, 18, 3, 28, 6, 37],
    [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

const formData = new FormData();

formData.append("name", "seungmin");
console.log(formData);
