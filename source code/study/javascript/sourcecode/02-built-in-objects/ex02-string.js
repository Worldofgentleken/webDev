// string 내장 객체: 문자열을 관리하는 객체
const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(txt.length); //문자열의 길이

//문자열 위치 찾기
let str = "Hello hell Hello 안녕 하세요 안녕하세요";
console.log(str.indexOf("ello"));
console.log(str.lastIndexOf("Hello"));
console.log(str.indexOf("ello", 6));

//문자열 자르기(substring, slice) //substr은 deprecated
str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));
console.log(str.slice(7));
console.log(str.slice(-12)); //js 음수 인덱스 지원 안 함. slice에서만 사용 가능
console.log(str.substring(7, 13));
console.log(str); //원본

//문자열 치환(replace)
str = "Hello hell Hello 안녕 하세요 안녕하세요";
let ret = str.replace("hell", "heven");
console.log(ret);
ret = str.replace(/hell/ig, "haven"); //정규식 /i는 대소문자 무시 /g 전체
console.log(ret);

//대소문자 변환
const txt1 = "Hello World!";
console.log(txt1.toUpperCase());
console.log(txt1.toLowerCase());

//문자열 결합
const txt2 = "Hello";
const txt3 = "World";
console.log(txt2 + " " + txt3);
console.log(txt2.concat(" ", txt3));

//문자열 트림(trim)
let strTrim = "   hello world!   ";
console.log('"' + strTrim + '"');
console.log('"' + strTrim.trim() + '"');
console.log('"' + strTrim.trimStart() + '"');
console.log('"' + strTrim.trimEnd() + '"');

//문자열 패딩(padStart, padEnd)
let strPad = "5";
console.log(strPad.padStart(4, 0));
console.log(strPad.padEnd(6, 1));

//문자, 문자코드
const strChar = "HELLO WORLD";
console.log(strChar.charAt(6)); //문자 하나
console.log(strChar.charCodeAt(1)); // 문자 코드
console.log("가나다라".charAt(1));
console.log("가나다라".charCodeAt(0)); //js string은 유니코드 지원

//문자열 분리(split)
const birth = "2024-02-23";
console.log(birth.split("0"));
console.log(birth.split("-"));

//문자열 시작/끝 확인(startsWith, endsWith)
const url = "https://www.naver.com";
console.log(url.startsWith("http"));
console.log(url.endsWith(".com"));

const fileName = "my.pdf";
console.log(fileName.endsWith(".pdf"));
console.log(fileName.endsWith(".jpg"));