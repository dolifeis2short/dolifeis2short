(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{405:function(_,l,v){"use strict";v.r(l);var a=v(48),t=Object(a.a)({},(function(){var _=this,l=_.$createElement,v=_._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"db-sql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#db-sql"}},[_._v("#")]),_._v(" DB SQL")]),_._v(" "),v("div",{staticClass:"language-text extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("* TRANSACTION\n 1) 원자성\n 2) 일관성\n 3) 고립성\n 4) 지속성\n")])])]),v("h2",{attrs:{id:"_1-데이터-타입"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-데이터-타입"}},[_._v("#")]),_._v(" 1. 데이터 타입")]),_._v(" "),v("ul",[v("li",[_._v("char\n"),v("ul",[v("li",[_._v("고정형, 1글자를 넣어도 20byte가 잡힌다.\n+검색 속도 및 읽는 속도가 빠르다\n+ex) ID, 주민번호")])])]),_._v(" "),v("li",[_._v("varchar\n"),v("ul",[v("li",[_._v("넣는 데이터에 따라 byte 다르게 잡힌다.\n+varchar (mysql, ms-sql), varchar2(oracle)")])])]),_._v(" "),v("li",[_._v("number\n"),v("ul",[v("li",[_._v("number(5, 2) - 전체 5자리이며, 소숫점 아래가 2자리")])])])]),_._v(" "),v("h2",{attrs:{id:"_2-sql-종류"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql-종류"}},[_._v("#")]),_._v(" 2. SQL 종류")]),_._v(" "),v("ul",[v("li",[_._v("데이터 정의 (DDL) CREATE, ALTER, DROP")]),_._v(" "),v("li",[_._v("데이터 조작 (DML) SELECT, INSERT, UPDATE, DELETE")]),_._v(" "),v("li",[_._v("데이터 제어 (DCL) GRANT, REVOKE")]),_._v(" "),v("li",[_._v("트랜잭션 제어(TCL) COMMIT, ROLLBACK")])]),_._v(" "),v("h2",{attrs:{id:"_3-키-종류"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-키-종류"}},[_._v("#")]),_._v(" 3. 키 종류")]),_._v(" "),v("ul",[v("li",[_._v("PK (기본키)\n"),v("ul",[v("li",[_._v("중복이 불가능한 키")])])]),_._v(" "),v("li",[_._v("FK (외래키)\n"),v("ul",[v("li",[_._v("테이블간 연관 관계를 나타냄")]),_._v(" "),v("li",[_._v('PK가 변경시 같이 삭제를 하기 위해서는 CASCADE 설정 ""')])])])]),_._v(" "),v("h2",{attrs:{id:"_4-기본-문법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-기본-문법"}},[_._v("#")]),_._v(" 4. 기본 문법")]),_._v(" "),v("ul",[v("li",[_._v("LIKE\n"),v("ul",[v("li",[_._v("'%' 길이에 상관 없는 문자\n+'_' 한글자만 대체하는 문자")])])]),_._v(" "),v("li",[_._v("IN ('')\n"),v("ul",[v("li",[_._v("검색값이 표함된 데이터 검색")])])]),_._v(" "),v("li",[_._v("ORDER BY _ DESC")]),_._v(" "),v("li",[_._v("GROUP BY _")]),_._v(" "),v("li",[_._v("DISTINCT\n"),v("ul",[v("li",[_._v("SELECT DISTINCT _ FROM TABLE // 원소에 넣는다.")])])]),_._v(" "),v("li",[_._v("CASE\n"),v("ul",[v("li",[_._v("SELECT CASE WHEN _ THEN _ END")])])]),_._v(" "),v("li",[_._v("JOIN\n"),v("ul",[v("li",[_._v("JOIN _ ON _ // 매핑 되는 것만 검색해서 보여줌\n+LEFT JOIN _ ON _ // LEFT 테이블 기준으로 다 보여주고, 없을 경우 NULL // RIGHT 테이블 매핑이 여러개일 경우 LEFT 테이블의 ROW 복사")]),_._v(" "),v("li",[_._v("RIGHT_JOIN _ ON _ // RIGHT 테이블 기준으로 다 보여주고, 없을 경우 NULL // LEFT 테이블 매핑이 여러개일 경우 RIGHT 테이블의 ROW 복사")]),_._v(" "),v("li",[_._v("FULL OUTER JOIN _ ON _ // 양쪽 모두 보여준다.")])])]),_._v(" "),v("li",[_._v("DUAL\n"),v("ul",[v("li",[_._v("함수 테스트를 위한 DUMMY 테이블")])])]),_._v(" "),v("li",[_._v("UNION\n"),v("ul",[v("li",[_._v("중복이 없는 합집합")])])]),_._v(" "),v("li",[_._v("UNION ALL\n"),v("ul",[v("li",[_._v("중복을 허용하는 합집합")])])]),_._v(" "),v("li",[_._v("INTERSECT\n"),v("ul",[v("li",[_._v("교집합")])])]),_._v(" "),v("li",[_._v("MINUS\n"),v("ul",[v("li",[_._v("차집합")])])]),_._v(" "),v("li",[_._v("mariaDB - now() 함수")])])])}),[],!1,null,null,null);l.default=t.exports}}]);