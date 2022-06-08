(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{469:function(e,t,a){"use strict";a.r(t);var l=a(69),s=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[e._v("#")]),e._v(" HTML")]),e._v(" "),a("h2",{attrs:{id:"_1-block-요소"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-block-요소"}},[e._v("#")]),e._v(" 1. BLOCK 요소")]),e._v(" "),a("ul",[a("li",[e._v("block 요소 ( height, width 적용, 자동 줄바꿈 )")]),e._v(" "),a("li",[e._v("(vertical-align , text-align 적용되지 않음)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  div, h1, h2, h3, h4, h5, h6, table, ul, dd, dl, ol, p, pre, hr,\n  address, article, aside, audio, blockquote, canvas, fieldset, figcaption, figure, footer, form,\n  header, hgroup, noscript, output, section,  video\n")])])]),a("h2",{attrs:{id:"_2-inline-요소"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-inline-요소"}},[e._v("#")]),e._v(" 2. inline 요소")]),e._v(" "),a("ul",[a("li",[e._v("inline 요소 (자동 줄바꿈 X)")]),e._v(" "),a("li",[e._v("(height, width 적용되지 않음)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  button, img, input, label, a, textarea,\n  abbr, acronym, b, bdo, big, br, cite, code, dfn, em, i, kbd, map, object, q, samp,\n  small, script, select, span, strong, sub, sup, tt, var\n")])])]),a("h2",{attrs:{id:"_3-inline-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-inline-block"}},[e._v("#")]),e._v(" 3. inline-block")]),e._v(" "),a("ul",[a("li",[e._v("줄바꿈이 되지 않는다. width, height 지정 가능. 지정하지 않을 경우, 컨텐츠 만큼 잡힘.")])]),e._v(" "),a("p",[e._v("input은 value 값을 주어야 한다.\nradio는 name을 같이 해서 카테고리를 만든다.")]),e._v(" "),a("p",[e._v("preventDefault()   -- 페이지가 이동하지 않게 함.\nstopPropagation() - 이벤트가 버블링 되지 않게 함.")]),e._v(" "),a("h2",{attrs:{id:"loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading"}},[e._v("#")]),e._v(" LOADING")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  document.addEventListener('DOMContentLoaded', (event) => {\n      console.log('contentsLoaded');\n  });\n")])])]),a("h2",{attrs:{id:"element-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-value"}},[e._v("#")]),e._v(" ELEMENT VALUE")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  /* input tag */\n  // document.getElementById('example').value;\n  // document.getElementById('example1').setAttribute('disabled', 'disabled');\n  // document.getElementById('example1').removeAttribute('disabled');\n\n  /* selection tab */\n  // document.getElementById('selectSample').value;\n\n  /* check input */\n  // document.getElementById('flexCheckChecked').checked , true/false\n")])])]),a("h3",{attrs:{id:"element-검색"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-검색"}},[e._v("#")]),e._v(" ELEMENT 검색")]),e._v(" "),a("p",[e._v("정보를 LIST 형태로 가져 옴")]),e._v(" "),a("ul",[a("li",[e._v("document.getElementById()")]),e._v(" "),a("li",[e._v("document.getElementsByName()")]),e._v(" "),a("li",[e._v("document.getElementsByTagName()")])]),e._v(" "),a("h3",{attrs:{id:"element-검색2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-검색2"}},[e._v("#")]),e._v(" ELEMENT 검색2")]),e._v(" "),a("blockquote",[a("p",[e._v("baseElement.querySelector(selectors);")])]),e._v(" "),a("ul",[a("li",[e._v('baseElement.querySelector("div span").innerHTML;')])]),e._v(" "),a("blockquote",[a("p",[e._v("parentNode.querySelectorAll(selectors);")]),e._v(" "),a("ul",[a("li",[e._v('var highlightedItems = userList.querySelectorAll(".highlighted");\nhighlightedItems.forEach(function(userItem) {\ndeleteUser(userItem);\n});')])])]),e._v(" "),a("h3",{attrs:{id:"element-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-생성"}},[e._v("#")]),e._v(" ELEMENT 생성")]),e._v(" "),a("ul",[a("li",[e._v("document.createElement")]),e._v(" "),a("li",[e._v("document.createTextNode")]),e._v(" "),a("li",[e._v("element.appendChild")])]),e._v(" "),a("h3",{attrs:{id:"element-제어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-제어"}},[e._v("#")]),e._v(" ELEMENT 제어")]),e._v(" "),a("ul",[a("li",[e._v("element.setAttribute")]),e._v(" "),a("li",[e._v("element.getAttribute")]),e._v(" "),a("li",[e._v("element.removeAttri")]),e._v(" "),a("li",[e._v("element.innerHTML")])]),e._v(" "),a("h3",{attrs:{id:"class-제어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-제어"}},[e._v("#")]),e._v(" CLASS 제어")]),e._v(" "),a("ul",[a("li",[e._v("https://developer.mozilla.org/ko/docs/Web/API/Element/classList")]),e._v(" "),a("li",[e._v('div.classList.remove("foo");')]),e._v(" "),a("li",[e._v('div.classList.add("anotherclass");')]),e._v(" "),a("li",[e._v('div.classList.contains("foo")')]),e._v(" "),a("li",[e._v('div.classList.replace("foo", "bar");')])]),e._v(" "),a("p",[e._v("// ")]),a("div",{staticClass:"anotherclass"}),a("p"),e._v(" "),a("ul",[a("li",[e._v("console.log(div.outerHTML);")])]),e._v(" "),a("h3",{attrs:{id:"attribute-제어-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attribute-제어-value"}},[e._v("#")]),e._v(" ATTRIBUTE 제어 (value)")]),e._v(" "),a("p",[e._v("element.attributes;")]),e._v(" "),a("ul",[a("li",[e._v("attrs.name")]),e._v(" "),a("li",[e._v("attrs.value")])]),e._v(" "),a("h3",{attrs:{id:"css-제어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-제어"}},[e._v("#")]),e._v(" CSS 제어")]),e._v(" "),a("ul",[a("li",[e._v('div1.style.border = "10px solid red";\n...')])])])}),[],!1,null,null,null);t.default=s.exports}}]);