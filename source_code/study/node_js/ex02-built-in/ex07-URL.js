/*
URL 객체
  URL(Uniform Resource Locator)을 파싱하고 조작할 수 있는 인터페이스를 제공
  URL의 각 구성 요소(예: 호스트, 경로, 쿼리 매개변수 등)를 쉽게 접근하고 수정
*/

const myurl = 
new URL('https://www.google.com:8080/search?q=javascript&user=tester#bottom');

console.log(myurl.hostname);
console.log(myurl.port);
console.log(myurl.pathname);
console.log(myurl.search);
console.log(myurl.hash);

