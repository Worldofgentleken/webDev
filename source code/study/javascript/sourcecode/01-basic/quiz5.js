// 유원지 이용 요금 계산 1인당 3000원
let time = parseInt(prompt("시간(분)을 입력하시오"));
let ppl = parseInt(prompt("인원 입력"))

if (time > 30) {
    let extraMin = time - 30;
    var fee = 3000 * ppl + Math.ceil(extraMin / 10) * 500 * ppl;  
} else {
    var fee = 3000 * ppl;
}
console.log(`요금은 ${fee}원입니다.`);

//배달 도시락 금액 계산
let deliveryNum = parseInt(prompt("도시락 갯수 입력"));

if (deliveryNum > 10) {
    var deliveryFee = 2500*10 + (deliveryNum-10)*2400;
} else {
    var deliveryFee = 2500*deliveryNum;
}
console.log(`배달요금은 ${deliveryFee}원 입니다.`);

//디스켓 1통 5000원, 10통이상 10%할인, 100통 이상 12% 할인 총 금액 계산
let disket = parseInt(prompt("디스켓 구매 수량 입력"));

if (disket >= 100){
    var totalFee = 5000 * disket * 0.88;
} else if (10 <= disket < 100) {
    var totalFee = 5000 * disket * 0.9;
} else {
    var totalFee = 5000 * disket;
}
console.log(`총 가격은 ${totalFee}원 입니다.`);

//세 과목 성적 합계 평균 구하고 평균 별 등급
let sub1 = parseInt(prompt("과목1"));
let sub2 = parseInt(prompt("과목2"));
let sub3 = parseInt(prompt("과목3"));

let sum = sub1 + sub2 + sub3;
let avg = sum / 3;

if (avg >= 90) {
    var grade = "A";
} else if (avg >= 80) {
    var grade = "B";
} else if (avg >= 70) {
    var grade = "C";
} else if (avg >= 60) {
    var grade = "D";
} else {
    var grade = "F";
}
console.log(`이 학생의 총점은 ${sum}점, 평균은 ${avg.toFixed(2)}점, 등급은 ${grade}등급 입니다.`)