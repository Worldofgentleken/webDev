/*
crypto 모듈
  암호화 기능을 제공하는 모듈

주요 메서드:
  crypto.createHash(): 해시 객체 생성.
  crypto.createHmac(): HMAC 객체 생성.
  crypto.randomBytes(): 난수 생성.
  crypto.pbkdf2(): 암호 기반 키 도출 함수.
*/
// 대칭키(비밀키) 알고리즘 - AES 예시

const crypto = require('crypto');

// 대칭 키와 초기화 벡터 (IV) 생성
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 256비트 키
const iv = crypto.randomBytes(16);  // 128비트 IV

// 암호화
const plainText = '이 이야기는 아무도 알면 안 돼!';
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(plainText, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);
