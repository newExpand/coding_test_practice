// function answer(a, d, n) {
//     let index = -1;
//     let count = 0;

//     for (let i = 1; ; i++) {
//         count = a + d * (i - 1);

//         if (count > n) break;
//         if (count === n) {
//             index = i;
//             break;
//         }

//         // console.log(count);
//     }
//     // console.log(count);

//     return index;
// }

function answer(a, d, n) {
    let index = -1;

    if ((n - a) % d === 0) {
        index = (n - a) / d + 1;
    } else index = -1;

    return index;
}

let input = [
    [1, 2, 7],
    [2, 3, 10],
    [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
