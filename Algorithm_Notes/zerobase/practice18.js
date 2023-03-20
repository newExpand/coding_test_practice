function answer(str) {
    let week = new Array(
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    );

    let day;
    let newDate = new Date(str).getDay();
    
    day = week[newDate];


    return day;
}

let input = [
    "2021-01-27",
    "2021-02-27",
    "2021-03-14",
];


for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
}