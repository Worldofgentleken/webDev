/*
  ※Promise는 약속
  - 비동기 처리는 일단 진행 하도록 하고 언젠가 종료될 것을 약속하는 것
  - Promise객체 생성 시 비동기 처리가 시작됨

  - 비동기 처리의 진행 상태를 Promise로 관리
      Promise의 작업이 시작되면 pending상태
      성공하면 resolve('결과로 반환되는 값') 호출 -> fulfiled 상태로 변환 
      실패하면 reject('에러로 반환되는 값') 호출 -> rejected 상태로 변환

      Promise객체는 then함수로 연결해서 처리 진행
	.then((Promise가 가진 결과 값) => { 결과 값 사용 })
	.then((앞선 Promise의 결과 값) => { 결과 값 사용 })
	...
	.catch((Promise가 가진 에러 값) => { 에러 값 사용 });

  →알아둘 것
    async가 붙은 함수(비동기 함수)는 Promise를 반환(Promise객체로 감싸는 개념)
    return이 없어도 자동으로 Promise를 반환

    비동기 함수: fetch, json, setTimeout, setInterval 등
     보통 파일/네트워크를 통해 통신하는 함수들이 Promise를 반환
     setTimeout, setInterval를 반환하지 않음
*/

// Promise 예시1
// Pending 상태에서 시작
const myPromise = new Promise((resolve, reject) => {
  const success = true; // 작업의 성공 여부를 결정하는 변수

  // 비동기 작업을 시뮬레이션
  setTimeout(() => {
    if (success) {
      resolve('작업이 성공했습니다!'); // Fulfilled 상태로 변경
    } else {
      reject('작업이 실패했습니다.'); // Rejected 상태로 변경
    }
  }, 2000); // 2초 후에 작업의 결과를 반환
});

console.log('Promise 상태: Pending');

myPromise
  .then(result => {
    console.log('Promise 상태: Fulfilled');
    console.log(result); // 작업이 성공했을 때 메시지를 출력
  })
  .catch(error => {
    console.log('Promise 상태: Rejected');
    console.log(error); // 작업이 실패했을 때 에러 메시지를 출력
  });

// Promise 예시2
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('[fetchData 응답 데이터]');
    }, 1000);
  });
};

fetchData().then(data => {
  console.log('fetchData:', data); // fetchData: [fetchData 응답 데이터]
});

// Promise 예시3
const promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('[요청 성공1]');
  } else {
    reject('[요청 실패1]');
  }
});

promise1.then(message => {
  console.log('promise1:', message); // promise1: [요청 성공1]
}).catch(error => {
  console.log(error);
});

// Promise 예시4
const promise2 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('[요청 성공2]');
  } else {
    reject('[요청 실패2]');
  }
});

promise2.then(message => {
  console.log('promise2:', message); // promise2: [요청 성공2]
}).catch(error => {
  console.log(error);
});

// Promise 예시5
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

console.log(delay);
delay(2000).then(() => {
  console.log('2초 후 delay 진행 완료');
});

