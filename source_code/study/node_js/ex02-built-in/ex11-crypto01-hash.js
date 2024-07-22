/*
crypto 모듈
  암호화 기능을 제공하는 모듈

주요 메서드:
  crypto.createHash(): 해시 객체 생성.
  crypto.createHmac(): HMAC 객체 생성.
  crypto.randomBytes(): 난수 생성.
  crypto.pbkdf2(): 암호 기반 키 도출 함수.
*/

// 1. 해시 생성 (crypto.createHash)
const crypto = require('crypto');

// 해시 객체 생성
let md5_hash = crypto.createHash('md5');
// 데이터 업데이트
md5_hash.update('hello');
// 해시 값 생성 (hex 형식으로 출력)
val1 = md5_hash.digest('hex')

md5_hash = crypto.createHash('md5');
md5_hash.update('hellp');
val2 = md5_hash.digest('hex')

md5_hash = crypto.createHash('md5');
md5_hash.update('hell');
val3 = md5_hash.digest('hex')

console.log(`hello: ${val1}`);
console.log(`hello: ${val2}`);
console.log(`hello: ${val3}`);

// sha256 사용
const sha_hash256 = crypto.createHash('sha256');
sha_hash256.update('hello');
const hashValue = sha_hash256.digest('hex');
console.log('sha256 Hash value:', hashValue);

// sha256 사용
const sha_hash512 = crypto.createHash('sha256');
sha_hash512.update('hello');
console.log('sha512 Hash value:', sha_hash512.digest('hex'));

// HMAC 객체 생성
const hmac = crypto.createHmac('sha256', 'a secret key');
// 데이터 업데이트
hmac.update('hello');
// HMAC 값 생성 (hex 형식으로 출력)
const hmacValue = hmac.digest('hex');
console.log('HMAC value:', hmacValue);
