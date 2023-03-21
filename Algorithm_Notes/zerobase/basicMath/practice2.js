function answer(a, b, c) {
    let number = 0;

    num = [a, b, c];
    num.sort((x, y) => x - y);

    // 내가 짠 코드 1

    // if (b - a > c - b) {
    //     number = a + (b - a) / 2;
    // }

    // if (b - a < c - b) {
    //     number = b + (c - b) / 2;
    // }

    // 내가 짠 코드 2

    let acc = Math.max(b - a, c - b) / 2;

    for (let i = a; ; i++) {
        a += acc;
        if (a !== b) {
            number = a;
            break;
        }
    }

    return number;
}

let input = [
    [1, 7, 10],
    [3, 8, 18],
    [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
