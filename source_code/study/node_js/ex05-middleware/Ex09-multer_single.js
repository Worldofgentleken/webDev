const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// 업로드 디렉토리 경로
const uploadsDir = path.join(__dirname, 'uploads');

// 업로드 디렉토리가 존재하지 않으면 생성
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 업로드된 파일이 저장될 디렉토리
  },
  filename: function (req, file, cb) {
    // 파일 이름을 유지하면서 고유하게 만듦
    const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8'); // 한글 처리
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // 0부터 10억 사이의 임의의 정수를 생성
    const extension = path.extname(originalName); //파일의 확장자 추출
    const basename = path.basename(originalName, extension); //파일의 기본 이름(확장자를 제외한 이름)을 추출
    const newName = `${basename}-${uniqueSuffix}${extension}`;  //기본 이름과 고유 접미사, 확장자를 조합하여 새 파일명 생성
    cb(null, newName); //콜백 함수를 호출하여 Multer에 새 파일명 전달
  },
  // limits: { //파일 업로드 크기 및 파일 수 제한 설정
  //   fileSize: 1024 * 1024 * 5, // 5MB로 파일 크기 제한
  //   files: 10 // 최대 10개의 파일 업로드 허용
  // },
  // fileFilter: function(req, file, cb) { //특정 파일만 업로드를 허용/거부 MIME TYPE사용
  //   // 파일 유형을 체크 (예: 이미지 파일만 허용)
  //   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
  //     cb(null, true); // 허용
  //   } else {
  //     cb(null, false); // 거부
  //   }
  // }
});

const upload = multer({ storage: storage });

// 업로드 폼을 제공하는 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex09.html'));
});

// 파일 업로드를 처리하는 라우트
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('파일 업로드 성공! 파일 이름: ' + req.file.filename);
});

//파일 목록 제공 라우트
app.get('/uploads', (req, res) => {
  const uploadsDir = path.join(__dirname, 'uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).send('파일 목록을 읽을 수 없습니다.');
    }
    res.json(files);
  });
});


// 파일 다운로드를 처리하는 라우트
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);

  // 파일이 존재하는지 확인
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('파일을 찾을 수 없습니다.');
    }
    res.download(filePath, filename);
  });
});

// 서버 시작
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
