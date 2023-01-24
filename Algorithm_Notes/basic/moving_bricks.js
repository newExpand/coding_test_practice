function answer(blocks) {
  let result = 0;
  let average = blocks.reduce((acc, cur) => acc + cur, 0) / blocks.length;

  for (const x of blocks) {
    if (x > average) {
      result += (x - average);
    }
  }

  return result;
}

let input = [
  [5,2,4,1,7,5],
  [12,8,10,11,9,5,8],
  [27,14,19,11,26,25,23,15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
