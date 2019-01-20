# nodeWebserver

** 본 프로젝트는 nodejs 및 expressjs 의 원리를 알고자 진행한 것이므로, 아주 간단한 페이지 이동 및 설치 방법만 있음 **

실행방법 : node app.js 

✔️nodejs란
- 서버사이드에서 사용할 수 있도록 자바스크립트로 짜여진 서버사이드 런타임 환경 자바스크립트
- 서버로 사용할 컴퓨터에서 서버를 구축할 때 언어로 자바스크립트를 사용할 수 있게 됐다는 말
- 자바스크립트가 웹브라우저를 벗어나 서버에서도 사용 가능하게 됨

✔️express란
- 웹서버를 쉽게 구축할 수 있게하는 프레임워크

✔️express 설치
- mkdir nodeWebserver 
- cd nodeWebserver
- npm init
- npm install express --save

✔️라우팅이란
- 클라이언트의 요청(request)에 대한 응답(response)를 정하는 것
- URL으로 클라이언트가 요청할 때 어떤 응답을 할 것인지 정하는 것
- HTTP method(GET, POST, PUT, DELETE) 구분 필요
- 라우팅 해주지 않은 URL은 "CANNOT 주소" 페이지가 출력(404페이지 커스텀할 필요O)

✔️서버에 요청할 때 구분해서 쓰
- 서버에 정보를 요청(Read)할 때는 GET
- 서버에 클라이언트가 정보를 전달할 때에는 POST

✔️P.S. 요즘은 express-generator를 이용하여 어플리케이션의 기본구조를 자동으로 생성하는 방법을 이용.

     참고링크 : http://html5around.com/wordpress/tutorials/node-js-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0/
