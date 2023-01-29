class Stack {
  constructor(array) {
    this.array = array ? array : [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(element) {
    return this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }
}

function answer(train) {
  let stack = new Stack();
  let num = 0;

  for (let i = 0; i < train.length; i++) {
    while (stack.isEmpty() || stack.peek() < train[i]) {
      stack.push(++num);
    }

    if (stack.peek() === train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return true;
}

let input = [
  [1, 2, 3],
  [3, 2, 1],
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
