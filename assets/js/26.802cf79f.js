(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{394:function(e,t,a){"use strict";a.r(t);var l=a(48),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[e._v("#")]),e._v(" ES6+")]),e._v(" "),a("h2",{attrs:{id:"_1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[e._v("#")]),e._v(" 1.")]),e._v(" "),a("h2",{attrs:{id:"_3-전역-자바스크립트-객체"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-전역-자바스크립트-객체"}},[e._v("#")]),e._v(" 3. 전역 자바스크립트 객체")]),e._v(" "),a("p",[e._v("String = 문자열 값을 다룬다. Number = 숫자 값들을 다룬다. Boolean = 불리언 값들을 다룬다. Date = 날짜를 표현하고, 조작한다. Math = 숫자 값들을 다룬다. RegEx = 텍스트 내\n패턴을 다룬다.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("각 형태별 변환에 대해 정리할 것 ..")])]),e._v(" "),a("li",[a("p",[e._v("( 객체, 리스트, 맵, 셋, Number, String, 형변환 )")])]),e._v(" "),a("li",[a("p",[e._v("변경이 자주 되지 않는 것은 Object로 관리")])]),e._v(" "),a("li",[a("p",[e._v("자주 변경되는 것은 map으로 관리")])])]),e._v(" "),a("h3",{attrs:{id:"_1-f-p-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-f-p-연산자"}},[e._v("#")]),e._v(" 1) F.P 연산자")]),e._v(" "),a("ol",[a("li",[e._v("[ ARRAY & OBJECT 사용 ]")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("각각 요소의 계산 & 실행 - each, map, reduce, reduceRight, invoke, pluck")])]),e._v(" "),a("li",[a("p",[e._v("필터링 - find, filder, where, findWhere, reject")])]),e._v(" "),a("li",[a("p",[e._v("검사 - every, some, contains")])]),e._v(" "),a("li",[a("p",[e._v("최대, 최소값 찾기")]),e._v(" "),a("ul",[a("li",[e._v("max, min")])])]),e._v(" "),a("li",[a("p",[e._v("정렬 - sortBy, groupBy, countBy, shuffle")])]),e._v(" "),a("li",[a("p",[e._v("변환")]),e._v(" "),a("ul",[a("li",[e._v("toArray")])])]),e._v(" "),a("li",[a("p",[e._v("정보")]),e._v(" "),a("ul",[a("li",[e._v("size")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("forEach -")]),e._v(" each는 jQuery로 $.each(collection, callback) 사용")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[2, 5, 9].forEach(function(element, index, array) {\nconsole.log(index + ":" + element);\n/**\n* 0:2\n* 1:5\n* 2:9\n*/\n});\n')])])]),a("ul",[a("li",[a("strong",[e._v("filter -")]),e._v(" array에 바탕은 배열. index, array는 생략 가능.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var filtered = [12, 5, 8, 130, 44].filter(function(element, index, array) {\n\treturn (element >= 10);\n});\n\nconsole.log(filtered); // [ 12, 130, 44 ]\n")])])]),a("ul",[a("li",[a("strong",[e._v("map -")]),e._v(" array에 바탕은 배열. index, array는 생략 가능.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var square = [1, 2, 3, 4, 5].map(function(element, index, array) {\n\treturn element * element;\n});\n\nconsole.log(square); // [ 1, 4, 9, 16, 25 ]\n")])])]),a("ul",[a("li",[a("strong",[e._v("reduce")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var total = [0, 1, 2, 3].reduce(function(previousValue, currentValue, index, array) {\n\treturn previousValue + currentValue;\n});\n\nconsole.log(total); // 6\n")])])]),a("ul",[a("li",[a("strong",[e._v("every, some -")]),e._v(" 결과는 boolean. array에 바탕은 배열. index, array는 생략 가능.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var passed = [12, 54, 18, 130, 44].every(function(element, index, array) {\n\treturn (element >= 10);\n});\n\nconsole.log(passed); // true\npassed = [2, 5, 8, 1, 4].some(function(element, index, array) {\n\treturn (element >= 10);\n});\n\nconsole.log(passed); // false\n")])])]),a("p",[a("strong",[e._v("2) [ARRAY] 함")]),e._v("수")]),e._v(" "),a("ul",[a("li",[e._v("특정 위치의 요소를 구하는 함수 - first, initial, last, rest")]),e._v(" "),a("li",[e._v("배열에서 특정 값을 제거하는 함수 - compact, flatten, without, uniq")]),e._v(" "),a("li",[e._v("집합 함수 - union, intersection, difference")]),e._v(" "),a("li",[e._v("변환\n"),a("ul",[a("li",[e._v("zip, object")])])]),e._v(" "),a("li",[e._v("찾기 - indexOf, lastIndexOf, sortedIndx")]),e._v(" "),a("li",[e._v("생성\n"),a("ul",[a("li",[e._v("range")])])])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("[함수를 위한] 함수")])]),e._v(" "),a("ul",[a("li",[e._v("bind, bindAll, partial, memoize, delay, defer, throttle, debounce, once, after, wrap")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("[Object] 함수")])]),e._v(" "),a("p",[e._v("함수들을 살펴보면 다음과 같다.")]),e._v(" "),a("ul",[a("li",[e._v("Object 값 조회 - keys, values, pairs, functions, pick, omit")]),e._v(" "),a("li",[e._v("Object 키-값 조작\n"),a("ul",[a("li",[e._v("invert, extend, defaults")])])]),e._v(" "),a("li",[e._v("복사 - clone")]),e._v(" "),a("li",[e._v("실행 - tap")]),e._v(" "),a("li",[e._v("Object 비교 및 진단 - has, isEqual, isEmpty")]),e._v(" "),a("li",[e._v("Object 타입 확인 - isElement, isArray, isObject, isArguments, isFunction, isString, isNumber\n"),a("ul",[a("li",[e._v("isFinite, isBoolean, isDate, isRegExp, isNaN, isNull, isUndefined")])])])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("유틸 함수")])]),e._v(" "),a("ul",[a("li",[e._v("noConflict, identity, times, random, mixin, uniqueId, escape, unescape, result, template")])]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("체인 함수")])]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"es6-내용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-내용"}},[e._v("#")]),e._v(" ES6++ 내용")]),e._v(" "),a("ul",[a("li",[e._v("기본 문법\n"),a("ul",[a("li",[e._v("let변수, const 변수, 화살표 함수")]),e._v(" "),a("li",[e._v("Spread, Rest, Destructuring, default value")]),e._v(" "),a("li",[e._v("연산자, getter/setter, Template")])])]),e._v(" "),a("li",[e._v("오브젝트에 추가 함수\n"),a("ul",[a("li",[e._v("Number, String, Object")]),e._v(" "),a("li",[e._v("Array, Math, RegExp")])])]),e._v(" "),a("li",[e._v("ES6+ 새로 생긴 오브젝트\n"),a("ul",[a("li",[e._v("Iterator, Generator, Symbol")]),e._v(" "),a("li",[e._v("Map, Set, WeakMap, WeakSet")]),e._v(" "),a("li",[e._v("Class, Proxy, Reflect, Promise, Module")]),e._v(" "),a("li",[e._v("ArrayBuffer, TypedArray, DataView")])])]),e._v(" "),a("li",[e._v("비동기 통신\n"),a("ul",[a("li",[e._v("Node.js 에서")]),e._v(" "),a("li",[e._v("Ajax의 XMLHttpRequest")]),e._v(" "),a("li",[e._v("Async/Await")])])])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("static method ⇒ class에서 사용함")]),e._v(" "),a("p",[e._v("Object.함수 ⇒ Array.isArray()")]),e._v(" "),a("p",[e._v("메소드 ⇒ Array.prototype.forEach()")]),e._v(" "),a("p",[e._v("try -catch = catch 는 밖의 변수 사용")]),e._v(" "),a("p",[e._v("let 변수는 this로 참조가 불가하다 !!")]),e._v(" "),a("p",[e._v("조심하자 !! let일 경우 에러가 발생한다.")]),e._v(" "),a("p",[e._v("ES5는")]),e._v(" "),a("ol",[a("li",[e._v("함수 선언문 설정")]),e._v(" "),a("li",[e._v("변수 이름을 바인딩, 변수 이름은 undefined")])]),e._v(" "),a("p",[e._v("ES6에서 let은 호이스팅이 되지 않음 !!")]),e._v(" "),a("p",[e._v("즉, let변수 앞에서는 사용이 불가능하다.  !!")]),e._v(" "),a("p",[e._v("let 변수는 변수를 선언한 이후 인식 할 수 있다.")]),e._v(" "),a("p",[e._v("const 변수는 바꿀수 없지만, Object 프로퍼티를 바꿀수 있음")]),e._v(" "),a("p",[e._v("const는 배열의 엘리멘트를 바꿀수도 있음. !!")]),e._v(" "),a("p",[e._v("화살표 함수")]),e._v(" "),a("ul",[a("li",[e._v("prototype과 constructor가 없음. prototype에 메소드를 확장 할 수 없으며, new로 인스턴스를 생성 할 수 없다.")]),e._v(" "),a("li",[e._v("arguments를 사용 할 수 없음.")]),e._v(" "),a("li",[e._v("대신 rest 파라미터를 사용함.")]),e._v(" "),a("li",[e._v("화살표 함수는 this는 없다. 단 window (글로벌오브젝트)를 참조한다.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("이터레이션 !!")]),e._v(" "),a("p",[e._v("이터러블 프로토콜")]),e._v(" "),a("ul",[a("li",[e._v("반복할 수 있는 구조, Symbol.iterator를 가지고 있어야 함")]),e._v(" "),a("li",[a("strong",[e._v("Array, Argument, String, TypedArray, Map, Set, DOM NodeList")]),e._v(" 는 가지고 있음")])]),e._v(" "),a("p",[e._v("이터레이터 프로토콜")])])}),[],!1,null,null,null);t.default=r.exports}}]);