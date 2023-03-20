function answer(x, y) {
    let result = [];
    let [a, b] = [x, y].sort((a, b) => a - b);


    for (let i = a; i <= b; i++) {
        result.push(i);
    }

    return result;
}

let input = [
    [3, 7],
    [8, 3],
    [12,10]
]


for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
}