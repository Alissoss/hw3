function fizzBuzz(num) {
    switch (true) {
        case (num % 3 === 0 && num % 5 === 0):
            console.log("FizzBuzz");
            break;
        case (num % 3 === 0):
            console.log("Fizz");
            break;
        case (num % 5 === 0):
            console.log("Buzz");
            break;
        default:
            console.log(num);
    }
}

fizzBuzz(15)