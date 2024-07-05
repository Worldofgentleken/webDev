// 버스 정거장 수 입력 받기
let busStops = parseInt(prompt("버스 정거장 수를 입력하세요:"));

// 소요시간 계산
let travelTime;

if (busStops < 10) {
  travelTime = busStops * 2; // 10정거장 미만일 경우 각 정거장당 2분
} else {
  travelTime = busStops * 4; // 10정거장 이상일 경우 각 정거장당 4분
}

// 결과 출력
console.log(`총 소요시간은 ${travelTime}분 입니다.`);
