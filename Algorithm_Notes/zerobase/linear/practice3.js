function answer(nums) {
    let result = [];

    // 내가 푼 것

    // nums.sort((a, b) => a - b);

    // result.push(nums[nums.length - 1], nums[nums.length - 2]);

    // 선생이 푼 것
    
    result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > result[0]) {
            result[1] = result[0];
            result[0] = nums[i];
            console.log(result);
        }
    }

    return result;
}

let input = [
    [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
    [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
    [-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18, 14],
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}
