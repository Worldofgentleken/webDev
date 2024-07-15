// 1부터 입력받은 수까지 홀수 합 구하는 함수
function sum(n) {
    let total = 0;
    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            total += i
        }
    } return total;
}
console.log(sum(5));

//n에 대한 절대값을 반환하는 함수
function absValue(value){
    let result = Math.abs(value);
    return result;
}

console.log(absValue(-5));

//cm 값을 inch 값으로 반환하는 함수
function cmToInch(value){
    let oneCm = 1 / 2.54;
    let result = oneCm*value;
    return result;
}
console.log(cmToInch(5).toFixed(2));

//파일 용량(byte)를 입력받아 bit 단위로 반환하는 함수
//단위 (G,M,K)
function byteToBit(num1, scale){
    let oneByte = 8;
    let result = 0
    if (scale == "G"){
        result = num1 * 1024 * 1024 * 1024 * oneByte;
    } else if (scale == "M") {
        result = num1 * 1024 * 1024 * oneByte;
    } else if (scale == "K") {
        result = num1 * 1024 * oneByte;
    } else {
        console.log("잘 못 입력하였습니다");
    }return result;
}
console.log(byteToBit(1,"K"));

//비만도 측정 프로그램
function bmiReult(height, weight){
    let normal_w = (height - 100) * 0.9;
    let fatPer = weight / normal_w * 100;
    let result = ""
    if (fatPer >= 200) {
        result = "위험한 비만";
    } else if (fatPer >= 150){
        result = "고도 비만";
    } else if (fatPer >= 130){
        result = "중증도 비만";
    } else if (fatPer >= 120){
        result = "경도 비만";
    } else if (fatPer >= 110){
        result = "과체중";
    } else if (fatPer >= 90){
        result = "정상체중";
    } else if (fatPer >= 80){
        result = "경한 저체중";
    } else {
        result = "저체중";
    }return result;
}
console.log(bmiReult(177, 70));