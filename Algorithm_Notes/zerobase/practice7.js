function answer(score) {
    let average = 0;
    let sum = score.reduce((acc, cur) => acc + cur, 0);
    let len = score.length;

    average = (sum / len).toFixed(2);

    return average;
}

let input = [
    [80,95,65,70,100],
    [82,77,51,64,73,90,80],
    [100,71,59,88,72,75,91,93]
]


for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
}