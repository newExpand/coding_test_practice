// Node() : data와 point를 가지고 있는 객체
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList() : head와 length를 가지고 있는 객체
class CircularLinkedList {
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
        process.stdout.write("head -> ");
        if (this.length !== 0) {
            process.stdout.write(`${this.head.data} -> `);
            for (let node = this.head.next; node !== this.head; node = node.next) {
                process.stdout.write(`${node.data} -> `);
            }
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
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = node;
        }
        node.next = this.head;

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

            if (this.isEmpty()) {
                current = node;
            } else {
                while (current.next !== this.head) {
                    current = current.next;
                }
            }

            this.head = node;
            current.next = this.head;
        } else {
            while (index++ < position) {
                prev = current;
                current = current.next;
            }

            node.next = current;
            prev.next = node;

            if (node.next === null) {
                node.next = this.head;
            }
        }

        this.length++;

        return true;
    }

    // remove() : value 데이터를 찾아 노드 삭제
    remove(value) {
        let current = this.head;
        let prev = current;
        let data;

        while (current.data !== value && current.next !== this.head) {
            prev = current;
            current = current.next;
        }

        if (current.data !== value) {
            return null;
        }

        data = current.data;

        if (current === this.head) {
            while (current.next !== this.head) {
                current = current.next;
            }

            this.head = this.head.next;
            current.next = this.head;
        } else {
            prev.next = current.next;
        }

        this.length--;

        return data;
    }

    // removeAt() : position 위치 노드 삭제
    removeAt(position = 0) {
        if (position < 0 || position >= this.length) {
            return null;
        }

        let current = this.head;
        let index = 0;
        let prev;
        let data;

        if (position === 0) {
            data = current.data;

            while (current.next !== this.head) {
                current = current.next;
            }

            this.head = this.head.next;
            current.next = this.head;
        } else {
            while (index++ < position) {
                prev = current;
                current = current.next;
            };

            data = current.data;
            prev.next = current.next;
        }

        this.length--;

        return data;
    }

    indexOf(value) {
        let current = this.head;
        let index = 0;

        do {
            if (current.data === value) {
                return index;
            }

            index++;
            current = current.next;
        } while (current !== this.head);

        return -1;
    }

    remove2(value) {
        let index = this.indexOf(value);
        return this.removeAt(index);
    }
}

let cll = new CircularLinkedList();

cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode();