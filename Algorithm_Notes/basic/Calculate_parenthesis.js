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
  let result = 0;
  let stack = new Stack();
  let temp = 1;


  for (let i = 0; i < str.length; i++) {
    let mark = str[i];

    switch(mark) {
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.isEmpty() || stack.peek() !== "(") {
          return 0;
        }

        if (str[i - 1] === "(") {
          result += temp;
        }

        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (stack.isEmpty() || stack.peek() !== "[") {
          return 0;
        }

        if (str[i - 1] === "[") {
          result += temp;
        }

        stack.pop();
        temp /= 3;
        break;
    }
  }

  if (!stack.isEmpty()) {
    return 0;
  }

  return result;
}

let input = [
  "(()[[]])",
  "[][]((])",
  "(()[[]])([])"
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
