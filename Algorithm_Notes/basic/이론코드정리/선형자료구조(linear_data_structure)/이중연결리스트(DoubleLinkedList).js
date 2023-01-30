// Node() : data와 point인 next, prev를 가지고 있는 객체
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// LinkedList() : head, tail과 length를 가지고 있는 객체
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // size() : 연결 리스트 내 노드 개수 확인
  size() {
    return this.length;
  }

  // isEmpth(): 객체 내 노드 존재 여부 파악
  isEmpty() {
    return this.length === 0;
  }

  // printNode() : 노드 정방향 출력
  printNode() {
    process.stdout.write("head -> ");
    for (let node = this.head; node !== null; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
  }

  printNodeInverse() {
    let temp = [];

    process.stdout.write("null <- ");
    for (let node = this.tail; node !== null; node = node.prev) {
      temp.push(node.data);
    }

    for (let i = temp.length - 1; i >= 0; i--) {
      process.stdout.write(`${temp[i]} <- `);
    }
    console.log("tail");
  }

  // append() : 연결 리스트 가장 끝에 노드 추가
  append(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // console.log(this.head);
      // console.log(this.tail);
      // console.log(node);
      this.tail.next = node;
      // console.log(this.head);
      // console.log(this.tail);
      // console.log(node);
      node.prev = this.tail;
      // console.log(this.head);
      // console.log(this.tail);
      // console.log(node);
      this.tail = node;
      // console.log(this.tail)
    }


    this.length++;
  }

  remove(value) {
    let current = this.head;
    let prev = current;

    while (current.data !== value && current.next !== null) {
      prev = current;
      current = current.next;
    }

    if (current.data !== value) {
      return null;
    }

    if (current === this.head) {
      this.head = current.next;

      if (this.length === 1) this.tail = null;
      else this.head.prev = null;
    } else if (current === this.tail) {
      this.tail = current.prev;
      this.tail.next= null;
    } else {
      prev.next = current.next;
      current.next.prev = prev;
    }

    this.length--;

    return current.data;
  }


  insert(value, position = 0) {
    if (position < 0 || position > this.length) {
      return false;
    }

    let node = new Node(value);
    let current = this.head;
    let index = 0;
    let prev;

    if (position === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    } else if (position === this.length) {
      console.log(current)
      console.log(this.tail)
      current = this.tail;
      console.log(current)
      console.log(this.tail)
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }

      node.next = current;
      prev.next = node;

      current.prev = node;
      node.prev = prev;
    }

    this.length++;

    return true;
  }

  removeAt(position = 0) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    let index = 0;
    let prev;

    if (position === 0) {
      this.head = current.next;
      if (this.length === 1) this.tail = null;
      else this.head.prev = null;
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
      current.next.prev = prev;
    }

    this.length--;

    return current.data;
  }

  indexOf(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === value) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  remove2(value) {
    let index = this.indexOf(value);
    return this.removeAt(index);
  }
}

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
// dll.insert(100);
dll.printNode();
dll.printNodeInverse();
// dll.insert(2, 1);
// dll.insert(50, 3);

// console.log(dll);
// console.log(dll.head)
// console.log(dll.tail)



