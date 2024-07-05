//q1
let ridingTime = parseInt(prompt("말을 탄 시간을 입력하세요 (분):"));
let totalCost;

if (ridingTime <= 30) {
  totalCost = 3000; // 기본 요금
} else {
  totalCost = 3000 + Math.ceil((ridingTime - 30) / 10) * 500; // 기본 요금 + 추가 요금
}

console.log(`전체 금액은 ${totalCost}원 입니다.`);

//q2
// let lunchBoxCount = parseInt(prompt("배달 도시락의 개수를 입력하세요:"));
// let totalCost;

// if (lunchBoxCount <= 10) {
//   totalCost = lunchBoxCount * 2500; // 10개까지는 개당 2500원
// } else {
//   totalCost = (10 * 2500) + ((lunchBoxCount - 10) * 2400); // 10개 초과분은 개당 2400원
// }

// console.log(`전체 금액은 ${totalCost}원 입니다.`);

//q3
// let disketteCount = parseInt(prompt("디스켓 통 수를 입력하세요:"));
// let totalCost;

// if (disketteCount < 10) {
//   totalCost = disketteCount * 5000;
// } else if (disketteCount >= 10 && disketteCount < 100) {
//   totalCost = disketteCount * 5000 * 0.9; // 10통 이상 10% 할인
// } else {
//   totalCost = disketteCount * 5000 * 0.88; // 100통 이상 12% 할인
// }

// console.log(`전체 금액은 ${totalCost}원 입니다.`);

//q4
// let score1 = parseInt(prompt("첫 번째 과목의 성적을 입력하세요:"));
// let score2 = parseInt(prompt("두 번째 과목의 성적을 입력하세요:"));
// let score3 = parseInt(prompt("세 번째 과목의 성적을 입력하세요:"));

// let totalScore = score1 + score2 + score3;
// let averageScore = totalScore / 3;
// let grade;

// if (averageScore >= 90) {
//   grade = "A";
// } else if (averageScore >= 80) {
//   grade = "B";
// } else if (averageScore >= 70) {
//   grade = "C";
// } else if (averageScore >= 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// console.log(`합계: ${totalScore}, 평균: ${averageScore.toFixed(2)}, 학점: ${grade}`);
