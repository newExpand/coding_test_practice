function answer(s, e) {
    let sequence = [];
    
    sequence.push(s);
    sequence.push(e);

    while (true) {
        sum = s - e;
        s = e;
        e = sum;

        if (e < 0) break;

        sequence.push(e);
    }
    
    // let count = 0;

    // while (true) {
    //     let variation = sequence[count] - sequence[count + 1];
    //     if (variation < 0) break;
    //     sequence.push(variation);

    //     count++;
    // }    


    return sequence;
}

let input = [
    [9,3],
    [6,3],
    [13,7]
]


for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i][0], input[i][1]));
}