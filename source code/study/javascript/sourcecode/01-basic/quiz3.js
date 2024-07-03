var station = prompt("버스 정거장 수를 입력하시오.", "0");

if (station < 10){
    var total_t = station * 2;
} else {
    var total_t = station * 4
}
console.log(`총 이동 시간은 ${total_t}입니다.`);

var t_station = prompt("지하철 정거장 수를 입력하세요.", "0");

if (t_station < 8){
    var result = t_station * 3;
} else {
    var result = 7 * 3 + (t_station-7) * 2;
}
console.log(`총 이동 시간은 ${result}입니다.`);
