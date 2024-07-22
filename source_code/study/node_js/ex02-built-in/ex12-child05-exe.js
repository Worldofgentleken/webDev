const { spawn } = require('child_process');
const path = require('path');

// 파이썬 실행 파일의 경로를 설정합니다.
const scriptPath = path.join(__dirname, 'py', 'irispredict_deploy.exe'); // 생성된 실행 파일 경로

// 예측에 사용할 데이터를 준비합니다.
//const numbers = { sepal_length: 2.1, sepal_width: 2.5, petal_length: 5.4, petal_width: 3.2 };
const numbers = { sepal_length: 5.1, sepal_width: 3.5, petal_length: 1.4, petal_width: 0.2 };
const inputData = JSON.stringify(numbers);

// 파이썬 실행 파일을 자식 프로세스로 실행합니다.
const pythonProcess = spawn(scriptPath, [inputData]);

let resultData = '';

// 파이썬 스크립트의 출력을 읽습니다.
pythonProcess.stdout.on('data', (data) => {
  resultData += data.toString();  // 데이터를 버퍼에 추가
});

// 에러 핸들링
pythonProcess.stderr.on('data', (data) => {
  console.error('Error:', data.toString());
});

// 프로세스 종료 핸들링
pythonProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`child process exited with code ${code}`);
  } else {
    try {
      const result = JSON.parse(resultData);  // 모든 출력을 처리
      if (result.error) {
        console.error('Error:', result.error);
      } else {
        console.log('Calculation result:', result);
      }
    } catch (e) {
      console.error('Failed to parse JSON:', e);
    }
  }
});
