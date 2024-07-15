function factorial1(n) {
    let result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    } return result;
}
console.log(factorial1(5));

//재귀 함수로
function factorial2(value) {
    if (value === 0 || value === 1) {
        return 1;
    } else {
        return value * factorial2(value - 1);
    }
}

console.log(factorial2(4));

function myRandom(range, start) {
    return Math.floor(Math.random() * range + start);
}
console.log(myRandom(10, 10));
