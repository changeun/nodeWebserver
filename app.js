/* express 프레임워크를 파일에 include함, 그와 동시에 require함수의 리턴값을 받음 */
var express = require('express');
var http = require('http');
var static = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));

//body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

/* public 내에 정적인 파일(html,css,js) 넣어두는 디렉토리로 사용 */
app.use(static(path.join(__dirname, 'public')));

/* 라우트 지정 : url 연결, res : response 약자 객체, 
   send : res 객체의 메소드로 요청에 대한 응답 보냄 메세지 */
app.get('/', function(req, res){
     // res.send('Hello, This is first test about nodejs');
     res.sendFile(__dirname + '/index.html');
});
 
app.get('/login', function(req, res){
     // res.send('<h1>please login</h1>');
     res.sendFile(__dirname + '/public/login.html');
});

/* 서버응답 준비 : 3000번 포트 열어놓음 */
app.listen(3000, function(){
     console.log("Connected 3000 port!");
});

//미들웨어에서 파라미터 확인
app.use(function(req, res, next){
  console.log('첫번째 미들웨어에서 요청을 처리함.');

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  res.writeHead('200',{'Content-type':'text/html;charset=utf8'});
  res.write('<h1>express 서버에서 응답한 결과입니다.</h1>');
  res.write('<div><p>param id: '+paramId+'</p></div>');
  res.write('<div><p>param password: '+paramPassword+'</p></div>');
  res.end();
});