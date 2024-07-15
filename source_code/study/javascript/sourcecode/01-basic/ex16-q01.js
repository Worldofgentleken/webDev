// 로또 예상 번호 만들기

// Array 활용(index만 사용하기)
let numbers = [0, 0, 0, 0, 0, 0]; // 6개의 요소를 가진 Array 생성

// 난수 저장(로또 번호 저장하기)
for(let i = 0; i < numbers.length; i++){
  numbers[i] = Math.floor(Math.random() * 45 + 1); //난수 저장
}

// 출력
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}


