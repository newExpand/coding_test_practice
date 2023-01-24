function answer(s, e) {

  // 첫번째 풀이 고차함수와 객체를 사용하여 풀이
    // let arr = [s].reduce((acc) => {
  //   for (let i = s; i <= e; i++) {
  //     acc.push(i);
  //   }
  //   return acc;
  // }, []);
  // let obj = [0].reduce((acc) => {
  //   for (let i = 0; i <= 9; i++) {
  //     acc[i] = 0;
  //   }
  //   return acc;
  // }, {});

  // for (let i = 0; i < arr.length; i++) {
  //   while (true) {
  //     if (Math.floor(arr[i]) === 0) break;
  //     let idx = Math.floor(arr[i] % 10);

  //     if (obj.hasOwnProperty(idx)) {
  //       obj[idx]++;
  //     }

  //     arr[i] /= 10;
  //   }
  // }

  // result = Object.values(obj);



  // 배열을 이용하여 풀이
  let result = Array(10).fill(0);
  let count;

  for (let i = s; i <= e; i++) {
    count = i;

    while (count !== 0) {
      result[count % 10]++;
      count /= 10;
      count = parseInt(count);
    }
  }

  return result;
}

let input = [
  [129, 137],
  [1412, 1918],
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
