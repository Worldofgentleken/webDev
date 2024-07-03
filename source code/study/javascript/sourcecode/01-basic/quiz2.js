var weight = prompt("당신의 몸무게를 입력하시오", "0");
var height = prompt("당신의 키를 입력하시오.", "0");

var normal_w = (height - 100) * 0.9;
var fatPercent = (weight/normal_w) * 100;

console.log("표준 체중 : " + normal_w.toFixed(2) +"kg\n비만도 비율 : " + fatPercent.toFixed(2) + "%");
