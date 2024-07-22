const { spawn } = require('child_process');
const path = require('path');

// 파이썬 스크립트를 실행합니다.
const pythonPath = 'python';  // 또는 'python3'
const scriptPath = path.join(__dirname, 'py', 'calculator.py')

const pythonProcess = spawn(pythonPath, [scriptPath], {
  cwd: path.join(__dirname, 'py') // 현재 디렉토리를 작업 디렉토리로 설정
});

// 예측에 사용할 데이터를 준비합니다.
const numbers = { a: 1, b: 1 };  // 예시로 1 + 1을 계산
const inputData = JSON.stringify(numbers);

// 파이썬 스크립트에 데이터를 전달합니다.
pythonProcess.stdin.write(inputData);
pythonProcess.stdin.end();

// 파이썬 스크립트의 출력을 읽습니다.
pythonProcess.stdout.on('data', (data) => {
  const result = JSON.parse(data.toString());
  if (result.error) {
    console.error('Error:', result.error);
  } else {
    console.log('Calculation result:', result.result);
  }
});

// 에러 핸들링
pythonProcess.stderr.on('data', (data) => {
  console.error('Error:', data.toString());
});

// 프로세스 종료 핸들링
pythonProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
