function answer(str) {
    let fix_str = "";
    let splitStr = str.split(" ");

    for (let x of splitStr) {
        fix_str += x[0].toUpperCase() + x.slice(1) + " ";
    }



    return fix_str;
}

let input = [
    "Hello, My name is john",
    "This week is closed due to COVID-19",
    "fifty percent off this week"
];


for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
}