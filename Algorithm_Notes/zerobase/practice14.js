function answer(x_arr, y_arr) {
    let result = [];

    let x_sort = x_arr.sort((a, b) => a - b);
    let y_sort = y_arr.sort((a, b) => a - b);

    let x = x_sort[0] === x_sort[1] ? x_sort[2] : x_sort[0];
    let y = y_sort[0] === y_sort[1] ? y_sort[2] : y_sort[0];

    result = [x, y];


    return result;
}

let input = [
    [[5,5,8], [5,8,5]],
    [[3,1,1],[2,1,2]],
    [[7,7,3],[4,1,1]]
]


for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i][0], input[i][1]));
}