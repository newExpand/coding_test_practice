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

function answer(str) {
  let result = [];
  let stack = new Stack();
  let sortStr = str.split("").sort().join("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    while (stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(sortStr[count++]);
      result.push(0);
    }

    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  } 

  return result;
}

let input = [
  "bacd",
  "dabc",
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
