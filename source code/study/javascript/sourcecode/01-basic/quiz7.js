//구구단 출력
for (i = 1; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

//쌀은 100통, 1통당 80kg, 쥐 1마리당 20g 먹음, 10일마다 2배
var totalRiceG = 100 * 80 * 1000;
var rat = 2;
var oneDayEat = 20;
var totalDay = 0;
for (day = 1; totalRiceG > 0; day++) {
    if (day % 10 == 0) {
        rat = rat * 2;
    }

    totalRiceG -= rat * oneDayEat

    if (totalRiceG <= 0) {
        totalDay = day;
        break;
    }
}
console.log(`쌀은 ${totalDay}일 후 없어지고, 쥐는 ${rat}마리가 된다`);

// 첫날 10원 예금, 다음날에는 전날의 2배 예금, 한달 동안 저축한 금액 계산
var firstDay = 10;
var month = 30;
var saveMoney = firstDay;
var totalMoney = 0;
for (i = 1; i <= month; i++) {
    totalMoney += saveMoney;
    saveMoney *=2
}
console.log(totalMoney);

// 1부터 시작 홀수의 합을 구한다, 합이 10000을 넘지 않는 마지막 수는?
var oddSum = 0;
var lastOdd = 0;

for (var i = 1; ; i += 2) { // i를 1부터 시작하여 매번 2씩 증가시킴
    if (oddSum + i > 10000) {
        break; // 합이 10000을 넘으면 루프 종료
    }
    oddSum += i; // 홀수를 합계에 더함
    lastOdd = i; // 마지막으로 더한 홀수를 저장
}

console.log(`합계가 10000을 넘지 않는 마지막 홀수: ${lastOdd}, 총합: ${oddSum}`); // 마지막 홀수와 합계 출력

