// hash 충돌이 발생했을 때, 그 다음 주소를 확인하고 비어 있다면 그 자리에 대신 저장하는 해시테이블 기반 자료구조

const HASH_SIZE = 5; // 충돌 빈도를 증가시키기 위해 5로 변경

class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class LinearHashTable {
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
    // ==== 기존 해시테비을 바뀌는 부분 시작
    put(key, value) {
        let index = this.hashCode(key);
        let startIndex = index;

        console.log(`key : ${key} -> index: ${index}`);

        do {
            if (thia.table[index] === undefined) {
                this.table[index] = new Element(key, value);
                this.length++;
                return true;
            }

            index = (index + 1) % HASH_SIZE;
        } while (index !== startIndex);

        return false
    }

    // get() : 데이터 조회
    get(key) {
        let index = this.hashCode(key);
        let startIndex = index;
        do {
            if (this.table[index] !== undefined && this.table[index].key === key) {
                return this.table[index].value;
            }

            index = (index + 1) % HASH_SIZE;
        } while (index !== startIndex)

        return undefined;
    }

    remove(key) {
        let index = this.hashCode(key);
        let startIndex = index;

        do {
            if (this.table[index] !== undefined && this.table[index].key === key) {
                let element = this.table[index];
                delete this.table[index];
                this.length--;

                return element;
            }

            index = (index + 1) % HASH_SIZE;
        } while (index !== startIndex);

        return undefined;
    }

    // ==== 기존 해시테이블 바뀌는 부분 끝

    getBuffer() {
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                array.push(this.table[i])
            }
        }

        return array;
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`)
            }
        }
    }
}
