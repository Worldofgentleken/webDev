/* 
Storage(저장소)
  HTML5에서 추가된 브라우저에 데이터를 저장할 수 있는 저장소
  개발자 도구(F12) - Application 탭에서 확인 가능

  localStorage: 브라우저에 데이터를 영구 저장할 수 있는 저장소(js로 직접 관리)
    사용자가 마지막으로 보고 있는 화면 URL저장
    웹 사이트의 사용자 테마, 개인화를 제공하는 경우 관련 데이터 저장

  sessionStorage: 브라우저(창)를 닫기 전까지 유지할 필요가 있는 데이터 저장소(자동 삭제)
    일회성 데이터 저장하는 용도로 활용
*/

// 로컬 저장소 데이터 저장
function saveLocal() {
  if (typeof Storage !== "undefined") {
    // 스토리지 사용 가능 여부 체크
    localStorage.setItem("title", "Local Storage Title Value");

    const person = [
      { id: 1, name: "홍길동" },
      { id: 2, name: "이순신" },
    ];

    localStorage.setItem("persons", JSON.stringify(person));
  }
}

function useLocal(){
  //데이터 사용
  if (typeof Storage !== "undefined") {
    console.log(localStorage.getItem("title"));
    console.log(JSON.parse(localStorage.getItem("persons")));
  }
}

function removeLocal() {
  //데이터 삭제
  localStorage.removeItem("title");
}

function saveSession() {
  if (typeof Storage !== "undefined") {
    // 스토리지 사용 가능 여부 체크
    sessionStorage.setItem("title", "Session Storage Title Value");

    const person = [
      { id: 3, name: "강감찬" },
      { id: 4, name: "임꺽정" },
    ];

    sessionStorage.setItem("persons", JSON.stringify(person));
  }
}

function useSession(){
  //데이터 사용
  if (typeof Storage !== "undefined") {
    console.log(sessionStorage.getItem("title"));
    console.log(JSON.parse(sessionStorage.getItem("persons")));
  }
}

function removeSession() {
  //데이터 삭제
  sessionStorage.removeItem("title");
}