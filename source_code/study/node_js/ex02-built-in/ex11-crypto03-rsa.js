/*
crypto 모듈
  암호화 기능을 제공하는 모듈

주요 메서드:
  crypto.createHash(): 해시 객체 생성.
  crypto.createHmac(): HMAC 객체 생성.
  crypto.randomBytes(): 난수 생성.
  crypto.pbkdf2(): 암호 기반 키 도출 함수.
*/
// 비대칭키(공개키) 알고리즘 - RSA 예시

const crypto = require('crypto');

// RSA 키 쌍 생성
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

const plainText = '이 이야기는 아무도 알면 안 돼!';

// 데이터 암호화
const encryptedData = crypto.publicEncrypt(
  publicKey,
  Buffer.from(plainText)
);
console.log('Encrypted data:', encryptedData.toString('hex'));

// 데이터 복호화
const decryptedData = crypto.privateDecrypt(
  privateKey,
  encryptedData
);
console.log('Decrypted data:', decryptedData.toString('utf8'));
