// 배열을 문자열로 변환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// 구분자 지정
console.log(fruits.join("-"));

// 배열의 마지막 요소 가져오기(pop)
console.log(fruits.pop());
console.log(fruits.toString());

// 배열의 마지막에 요소 추가(push)
fruits.push("Mango");
console.log(fruits.toString());

// 배열의 첫 번재 요소 가져오기(shift)
console.log(fruits.shift());
console.log(fruits.toString());

// 배열에 첫 번째 요소 추가(unshift)
fruits.unshift("Lemon");
console.log(fruits.toString());

// 배열의 요소 변경
fruits[0] = "Banana";
console.log(fruits.toString());

// 특정 위치에 요소 추가/제거(splice)
fruits = ["Kiwi", "Banana", "Apple", "Pineapple"];
fruits.splice(2, 1, "Lemon", "Mango");
console.log(fruits.toString());

// 배열 합치기(concat)
f1 = ["Kiwi", "Banana"];
f2 = ["Apple", "Pineapple"];
console.log(f1.concat(f2).toString());

// 배열 일부 자르기(slice)
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(3).toString());
console.log(fruits.slice(1, 3).toString());
