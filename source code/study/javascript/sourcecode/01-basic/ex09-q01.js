//놀이공원을 가기 위해 11개의 지하철 역을 지나왔다. 
//출발역에서 도착역까지 37분이 걸렸다면 한 역을 지나는데 걸리는 시간은?

let totalMinutes = 37;
let totalStations = 11;
let timePerStation = totalMinutes / totalStations;
console.log('한 역을 지나는데 걸리는 시간은 ' + 
  timePerStation.toFixed(2) + '분 입니다.');



//호텔 한 층의 높이는 260cm이다. 
//총 14개의 층을 쓰고 있으며 1층은 500.23cm라면 
//이 건물의 높이는 총 몇 m인가?(소수점 3자리 까지만 출력)
let floorHeight = 260; // cm
let totalFloors = 14;
let groundFloorHeight = 500.23; // cm
let totalHeightCm = 
  (floorHeight * (totalFloors - 1)) + groundFloorHeight;
let totalHeightM = totalHeightCm / 100; // convert to meters
console.log('이 건물의 높이는 총 ' + 
  totalHeightM.toFixed(3) + 'm 입니다.');



//당신의 키와 몸무게를 출력하시오.(소수점 1자리까지)
let height = 175.5; // cm
let weight = 68.2; // kg
console.log('당신의 키는 ' + height.toFixed(1) + 
  'cm이고 몸무게는 ' + weight.toFixed(1) + 'kg입니다.');



//전동 자전거로 100m를 가는데 11.27초가 걸린다면 
//1시간 후 몇 km를 갈 수 있을까?(소수점 2자리까지 표시)
let distance = 100; // meters
let timeInSeconds = 11.27; // seconds
let timeInHours = 1; // hour
let distancePerHour = 
  (distance / timeInSeconds) * (timeInHours * 3600) / 1000; // convert meters to km
console.log('1시간 후 ' + distancePerHour.toFixed(2) + 
  'km를 갈 수 있습니다.');
