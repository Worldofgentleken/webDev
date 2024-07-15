// window 객체: 전역 객체

//alert() 알림창을 뛰우는 함수
window.alert("이것이 알림창이다.");
alert("window 생략 가능");

//prompt() 사용자 입력을 받는 창을 띄우는 함수
inputData = window.prompt('입력');
window.console.log(inputData);

//confirm() 허락 받는 창을 띄우는 함수
if(window.confirm("허락해주세요~")){
  alert("허락 되었습니다.");
}else{
  alert("꺼져!");
}

// 새 창을 여는 함수
window.open("http://www.naver.com");

// 일정 시간 후 실행
window.setTimeout(function(){
  alert('코드 실행');
}, 3000); //1초 뒤 실행

// 일정 시간 간격으로 실행
let count = 0;
const func = window.setInterval(function(){
  if(count < 10){
    console.log('코드 실행', count);
    count++;
  }else{
    alert('코드 종료');
    clearInterval(func);
  }
}, 1000); // 1초마다 한 번씩