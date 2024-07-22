/*
crypto 모듈
  암호화 기능을 제공하는 모듈

주요 메서드:
  crypto.createHash(): 해시 객체 생성.
  crypto.createHmac(): HMAC 객체 생성.
  crypto.randomBytes(): 난수 생성.
  crypto.pbkdf2(): 암호 기반 키 도출 함수.
*/
// Salt-기법

const crypto = require('crypto');

// 비밀번호와 솔트
const password = 'password123';
const salt = crypto.randomBytes(16);

console.log('salt:', Buffer.from(salt).toString('hex'));

// salt값을 활용하여 키 도출
let encrypted_pwd = '';
crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  encrypted_pwd = derivedKey.toString('hex')
  console.log('Derived key:', encrypted_pwd);

  // 유닉스/리눅스 shadow에 저장된 비밀번호 형식
  console.log(`$username:$6$${Buffer.from(salt).toString('hex')}$${encrypted_pwd}`); 
});




