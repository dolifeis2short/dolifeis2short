(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{385:function(t,n,a){"use strict";a.r(n);var e=a(48),r=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" JAVA")]),t._v(" "),a("h2",{attrs:{id:"_1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[t._v("#")]),t._v(" 1.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("자바 5\n  제네릭\n  For 루프 개선\n  컨커런트 API\n  어노테이션\n  EUNM\n  vararg\n  오토박싱/언박싱\n\n자바 6 (안정화버전)\n  GI 가비지 콜렉션\n  데스크톱 API\n  자바 컴파일 API\n\n자바 7\n  FILE NIO 2.0\n  포크/조인 프레임워크\n  다이아몬드 연산자\n  try-with-resource\n  예외처리\n\n자바 8\n  람다 표현식\n  함수형 인터페이스\n    Predicate : test(), 두 개의 객체를 비교할 때 사용\n    Supplier : get(), generic 리턴값\n    Consumer : accept(), 리턴값이 없으므로 작업을 수행하고 결과를 받을 일이 없을 때 사용\n    Function : apply(), generic 타입 두개(입력타입, 리턴타입) 갖고 있음. 변환을 할 필요가 있을 때 사용\n  Stream API\n    filter(Predicate < T > predicate) : 데이터를 조건으로 거를 때 사용\n    map(Function < T, R > mapper) : 데이터를 특정 데이터로 변환\n    forEach(Consumer <? super T> action) : for 루프를 수행하는 것처럼 각각의 항목을 꺼냄\n    reduce(BinaryOperator < T > accumulator) : 처음 두 요소를 가지고 연산한 결과를 가지고 그 다음 요소와 연산한다.\n  메서드 참조\n  날짜와 시간 API\n    java.time.ZoneDateTime / java.time.LocalDate\n    java.time.format.DateTimeFormatter\n  인터페이스 개선\n  Optional\n  CompletableFuture\n  인터페이스 Default Method\n\n자바 9\n  자바 모듈화\n  REPL 기능인 JShell\n  통합 JVM 로깅\n  HTML5 자바 DOC\n  try-with-resouce 개선\n  인터페이스 메서드 형식 추가\n  다이아몬드 연산자 개선\n  프로세스 API\n  CompletableFutre 기능개선\n  반응형 스트림 API 추가\n\n자바 10\n  로컬 변수 형식 추론\n  GI GC개선\n\n자바 11\n  HTTP 클라이언트\n  콜렉션 객체를 배열로 변경하는 기능\n  var 키워드 지원 확대\n  String 클래스 기능 추가\n")])])]),a("p",[t._v("어노테이션\n(구글, java 8 어노테이션 추가)\n"),a("a",{attrs:{href:"https://blog.advenoh.pe.kr/java/%EC%9E%90%EB%B0%94-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%96%B4%EB%85%B8%ED%85%8C%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.advenoh.pe.kr/java/자바-커스텀-어노테이션-만들기"),a("OutboundLink")],1),a("a",{attrs:{href:"https://jhparkkk.tistory.com/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jhparkkk.tistory.com/3"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("함수형 인터페이스 -> 단 하나의 추상 메서드만 선언된 인터페이스")]),t._v(" "),a("ol",[a("li",[t._v("람다")])]),t._v(" "),a("ul",[a("li",[t._v("함수형 인터페이스")]),t._v(" "),a("li",[t._v("메서드 참조")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("스트림")])]),t._v(" "),a("p",[t._v("리스트 복사\n(https://www.delftstack.com/ko/howto/java/copy-arraylist-java/)")]),t._v(" "),a("h2",{attrs:{id:"자바-명명-규약-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자바-명명-규약-정리"}},[t._v("#")]),t._v(" 자바 명명 규약 정리")]),t._v(" "),a("p",[t._v("(스프링 폴더 구성)\nhttps://shlee0882.tistory.com/129")]),t._v(" "),a("p",[t._v("자바 5")]),t._v(" "),a("p",[t._v("제네릭 참조(https://kwonho.tistory.com/3)\n(https://coding-factory.tistory.com/573)\n(https://st-lab.tistory.com/153)")]),t._v(" "),a("ul",[a("li",[t._v("제네릭")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ArrayList list = new ArrayList(); //제네릭을 사용하지 않을경우\nlist.add("test");\nString temp = (String) list.get(0); //타입변환이 필요함\n\nArrayList<String> list2 = new ArrayList(); //제네릭을 사용할 경우\nlist2.add("test");\ntemp = list2.get(0); //타입변환이 필요없음\n')])])]),a("p",[t._v("타입인자 설명\n"),a("T",[t._v(" Type\n"),a("E",[t._v(" Element\n"),a("K",[t._v(" Key\n"),a("N",[t._v(" Number\n"),a("V",[t._v(" Value\n"),a("R",[t._v(" Result")])],1)],1)],1)],1)],1)],1),t._v(" "),a("p",[t._v("제네릭타입<?> : 타입 파라미터를 대치하는 것으로 모든 클래스나 인터페이스타입이 올 수 있습니다.\n제네릭타입<? extends 상위타입> : 와일드카드의 범위를 특정 객체의 하위 클래스만 올 수 있습니다.\n제네릭타입<? super 하위타입> : 와일드카드의 범위를 특정 객체의 상위 클래스만 올 수 있습니다.")]),t._v(" "),a("p",[t._v("// 클래스 선언\npublic class ClassName "),a("T",[t._v(" { ... }\npublic Interface InterfaceName "),a("T",[t._v(" { ... }")])],1)],1),t._v(" "),a("p",[t._v("// 메소드 선언\npublic "),a("T",[t._v(" T genericMethod(T o) { // 제네릭 메소드")])],1),t._v(" "),a("ul",[a("li",[t._v("For 루프 개선\n참조(리스트 돌릴땐 foreach 사용)"),a("br"),t._v("\nhttps://multifrontgarden.tistory.com/130")])]),t._v(" "),a("p",[t._v("(리스트 순회하는 방법)\nhttps://www.daleseo.com/how-to-traverse-list-in-java/")]),t._v(" "),a("p",[t._v("for(int a : listA) ...")]),t._v(" "),a("ul",[a("li",[t._v("컨커런트 API")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Lock / unLock를 제공, Sync 공정성을 제공하지 않지만, Lock / unLock 제공\n")])])]),a("ul",[a("li",[t._v("어노테이션")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@Override, @Deprecated 대표적\n어노테이션을 생성 가능함\n")])])]),a("ul",[a("li",[t._v("EUNM")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Java 내 enum 타입을 제공\n")])])]),a("ul",[a("li",[t._v("vararg")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 가변인자, ...args 로 사용\nex) (String... strings)\n")])])]),a("ul",[a("li",[t._v("오토박싱/언박싱")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("컬렉션 클래스를 사용하는 경우, 객체형을 변수로 사용해야 함\n기본 타입의 데이터를 래퍼클래스로 변환하는 과정을 박싱 / 언박싱이라 함\nint n = 3;\nInteger num = new Integer(n);  // 박싱\nint m = num.intValue();        // 언박싱\n")])])]),a("p",[t._v("[자바 랩퍼]\nhttps://mozi.tistory.com/573")]),t._v(" "),a("p",[t._v("[자바 ENUM]\nhttps://www.nextree.co.kr/p11686/\nhttp://mkseo.pe.kr/blog/?p=1692")]),t._v(" "),a("p",[t._v("자바 7")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("FILE NIO 2.0\nnio 라이브러리")])]),t._v(" "),a("li",[a("p",[t._v("포크/조인 프레임워크")]),t._v(" "),a("ul",[a("li",[t._v("java.util.concurrent.ForkJoinPool 라이브러리 추가")])])]),t._v(" "),a("li",[a("p",[t._v("다이아몬드 연산자")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("선언시 다이몬드 연산자 내 타입을 추론하여 컴파일\n// jdk 7 이전 : 선언시에도 제네릭에 타입을 명시해야함.\nList<Integer> list = new ArrayList<Integer>();\nMap<String, List<String>> map = new HashMap<String, List<string>>();\n\n// jdk 7 이후(타입추론) : 다이아몬드 연산자 사용으로 컴파일러가 알아서 추론한다.\nList<Intger> list = new ArrayList<>();\nMap<String, List<String>> map = new HashMap<>();\n")])])]),a("ul",[a("li",[a("p",[t._v("try-with-resource")]),t._v(" "),a("ul",[a("li",[t._v("기존에는 try-catch-finally를 통해 자원을 해제 (is.close())\nAutoCloseable 인터페이스를 통해 자동으로 자원 해제")])])]),t._v(" "),a("li",[a("p",[t._v("예외처리")]),t._v(" "),a("ul",[a("li",[t._v("하나의 catch 문 에서 여러개의 Exception을 처리가능하도록 함")])])])]),t._v(" "),a("p",[t._v("[JAVA NIO]\nhttps://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=minis24&logNo=220707331529\nhttps://jungwoon.github.io/java/2019/01/14/NIO.html")]),t._v(" "),a("h3",{attrs:{id:"자바-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자바-8"}},[t._v("#")]),t._v(" 자바 8")]),t._v(" "),a("ul",[a("li",[t._v("함수형 인터페이스\n"),a("ul",[a("li",[t._v("1개의 추상 메소드를 갖는 인터페이스")]),t._v(" "),a("li",[t._v("Java8 부터 인터페이스는 기본 구현체를 포함한 디폴트 메서드 (default method) 를 포함")]),t._v(" "),a("li",[t._v("여러 개의 디폴트 메서드가 있더라도 추상 메서드가 오직 하나면 함수형 인터페이스")])])])]),t._v(" "),a("p",[t._v("참조\n(https://ko.myservername.com/interface-enhancements-java-8-java-functional-interface)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@FunctionalInterface\ninterface CustomInterface<T> {\n// abstract method 오직 하나\nT myCall();\n\n    // default method 는 존재해도 상관없음\n    default void printDefault() {\n        System.out.println("Hello Default");\n    }\n\n    // static method 는 존재해도 상관없음\n    static void printStatic() {\n        System.out.println("Hello Static");\n    }\n}\n\n함수형 인터페이스\tDescripter\tMethod\nPredicate\t      T -> boolean\tboolean test(T t)\nConsumer\t      T -> void\t      void accept(T t)\nSupplier\t      () -> T\t        T get()\nFunction<T, R>\tT -> R\t        R apply(T t)\nComparator\t    (T, T) -> int\t  int compare(T o1, T o2)\nRunnable\t      () -> void\t    void run()\nCallable\t      () -> T\t        V call()\n')])])]),a("ul",[a("li",[a("p",[t._v("메서드 참조")]),t._v(" "),a("ul",[a("li",[t._v("Static 메소드 레퍼런스")]),t._v(" "),a("li",[t._v("Instance 메소드 레퍼런스")]),t._v(" "),a("li",[t._v("Constructor 메소드 레퍼런스\n(ex, System.out::println)")])]),t._v(" "),a("ul",[a("li",[t._v("람다 표현식\n화살표 함수를 의미")])])]),t._v(" "),a("li",[a("p",[t._v("스트림 API")]),t._v(" "),a("ul",[a("li",[t._v("intermediate operations return Stream")]),t._v(" "),a("li",[t._v("terminal operations return 특정한 type의 값")]),t._v(" "),a("li",[t._v("순환, 필터링, 매핑, 중복제거, 조합")])])]),t._v(" "),a("li",[a("p",[t._v("날짜와 시간 API")]),t._v(" "),a("ul",[a("li",[t._v("java.time LIB 제공")]),t._v(" "),a("li",[t._v("Java8 이전 Date, Calendar 그리고 Timestamp, SimpleDateFormat 클래스 등 날짜와 시간을 다루는 API 존재\n참조\n날짜와 시간 API\n(https://wickso.me/java/java-8-date-time/)")])])]),t._v(" "),a("li",[a("p",[t._v("인터페이스 개선\nJava 8 릴리스는 인터페이스에 정적 및 기본 메소드를 도입하거나 허용")])]),t._v(" "),a("li",[a("p",[t._v("Optional")]),t._v(" "),a("ul",[a("li",[t._v("Java Optional 클래스는 Java 8에서 추가되었으며 자바의 고질적인 문제인 NullpointerException 문제를 해결")]),t._v(" "),a("li",[t._v("Optional"),a("String",[t._v(' opt = Optional.of("saelobi");\nOptional 메서드를 이용하면 다음과 같은 if를 이용한 null값 체크를 대체할 수 있음')])],1)])]),t._v(" "),a("li",[a("p",[t._v("CompletableFuture")]),t._v(" "),a("ul",[a("li",[t._v("각각을 비동기로 실행하는 함수")]),t._v(" "),a("li",[t._v("CompletableFuture를 이용해서 별도의 Thread에 작업을 지시한 후 완료될때까지 다른 작업을 동시에 실행")])])]),t._v(" "),a("li",[a("p",[t._v("람다와 함수형 프로그래밍")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Functional 인터페이스\nPredicate : test(), 두 개의 객체를 비교할 때 사용\nSupplier : get(), generic 리턴값\nConsumer : accept(), 리턴값이 없으므로 작업을 수행하고 결과를 받을 일이 없을 때 사용\nFunction : apply(), generic 타입 두개(입력타입, 리턴타입) 갖고 있음. 변환을 할 필요가 있을 때 사용\nUnaryOperator : apply()\nBinaryOperator : apply()\n\nSteam\nfilter(Predicate < T > predicate) : 데이터를 조건으로 거를 때 사용\nmap(Function < T, R > mapper) : 데이터를 특정 데이터로 변환\nforEach(Consumer <? super T> action) : for 루프를 수행하는 것처럼 각각의 항목을 꺼냄\nreduce(BinaryOperator < T > accumulator) : 처음 두 요소를 가지고 연산한 결과를 가지고 그 다음 요소와 연산한다.\n")])])]),a("p",[t._v("[람다 표현식]\nhttps://multifrontgarden.tistory.com/124")]),t._v(" "),a("p",[t._v("[비동기]\nhttps://cobbybb.tistory.com/12")]),t._v(" "),a("p",[t._v("[자바 옵셔널]\nhttps://engkimbs.tistory.com/646")]),t._v(" "),a("p",[t._v("[자바 인터페이스 향상]\nhttps://ko.myservername.com/interface-enhancements-java-8-java-functional-interface")]),t._v(" "),a("p",[t._v("[자바 스트리밍]\nhttps://webcache.googleusercontent.com/search?q=cache:ePl50pHxZJYJ:https://sabarada.tistory.com/40+&cd=1&hl=en&ct=clnk&gl=kr")]),t._v(" "),a("p",[t._v("[자바 함수형인터페이스]\nhttps://bcp0109.tistory.com/313")]),t._v(" "),a("p",[t._v("[Fork/Join]\nhttps://warpgate3.tistory.com/entry/ForkJoin-Framework-in-Java")]),t._v(" "),a("p",[t._v("[자바 동기화]\nhttps://zion830.tistory.com/57")])])}),[],!1,null,null,null);n.default=r.exports}}]);