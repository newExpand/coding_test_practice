
// Double-Ended Queue의 약자로, 삽입과 삭제가 양쪽 끝에서 모두 발생

// Deque() : 초기 속성값 설정을 위한 생성자 함수
class Deque {
    constructor(array = []) {
        this.array = array;
    }

    // getBuffer() : 객체 내 데이터 셋 반환
    getBuffer() {
        return this.array.slice();
    }

    // isEmpty() : 데이터 비어 있는지 확인
    isEmpty() {
        return this.array.length === 0;
    }

    // pushFront() : 앞쪽 데이터 추가
    pushFront(element) {
        return this.array.unshift(element);
    }

    // popFront() : 앞쪽 데이터 삭제
    popFront() {
        return this.array.shift();
    }

    // pushBack() : 뒤쪽 데이터 추가
    pushBack(element) {
        return this.array.push(element);
    }

    // popBack() : 뒤쪽 데이터 삭제
    popBack() {
        return this.array.pop();
    }

    // front() : 가장 첫 데이터 반환
    front() {
        return this.array.length === 0 ? undefined : this.array[0];
    }

    // back() : 가장 끝 데이터 반환
    back() {
        return this.array.length === 0 ? undefined : this.array[this.array.length - 1];
    }

    // size() : 큐 내 데이터 개수 확인
    size() {
        return this.array.length;
    }

    // clear() : 큐 초기화
    clear() {
        this.array = [];
    }
}