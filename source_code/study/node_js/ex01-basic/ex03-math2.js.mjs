// math2.js
export function mul(a, b) {
  return a * b;
}

export function div(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없음");
  }
  return a / b;
}

