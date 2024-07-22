/*
child_process 모듈
  새로운 프로세스를 생성하고, 외부 명령어를 실행하며, 그 결과를 제어
  네 가지 주요 메서드를 제공하는데 각 메서드는 서로 다른 용도로 사용
    exec:
      쉘을 통해 명령어를 실행하고, 명령어의 출력을 버퍼에 저장한 후 콜백 함수로 전달

    execFile:
      쉘을 사용하지 않고 파일을 실행. 명령어 실행 결과는 콜백 함수로 전달

    spawn:
      새로운 프로세스를 생성하고, 스트림을 통해 입력과 출력을 제어(대용량 데이터 처리를 할 때 유용)

    fork:
      새로운 Node.js 프로세스를 생성하고, 부모 프로세스와 자식 프로세스 간의 메시지를 전송할 수 있는 채널을 제공(모듈을 실행할 때 사용)
*/

// exec 예제
const { exec } = require('child_process');

exec('dire', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error1: ${err}`); // 명령어 실행 오류
    return;
  }
  console.log(`stdout1: ${stdout}`); // 명령어 실행 성공
  console.error(`stderr1: ${stderr}`); //실행 중 발생한 오류
});


// execFile 예제
const { execFile } = require('child_process');

execFile('node', ['-v'], (err, stdout, stderr) => {
  if (err) {
    console.error(`execFile error2: ${err}`);
    return;
  }
  console.log(`stdout2: ${stdout}`);
  console.error(`stderr2: ${stderr}`);
});


// spawn 예제
const { spawn } = require('child_process');

const ls = spawn('ipconfig', ['/all']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`자식 프로세스 종료 코드: ${code}`);
});


// fork 예제
const { fork } = require('child_process');

const child = fork('./ex17-child01_child.js');

child.on('message', (message) => {
  console.log('자식 프로세스로부터의 메시지:', message);
  // 자식 프로세스에게 종료를 알림
  child.send('exit');
});

child.on('exit', (code) => {
  console.log(`자식 프로세스 종료 코드: ${code}`);
});

child.send('안녕 나는 부모 프로세스야');
