var station = 11;
var total_t = 37;
var result = 37/11;
console.log("한 역을 지나는 시간은 " + result);

var one_floor = 260;
var first_floor = 500.23;
var total_h = (one_floor * 13 + first_floor) / 100;
var fixedNum = total_h.toFixed(3);
console.log("건물의 총 높이는 " + fixedNum)

var height = 177.5;
var weight = 82.5;
var fixedHeight = height.toFixed(1);
var fixedWeight = weight.toFixed(1);
console.log("나의 키는 " + fixedHeight + "cm이고 몸무게는 " + fixedWeight + "kg 이다.")

var hour_sec = 60 * 60;
var time = 11.27;
var meterPerSec = 100 / time;
var totalMeter = meterPerSec * hour_sec;
var totalKm = totalMeter / 1000;
var fixedKm = totalKm.toFixed(2)
console.log("1시간 동안 이동한 거리는" + fixedKm + "km이다.")