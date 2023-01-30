// Queue() : 생성자 함수로 초기 데이터 설정
class Queue {
    constructor(array) {
        this.array = array ? array : [];
        this.head = 0
        this.tail = array ? array.length : 0;
    }

    // getBuffer() : 객체 내 데이터 셋 반환
    getBuffer() {
        return this.array.slice();
    }

    // isEmpty() : 객체 내 데이터 o/x
    isEmpty() {
        return this.array.length === 0;
    }

    // enqueue() : 데이터 추가
    enqueue(element) {
        // return this.array.push(element);

        // push/shift 방식에서 index방식으로 변경 - 속도 최적화(push는 괜찮으나 shift가 O(n)의 시간이 걸려서 O(1)로 구현하기 위함)
        return (this.array[this.tail++] = element);
    }

    // dequeue() : 데이터 삭제
    dequeue() {
        // return this.array.shift(); // shift는 O(n)의 시간이 걸림
        
        // push/shift 방식에서 index방식으로 변경 - 속도 최적화(push는 괜찮으나 shift가 O(n)의 시간이 걸려서 O(1)로 구현하기 위함)
        if (this.head === this.tail) return undefined;
        let element = this.array[this.head];
        delete this.array[this.head++];
        return element;
    }

    // front() : 가장 첫 데이터 반환
    front() {
        return this.array.length === 0 ? undefined : this.array[0];
    }

    // size() : 큐 내 데이터 개수 확인
    size() {
        return this.array.length;
    }
}


