// 3의 배수 술력
var num = parseInt(prompt());

if (num % 3 == 0) {
    console.log(num);
} else {
    console.log("3의 배수가 아닙니다.");
}

//짝, 홀수 구분
var num2 = parseInt(prompt());

if (num2 % 2 == 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}

//두 수 중 큰 수 출력
var num3 = parseInt(prompt());
var num4 = parseInt(prompt());

if (num3 > num4) {
    console.log("큰 값은 num3");
} else if (num3 < num4) {
    console.log("큰 값은 num4");
} else {
    console.log("두 수는 같다.")
}

// 세 수 중에 큰 순서대로 출력
var num5 = parseInt(prompt());
var num6 = parseInt(prompt());
var num7 = parseInt(prompt());

if ((num5 > num6 && num5 > num7) || (num6 > num5 && num6 > num7) || (num7 > num5 && num7 > num6)) {
    if (num5 > num6 && num5 > num7) {
        var maxNum = num5;
        if (num6 > num7) {
            var secNum = num6;
            var thirdNum = num7;
        } else {
            var secNum = num7;
            var thirdNum = num6;
        }
    } else if (num6 > num5 && num6 > num7) {
        var maxNum = num6;
        if (num5 > num7) {
            var secNum = num5;
            var thirdNum = num7;
        } else {
            var secNum = num7;
            var thirdNum = num5;
        }
    } else {
        var maxNum = num7;
        if (num6 > num5) {
            var secNum = num6;
            var thirdNum = num5;
        } else {
            var secNum = num5;
            var thirdNum = num6;
        }
    }
} else {
    console.log("세 수는 같다.")
}
console.log(`${maxNum}, ${secNum}, ${thirdNum}`);

// 두 수 입력받고 큰수가 짝수면 출력
var num8 = parseInt(prompt());
var num9 = parseInt(prompt());

if (num8 > num9){
    if(num8 % 2 == 0){
        console.log(num8);
    } else {
        console.log(`큰 수는 num8이나 짝수가 아님`);
    }
} else if (num9 > num8){
    if(num9 % 2 == 0) {
        console.log(num9);
    } else {
        console.log(`큰 수는 num9이나 짝수가 아님`);
    }
} else {
    console.log("두 수는 같다.");
}

// 두 수 입력받고 합이 짝수고 3의 배수면 출력
var num10 = parseInt(prompt());
var num11 = parseInt(prompt());
var sum = num10 + num11;
if (sum % 2 == 0 && sum % 3 == 0){
    console.log(`합이 짝수고 3의 배수인 두 수는 ${num10},${num11}`);
} else {
    console.log("조건 미충족");
}

// 수를 입력받고 3의배수는 미출력, 3의 배수이면서 5의 배수는 출력
var num12 = parseInt(prompt());

if (num12 % 3 == 0 && num12 % 5 == 0){
    console.log(num12);
} else if (num12 % 3 == 0){
    console.log("3의 배수 입니다.")
} else {
    console.log(num12);
}