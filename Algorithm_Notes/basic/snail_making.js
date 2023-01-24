function answer(length) {
  let result = [];
  result = Array.from({length}, () => []);

  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;

  while (true) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }
    
    length--;
    
    if (length <= 0) break;
    
    for (let i = 0; i < length; i++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }

  return result;
}

let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
