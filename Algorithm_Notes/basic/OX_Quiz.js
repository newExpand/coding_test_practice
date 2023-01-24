function answer(mark) {
  let result = 0;
  let count = 0;

  for (const x of mark) {
    if (x === 1) {
      count++;
      result += count;
    }
    else {
      count = 0;
    }
  }

  return result;
}

let input = [
  [1,0,1,1,1,0,1,1,0,0],
  [1,1,0,1,1,0,1,1,1,1],
  [1,1,1,1,1,0,0,1,1,0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
