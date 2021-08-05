(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{532:function(t,e,a){"use strict";a.r(e);var _=a(46),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2020년-4월-회고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020년-4월-회고"}},[t._v("#")]),t._v(" 2020년 4월 회고")]),t._v(" "),a("p",[t._v("이번 달은 꽤 열심히 보낸 것 같다.")]),t._v(" "),a("h2",{attrs:{id:"공적"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공적"}},[t._v("#")]),t._v(" 공적")]),t._v(" "),a("h3",{attrs:{id:"_1-vue-composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-composition-api"}},[t._v("#")]),t._v(" 1. Vue Composition API")]),t._v(" "),a("p",[t._v("곧 Vue 3.0이 출시될 예정이며 Composition API는 Vue 3.0의 내장 API이다.\n회사에서 Vue를 사용하고 있기 때문에 Composition API에 대한 사전 조사가 필요했다.")]),t._v(" "),a("p",[t._v("Composition API를 사용하면 코드를 유지보수 하기 좋게 관리할 수 있으며, 재사용성 또한 증가하게 된다.\n다만 아직 VueRouter나 Vuex 같은 서드파티와 연동하는 것에 대한 방법이 없는 상태다.")]),t._v(" "),a("p",[t._v("나는 Vuex의 Namespace 기능을 적극적으로 이용하고 있는데, Namespace 또한 지원하지 않는다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Composition API와 this")]),t._v(" "),a("p",[t._v("Composition API에서는 this를 사용할 수 없도록 설계되어 있다.\n그런데 Vuex의 경우 Namespace를 정의할 때 this를 사용한다.\n그래서 Composition과 Vuex의 Namespace를 같이 사용할 경우 에러가 발생한다.")])]),t._v(" "),a("p",[t._v("어쨌든 Composition API에 대한 글 중 제일 도움이 많이 되었던 것은 카카오에 다니는 친구가 작성한 "),a("a",{attrs:{href:"https://chodragon9.github.io/blog/composition-api-rfc-migration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 글"),a("OutboundLink")],1),t._v("이다.")]),t._v(" "),a("p",[t._v("그리고 이 글을 읽으면서 친구의 포스트이므로 그냥 읽으면서 내 생각을 첨가한(?) "),a("a",{attrs:{href:"https://github.com/ChoDragon9/ChoDragon9.github.io/pull/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),a("OutboundLink")],1),t._v("을 날려도 되는지 물어봤다.\n어찌보면 굉장히 무례한 부탁일 수 있었는데, 흔쾌하게 수락해진 친구에게 감사하고 미안했다.\n결과적으로 친구도, 나도 만족할 수 있는 경험이 되었으리라 생각한다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/18749057/80866090-dea5a680-8cc7-11ea-88c2-a3bca2e2dd35.png",alt:"Composition API 정리"}})]),t._v(" "),a("p",[t._v("이게 바로 개발의 매력이고, 코드리뷰의 매력임을 느꼈다.")]),t._v(" "),a("p",[t._v("약간 삼천포로 빠졌는데, 어쨌든 중요한 점은 이러한 경험을 통해서 Composition API에 대해 이해할 수 있었다는 것이다.\n그런데 우리 팀은 포털서비스를 만들어야 하기 때문에.. IE 호환성을 아예 놓을 수 있는 상황이 아니었다.\n그래서 아직은 도입할 시기가 아니라고 결론을 내렸다. "),a("s",[t._v("젠장")])]),t._v(" "),a("p",[t._v("아쉽지만 사이드 프로젝트에 적용해볼 생각이다.")]),t._v(" "),a("h3",{attrs:{id:"_2-순정-api-개발"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-순정-api-개발"}},[t._v("#")]),t._v(" 2. 순정 API 개발")]),t._v(" "),a("p",[t._v("새로운 프로젝트 시작하게 맡게 되면서 처음부터 API를 만들어야 했다.\n여태 만들어진 API를 유지보수만 하다가 처음부터 순정 API를 만드는 것이다.")]),t._v(" "),a("p",[t._v("회사에서 관리하고 있는 프로젝트는 대충 다음과 같은 Component를 사용한다.")]),t._v(" "),a("ul",[a("li",[t._v("Adapter: 다른 API의 데이터를 가져옴")]),t._v(" "),a("li",[t._v("Repository: DB 연동")]),t._v(" "),a("li",[t._v("Service: Adapter나 Repository에서 필요한 데이터를 가져옴")]),t._v(" "),a("li",[t._v("Facade: 각종 Service를 조합하여 필요한 데이터를 정제한다.")]),t._v(" "),a("li",[t._v("Module: Facade에서 필요한 데이터를 가져온 다음 캐싱처리하여 모듈에 맞는 데이터로 반환")]),t._v(" "),a("li",[t._v("TemplateFacade: Module을 조합하여 최종 데이터를 생성")]),t._v(" "),a("li",[t._v("Caching: Service/Module 데이터를 캐싱")]),t._v(" "),a("li",[t._v("Scheduler: Caching을 주기적으로 실행")])]),t._v(" "),a("p",[t._v("이미 설계 가이드가 있기 때문에 잘 구성된 가이드라인대로만 만들면 큰 문제 없이 작동한다.\n어쨌든 복습도 되고, 처음부터 만들기고 있기 때문에 즐겁게 임하는 중이다.")]),t._v(" "),a("h3",{attrs:{id:"_3-dynamodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-dynamodb"}},[t._v("#")]),t._v(" 3. DynamoDB")]),t._v(" "),a("p",[t._v("앞으로 만들게 될 서비스는 "),a("a",{attrs:{href:"https://aws.amazon.com/ko/dynamodb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DynamoDB"),a("OutboundLink")],1),t._v("를 사용할 예정이다.\n물론 사용해도 큰 무리가 없는 서비스에만!")]),t._v(" "),a("p",[t._v("DynamoDB는 AWS에서 만든 NoSQL인데 앞으로의 서비스는 Node.js를 적극적으로 사용할 예정이기도 하고,\nNoSQL이 Node.js 같은 Non-blocking 방식과 궁합이 맞다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("non-blocking과 nosql")]),t._v(" "),a("p",[t._v("node와 mysql을 같이 사용할 경우, node의 성능을 최대한 뽑아내긴 힘들다.\nmysql의 경우 blocking 방식으로 작동하고, node의 경우 non-blocking 방식으로 작동하기 때문에 결국 mysql에 지연이 생기면 node도 똑같이 지연이 생기기 때문이다.")]),t._v(" "),a("p",[t._v("그래서 mysql과 nosql을 같이 사용하는 경우가 많은 것이다. 아니 같이 사용해야 한다.\nmysql을 사용할꺼면 그냥 spring을 쓰자.")])]),t._v(" "),a("p",[t._v("DynamoDB의 경우 indexing이 굉장히 빠른데, Index를 생성할 때 하드카피를 하기 때문이다.\n다만, 모든 질의가 전부 비용이기 때문에 설계를 처음부터 정교하게 해야한다.\nRDB의 경우 Entity와 Relation이 중요하지만(당연하게도...) DynamoDB의 경우 Query가 중요하다.\n그래서 일단 RDB로 Entity를 설계하고, Relation을 설계한 다음, 이에 따른 Query를 만들어야한다.\n그 후에 Query를 보고 필요한 Index를 설계한 다음에 DynamoDB의 Table을 설계한다.")]),t._v(" "),a("p",[t._v("어찌보면 당여한 과정이지만, 설계가 조금이라도 빗나가면 그 여파가 꽤 큰편이다..\n아직은 공부중이기 때문에 조금 더 정리가 되면 TIL에 올릴 생각이다.")]),t._v(" "),a("h3",{attrs:{id:"_4-재택근무-종료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-재택근무-종료"}},[t._v("#")]),t._v(" 4. 재택근무 종료")]),t._v(" "),a("p",[t._v("사회적 거리두기가 해제됨에 따라 재택근무도 종료되었다. 다만 출근 하자마자 다시 사회적거리두기 연장이 되었다는점 ("),a("s",[t._v("이런 그랜드캐니언 같은 경우가!")]),t._v(")\n어쨌든 팀원들을 오랜만에 만나니 반갑기도 하고, 일하는 맛이 났다.")]),t._v(" "),a("p",[t._v("그런데 업무에 대한 질은 회사나 집이나 똑같은 것 같다. 주말 출근할 일이 있으면 그냥 집에서 했으면.. 하는 바람이 있다.")]),t._v(" "),a("h3",{attrs:{id:"_5-총선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-총선"}},[t._v("#")]),t._v(" 5. 총선")]),t._v(" "),a("p",[t._v("이번 달에는 총선이 있었다. 우리 회사는 포털서비스를 제공하기 때문에 이러한 국가적인 이벤트에 민감하다.\n내가 담당하는 서비스 또한 그랬기 때문에 여러모로 신경을 많이 써야 했다.\n결과적으론 아무일도 일어나지 않았다. "),a("s",[t._v("무슨 일이 터져 봐야 경험이 되긴 할텐데..")])]),t._v(" "),a("p",[t._v("어쨌든 다행이다!")]),t._v(" "),a("h2",{attrs:{id:"사적"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사적"}},[t._v("#")]),t._v(" 사적")]),t._v(" "),a("h3",{attrs:{id:"_1-server-side-rendering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-server-side-rendering"}},[t._v("#")]),t._v(" 1. Server Side Rendering")]),t._v(" "),a("p",[t._v("진짜 SSR 때문에 한 동안 고생을 너무 많이 했다.\nVue에서 제공하는 가이드라인이 너무 빈약하고,\nAPI 문서도 잘못 되었거나 반영되지 않은 것들이 많았다.")]),t._v(" "),a("h4",{attrs:{id:"ssr과-csr을-같이-하기-위한-가이드라인이-없다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr과-csr을-같이-하기-위한-가이드라인이-없다"}},[t._v("#")]),t._v(" SSR과 CSR을 같이 하기 위한 가이드라인이 없다.")]),t._v(" "),a("p",[t._v("일단 첫 번째로 화나는 점은, SSR에 대한 가이드라인은 있는데 CSR을 같이 사용하는 방법에 대한 가이드라인은 없다.\n어쨌든 SSR에 CSR을 연동하기 위해선 다음과 같은 과정이 필요하다.")]),t._v(" "),a("ol",[a("li",[t._v("CSR의 Template에 SSR의 Template을 합쳐야 한다.")]),t._v(" "),a("li",[t._v("CSR 코드를 번들링(빌드) 한다. 이 때 Template도 Bundling 코드에 포함된다.")]),t._v(" "),a("li",[t._v("CSR에서 Build된 Template를 SSR에서 사용한다.")])]),t._v(" "),a("p",[t._v("이에 대한 안내는 정말 1도 없다는 점... 이와 관련 내용도 5월달에 정리해서 올릴 예정이다.")]),t._v(" "),a("h4",{attrs:{id:"window와-document를-사용하는-코드들"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window와-document를-사용하는-코드들"}},[t._v("#")]),t._v(" window와 document를 사용하는 코드들")]),t._v(" "),a("p",[t._v("SSR은 기본적으로 CSR의 코드를 Server에서 실행한 다음 Client로 전달하는 것이다.\n이 때 발생하는 문제가 바로 window와 document는 Server Side에서 사용할 수 없다는 것이다.\n그래서 직접 window와 document를 만들어주거나, 혹은 Render와 관련된 코드에는 window와 document를 사용하지 않는 것이다.\n그런데 이게 말이 쉽지 직접 해보면 욕나온다.")]),t._v(" "),a("p",[t._v("어떤 방법이 제일 좋을까 고민하다가 찾아난 해결책이 "),a("a",{attrs:{href:"https://github.com/jsdom/jsdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDOM"),a("OutboundLink")],1),t._v("을 사용하는 것이다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("JSDOM")]),t._v(" "),a("p",[t._v("JSDOM은 말 그대로 가상의 window와 document를 만들어주는 것이다. 그냥 존재 자체만으로도 그 가치가 있다.")])]),t._v(" "),a("p",[t._v("SSR을 실행할 때 JSDOM을 만들어주고, SSR 실행이 끝나면 JSDOM을 제거하는 것이다.\n이렇게 또 한 문제를 해결할 수 있었다. ("),a("s",[t._v("Funcking SSR!")]),t._v(")")]),t._v(" "),a("h4",{attrs:{id:"제대로된-tutorial을-찾을-수-없다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제대로된-tutorial을-찾을-수-없다"}},[t._v("#")]),t._v(" 제대로된 Tutorial을 찾을 수 없다.")]),t._v(" "),a("p",[t._v("SSR의 가장 큰 문제점 중 하나가 바로 제대로된 튜토리얼이 없다는 것이다.\ngithub를 찾아봐도, 구글링을 해봐도, 이것만 보면 이해할 수 있다 싶은 튜토리얼은 존재하지 않았다.\n혹은, 누군가 올렸는데 검색 순위에서 밀려났거나.")]),t._v(" "),a("h3",{attrs:{id:"_2-오픈소스-기여-시도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-오픈소스-기여-시도"}},[t._v("#")]),t._v(" 2. 오픈소스 기여 시도")]),t._v(" "),a("p",[t._v("Vue SSR을 작업하면서 약간의 문제가 있는 것을 발견하고 "),a("a",{attrs:{href:"https://github.com/vuejs/vue/pull/11327",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),a("OutboundLink")],1),t._v("을 올렸으나, 받아들여지진 않은 것 같다.\n일단 e2e test를 통과하지 못했는데.. 에초에 건드린 코드가 e2e Test와 관련이 없었기 때문에 그냥 그러려니 하고 방치중이다.")]),t._v(" "),a("p",[t._v("이 때를 계기로 PR을 적극적으로 사용중이다.")]),t._v(" "),a("h3",{attrs:{id:"_3-알고리즘-스터디"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-알고리즘-스터디"}},[t._v("#")]),t._v(" 3. 알고리즘 스터디")]),t._v(" "),a("p",[t._v("여자친구가 학교 후배들을 대상으로 "),a("a",{attrs:{href:"https://github.com/DKU-STUDY",target:"_blank",rel:"noopener noreferrer"}},[t._v("알고리즘 스터디"),a("OutboundLink")],1),t._v("를 만들고 진행하고 있다.\n그리고 나는 멘토(?)로 참여중이다.")]),t._v(" "),a("p",[t._v("그러면서 깃허브 활동량이 눈에 띄게 늘었다.\nPR 사용량도 늘어나고 있고, 무엇보다 구성원이 눈에 띄게 성장하고 있는 모습을 보이고 있기 때문에 큰 보람을 느끼는 중이다.")]),t._v(" "),a("p",[t._v("스터디를 하면서 느낀점은, 일단 다른 사람들의 생각을 직접적이든 간접적이든 어떤 형태로든 알 수 있다는 것 자체가 큰 도움이 된다는 것이다.\n사고방식이나 문제풀이 과정 등 정말 기상천외(?)한 방법으로 문제를 해결한다.")]),t._v(" "),a("p",[t._v("그리고 알려주는 것들을 스폰지처럼 잘 흡수하는 사람이 있기 때문에 가르침에 대한 보람과 즐거움도 느낄 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"_4-스파르타-코딩클럽-멘토-신청"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-스파르타-코딩클럽-멘토-신청"}},[t._v("#")]),t._v(" 4. 스파르타 코딩클럽 멘토 신청")]),t._v(" "),a("p",[t._v("페이스북/코덕 등에서 광고를 보다가 우연히 "),a("a",{attrs:{href:"https://spartacodingclub.kr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("스파르타 코딩클럽"),a("OutboundLink")],1),t._v("을 알게 되었다.\n그리고 멘토를 수시로 구하는 중이었기 때문에 바로 신청했다.\n몇 년동안 고등학교에서 강의를 하다가 요즘에 강의를 하지 않고 있으니까 허전함이 느껴진다. "),a("s",[t._v("무엇보다 부수입이 필요하다.")])]),t._v(" "),a("p",[t._v("그래서 부디 꼭.. 합격하기를 바라는 중이다.")]),t._v(" "),a("h3",{attrs:{id:"_5-일일커밋과-코덕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-일일커밋과-코덕"}},[t._v("#")]),t._v(" 5. 일일커밋과 코덕")]),t._v(" "),a("p",[t._v("이번 달은 역대급으로 커밋을 많이 했다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/18749057/80867623-16185100-8cd0-11ea-99ee-4cba4953c78f.png",alt:"일일커밋"}})]),t._v(" "),a("p",[t._v("그냥 정신 차려보니까 그렇게 되어있었다. 그래서 코덕 순위도 2위까지 올렸는데... 1위와의 격차는 별짓을 다 해도 좁혀지지가 않았다.\n무엇보다 하루 활동량에 대한 점수 제한이 있었기 때문에 꾸준히 활동을 하지 않으면 결국 따라잡을 수 없는 구조다.\n즉, 성실성을 겨루는 서비스라고 할 수 있다. 아쉽지만 이렇게 많은 사람들 중에 두 번째로 성실하게 공부한 것이라는 증거기 때문에 일단 만족하는 걸로.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/18749057/80867616-013bbd80-8cd0-11ea-96e5-2b39fa30171b.png",alt:"코덕"}})]),t._v(" "),a("p",[t._v("언젠간 1등 한 번 해보자!")]),t._v(" "),a("p",[t._v("스터디를 같이 하는 후배들에게도 안내해줬기 때문에 같이 top10 안에 들어가면 기분 째질 것 같다.")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("ul",[a("li",[t._v("Composition API 조사")]),t._v(" "),a("li",[t._v("오픈소스 기여 시도")]),t._v(" "),a("li",[t._v("코덕 2등")]),t._v(" "),a("li",[t._v("알고리즘 스터디")])])])}),[],!1,null,null,null);e.default=r.exports}}]);