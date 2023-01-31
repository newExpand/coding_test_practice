// key-value 형태로 다양한 자료형 개체를 저장하는 자료구조 (Map과 유사)

// Dictionary() : 개체를 저장할 생성자
class Dictionary {
    constructor(items = {}) {
        this.items = items;
    }

    // getBuffer() : 모든 개체 반환
    getBuffer() {
        return { ...this.items };
    }

    // clear() : 초기화
    clear() {
        this.items = {};
    }

    // size() : 크기 반환
    size() {
        return Object.keys(this.items).length;
    }

    // has() : 개체 존재 여부 확인 (key 정보를 배열로 반환)
    has(key) {
        return this.items.hasOwnProperty(key);
    }

    // set() : 개체 추가
    set(key, value) {
        this.items[key] = value;
    }

    // get() : 개체의 value 반환
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }
    
    // remove() : 개체 삭제
    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    // keys() : 모든 key 값을 배열 형태로 변환
    keys() {
        return Object.keys(this.items);
    }

    // values() : 모든 value 값을 배열 형태로 변환
    values() {
        return Object.values(this.items);
    }

    // each() : 모든 개체 요소에 대해 callback 함수 수행
    each(fn) {
        for (let x in this.items) {
            fn(x, this.items[x]);
        }
    }
}

function printDictionary(key, value) {
    console.log(`key : ${key}`);
    console.log(`value : ${value}`);
} 