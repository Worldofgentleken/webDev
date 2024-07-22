/*
  Buffer 객체
    바이너리 데이터를 다루기 위해 사용
    특히 네트워크 통신이나 파일 입출력과 같은 I/O 작업에서 유용
    Buffer는 고정 크기이며 버퍼 내의 데이터는 raw 메모리로 저장(바이트 배열과 유사한 개념)
*/
// Buffer.alloc(size)
// 주어진 크기(size)의 버퍼를 생성하고, 데이터를 0으로 초기화합니다.
// const buf = Buffer.alloc(10); // 10 바이트 크기의 버퍼 생성
// console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// Buffer.allocUnsafe(size)
// 주어진 크기(size)의 버퍼를 생성하지만, 데이터를 초기화하지 않습니다. 초기화 과정을 생략하여 더 빠르게 생성됩니다.
// const buf = Buffer.allocUnsafe(10); // 10 바이트 크기의 초기화되지 않은 버퍼 생성
// console.log(buf); // <Buffer 38 7a be 1b 00 02 00 00 15 00> (랜덤 데이터)

// Buffer.from(array)
// 배열로부터 버퍼를 생성합니다.
// const buf = Buffer.from([1, 2, 3, 4]);
// console.log(buf); // <Buffer 01 02 03 04>

// Buffer.from(string[, encoding])
// 문자열로부터 버퍼를 생성합니다. 인코딩은 기본적으로 'utf8'을 사용합니다.
// const buf = Buffer.from('hello');
// console.log(buf); // <Buffer 68 65 6c 6c 6f>

// Buffer 사용 예시

// 버퍼에 데이터 쓰기
const buf1 = Buffer.alloc(5);
buf1.write('hello');
console.log(buf1); // <Buffer 68 65 6c 6c 6f>

// 버퍼에서 데이터 읽기
const buf2 = Buffer.from('hello');
console.log(buf2.toString()); // 'hello'
console.log(buf2.toString('hex')); // '68656c6c6f'
console.log(buf2.toString('base64')); // 'aGVsbG8='
console.log(buf1.toString());

// 버퍼 길이 확인
const buf3 = Buffer.from('hello');
console.log(buf3.length); // 5

// 버퍼 합치기
const buf4 = Buffer.from('hello');
const buf5 = Buffer.from('world');
const buf6 = Buffer.concat([buf4, buf5]);
console.log(buf6.toString()); // 'helloworld'

// 버퍼 비교
const buf7 = Buffer.from('ABC');
const buf8 = Buffer.from('ABD');
const result = buf7.compare(buf8);
console.log(result); // -1 (buf1이 buf2보다 작음) 0 - 1 = -1
console.log(buf8.compare(buf7));  // (buf1이 buf2보다 큼) 1 - 0 = 1
console.log(buf7.compare(Buffer.from('ABC'))); // (buf1이 buf2과 같음) 1 - 1 = 0 

// 버퍼 복사
const buf9 = Buffer.from('hello');
const buf10 = Buffer.alloc(5);
buf9.copy(buf10);
console.log(buf10.toString()); // 'hello'

// 버퍼 슬라이스
const buf11 = Buffer.from('hello');
const slice = buf11.slice(0, 2);
console.log(slice.toString()); // 'he'