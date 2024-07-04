// 1부터 100까지의 합 구하기
var sum = 0;

for (i = 0; i < 100; i++){
    sum += i+1;
}
console.log(sum);

// 1부터 100까지 홀수합과 짝수합
var oddSum = 0;
var evenSum = 0;

for (i = 1; i <= 100; i++){
    if(i % 2 != 0){
        oddSum += i;
    } else {
        evenSum += i;
    }
}
console.log(`짝수의 합 : ${evenSum}\n홀수의 합 : ${oddSum}`)

// 100부터 1까지의 수 중 3의 배수만 출력

for (i = 1; i <= 100; i++){
    if (i % 3 == 0){
        console.log(i);
    }
}

// 1부터 100까지의 수중 3의 배수 제외, 3의 배수 이면서 5의 배수인 수 더하여 출력
var result = 0
for (i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 ==0){
        result += i;
    }
}
console.log(result);

// 두수 입력 받아 사이수 합
// 두수 포함 하는 경우
let num1 = parseInt(prompt());
let num2 = parseInt(prompt());
var btSum = 0;

if (num1 > num2){
    var maxNum = num1;
    var secNum = num2;
} else {
    var maxNum = num2;
    var secNum = num1;
}
for (i = secNum; i <= maxNum; i++){
    btSum += i;
}
console.log(btSum);
// 두수 포함 안하는 경우
let num3 = parseInt(prompt());
let num4 = parseInt(prompt());
var btSum2 = 0;

if (num1 > num2){
    var maxNum2 = num3;
    var secNum2 = num4;
} else {
    var maxNum2 = num4;
    var secNum2 = num3;
}
for (i = secNum2 + 1 ; i < maxNum2; i++){
    btSum2 += i;
}
console.log(btSum2);

// 사용자로부터 10개의 정수 입력 받아 평균 구하기
var sum = 0;
for(i = 0; i <= 10; i++){
    i = parseInt(prompt());
    sum += i; 
}
var avg = sum/10;
console.log(`평균 점수는 ${avg}점`);