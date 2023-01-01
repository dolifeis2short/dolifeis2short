(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{284:function(t,n,o){"use strict";o.r(n);var e=o(13),r=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"spring-boot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot"}},[t._v("#")]),t._v(" SPRING BOOT")]),t._v(" "),n("h2",{attrs:{id:"_1-spring-boot-설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-boot-설치"}},[t._v("#")]),t._v(" 1.SPRING BOOT 설치")]),t._v(" "),n("ul",[n("li",[t._v("JAR : BOOT내 Server 사용시")]),t._v(" "),n("li",[t._v("WAR : 외부 TOMCAT 사용시")])]),t._v(" "),n("h2",{attrs:{id:"_2-spring-boot-annotation-정리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring-boot-annotation-정리"}},[t._v("#")]),t._v(" 2. [Spring Boot] Annotation 정리")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://m.blog.naver.com/kyy627/221744688311",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://m.blog.naver.com/kyy627/221744688311"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("@SpringBootApplication\n@Configuration + @EnableAutoConfiguration + @ComponentScan\n@Configuration - @Bean을 해당 클래스의 메소드에 적용하면, @Autowired로 빈을 부를 수 있다.\n@EnableAutoConfiguration - 스프링 어플리케이션 컨텍스트를 만들 때 자동으로 설정하는 기능을 켠다.\nclasspath의 내용에 기반해서 자동 생성해 준다. 만약 tomcat-embed-core.jar가 존재하면 톰캣 서버가 setting된다.\n@ComponentScan - @Component, @Service, @Repository, @Controller, @Configuration이 붙은 빈들을 찾아서 Context에 빈을 등록해 주는 어노테이션")]),t._v(" "),n("p",[t._v("@Component")]),t._v(" "),n("ul",[n("li",[t._v("@ComponentScan 선언에 의해 특정 패키지 안의 클래스들을 스캔하고 @Component 어노테이션이 있는 클래스들에 대하여 빈 인스턴스를 생성한다.")]),t._v(" "),n("li",[t._v("@Component -> (구체화) -> @Controller, @Service, @Repository")])]),t._v(" "),n("p",[t._v("@Controller, @Service, @Repository")]),t._v(" "),n("ul",[n("li",[t._v("@Component 어노테이션과 마찬가지로 빈으로 등록")]),t._v(" "),n("li",[t._v("해당 클래스가 Controller, Service, Repository로 사용됨을 프레임워크에 알린다.")])]),t._v(" "),n("p",[t._v("@RequestMapping(value(default), method)")]),t._v(" "),n("ul",[n("li",[t._v("@RequestMapping에 대한 모든 매핑 정보는 스프링에서 제공하는 HandlerMapping 클래스가 가지고 있다.")]),t._v(" "),n("li",[t._v("value: 해당 url로 요청이 들어오면 이 메서드가 수행")]),t._v(" "),n("li",[t._v("method: 요청 method를 명시, 없으면 모든 http method형식에 대해 수행")])]),t._v(" "),n("ol",[n("li",[t._v("클래스 레벨 매핑")])]),t._v(" "),n("ul",[n("li",[t._v("모든 메서드에 적용되는 경우")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("핸들러(메서드) 레벨 매핑")])]),t._v(" "),n("ul",[n("li",[t._v("해당 메서드에만 적용되는 경우")])]),t._v(" "),n("p",[t._v("@RestController")]),t._v(" "),n("ul",[n("li",[t._v("@Controller + @ResponseBody")]),t._v(" "),n("li",[t._v("@ReponseBody를 모든 메서드에 적용한 컨트롤러")]),t._v(" "),n("li",[t._v("@Controller vs @RestController")])]),t._v(" "),n("p",[t._v("@Controller\nAPI와 view를 동시에 사용하는 경우에 사용\nAPI서비스로 사용하는 경우에 @ResponseBody를 사용하여 객체를 반환\nview 리턴이 주 목적")]),t._v(" "),n("p",[t._v("@RestController(Spring 4.0.1부터)\nview가 필요 없는 API만 지원하는 서비스에 사용\n@RequestMapping메서드가 기본적으로 @ResponseBody의미를 가정한다.\ndata 리턴이 주 목적")]),t._v(" "),n("p",[t._v("@Autowired\n타입에 따라 빈을 주입한다.\n필드, 생성자, 메서드에 적용 가능\n타입을 먼저 확인 후 못 찾으면 Name에 따라 주입(@Qualifier를 명시하면 Name으로 주입 됨)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('* 참고: 빈을 주입하는 방식 3가지\n- @Autowired\n- setter\n- 생성자(@AllArgsConstructor 사용 - lombok) -> 권장방식\n\n@NoArgsConstructor, @AllArgsConstructor, @RequriedArgsConstructor\n\n@NoArgsConstructor\n\n@AllArgsConstructor\n\n@RequiredArgsConstructor\n\t기본 생성자를 자동으로 추가\n\t모든 필드 값을 파라미터로 받는 생성자를 추가\n\tfinal이나, @NotNull인 필드 값만 파라미터로 받는 생성자를 추가\n\n@Getter\n\t클래스 내 모든 필드의 Getter 메서드를 자동으로 생성\n\n@Setter\n\tController에서 @RequestBody로 외부에서 데이터를 받는 경우엔 기본생성자 + set메서드를 통해서만 값이 할당된다. 그래서 이떄만 setter를 허용 한다.\n\n@ToString\n\n@ToString(exclude="field")\n\t특정 필드를 제외한 toString() 메서드를 만듬\n\n@EqualsAndHashCode(callSuper = false)\n\tequals와 hashCode 메서드 오버라이딩\n\tcallSuper가 true이면 부모의 값까지 비교, 디폴트는 false\n\n@Builder\n\t어느 필드에 어떤 값을 채워야 할지 명확하게 정하여 생성 시점에 값을 채워 준다.\n\t* 참고: 생성자와 빌더의 차이\n\t- 둘다 생성 시점에 값을 채워주는 역할을 하지만, 빌더 패턴을 사용하면 어느 필드에 어떤 값을 채워야 할지가 명확하게 인지된다.\n\t- 해당 클래스의 빌더 패턴 클래스를 생성\n\n@Data(staticConstructor="of")\n\tlombok의 모든 어노테이션을 포함\n\tLombok에서 제공하는 필드와 관련된 모든 코드를 생성\n\tstaticConstructor: 정적 팩토리 메서드를 생성할 수 있다.\n\n')])])]),n("hr"),t._v(" "),n("p",[t._v("[SPRING BOOT 소개]\nhttps://www.bottlehs.com/springboot/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%B6%80%ED%8A%B8-%EC%86%8C%EA%B0%9C/")]),t._v(" "),n("p",[t._v("[Spring boot 사용하기]\nhttps://kgmyh.github.io/blog/2017/12/04/spring-boot-chapter03/")])])}),[],!1,null,null,null);n.default=r.exports}}]);