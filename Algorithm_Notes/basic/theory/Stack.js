class Stack {
    constructor(array) {
        this.array = array ? array : [];
    }

    // getBuffer() : 객체 내 데이터 셋 반환
    getBuffer() {
        return this.array.slice();
    }

    // isEmpty() : 객체 내 데이터 존재 여부 파악
    isEmpty() {
        return this.array.length === 0;
    }

    // push() : 데이터 추가
    push(element) {
        return this.array.push(element)
    }

    // pop() : 데이터 삭제
    pop() {
        return this.array.pop();
    }

    // peek() : 가장 끝 데이터 반환
    peek() {
        return this.array[this.array.length - 1];
    }

    // size() : 스택 내 데이터 개수 확인
    size() {
        return this.array.length;
    }

    // indexOf() : 데이터 위치 값 조회
    indexOf(element, position = 0) {
        for (let i = position; i < element; i++) {
            if (element === this.array[i]) return i;
        }

        return -1;
    }

    // includes() : 데이터 존재 여부 확인
    includes(element, position = 0) {
        for (let i = position; i < this.array.length; i++) {
            if (element === this.array[i]) return true;
        }

        return false;
    }
}