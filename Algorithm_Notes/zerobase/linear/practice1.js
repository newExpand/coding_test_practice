function answer(nums) {
    let result = [];
    let min = Math.min(...nums);

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === min) {
    //         result.push(i);
    //     }
    // }

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === min) {
            result[count++] = i;
        }
    }

    return result;
}

let input = [
    [5, 2, 10, 2],
    [4, 5, 7, 4, 8],
    [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}
