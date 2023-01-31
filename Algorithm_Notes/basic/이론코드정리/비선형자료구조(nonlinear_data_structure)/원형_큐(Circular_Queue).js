const DEFAULT_SIZE = 5;

// CircularQueue() : 초기 속성값 설정을 위한 생성자 함수
class CircularQueue {
    constructor(array = [], size = DEFAULT_SIZE) {
        this.array = array;
        this.size = array.length > size ? array.length : size
        this.length = array.length;
        this.head = 0;
        this.tail = array.length
    }

    // getBuffer() : 객체 내 데이터 셋 반환
    getBuffer() {
        return this.array.slice();
    }

    // isEmpty() : 데이터 비어 있는지 확인
    isEmpty() {
        return this.array.length === 0;
    }

    // isFull() : 데이터 꽉 차 있는지 확인
    isFull() {
        return this.array.length === this.size;
    }

    // enqueue() : 데이터 추가
    enqueue(element) {
        if (this.isFull()) return false;

        this.array[this.tail] = element;
        this.tail = (this.tail + 1) % this.size;
        this.length++;

        return true;
    }

    // dequeue() : 데이터 삭제
    dequeue() {
        if (this.isEmpty()) return undefined;

        let element = this.array[this.head];
        delete this.array[this.head];
        this.head = (this.head + 1) % this.size;
        this.length--;

        return element;
    }

    // front() : 가장 첫 데이터 반환
    front() {
        return this.array.length === 0 ? undefined : this.array[this.head];
    }

    // size() : 큐 내 데이터 개수 확인
    dataSize() {
        return this.length;
    }

    // clear() : 큐 초기화
    clear(size = DEFAULT_SIZE) {
        this.array = [];
        this.size = size;
        this.length = 0;
        this.head = 0;
        this.tail = 0;
    }
}