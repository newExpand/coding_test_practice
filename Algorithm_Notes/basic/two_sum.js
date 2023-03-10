function answer(nums, target) {
  /* ---------------------------------------*/
  // for 2중 O(n^2)으로 푸는 방법
  //   let answer = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         answer.push(i, j);
  //       }
  //     }
  //   }

  //   return answer;
  /* ---------------------------------------*/

  /* ---------------------------------------*/
  // for 1중 O(n)으로 푸는 방법
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
  }
}

let input = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
