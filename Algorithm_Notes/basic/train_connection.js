class Train {
  constructor(number) {
    this.number = number;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let train = new Train(value);
    let current = this.head;

    if (this.head === null) {
      this.head = train;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = train;
    }
  }

  printNode() {
    for (let node = this.head; node !== null; node = node.next) {
      process.stdout.write(`${node.number} -> `);
    }
    console.log("null");
  }
}

function answer(nums) {
  let ll = new LinkedList();

  

  for (let num of nums) {
    ll.append(num)
  }


  return ll;
}

let input = [
  [4, 7, 1, 10, 6],
  [3, 10, 6, 9, 11, 3, 4],
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}