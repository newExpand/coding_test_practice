// Node() : data와 point를 가지고 있는 객체
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList() : head와 length를 가지고 있는 객체
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // size() : 연결 리스트 내 노드 개수 확인
  size() {
    return this.length;
  }

  // isEmpty() : 객체 내 노드 존재 여부 파악
  isEmpty() {
    return this.length === 0;
  }

  // printNode() : 노드 출력
  printNode() {
    for (let node = this.head; node !== null; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
  }

  // append() : 연결 리스트 가장 끝에 노드 추가
  append(value) {
    let node = new Node(value);
    let current = this.head;

    if (this.head === null) {
      this.head = node;
    } else {
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node
    }

    this.length++;
  }

  // insert() : position 위치에 노드 추가
  insert(value, position = 0) {
    if (position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value);
    let current = this.head;
    let index = 0;
    let prev;

    if (position === 0) {
        node.next = current;
        this.head = node;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;
    }

    this.length++;

    return true;
  }

  // remove() : value 데이터를 찾아 노드 삭제
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
    } else {
        prev.next = current.next;
    }

    this.length--;

    return current.data
  }

  // removeAt() : position 위치 노드 삭제
  removeAt(position = 0) {
    if (position < 0 || position >= this.length) {
        return null;
    }

    let current = this.head;
    let index = 0;
    let prev;

    if (position === 0) {
        this.head = current.next;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
    }

    this.length--;

    return current.data;
  }

  // indexOf() : value 값을 갖는 노드 위치 반환
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

// remove2() : indexOf + removeAt = remove
  remove2(value) {
    let index = this.indexOf(value);
    return this.removeAt(index);
  }
}


let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);

ll.insert(2,1);
ll.printNode();
ll.insert(3,3);
console.log(ll.size())
console.log(ll.head)

export {LinkedList}