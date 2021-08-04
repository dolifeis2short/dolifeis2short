(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{523:function(t,a,e){"use strict";e.r(a);var v=e(46),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"프로그래밍-언어로서의-자바"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로그래밍-언어로서의-자바"}},[t._v("#")]),t._v(" 프로그래밍 언어로서의 자바")]),t._v(" "),e("p",[t._v("자바는 근본적으로 프로그래밍 언어다.\n자바가 어떻게 작동하는지,\n변수가 메모리에 어떻게 저장되고 사용되는지,\n메서드가 어떻게 호출되고 메모리에 어떤 변화를 일으키는지 살펴볼 필요가 있다.")]),t._v(" "),e("p",[t._v("그리고 앞서 언급한 메모리는 JVM에 존재하는 "),e("u",[t._v("가상의 메모리 구조")]),t._v(" 이다.")]),t._v(" "),e("h2",{attrs:{id:"java-virtual-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-virtual-machine"}},[t._v("#")]),t._v(" Java Virtual Machine")]),t._v(" "),e("p",[t._v("일단 java source file 을 실행하기 위해서는 "),e("code",[t._v("JVM(Java Virtual Machine)")]),t._v(" 이라는 것이 필요하다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Real World")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Java Virtual World")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("대응")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("소프트웨어 개발 도구")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JDK(Java Develop Kit)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JVM용 소프트웨어 개발 도구(이클립스, 인텔리제이)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("운영체제")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JRE(Java Runtime Environment)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JVM용 OS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("하드웨어(머신)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JVM(Java Virtual Machine)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("가상의 컴퓨터")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("용어 정리")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("JDK")]),t._v(" : Java Develop Kit. 자바를 개발할 때 필요한 도구")]),t._v(" "),e("li",[e("strong",[t._v("JRE")]),t._v(" : Java Runtime Environment. 자바가 실행되는 환경")]),t._v(" "),e("li",[e("strong",[t._v("JVM")]),t._v(" : Java Virtual Machine. 자바가 실행되는 가상의 머신")])]),t._v(" "),e("p",[t._v("JVM에는 가상의 메모리 구조가 있고, Java에서 실행되는 코드는 이 JVM에 종속적이다.")])]),t._v(" "),e("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIfAJIv9p4lFILNmSl5MgEPIK40I2N85Yw28XVcYYVXa9XKb5bK2HMjHTBkabdbdba0DICxFoG7APERd5IiK92Pd9wQd5eDrr78vfEQb05q20000",alt:"uml diagram"}}),t._v(" "),e("p",[t._v("C언어 같은 경우에는 Runtime이 OS지만, Java의 경우 Runtime이 JVM이다."),e("br"),t._v(" "),e("u",[t._v("그리고 JVM이 Byte Code(*.class file)를 OS에 특화된 코드로 변환하여 실행한다.")])]),t._v(" "),e("p",[t._v("JVM의 구조는 다음과 같다.")]),t._v(" "),e("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/TP51QiCm44NtEiMWLNgBW0YkWsCCxWKczg2Ao58OoQLkwTqhkuPs0jreyURhp__CCMNaF4zUCGqPW_K4sdXC2Pg88p7qIyeqQS04Wq_mgG1-fQl61IkP2xT7LWUN7NhtWTd5eBxKdtKNcY8l3yPznk4cYExCeUDe6ISmSGwP-6bBrHcfQykEjzKslyRnnsZJjPTU29y9xmBiFq36qwTt6kOrDfo2TO4sCofmYonAbantflBAmRb-aK1Nvb0XNz5IwU9z6SIzJMNa-dDRgt_BDUxAoCjUhr7gI64in_m6",alt:"uml diagram"}}),t._v(" "),e("ul",[e("li",[e("p",[t._v("Class Loader System")]),t._v(" "),e("ul",[e("li",[t._v("*.class에서 Byte Code를 읽고 메모리에 저장")]),t._v(" "),e("li",[e("code",[t._v("Loading")]),t._v(": 클래스를 읽어오는 과정")]),t._v(" "),e("li",[e("code",[t._v("Linking")]),t._v(": Reference를 연결하는 과정")]),t._v(" "),e("li",[e("code",[t._v("Initialization")]),t._v(": static 값들 초기화 및 변수 할당")]),t._v(" "),e("li",[t._v("일종의 "),e("strong",[t._v("Static 영역")]),t._v("이라고 할 수 있다.")])])]),t._v(" "),e("li",[e("p",[t._v("Memory")]),t._v(" "),e("ul",[e("li",[t._v("Class 수준의 정보(Class Name, Super Class Name, Method, Variable) 저장")]),t._v(" "),e("li",[e("code",[t._v("Heap")]),t._v(": Object 저장. 공유자원")]),t._v(" "),e("li",[e("code",[t._v("Stack")]),t._v(" "),e("ul",[e("li",[t._v("Thread 마다 Runtime Stack을 만들고, 그 안에서 Method 호출을 Stack Frame 이라고 부르는 Block 으로 쌓는다.")]),t._v(" "),e("li",[t._v("Thread 종료 후 Runtime Stack 도 사라진다.")])])]),t._v(" "),e("li",[e("code",[t._v("Program Counter")]),t._v(": Thread 마다 Thread 내 현재 실행할 Stack Frame 을 가르키는 포인터가 생성된다.")]),t._v(" "),e("li",[e("code",[t._v("Native Method Stack")]),t._v(": 말 그대로 Native Method에 대한 Stack\n"),e("ul",[e("li",[t._v("Native Method는 다른 언어로 작성된 코드를 자바에서 호출하는 것을 의미한다.")])])])])]),t._v(" "),e("li",[e("p",[t._v("Execution Engine")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Interpreter")]),t._v(": 바이트 코드를 한 줄씩 실행")]),t._v(" "),e("li",[e("code",[t._v("JIT Compiler")]),t._v(": 인터프리터의 효율을 높이기 위해 반복되는 코드를 발견시 모두 네이티브 코드로 변환")]),t._v(" "),e("li",[e("code",[t._v("Garbage Collector")]),t._v(": 더 이상 참조 되지 않는 객체를 모아서 정리함")])])]),t._v(" "),e("li",[e("p",[t._v("JNI(Java Native Interface)")]),t._v(" "),e("ul",[e("li",[t._v("자바 애플리케이션에서 C, C++, Assembly 등으로 작성된 함수를 사용할 수 있는 Interface 제공")]),t._v(" "),e("li",[t._v("Native 키워드를 사용한 메소드 호출")])])]),t._v(" "),e("li",[e("p",[t._v("Native Method Library")]),t._v(" "),e("ul",[e("li",[e("u",[t._v("C, C++ 등으로 작성된 Library")])])])])]),t._v(" "),e("p",[t._v("Java에서 사용되는 Class들을 Class Loader에서 관리하고,\nClass가 Object(혹은 Instance)를 만들면 Heap에 쌓이게 된다.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Static(Class Loader System)")]),t._v(" "),e("ul",[e("li",[t._v("Class의 놀이터")]),t._v(" "),e("li",[t._v("Static Property, Method")]),t._v(" "),e("li",[t._v("Object의 Method Address")])])]),t._v(" "),e("li",[e("code",[t._v("Heap")]),t._v(": Object(Instance)의 놀이터")]),t._v(" "),e("li",[e("code",[t._v("Stack")]),t._v(": Method의 놀이터")])]),t._v(" "),e("h2",{attrs:{id:"main-method의-stack-frame"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#main-method의-stack-frame"}},[t._v("#")]),t._v(" Main Method의 Stack Frame")]),t._v(" "),e("p",[t._v("다음과 같은 코드가 있을 때 JVM의 메모리 구조 변화를 살펴보자.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" main "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello OOP!!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",[e("li",[t._v("main method가 실행되기 전에는 일단 java.lang과 start class가 Static 영역에 올라온다.")])]),t._v(" "),e("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuL9GA4fDBadCIyz9LGWkIIp9J5Qe1WegA4Hd9PObwkK0PMB1_EJyt8BylDIy4f2oeXAeAg1uOb6AGcvYPXwONyi5mGX3FL8J2y2AQz7jIiw6YZkavgK0tG80",alt:"uml diagram"}}),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("main method의 실행이 시작되면, main method의 지역변수와 매개변수가 stack 영역에 생성됩니다.")])])])}),[],!1,null,null,null);a.default=s.exports}}]);