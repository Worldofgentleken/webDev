// q1 구구단
for(let dan = 2; dan <= 9; dan++){
  for(let gop = 1; gop <= 9; gop++){
    console.log(`${dan}x${gop}=${dan*gop}`);
  }
  console.log('\n');
}

// q2
let totalRice = 100 * 80 * 1000; // 100통 * 80kg * 1000g
let mice = 2; // 처음 쥐의 수
let day = 0;

while (totalRice > 0) {
  day++;
  totalRice -= mice * 20;
  if (day % 10 === 0) {
    mice *= 2; // 10일마다 쥐의 수가 2배로 증가
  }
}

console.log(`창고의 쌀이 모두 쥐의 먹이가 된 날: ${day}일`);
console.log(`총 쥐의 수: ${mice}`);


// q3
let totalAmount = 0;
let dailyDeposit = 10;

for (let day = 1; day <= 30; day++) {
  totalAmount += dailyDeposit;
  console.log(`${day}:${dailyDeposit} -> ${totalAmount}`);
  dailyDeposit *= 2; // 전날의 2배를 예금
}

console.log(`한달 동안 저축한 금액: ${totalAmount}원`);

// q4
let sum = 0;
let lastOddNumber = 0;

for (let i = 1; sum + i <= 10000; i += 2) { // 홀수만 더함
  sum += i;
  lastOddNumber = i;
}

console.log(`합이 10000을 넘지 않는 마지막 홀수: ${lastOddNumber}`);
console.log(`해당 홀수까지의 합: ${sum}`);
