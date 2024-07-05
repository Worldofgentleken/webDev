for(let i = 1; i < 5; i++){
  console.log(i)
  if(i == 3){
    break;
  }
  console.log('for end');
}
console.log('end');
console.log('---');

for(let i = 1; i < 5; i++){
  console.log(i)
  if(i == 3){
    continue;
  }
  console.log('for end');
}
console.log('end');

let n = 0;
while(true){
  while(true){
    console.log('무한 반복');
    if(n > 5){
      break;
    }
    n++;
  }
  console.log('기능 종료');
  break;
}