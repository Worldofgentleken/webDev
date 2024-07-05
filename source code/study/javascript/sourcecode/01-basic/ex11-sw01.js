let n = 2;
switch (n) {
  case 1:
    console.log('1');
    console.log('11');
    break;
  case 2:
    console.log('2');
    break;
  case 3: console.log('3');
  case 4: console.log('4');
}
console.log('end');

let ch = 'ㅊ';
switch (ch) {
  case 'A': console.log('A'); break;
  case 'B': console.log('B'); break;
  default: console.log('없음')
}

score = 90;
grade = '';
switch (true) {
  case score >= 90:
    grade = 'A'; break;
  case score >= 80:
    grade = 'B'; break;
  case score >= 70:
    grade = 'C'; break;
  case score >= 60:
    grade = 'D'; break;
  default:
    grade = 'F';
}
console.log(grade);