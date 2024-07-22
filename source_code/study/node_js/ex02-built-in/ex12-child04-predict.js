const { spawn } = require('child_process');
const path = require('path');

// 파이썬 스크립트를 실행합니다.
const scriptPath = path.join(__dirname, 'py', 'irispredict.py');
const pythonProcess = spawn('python', [scriptPath], {
  cwd: path.join(__dirname, 'py') // python 프로세스의 작업 디렉토리로 설정
});

// 예측에 사용할 데이터를 준비합니다.
const inputData = JSON.stringify({
  sepal_length: 2.1,
  sepal_width: 2.5,
  petal_length: 5.4,
  petal_width: 3.2
});

// 파이썬 스크립트에 데이터를 전달합니다.
pythonProcess.stdin.write(inputData);
pythonProcess.stdin.end();

// 결과를 저장할 변수
let resultData = '';

// 파이썬 스크립트의 표준 출력을 읽습니다.
pythonProcess.stdout.on('data', (data) => {
  console.log('stdout:', data.toString());
  resultData += data.toString(); // 데이터를 계속 추가
});

// 파이썬 스크립트의 표준 에러를 읽습니다.
pythonProcess.stderr.on('data', (data) => {
  console.error('stderr:', data.toString());
});

// 프로세스 종료 핸들링
pythonProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  
  try {
    // 파싱하여 결과를 변수에 담기
    const result = JSON.parse(resultData.trim().split('\n').pop()); // 마지막 JSON 출력만 파싱
    console.log('Prediction result:', result);
  } catch (error) {
    console.error('Error parsing result:', error);
  }
});
