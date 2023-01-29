class Stack {
  constructor(array) {
    this.array = array ? array : [];
  }

  push(element) {
    return this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

function answer(giraffe) {
  let result = 0;
  let stack = new Stack();
  let count = 0;

  giraffe.push(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < giraffe.length; i++) {
    while (!stack.isEmpty() && stack.peek()["h"] < giraffe[i]) {
      result += i - stack.pop()["i"] - 1;
    }
    stack.push({h : giraffe[i], i : i});
  }

  return result;
}

let input = [
  [10,3,7,4,12,2],
  [7,4,12,1,13,11,12,6],
  [20,1,19,18,15,4,6,8,3,3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
