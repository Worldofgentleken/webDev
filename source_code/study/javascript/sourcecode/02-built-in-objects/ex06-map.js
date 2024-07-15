// Map: 키:값 쌍으로 이루어진 집합
const userMap = new Map();
userMap.set("name", "홍길동");
userMap.set("email", "hong-dg@naver.com");
userMap.set("phone", "010-1234-5678");
console.log(userMap);

console.log(userMap.size);

// 특정 요소의 값(value) 가져오기
console.log(userMap.get("email"));

// 값(Key) 존재 확인
console.log(userMap.has("name"));
console.log(userMap.has("info"));

// 요소 삭제
console.log(userMap.delete("phone"));
console.log(userMap.delete("phon"));
console.log(userMap);

// 맵 순회하기
userMap.forEach((value, key) => {
  console.log(key, value);
})

console.log(userMap.keys()); // 키 가져오기
console.log(userMap.values()); //값 가져오기
console.log(userMap.entries());
console.log([...userMap.entries()]); 

// Map을 객체로 변환
const obj = Object.fromEntries(userMap);
console.log(obj);

// 객체를 Map으로 변환
objToMap = new Map(Object.entries(obj));






