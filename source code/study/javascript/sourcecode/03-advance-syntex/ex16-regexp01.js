
// 정규식 사용 방법(정규식 리터럴)
var str = "Hello World! world!";
const re = /World/;
console.log(re.test(str)); // true
console.log(str.search(re)); // 6

// 정규식 사용 방법(RegExp 객체)
var str = "Hello World! world!";
const re_obj = RegExp("World");
console.log(re_obj.test(str)); // true
console.log(str.search(re_obj)); // 6

// 대소문자 무시
var patt = /World/i;
console.log(str.search("World")); // 6
console.log(str.search(/world/i)); // 6

// 문자열 치환
console.log(str.replace("world", "Jeremy"));
console.log(str.replace(/world/gi, "Jeremy"));

// 특정 문자 찾기
var str = "Is this all there is";
var patt1 = /[hat]/g;
var result = str.match(patt1);
console.log(result);

// 숫자 찾기
var str = "123abc4523kkk";
var patt1 = /[0-9]/g;
var result = str.match(patt1);
console.log(result);

// 선택적 매칭
var str = "re, green, red, gree, gen, red,blue, yellow";
var patt1 = /(red|green)/g;
var result = str.match(patt1);
console.log(result);

// 숫자 매칭
var str = "Give 100";
var patt1 = /\d/g;
var result = str.match(patt1);
console.log(result);

// 1번 이상 매칭
var str = "Give 100";
var patt1 = /\d/g;
var result = str.match(patt1);
console.log(result);

// 0회 이상 매칭
var str = "Hellooo World";
var patt1 = /lo*/g;
console.log(str.match(patt1));

// 0개 또는 1개 매칭
var str = "1, 100 or 1000";
var patt1 = /10?/g;
console.log(str.match(patt1));

// 우편번호
var patt1 = /^\d{5}$/;
var postalcode = "23452";
console.log(patt1.test(postalcode));

// 전화번호
var patt1 = /^(010)-\d{4}-\d{4}$/;
var tel = "010-2312-3354";
console.log(patt1.test(tel));

// 이메일 주소
var regexp_email = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
console.log(regexp_email.test("jeremy2021.go@gmail.com"));
