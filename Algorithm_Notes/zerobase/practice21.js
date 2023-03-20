function answer(str) {
    let spam_flag;
    let regex = /advert/gi;

    spam_flag = regex.test(str);

    return spam_flag;
}

let input = [
    "RE: Request documents",
    "[Advertisement] free mobile!",
    "50% off this (advertising)"
];


for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
}