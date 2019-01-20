# nodeWebserver

** 본 프로젝트는 nodejs 및 expressjs 의 원리를 알고자 진행한 것이므로, 아주 간단한 페이지 이동 및 설치 방법만 있음 **

[nodejs란]
- 서버사이드에서 사용할 수 있도록 자바스크립트로 짜여진 서버사이드 런타임 환경 자바스크립트
- 서버로 사용할 컴퓨터에서 서버를 구축할 때 언어로 자바스크립트를 사용할 수 있게 됐다는 말
- 자바스크립트가 웹브라우저를 벗어나 서버에서도 사용 가능하게 됨

[express란]
- 웹서버를 쉽게 구축할 수 있게하는 프레임워크

[express 설치]
- mkdir nodeWebserver 
- cd nodeWebserver
- npm init
- npm install express --save

[라우팅이란]
- 클라이언트의 요청(request)에 대한 응답(response)를 정하는 것
- URL으로 클라이언트가 요청할 때 어떤 응답을 할 것인지 정하는 것
- HTTP method(GET, POST, PUT, DELETE) 구분 필요
- 라우팅 해주지 않은 URL은 "CANNOT 주소" 페이지가 출력(404페이지 커스텀할 필요O)

[HTTP 메서드에 따라 express 라우팅하기 - CRUD]
1) GET 메서드, URL, 핸들러(요청, 응답 콜백함수) : 자원 리스트를 읽어올 때(READ)
2) POST 메서드, URL, 핸들러(요청, 응답 콜백함수) : 자원 입력 요청할 때(CREATE)
3) PUT 메서드, URL, 핸들러(요청, 응답 콜백함수) : 자원 수정 요청할 때(UPDATE)
- 자원 db 테이블 중 특정 자원에 대한 컬럼 데이터 정보 업데이트 처리(id를 받아)할 때 사용
- 쿼리스트링으로 id값을 넘겨받아 자원 db 테이블에서 넘겨받은 id값에 해당하는 자원을 찾아 수정한 후 요청에 대한 응답함
- 쿼리스트링이란? 주소(PATH)로 지정한 값 이외에 추가적으로 넘겨받는 값이 있을 때 사용함
- 쿼리스트링은 하나가 아니라 여러개 사용할 수 있음 : &로 구분 
- 아래 쿼리스트링 사용 방법이 합쳐져있음
- URL 뒤 ?를 붙인 후 쿼리스트링명=값 을 요청하면 됨
- req는 request 객체, req.query도 객체, req.query 객체 프로퍼티로 쿼리스트링이 추가됨
- 아래는 쿼리스트링를 받고 응답할 때 다시 보내주는 코드 결과임
4) DELETE 메서드, URL, 핸들러(요청, 응답 콜백함수) : 자원 수정 요청할 때(UPDATE)
- 자원 db 테이블 중 특정 자원에 대한 컬럼 데이터 정보 삭제 처리(id를 받아)할 때 사용
- PUT과 마찬가지로 특정 자원에 대한 처리이기때문에 쿼리스트링으로 id값을 받아 처리한 후 응답함
5) route() : 하나의 경로에 대한 HTTP method 체인 걸 수 있음
- PUT과 DELETE 메서드는 쿼리스트링으로 id값을 받아 업데이트, 삭제하도록 함
- 공식 api 문서 계속해서 보기!

[서버에 요청할 때 구분해서 쓰자]
- 서버에 정보를 요청(Read)할 때는 GET
- 서버에 클라이언트가 정보를 전달할 때에는 POST

P.S. 요즘은 express-generator를 이용하여 어플리케이션의 기본구조를 자동으로 생성하는 방법을 이용.
     참고링크 : http://html5around.com/wordpress/tutorials/node-js-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0/
