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