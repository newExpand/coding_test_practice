
// 별도의 자료구조인 연결 리스트를 병합 사용하여 Hash 충돌을 해결한 해싵테이블 기반 자료구조
import { LinkedList } from "../선형자료구조(linear_data_structure)/연결리스트(LinkedList).mjs";
const HASH_SIZE = 37;

class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class ChainingHashTable {
    constructor() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    hashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }

    clear() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    size() {
        return this.length;
    }

    put(key, value) {
        let index = this.hashCode(key);
        console.log(`key: ${key} -> index : ${index}`);

        if (this.table[index] === undefined) {
            this.table[index] = new LinkedList();
        }

        this.table[index].append(new Element(key, value));
        this.length++;

        return true;
    }

    getBuffer() {
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let current = this.table[i].head;
                do {
                    array.push(current.data);
                    current = current.next
                } while (current);
            }
        }

        return array;
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let current = this.table[i].head;
                process.stdout.write(`#${i}`);
                do {
                    process.stdout.write(` -> 
                    ${current.data.key} : ${current.data.value}`);
                    current = current.next;
                } while (current);
                console.log("")
            }
        }
    }

    get(key) {
        let index = this.hashCode(key);

        if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
            let current = this.table[index].head;

            do {
                if (current.data.key === key) {
                    return current.data.value;
                }
                current = current.next;
            } while (current);
        }

        return undefined
    }

    remove(key) {
        let index = this.hashCode(key);
        let element = undefined;

        if (this.table[index] !== undefined) {
            let current = this.table[index].head;

            do {
                if (current.data.key === key) {
                    element = current.data;
                    this.table[index].remove(current.data);
                    if (this.table[index].isEmpty()) {
                        delete this.table[index];
                    }
                }
                current = current.next;
            } while (current);
        }

        this.length--;
        return element;
    }
}