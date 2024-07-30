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
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(originalName);
    const basename = path.basename(originalName, extension);
    const newName = `${basename}-${uniqueSuffix}${extension}`;
    cb(null, newName);
  }
});

const upload = multer({ storage: storage });

// 업로드 폼을 제공하는 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex10.html'));
});

// 다중 파일 업로드를 처리하는 라우트
app.post('/upload', upload.array('files', 10), (req, res) => {
  const uploadedFiles = req.files.map(file => file.filename);
  res.send('파일 업로드 성공! 업로드된 파일: ' + uploadedFiles.join(', '));
});

// 파일 목록 제공 라우트
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
