(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{389:function(a,e,t){"use strict";t.r(e);var r=t(48),i=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-env"}},[a._v("#")]),a._v(" JAVA ENV")]),a._v(" "),t("h2",{attrs:{id:"_1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[a._v("#")]),a._v(" 1.")]),a._v(" "),t("h1",{attrs:{id:"spring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[a._v("#")]),a._v(" Spring")]),a._v(" "),t("p",[a._v("이 폴더는 Spring 전반적인 내용에 대해 정리")]),a._v(" "),t("h2",{attrs:{id:"spring-initialize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-initialize"}},[a._v("#")]),a._v(" Spring Initialize")]),a._v(" "),t("h3",{attrs:{id:"developer-tolls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developer-tolls"}},[a._v("#")]),a._v(" Developer Tolls")]),a._v(" "),t("ul",[t("li",[a._v("Spring Native")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("* Spring Native 는 현재 베타 릴리즈(2021년 3월 11일)\n* Java 및 Kotlin 언어를 지원한다.\n* 독립실행파일로 배포/실행가능(JVM 설치가 필요없다!!!)\n* GraalVM를 활용하여 네이티브 이미지로 컴파일하여 JVM에 비해 빠른 빌드, 빠른 어플리케이션 시작시간, 적은 메모리를 사용\n* SpringBoot 2.4.x 이상으로 개발하는 것을 권장\n")])])]),t("ul",[t("li",[a._v("Spring Boot DevTools")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("* 코드가 변경될 때 자동으로 애플리케이션을 재시작\n* 브라우저로 전송되는 리소스 변경될 때 자동으로 브라우저를 새로고침\n* 템플릿 캐시를 자동으로 비활성화\n")])])]),t("ul",[t("li",[a._v("Lombok")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('* Spring Configuration Processor\n* @ConfigurationProperties 사용을 위한 의존성\n* application.yml 파일을 읽어와 멤버 변수에 자동 할당\n  ex)\n  @Component // 설정 필요 (2.2이상에서 불필요)\n  @ConfigurationProperties(prefix = "app.datasource")\n  @Getter @Setter  // 설정 필요\n')])])]),t("h3",{attrs:{id:"web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[a._v("#")]),a._v(" Web")]),a._v(" "),t("ul",[t("li",[a._v("Spring Web")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  implementation 'org.springframework.boot:spring-boot-starter-web'\n  * Web, RESTful 응용프로그램\n")])])]),t("ul",[t("li",[a._v("Spring Reactive WEb")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    (Version 5.2.4.RELEASE)\n* Servlet API와 Servlet 컨테이너로 이뤄졌는데 5버전에서 WebFlux가 추가\n* WebFlux는 reactive-stack web framework이며 non-blocking에 Reactive stream 지원\n")])])]),t("ul",[t("li",[a._v("Rest Respositories")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("* 스프링 부트 데이터 레스트\n  implementation 'org.springframework.boot:spring-boot-starter-data-rest'\n  * Spring Data REST를 사용하여 간단한 REST 서비스 노출 \n")])])]),t("ul",[t("li",[a._v("Spring Sesson")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    implementation 'org.springframework.boot:spring-boot-starter'\n    implementation 'org.springframework.session:spring-session-core'\n")])])]),t("ul",[t("li",[a._v("Spring Respositories HAL Explore")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    implementation 'org.springframework.boot:spring-boot-starter'\n    implementation 'org.springframework.data:spring-data-rest-hal-explorer'\n")])])]),t("ul",[t("li",[a._v("Spring HATEOAS")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" implementation 'org.springframework.boot:spring-boot-starter-hateoas'\n")])])]),t("ul",[t("li",[a._v("Spring Web Services")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    implementation 'org.springframework.boot:spring-boot-starter-web-services'\n    * SOAP 웹 서비스\n")])])]),t("ul",[t("li",[a._v("Jersey")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  implementation 'org.springframework.boot:spring-boot-starter-jersey'\n* RESTful  웹 서비스를 개발하기 위한 JAX-RS API는 REST 아키텍쳐를 사용하는 애플리케이션을 쉽게 개발할 수 있도록 설계된 Java 프로그램밍 언어 API입니다.\n* JAX-RS API는 Java 프로그래밍 언어 어노테이션을 사용하여 RESTful 웹 서비스 개발을 단순화 시킬 수 있습니다.\n\n")])])]),t("ul",[t("li",[a._v("Vaadin")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  데이터 기반 UI를 생성하는 라이브러리\n")])])]),t("h3",{attrs:{id:"template-engines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#template-engines"}},[a._v("#")]),a._v(" Template Engines")]),a._v(" "),t("ul",[t("li",[a._v("Thymeleaf")]),a._v(" "),t("li",[a._v("Apache Freemarker")]),a._v(" "),t("li",[a._v("Mustache")]),a._v(" "),t("li",[a._v("Groovy Templates")])]),a._v(" "),t("h3",{attrs:{id:"secrurity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secrurity"}},[a._v("#")]),a._v(" Secrurity")]),a._v(" "),t("ul",[t("li",[a._v("spring Security")]),a._v(" "),t("li",[a._v("OAuth2 Client")]),a._v(" "),t("li",[a._v("OAuth2 Resource Server")]),a._v(" "),t("li",[a._v("Spring LDAP")]),a._v(" "),t("li",[a._v("Okta")])]),a._v(" "),t("h3",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[a._v("#")]),a._v(" SQL")]),a._v(" "),t("ul",[t("li",[a._v("JDBC API")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  implementation 'org.springframework.boot:spring-boot-starter-jdbc'\n  기본적인 JDBC\n  * JDBC 드라이버 로딩\n  * DBMS 연결\n  * SQL문을 데이터 베이스에 전송하고, 결과값을 받음\n    // Connection 데이터 베이스와 연결, Statement : Sql 실행하거나 반환\n    (기본적으로 JDBC Template 제공)\n    Java Application -> JDBC API -> JDBC Driver Manager -> JDBC Driver -> DBMS\n")])])]),t("ul",[t("li",[a._v("Spring Data JPA")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  ORM에 대한 기술 명세가 JPA //\n  // JAP를 넣으면 기본적으로 Hibernate 연동 됨\n  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'\n  Java Application -> (Spring Data JPA) -> (JPA + Hibernate) -> JDBC API -> JDBC Driver Manager -> JDBC Driver -> DBMS\n")])])]),t("ul",[t("li",[a._v("Spring Data JDBC")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("implementation 'org.springframework.boot:spring-boot-starter-data-jdbc'\n* JPA 위에 한단계 더 Layer 두는 것 (아래 JPA 보완)\n// JPAs Complexity 보완\n// Lazy Loading Exception\n// Dirty Checking\n// Session / 1st Level Cache\n// Proxies for Entities\n// Map almost anything to anything\nJava Application -> (spring Data JDBC) -> JDBC API -> JDBC Driver Manager -> JDBC Driver -> DBMS\n")])])]),t("ul",[t("li",[a._v("Spring Data R2DBC")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("implementation 'org.springframework.boot:spring-boot-starter-data-r2dbc'\ntestImplementation 'io.projectreactor:reactor-test'\n")])])]),t("ul",[t("li",[a._v("MyBatis Framework")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(JDBC를 좀더 쉽게 사용하도록 xml 제공)\nimplementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:2.2.0'\n")])])]),t("ul",[t("li",[a._v("Liquibase Migration")]),a._v(" "),t("li",[a._v("Flyway Migration")]),a._v(" "),t("li",[a._v("JOOQ Access Layer")]),a._v(" "),t("li",[a._v("IBM DB2 Driver")]),a._v(" "),t("li",[a._v("Apache Dervby Database")]),a._v(" "),t("li",[a._v("H2 Database")]),a._v(" "),t("li",[a._v("HyperSQL Database")]),a._v(" "),t("li",[a._v("MariaDB Driver")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("implementation 'org.springframework.boot:spring-boot-starter'\nruntimeOnly 'org.mariadb.jdbc:mariadb-java-client'\n")])])]),t("ul",[t("li",[a._v("MS SQL Server Driver")]),a._v(" "),t("li",[a._v("Mysql Driver")]),a._v(" "),t("li",[a._v("Oracle Driver")]),a._v(" "),t("li",[a._v("Postgral SQL Driver")])]),a._v(" "),t("h3",{attrs:{id:"nosql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nosql"}},[a._v("#")]),a._v(" NoSql")]),a._v(" "),t("ul",[t("li",[a._v("Spring Data Redis")]),a._v(" "),t("li",[a._v("Spring Data Reactive Redis")]),a._v(" "),t("li",[a._v("Spring Data MongoDB")]),a._v(" "),t("li",[a._v("Spring Data Reactive MongoDB")]),a._v(" "),t("li",[a._v("Spring Data Elasticsearch")]),a._v(" "),t("li",[a._v("Spring Data for Apache Cassandra")]),a._v(" "),t("li",[a._v("Spring Data Reactive for Apache Cassandra")]),a._v(" "),t("li",[a._v("Spring for Apache Geode")]),a._v(" "),t("li",[a._v("Spring Data Couchbase")]),a._v(" "),t("li",[a._v("Spring Data Reactive Couchbase")]),a._v(" "),t("li",[a._v("Spring Data Neo4j")])]),a._v(" "),t("h3",{attrs:{id:"messaging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messaging"}},[a._v("#")]),a._v(" Messaging")]),a._v(" "),t("ul",[t("li",[a._v("Spring Integration")]),a._v(" "),t("li",[a._v("Spring for RabbitMQ")]),a._v(" "),t("li",[a._v("Spring for Apache Kafka")]),a._v(" "),t("li",[a._v("Spring for Apache Kafka Streams")]),a._v(" "),t("li",[a._v("Spring for Apache ActiveMQ 5")]),a._v(" "),t("li",[a._v("Spring for Apache ActiveMQ Artemis")]),a._v(" "),t("li",[a._v("WebSocket")]),a._v(" "),t("li",[a._v("RSocket")]),a._v(" "),t("li",[a._v("Apache Camel")]),a._v(" "),t("li",[a._v("Solace PubSub+")])]),a._v(" "),t("h3",{attrs:{id:"io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#io"}},[a._v("#")]),a._v(" IO")]),a._v(" "),t("ul",[t("li",[a._v("Spring Batch")]),a._v(" "),t("li",[a._v("Validation")]),a._v(" "),t("li",[a._v("Java Mail Sender")]),a._v(" "),t("li",[a._v("Quartz Scheduler")]),a._v(" "),t("li",[a._v("Srping cache abstraction")])]),a._v(" "),t("h3",{attrs:{id:"ops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ops"}},[a._v("#")]),a._v(" Ops")]),a._v(" "),t("ul",[t("li",[a._v("Spring Boot Actuator")]),a._v(" "),t("li",[a._v("Codecentric's Spring Boot Admin")]),a._v(" "),t("li",[a._v("Observability (모니터링)")]),a._v(" "),t("li",[a._v("Datadog")]),a._v(" "),t("li",[a._v("Influx")]),a._v(" "),t("li",[a._v("Graphite")]),a._v(" "),t("li",[a._v("New Relic")]),a._v(" "),t("li",[a._v("Prometheus")]),a._v(" "),t("li",[a._v("Sleuth")]),a._v(" "),t("li",[a._v("Wavefront")]),a._v(" "),t("li",[a._v("Zipkin Client")])]),a._v(" "),t("h3",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[a._v("#")]),a._v(" Testing")]),a._v(" "),t("ul",[t("li",[a._v("Spring REST Docs")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("implementation 'org.springframework.boot:spring-boot-starter'\n// testImplementation 'org.springframework.boot:spring-boot-starter-test'\ntestImplementation 'org.springframework.restdocs:spring-restdocs-mockmvc'\n")])])]),t("ul",[t("li",[a._v("Testcontainers")]),a._v(" "),t("li",[a._v("Contract Verifier")]),a._v(" "),t("li",[a._v("Contract Stub Runner")]),a._v(" "),t("li",[a._v("Embedded LDAP Server")]),a._v(" "),t("li",[a._v("Embedded MongoDB Database")])]),a._v(" "),t("p",[a._v("JAVA EE 패턴")]),a._v(" "),t("ul",[t("li",[a._v("Intercepting Filter / Front Controller / View Helper")]),a._v(" "),t("li",[a._v("Composite View / Service to worker / Dispatcher View")])]),a._v(" "),t("p",[a._v("EJB -> POJO, IoC (제어의 역전) -> DI (의존성 주입)")]),a._v(" "),t("p",[a._v("기존 설정  : applicationContext.xml  or @Configuration(@Bean 활용), @PostConstruct @PreDestroy")]),a._v(" "),t("p",[a._v("DispatcherServlet 설정 기반 HTTP 요청 처리 (Spring 2.5 이상) -> @Controller, @Service / @RequestMapping")]),a._v(" "),t("p",[a._v("인터셉터 : HandlerInterceptorAdaptor (preHandler, postHandler)")]),a._v(" "),t("p",[a._v("@RestController (Spring 4 이상, @ResponseBody + @Controller)")]),a._v(" "),t("p",[a._v("J2EE 내 디자인 패턴 6개\n프레젠테이션 레이어의 컨텍스트 객체\n애플리케이션 컨트롤러\n비지니스 티어의 애플리케이션 서비스와 비즈니스 객체\n통합 티어의 도메인 저장소\n서비스 브로커")]),a._v(" "),t("h3",{attrs:{id:"java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[a._v("#")]),a._v(" JAVA")]),a._v(" "),t("p",[a._v("웹서버 + 컨테이너 (servlet = Server + let)\nheelo.jsp -> org.apache.jsp.hello_jsp.java -> org.apache.jsp.hello_jsp.class (서블릿)\n실행단위의 디렉토리를 컨텍스트라 한다.")])])}),[],!1,null,null,null);e.default=i.exports}}]);