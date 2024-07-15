// 지하철 정거장 수 입력 받기
let subwayStops = parseInt(prompt("지하철 정거장 수를 입력하세요:"));

// 소요시간 계산
let travelTime;

if (subwayStops <= 7) {
  travelTime = subwayStops * 3; // 7정거장까지 각 정거장당 3분
} else {
  travelTime = (7 * 3) + ((subwayStops - 7) * 2); // 8정거장부터는 각 정거장당 2분
}

// 결과 출력
console.log(`총 소요시간은 ${travelTime}분 입니다.`);
