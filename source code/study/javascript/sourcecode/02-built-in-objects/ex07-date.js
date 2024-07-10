const now = new Date(); // 현재 시간
console.log(now);

d = new Date(2024, 2, 23, 8, 20, 10, 0); 
console.log(d);

d = new Date(1000000000000);
console.log(d);

d2 = new Date("October 13, 2014 11:13:00"); //문자열로 Date 생성
console.log(d2);

// 현재 날짜/시간 가져오기
d = new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());