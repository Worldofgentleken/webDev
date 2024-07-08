function lottoNum() {
    let flagArr = new Array(45).fill(false);
    let lottoNumber = [];

    while (lottoNumber.length < 6) {
        let num = Math.floor(Math.random() * 45);

        if (!flagArr[num]) {
            flagArr[num] = true;
            lottoNumber.push(num);
        }
    }
    return lottoNumber;
}

let lottoNumbers = lottoNum();
console.log(lottoNumbers);

// 셔플 방법 1
// 1-45 Array 생성
let = numbers1 = [];
for (let i = 1; i <= 45; i++) {
    numbers1.push(i)
}
// 셔플 함수 개발
function shuffleArr1(list, n) {
    for (let i = 0; i < n; i++){
        //어레이의 길이 사이의 2개의 랜덤값을 구함
        let num1 = Math.floor(Math.random() * list.length);
        let num2 = Math.floor(Math.random() * list.length);

        // 두 랜덤값을 사용하여 값을 바꿈
        let tmp = list[num1];
        list[num1] = list[num2];
        list[num2] = tmp
    }
    return list;
}

let n = 45;

// 위 함수를 45번 반복해서 섞음
for(let i = 0; i < n; i++){
    numbers1 = shuffleArr1(numbers1, 2);
}
// 6개만 슬라이스 해서 뽑아냄
console.log(numbers1.slice(0, 6));


// 셔플 방법 2
// 셔플 함수 제작
function shuffleArr2(array) {
    // 배열의 뒤에서부터 앞으로 순회
    for (let i = array.length - 1; i > 0; i--) {
        // 현재 인덱스보다 작거나 같은 범위에서 랜덤 인덱스 선택
        let j = Math.floor(Math.random() * (i + 1));
        // 현재 인덱스 값과 랜덤하게 선택한 인덱스값 교환
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

// 섞을 1-45까지 리스트 제작
let numbers2 = [];
for (let i = 1; i <= 45; i++) {
    numbers2.push(i)
}
//셔플 함수 이용해서 숫자 섞기
let shuffledNumbers = shuffleArr2(numbers2);
// 셔플된 배열에서 6개 숫자만 추출
console.log(shuffledNumbers.slice(0,6));

