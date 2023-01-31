/*
해시 함수
    임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수 (패스워드같은 곳에 사용 -> sha-2,3)
*/

/*
해시 테이블
    hash 함수를 사용하여,
    평균 O(1) 시간 복잡도로 특정 값을 신속하게 찾는 자료구조
*/

// const HASH_SIZE = 37;
const HASH_SIZE = 1013; // hash table 충돌 해결 코드

// Element() : key, value 저장을 위한 생성자
class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;;
    }
}

// HashTable() : 생성자
class HashTable {
    constructor() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    // hashCode() : 해시 함수
    hashCode(key) {

        // let hash = 0;
        // for (let i = 0; i < key.length; i++) {
        //     hash += key.charCodeAt(i);
        // }


        /* djb2 hash function - 해쉬 충돌 최소화 코드 (소수로 만들어서 충돌 안나게 하는 방법) */
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }

    // put() : 데이터 추가
    put(key, value) {
        let index = this.hashCode(key);
        console.log(`key : ${key} -> index : ${index}`);

        if (this.table[index] !== undefined) {
            return false;
        }

        this.table[index] = new Element(key, value);
        this.length++;

        return true;
    }

    // get() : 데이터 조회
    get(key) {
        return this.table[this.hashCode(key)];
    }

    //remove() : 데이터 삭제
    remove(key) {
        let element = this.table[this.hashCode(key)];

        if (element !== undefined) {
            delete this.table[this.hashCode(key)];
            this.length--;
        }

        return element;
    }

    // clear() : 초기화
    clear() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    // size() : 크기 반환
    size() {
        return this.length;
    }

    // getBuffer() : 데이터 셋 반환
    getBuffer() {
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                array.push(this.table[i]);
            }
        }

        return array;
    }

    // print() : 데이터 셋 출력
    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
            }
        }
    }
}



