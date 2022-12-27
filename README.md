# 코딩테스트 문제 풀이 및 현황

## 22.12.27
### 번호 : 10828, 제목 : 스택

정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

* push X: 정수 X를 스택에 넣는 연산이다.
* pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
* size: 스택에 들어있는 정수의 개수를 출력한다.
* empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
* top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

```html
<!-- 예제 입력1 -->
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
<!-- 예제 입력2 -->
7
pop
top
push 123
top
pop
top
pop
```

**[case1]**
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const len = input.shift();
const stack = [];
const result = [];

for (let i = 0; i < len; i++) {    
        // trim()을 안 넣을시 \r이 인식되어 찾질 못함
    switch(input[i].trim()) {
        case 'pop': 
          result.push(stack.pop() || -1);
          break;

        case 'size': 
          result.push(stack.length);
          break;

        case 'empty': 
          result.push(stack[0] ? 0 : 1);
          break;

        case 'top': 
          result.push(stack[stack.length - 1] || -1);
          break;

        default: 
          stack.push(input[i].split(" ")[1]);
          break;
    }
}

console.log(result.join('\n'));
```

**[case2]**
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
input.shift();
const stack = [];

const methodOBJ = {
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => (stack[0] ? 0 : 1),
  top: () => stack[stack.length - 1] || -1,
  push: (item) => {
    stack.push(item.split(" ")[1]);
    return "";
  },
};

const result = input.reduce(
    (acc, cur, idx, src) => {
        // 위와 마찬가지로 trim()을 안할 시 \r이 인식되어 undefined가 뜸
        let trimString = cur.trim();
        // push 예제는 key값 뿐이 아닌 value값이 같이 있으므로 분기처리 해야함
       return  acc + (methodOBJ[trimString] ? `${methodOBJ[trimString]()}\n` : methodOBJ.push(trimString));
    }, ""
);

console.log(result)
```