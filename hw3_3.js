function getYearString(num) {
    let message;
    switch (true) {
        case (num % 10 === 1 && num % 100 !== 11):
            message = "рік";
            break;
        case ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100)):
            message = "роки";
            break;
        default:
            message = "років";
    }
    console.log(`Вам ${num} ${word}`);
}

getYearString(16);