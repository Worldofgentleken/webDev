// Set: 집합(중복 데이터 허용 X)
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 중복
console.log(mySet);
console.log(mySet.size);

const mySet2 = new Set();
mySet2.add("홍길동");
mySet2.add("이순신");
mySet2.add("강감찬");
mySet2.add("홍길동"); // 중복
console.log(mySet2);

// 존재 하는 지 확인
console.log(mySet.has(2));
console.log(mySet.has(4));

console.log(mySet2.has('오바마'));
console.log(mySet2.has("아이유"));

// 요소 삭제
console.log(mySet.delete(2)); 
console.log(mySet.delete(5));
console.log(mySet);

// 요소 순회
// function f(item){
//   console.log(item);
// }
// mySet2.forEach(f); // 요소 전체 반복

// mySet2.forEach(function(item){
//   console.log(item);
// })

mySet2.forEach((item) => {
  console.log(item);
});

// 모든 요소 삭제
mySet.clear();
console.log(mySet);


// 추가 
const arr = [1, 2, 3, 4, 5, 4, 7, 2];
const mySet3 = new Set(arr);
console.log(mySet3);

const arr2 = Array.from(mySet3);
console.log(arr2);

// 순회
for(let item of mySet3){
  console.log(item);
}

const iterator = mySet3.values(); // 반복자
console.log(iterator);
for(let item of iterator){
  console.log(item);
} 

// Set의 교집합, 합집합, 차집합 구현
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

console.log([...setA]);

const intersection = new Set([...setA].filter(x => setB.has(x)));
const union = new Set([...setA, ...setB]);
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log('교집합:', intersection);
console.log('합집합:', union);
console.log('차집합:', difference);