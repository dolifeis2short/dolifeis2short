(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{399:function(n,e,t){"use strict";t.r(e);var a=t(48),o=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"express"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#express"}},[n._v("#")]),n._v(" EXPRESS")]),n._v(" "),t("h2",{attrs:{id:"_1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[n._v("#")]),n._v(" 1.")]),n._v(" "),t("h3",{attrs:{id:"server-기능"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-기능"}},[n._v("#")]),n._v(" [ server 기능 ]")]),n._v(" "),t("h3",{attrs:{id:"todo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[n._v("#")]),n._v(" TODO")]),n._v(" "),t("h3",{attrs:{id:"package-json-라이브러리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json-라이브러리"}},[n._v("#")]),n._v(" [ package.json ] 라이브러리")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('"express": "^4.16.4",\n"ejs": "^3.1.5",\n"morgan": "~1.9.1",\n"formidable": "^1.2.2",\n"http": "0.0.1-security",\n"http-errors": "~1.6.3",\n"winston": "^3.3.3",\n"winston-daily-rotate-file": "^4.5.0",\n"moment": "^2.29.1",\n"date-utils": "^1.2.21",\n"mysql": "^2.18.1",\n"mongoose": "^5.10.0",\n"mybatis-mapper": "^0.6.5",\n"axios": "^0.20.0",\n"request": "^2.88.2",\n"node-cron": "^2.0.3",\n"node-schedule": "^1.3.2",\n"nodemon": "^2.80.7",\n"socket.io": "^2.3.0",\n"swagger-jsdoc": "^6.0.0",\n"swagger-ui-express": "^4.1.6"\n')])])]),t("h3",{attrs:{id:"개발-tips"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#개발-tips"}},[n._v("#")]),n._v(" [ 개발 TIPs ]")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("/* express 모듈 */\n/*\nrouter - 페이지 라우팅 수행\nstatic - 특정 폴더를 서버의 루트 폴더에 올립니다.\nmorgan - 로그 정보를 출력한다.\ncookie parser - 쿠키를 분해합니다.\nbody parser - POST 요청 매개변수를 추출합니다.\nconnect-multiparty - POST 요청 매개변수를 추출합니다.\nexpress-session - 세션 처리를 수행합니다.\ncsurf - CSRF 보안을 수행합니다.\nerror handler - 예외 처리를 수행합니다.\nlimit - POST 요청의 데이터를 제안합니다.\nvhost - 가상 호스트를 설정합니다.\nrouter - 페이지 라우팅 수행\nstatic - 특정 폴더를 서버의 루트 폴더에 올립니다.\nmorgan - 로그 정보를 출력한다.\ncookie parser - 쿠키를 분해합니다.\nbody parser - POST 요청 매개변수를 추출합니다.\nconnect-multiparty - POST 요청 매개변수를 추출합니다.\nexpress-session - 세션 처리를 수행합니다.\ncsurf - CSRF 보안을 수행합니다.\nerror handler - 예외 처리를 수행합니다.\nlimit - POST 요청의 데이터를 제안합니다.\nvhost - 가상 호스트를 설정합니다.\n*/\n\n/* morgan(로그) 표시 형식 */\n/*\n:req[header]    // 요청 헤더\n:res[header]    // 응답 헤더\n:http-version  // 버전\n:response-time   // 응답 시간\n:remote-addr   // 원격 주소\n:date[format]    // 요청 시간\n:method    // 요청 방식\n:url    // 요청 URL\n:referrer   // 이전 URL\n:User-Agent  // 사용자 에이전트\n:status   // 상태 코드\n*/\n\n/* request method */\n/*\nget ( path, callback ) - GET 요청시의 이벤트 리스너 지정\npost ( path, callback ) - POST 요청시의 이벤트 리스너 지정\nput ( path, callback ) - PUT 요청시의 이벤트 리스너 지정\ndelete ( path, callback ) - DELETE 요청시의 이벤트 리스너 지정\nall ( path, callback ) - 모든 요청시의 이벤트 리스너 지정\n*/\n\n/* request param */\n/*\nrequest.params;\nrequest.query; { 'abc' : 10 } 형식 ...\nrequest.body;\nrequest.headers;\nrequest.header('');\nrequest.accepts();\n*/\n\n/* response param */\n/*\nres.status(200).send({abc: \"ABC\"})   // 기본 응답\nres.end();\nresponse.send()\nresponse.json()\nresponse.jsonp()\nresponse.redirect(status, path)\n*/\n\n\n/*\n100\n순수하게 정보 제공만을 위한 코드\n102 임의의 동작이 백그라운드에서 발생하고 완료까지 시간이 걸린다고 나타낼 때 사용\n\n200\n200 Success, OK 성공\n201 Created 새로운 리소스 생성\n202 Accepted 요청은 성공했으나 처리되지 않음\n203 Non-authoritative information 요청이 변형 프록시를 통해 라우팅 되는 경우\n204 No Content 요청은 성공했으나 반환되는 내용이 없음\n206 Partial Content 페이징된 응답을 위해 사용된다. 헤더가 전송되고 클라이언트가 허용 가능한 범위가 지정되는데 응답이 범위보다 큰 경우, 서버는 처리해야 하는 더 많은 데이터가 있음을 나타내는 이 코드를 응답한다.\n\n300\n리다이렉션\n301 Moved Permanently 영구적으로 리다이렉트\n302 Found 리다이렉트하지만 나중에 바뀔 수 있음, 사용자가 임의의 이유로 일시적인 리다이렉션 수행을 요구하는 것\n304 Not Modified 클라이언트에 캐시된 리소스로 요청됨\n307 Temporary Redirect\n308 Permanent Redirect 자원에 대한 영구적인 리다이렉트를 지정, HTTP 메소드가 자원을 변경하는 것을 허용하지 않는다.\n\n400\n클라이언트 오류\n400 Bad Request 구문적으로 잘못된 요청\n401 Unauthorized 인증 필요 (실제로는 Unauthenticated 의 의미)\n403 Forbidden 권한 부족 (실제로는 Unauthorized 의 의미)\n404 Not Found\n405 Method Not Allowed 메소드가 일치하지 않음\n406 Not Acceptable 헤더 또는 내용이 서버에서 받아들일 수 없는 요청\n407 Proxy Authentication Required 프록시 인증 필요\n408 Request Timeout 요청시간 초과\n409 Conflict 기존 리소스와 충돌\n410 Gone 리소스가 영원히 사라짐\n411 Length Required Content-Length 없음\n413 Requested Entity Too Large 내용이 너무 큼 (첨부파일)\n414 Requested URL Too Long URL 이 너무 김\n422 Unprocessable Entity Validation 오류\n429 Too Many Requests 요청 횟수 제한\n\n500\n서버 오류\n500 Internal Server Error 서버 오류\n501 Not Implemented 클라이언트가 아직 구현되지 않은 엔드포인트에 접근하는 경우\n502 Bad Gateway 게이트웨이 오류\n503 Service Unavailable 일시적인 오류 (터지거나 점검 중)\n*/\n\n/*\n## MIME이란?\n## Content-Type의 종류\n**1) Multipart Related MIME 타입**\n- Content-Type: Multipart/related <-- 기본형태\n- Content-Type: Application/X-FixedRecord\n\n**2) XML Media의 타입**\n- Content-Type: text/xml\n- Content-Type: Application/xml\n- Content-Type: Application/xml-external-parsed-entity\n- Content-Type: Application/xml-dtd\n- Content-Type: Application/mathtml+xml\n- Content-Type: Application/xslt+xml\n\n**3) Application의 타입**\n- Content-Type: Application/EDI-X12 <-- Defined in RFC 1767\n- Content-Type: Application/EDIFACT <-- Defined in RFC 1767\n- **Content-Type: Application/javascript** <-- Defined in RFC 4329\n- Content-Type: Application/octet-stream : <-- 디폴트 미디어 타입은 운영체제 종종 실행파일, 다운로드를 의미\n- Content-Type: Application/ogg <-- Defined in RFC 3534\n- Content-Type: Application/x-shockwave-flash <-- Adobe Flash files\n  **- Content-Type: Application/json** <-- JavaScript Object Notation JSON; Defined in RFC 4627\n- Content-Type: Application/x-www-form-urlencode <-- HTML Form 형태\n- **x-www-form-urlencode와 multipart/form-data은 둘다 폼 형태이지만 x-www-form-urlencode은 대용량 바이너리 테이터를 전송하기에 비능률적이기 때문에 대부분 첨부파일은 multipart/form-data를 사용하게 된다.**\n\n**4) 오디오 타입**\n- Content-Type: audio/mpeg <-- MP3 or other MPEG audio\n- Content-Type: audio/x-ms-wma <-- Windows Media Audio;\n- Content-Type: audio/vnd.rn-realaudio <-- RealAudio; 등등\n\n**5) Multipart 타입**\n- Content-Type: multipart/mixed: MIME E-mail;\n- Content-Type: multipart/alternative: MIME E-mail;\n- Content-Type: multipart/related: MIME E-mail <-- Defined in RFC 2387 and used by MHTML(HTML mail)\n- Content-Type: multipart/formed-data <-- 파일 첨부\n\n**6) TEXT 타입**\n- Content-Type: text/css\n- Content-Type: text/html\n- Content-Type: text/javascript\n- Content-Type: text/plain\n- **Content-Type: text/xml**\n\n**7) file 타입**\n- **Content-Type: application/msword <-- doc**\n- **Content-Type: application/pdf <-- pdf**\n- **Content-Type: application/vnd.ms-excel <-- xls**\n- **Content-Type: application/x-javascript <-- js**\n- **Content-Type: application/zip <-- zip**\n- **Content-Type: image/jpeg <-- jpeg, jpg, jpe**\n- **Content-Type: text/css <-- css**\n- **Content-Type: text/html <-- html, htm**\n- **Content-Type: text/plain <-- txt**\n- **Content-Type: text/xml <-- xml**\n- **Content-Type: text/xsl <-- xsl**\n  */\n")])])]),t("p",[n._v("res.download()\tPrompt a file to be downloaded.\nres.end()\tEnd the response process.\nres.json()\tSend a JSON response.\nres.jsonp()\tSend a JSON response with JSONP support.\nres.redirect()\tRedirect a request.\nres.render()\tRender a view template.\nres.send()\tSend a response of various types.\nres.sendFile()\tSend a file as an octet stream.\nres.sendStatus()\tSet the response status code and send its string representation as the response body.")]),n._v(" "),t("p",[n._v("// 다운로드 페이지 구현\nhttps://whichmean.tistory.com/6")])])}),[],!1,null,null,null);e.default=o.exports}}]);