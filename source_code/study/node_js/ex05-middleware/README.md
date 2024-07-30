미들웨어(Middleware)
  Express.js 같은 웹 애플리케이션 프레임워크에서 사용
  HTTP 요청을 처리하는 과정에서 여러 가지 작업을 수행할 수 있는 함수
  요청과 응답 객체에 접근할 수 있으며, 응답을 보내기 전에 여러 가지 작업을 수행
  체인처럼 연결되어 순차적으로 실행되며, 다음 미들웨어로 제어를 넘기기 위해 next 함수를 호출

주요 기능
  요청 로깅: 요청이 들어올 때마다 로그를 남기는 작업.
  인증 및 권한 부여: 사용자가 특정 리소스에 접근할 수 있는 권한이 있는지 확인.
  요청 데이터 파싱: JSON, URL-encoded 등 다양한 형태의 요청 본문을 파싱.
  에러 처리: 요청 처리 중 발생하는 오류를 처리하고 적절한 응답을 반환.
  정적 파일 서비스: 정적 파일(CSS, JavaScript, 이미지 등)을 제공.
  

기본적인 미들웨어 구조
  미들웨어는 일반적으로 다음과 같은 구조를 가짐
    function (req, res, next) {
      // 미들웨어 로직
      next();
    }

적용 방법
  // 모든 요청에 대해 적용되는 미들웨어
  app.use(loggerMiddleware);

  // 특정 경로에만 적용되는 미들웨어
  app.use('/protected', authMiddleware);

express에서 자주 사용되는 미들웨어
  body-parser: 요청 본문 파싱
  static: 정적 파일 제공
  cookie-parser: 쿠키 파싱
  express-session: 세션 관리
  morgan: 요청 로깅
  cors: CORS 설정
  multer: 파일 업로드 처리
