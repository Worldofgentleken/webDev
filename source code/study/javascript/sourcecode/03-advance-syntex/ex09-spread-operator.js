/*
Spread Operator
  배열이나 객체의 요소를 개별적으로 분리하거나 확장하는 데 사용되는 문법
  ES6(ECMAScript 2015)에서 도입
  배열과 객체 작업을 간단하게 만들어 줌
  세 개의 점(...)으로 표현

  주요 용도
    배열 복사 및 병합 (Copy and Merge Arrays)
    객체 복사 및 병합 (Copy and Merge Objects)
    함수 인수 (Function Arguments)
*/

//배열 복사
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // 출력: [1, 2, 3]
console.log(copiedArray === originalArray); // 출력: false (서로 다른 배열)


// 배열 병합
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // 출력: [1, 2, 3, 4, 5, 6]

// 객체 복사
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // 출력: { a: 1, b: 2 }
console.log(copiedObject === originalObject); // 출력: false (서로 다른 객체)

// 객체 병합
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject); // 출력: { a: 1, b: 2, c: 3, d: 4 }

// 함수 인자
const numbers = [1, 2, 3, 4, 5];

function sum(a, b, c) {
    return a + b + c;
}

const result = sum(...numbers);

console.log(result); // 출력: 6 (1 + 2 + 3)


// 배열 요소 추가 및 제거
const array = [1, 2, 3, 4, 5];

const newArray = [...array.slice(0, 2), 99, ...array.slice(2)];
console.log(newArray); // 출력: [1, 2, 99, 3, 4, 5]

const removedArray = [...array.slice(0, 2), ...array.slice(3)];
console.log(removedArray); // 출력: [1, 2, 4, 5]
