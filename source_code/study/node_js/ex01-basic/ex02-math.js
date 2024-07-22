// math.js
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없음");
  }
  return a / b;
}

// 모듈을 내보냅니다.
module.exports = {
  add,
  sub,
  mul,
  div
};
