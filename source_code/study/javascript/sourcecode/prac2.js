var num = 2.1234;

var maxNum = Math.max(10, 5, 8, 30),
minNum = Math.min(10, 5, 8, 30),
roundNum = Math.round(num),
floorNum = Math.floor(num),
ceilNum = Math.ceil(num),
rndNum = Math.random(),
piNum = Math.PI;

document.write(maxNum, "<br>");
document.write(minNum, "<br>");
document.write(roundNum, "<br>");
document.write(floorNum, "<br>");
document.write(ceilNum, "<br>");
document.write(rndNum, "<br>");
document.write(piNum, "<br>");

document.write("<h1>컴퓨터 가위 바위 보 맞추기</h1>");

var game = prompt("가위 바위 보 중 선택");
var gameNum;
switch (game){
    case "가위":
        gameNum = 1; break;
    case "바위":
        gameNum = 2; break;
    case "보":
        gameNum = 3; break;
    default: alert("잘 못 작성했습니다.");
        location.reload();
}
var com = Math.ceil(Math.random()*3);

if (gameNum == com){
    document.write("맞았음");
} else {
    document.write("틀림");
}


