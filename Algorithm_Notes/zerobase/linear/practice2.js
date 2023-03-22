function answer(chess) {
    let result = [];
    let item = [1, 1, 2, 2, 2, 8];

    for (let i = 0; i < chess.length; i++) {
        result.push(item[i] - chess[i]);
    }

    return result;
}

let input = [
    [0, 1, 2, 2, 2, 7],
    [2, 1, 2, 1, 2, 1],
    [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}
