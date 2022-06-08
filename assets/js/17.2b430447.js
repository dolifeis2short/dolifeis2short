(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{442:function(n,t,a){"use strict";a.r(t);var e=a(69),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"java-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-8"}},[n._v("#")]),n._v(" JAVA 8+")]),n._v(" "),a("p",[n._v("[TODO] JAVA8 이상 문법 상세 정리")]),n._v(" "),a("h2",{attrs:{id:"_1-상세-내용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-상세-내용"}},[n._v("#")]),n._v(" 1. 상세 내용")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('* 함수형 인터페이스\n  + 1개의 추상 메소드를 갖는 인터페이스\n  + Java8 부터 인터페이스는 기본 구현체를 포함한 디폴트 메서드 (default method) 를 포함\n  + 여러 개의 디폴트 메서드가 있더라도 추상 메서드가 오직 하나면 함수형 인터페이스\n\n참조\n(https://ko.myservername.com/interface-enhancements-java-8-java-functional-interface)\n\n@FunctionalInterface\ninterface CustomInterface<T> {\n// abstract method 오직 하나\nT myCall();\n\n    // default method 는 존재해도 상관없음\n    default void printDefault() {\n        System.out.println("Hello Default");\n    }\n\n    // static method 는 존재해도 상관없음\n    static void printStatic() {\n        System.out.println("Hello Static");\n    }\n}\n\n함수형 인터페이스  Descripter Method\nPredicate        T -> boolean boolean test(T t)\nConsumer       T -> void        void accept(T t)\nSupplier       () -> T          T get()\nFunction<T, R> T -> R         R apply(T t)\nComparator     (T, T) -> int    int compare(T o1, T o2)\nRunnable       () -> void     void run()\nCallable       () -> T          V call()\n\n* 메서드 참조\n  + Static 메소드 레퍼런스\n  + Instance 메소드 레퍼런스\n  + Constructor 메소드 레퍼런스\n    (ex, System.out::println)\n\n  * 람다 표현식\n    화살표 함수를 의미\n\n* 스트림 API\n  + intermediate operations return Stream\n  + terminal operations return 특정한 type의 값\n  + 순환, 필터링, 매핑, 중복제거, 조합\n\n* 날짜와 시간 API\n  + java.time LIB 제공\n  + Java8 이전 Date, Calendar 그리고 Timestamp, SimpleDateFormat 클래스 등 날짜와 시간을 다루는 API 존재\n    참조\n    날짜와 시간 API\n    (https://wickso.me/java/java-8-date-time/)\n\n* 인터페이스 개선\n  Java 8 릴리스는 인터페이스에 정적 및 기본 메소드를 도입하거나 허용\n\n* Optional\n  + Java Optional 클래스는 Java 8에서 추가되었으며 자바의 고질적인 문제인 NullpointerException 문제를 해결\n  + Optional<String> opt = Optional.of("saelobi");\n    Optional 메서드를 이용하면 다음과 같은 if를 이용한 null값 체크를 대체할 수 있음\n\n* CompletableFuture\n  + 각각을 비동기로 실행하는 함수\n  + CompletableFuture를 이용해서 별도의 Thread에 작업을 지시한 후 완료될때까지 다른 작업을 동시에 실행\n\n* 람다와 함수형 프로그래밍\n\nFunctional 인터페이스\nPredicate : test(), 두 개의 객체를 비교할 때 사용\nSupplier : get(), generic 리턴값\nConsumer : accept(), 리턴값이 없으므로 작업을 수행하고 결과를 받을 일이 없을 때 사용\nFunction : apply(), generic 타입 두개(입력타입, 리턴타입) 갖고 있음. 변환을 할 필요가 있을 때 사용\nUnaryOperator : apply()\nBinaryOperator : apply()\n\nSteam\nfilter(Predicate < T > predicate) : 데이터를 조건으로 거를 때 사용\nmap(Function < T, R > mapper) : 데이터를 특정 데이터로 변환\nforEach(Consumer <? super T> action) : for 루프를 수행하는 것처럼 각각의 항목을 꺼냄\nreduce(BinaryOperator < T > accumulator) : 처음 두 요소를 가지고 연산한 결과를 가지고 그 다음 요소와 연산한다.\n\n[람다 표현식]\nhttps://multifrontgarden.tistory.com/124\n\n[비동기]\nhttps://cobbybb.tistory.com/12\n\n[자바 옵셔널]\nhttps://engkimbs.tistory.com/646\n\n[자바 인터페이스 향상]\nhttps://ko.myservername.com/interface-enhancements-java-8-java-functional-interface\n\n[자바 스트리밍]\nhttps://webcache.googleusercontent.com/search?q=cache:ePl50pHxZJYJ:https://sabarada.tistory.com/40+&cd=1&hl=en&ct=clnk&gl=kr\n\n[자바 함수형인터페이스]\nhttps://bcp0109.tistory.com/313\n\n[Fork/Join]\nhttps://warpgate3.tistory.com/entry/ForkJoin-Framework-in-Java\n\n[자바 동기화]\nhttps://zion830.tistory.com/57\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);