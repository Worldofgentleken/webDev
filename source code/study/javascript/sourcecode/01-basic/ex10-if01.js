let age = parseInt(prompt('나이:'));
let isAdult = false;

if(age >= 20){
  isAdult = !isAdult;
}
console.log(isAdult);

if(age >= 20){
  isAdult = true;
}else{
  isAdult = false;
}
console.log(isAdult);


let score = parseInt(prompt('점수입력:'));
let grade = 'F';
if(score >= 90){
  grade = 'A';
}else if(score >= 80){
  grade = 'B';
}else if(score >= 70){
  grade = 'C';
}else if(score >= 60){
  grade = 'D';
}// }else{
//   grade = 'Unkown';
// }
console.log('등급:', grade);