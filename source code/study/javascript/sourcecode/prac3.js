var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

var result = arr_1.join("-");
console.log(result);

result = arr_1.concat(arr_2);
console.log(result);

result = arr_1.slice(1,3);
console.log(result);

result = arr_1.sort();
console.log(result);

result = arr_1.reverse();
console.log(result);

var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼");
console.log(greenArr);

var data1 = yellowArr.pop();
var data2 = yellowArr.shift();

yellowArr.push(data2);
console.log(yellowArr);

yellowArr.unshift(data1);
console.log(yellowArr);

