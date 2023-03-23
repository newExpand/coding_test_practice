const filePath = "./example.txt";

const input = require("fs").readFileSync(filePath, "utf8").toString().trim().split("\n");
const len = parseInt(input.shift());
const papers = input.map((paper) => paper.split(" ").map(Number));

let answer = [0, 0];

function dv(x, y, len) {
    let count = 0;
    for (let i = x; i < x + len; i++) {
        for (let j = y; j < y + len; j++) {
            if (papers[i][j]) count++;
        }
    }

    if (!count) {
        answer[0]++;
    } else if (count === len * len) {
        answer[1]++;
    } else {
        dv(x, y, len / 2);
        dv(x, y + len / 2, len / 2);
        dv(x + len / 2, y, len / 2);
        dv(x + len / 2, y + len / 2, len / 2);
    }
}

dv(0, 0, len);

console.log(answer.join(" "));

// class Node {
//     constructor(item) {
//         this.item = item;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(item) {
//         const node = new Node(item);
//         if (this.head === null) {
//             this.head = node;
//             this.head.next = this.tail;
//         } else {
//             this.tail.next = node;
//         }

//         this.tail = node;
//         this.length++;
//     }

//     pop() {
//         const pop = this.head;
//         this.head = this.head.next;
//         this.length--;

//         return pop.item;
//     }

//     size() {
//         return this.length;
//     }

//     empty() {
//         if (this.length == 0) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }

//     front() {
//         if (this.empty() === 1) return -1;
//         return this.head.item;
//     }

//     back() {
//         if (this.empty() === 1) return -1;
//         return this.tail.item;
//     }
// }

// const queue = new Queue();

// queue.push([0, 0, len]);

// let answer = [0, 0];

// while (!queue.empty()) {
//     let [x, y, s] = queue.pop();
//     let first = papers[x][y];
//     let same = true;

//     for (let i = x; i < x + s; i++) {
//         for (let j = y; j < y + s; j++) {
//             if (papers[i][j] !== first) {
//                 same = false;
//                 break;
//             }
//         }
//         if (!same) break;
//         console.log(same);
//     }

//     if (same) {
//         answer[first]++;
//     } else {
//         queue.push([x, y, s / 2]);
//         queue.push([x + s / 2, y, s / 2]);
//         queue.push([x, y + s / 2, s / 2]);
//         queue.push([x + s / 2, y + s / 2, s / 2]);
//     }
// }

// console.log(answer);
