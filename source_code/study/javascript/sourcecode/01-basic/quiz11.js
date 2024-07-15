num1 = [];
num2 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
for (i = 0; i<12;i++){
    let cn = parseInt(prompt());
    num1.push(cn);
}
let sum = 0
for (j=0;j<num1.length;j++){
    sum = sum + num1[j] * num2[j];
}
let checkNum = 11 - (sum%11)
console.log(checkNum);

// n자연수 입력, dn = 각 자릿수 숫자 더하기 자기 자신
// 1 이상 5000미만 셀프넘버의 합을 구하기

function d(n) {
    let sum = n;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function selNumFind(maxNum) {
    let selfNumCheckList = Array(maxNum).fill(true);
    for (let i = 1; i < maxNum; i++) {
        let generator = d(i);
        if (generator < maxNum) {
            selfNumCheckList[generator] = false;
        }
    }
    let selfNum = [];
    for (let i = 1; i < maxNum; i++) {
        if (selfNumCheckList[i]) {
            selfNum.push(i);
        }
    }
    return selfNum;
}

let maxNum = 5000;
let selfNumResult = selNumFind(maxNum);
let total = 0;
for (let i = 0; i < selfNumResult.length; i++) {
    total += selfNumResult[i];
}
console.log(total);
