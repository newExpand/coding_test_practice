class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    let current = this.head;

    if (this.head === null) {
      this.head = node;
    } else {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = node;      
    }

    node.next = this.head;
  }
}

function answer(n, m, k) {
  let result = [];
  let ll = new LinkedList();
  let current, prev;

  for (let i = 1; i <= n; i++) {
    current = new Node(i);

    if (i === 1) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  }
  current.next = ll.head;


  current = ll.head;
  while (--m) {
    prev = current;
    current = current.next;
  }

  let count;
  while (current.next !== current) {
    result.push(current.data);
    prev.next = current.next;

    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }

  result.push(current.data)

  return result;
}

let input = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
