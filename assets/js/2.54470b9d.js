(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{239:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return m}));n(44);const s=/#.*$/,i=/\.(md|html)$/,a=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(i,"")}function l(t){return r.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(s),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function p(t,e){const n=t.hash,i=function(t){const e=t.match(s);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,n,s){const{pages:i,themeConfig:a}=n,r=s&&a.locales&&a.locales[s]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=r.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,s,i=1){if("string"==typeof e)return d(n,e,s);if(Array.isArray(e))return Object.assign(d(n,e[0],s),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(d(n,e.path,s),{title:e.title,titleIndex:e.titleIndex}):1==i?{type:"group",titleIndex:e.titleIndex,head:!0,path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,s,i+1)),collapsable:!1!==e.collapsable}:{type:"group",titleIndex:e.titleIndex,path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,s,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},240:function(t,e,n){},241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},247:function(t,e){t.exports=function(t){return null==t}},248:function(t,e,n){},249:function(t,e,n){},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){},253:function(t,e,n){},254:function(t,e,n){},256:function(t,e,n){"use strict";n.r(e);var s=n(239),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(257).a},beforeCreate(){this.$options.components.SidebarLinks=n(256).default},methods:{isActive:s.e}},a=(n(269),n(13)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[t.item.head?t._e():e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable&&!t.item.head?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{depth:t.depth+1,items:t.item.children,sidebarDepth:t.item.sidebarDepth}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,n,s){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},n)}function l(t,e,n,i,a,r=1){return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(s.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u),l(t,e.children,n,i,a,r+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:i,$themeConfig:a,$themeLocaleConfig:r},props:{item:u,sidebarDepth:c}}){const h=Object(s.e)(i,u.path),p="auto"===u.type?h||u.children.some(t=>Object(s.e)(i,u.basePath+"#"+t.slug)):h,d="external"===u.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,u.path,u.title||u.path):o(t,u.path,u.title||u.path,p),f=[e.frontmatter.sidebarDepth,c,r.sidebarDepth,a.sidebarDepth,1].find(t=>void 0!==t),g=r.displayAllHeaders||a.displayAllHeaders;if("auto"===u.type)return[d,l(t,u.children,u.basePath,i,f)];if((p||g)&&u.headers&&!s.d.test(u.path)){return[d,l(t,Object(s.c)(u.headers),u.path,i,f)]}return d}};n(270);function c(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?c(t,e):"page"===e.type&&Object(s.e)(t,e.path))}var h={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0,pointIndex:[{bool:0}],diffString:!1}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(c(t,s))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.e)(this.$route,t.regularPath)},isVisibleTitle(t,e,n){var s=this.test;return"/"!=this.$page.path&&(t!=e&&n.titleIndex&&s!=n.titleIndex&&(s=0),t==e&&n.titleIndex?(this.test=n.titleIndex,!0):!(!s||n.titleIndex!=s)||(!(!s||"page"!=n.type)||(this.test=s,this.diffString)))}}},p=Object(a.a)(h,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,s){return t.isVisibleTitle(t.openGroupIndex,s,n)?e("li",{key:s},["group"===n.type?e("SidebarGroup",{attrs:{collapsable:n.collapsable||n.collapsible,depth:t.depth,item:n,open:s===t.openGroupIndex},on:{toggle:function(e){return t.toggleGroup(s)}}}):e("SidebarLink",{attrs:{item:n,sidebarDepth:t.sidebarDepth}})],1):t._e()})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},257:function(t,e,n){"use strict";var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(261),n(13)),a=Object(i.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},258:function(t,e,n){"use strict";n(240)},259:function(t,e,n){"use strict";n(241)},260:function(t,e,n){"use strict";n(242)},261:function(t,e,n){"use strict";n(243)},262:function(t,e,n){"use strict";n(244)},263:function(t,e,n){"use strict";n(245)},264:function(t,e,n){"use strict";n(246)},265:function(t,e,n){"use strict";n(248)},266:function(t,e,n){var s=n(11),i=n(4),a=n(10);t.exports=function(t){return"string"==typeof t||!i(t)&&a(t)&&"[object String]"==s(t)}},267:function(t,e,n){"use strict";n(249)},268:function(t,e,n){"use strict";n(250)},269:function(t,e,n){"use strict";n(251)},270:function(t,e,n){"use strict";n(252)},271:function(t,e,n){"use strict";n(253)},272:function(t,e,n){"use strict";n(254)},274:function(t,e,n){"use strict";n.r(e);var s=n(239),i={props:{item:{required:!0}},computed:{link(){return Object(s.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:s.f,isMailto:s.g,isTel:s.h,focusoutAction(){this.$emit("focusout")}}},a=n(13),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer",target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{exact:t.exact,to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null).exports,o={components:{NavLink:r},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(258),Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{alt:t.data.heroAlt||"hero",src:t.$withBase(t.data.heroImage)}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),u=(n(44),n(92)),c=n.n(u),h=(t,e,n=null)=>{let s=c()(e,"title","");return c()(e,"frontmatter.tags")&&(s+=" "+e.frontmatter.tags.join(" ")),n&&(s+=" "+n),p(t,s)};const p=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(s.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const s=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||s?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var d={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,i=[];for(let a=0;a<e.length&&!(i.length>=n);a++){const r=e[a];if(this.getPageLocalePath(r)===s&&this.isSearchable(r))if(h(t,r))i.push(r);else if(r.headers)for(let e=0;e<r.headers.length&&!(i.length>=n);e++){const n=r.headers[e];n.title&&h(t,r,n.title)&&i.push(Object.assign({},r,{path:r.path+"#"+n.slug,header:n}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},f=(n(259),Object(a.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,s){return e("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(260),Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true",role:"img",viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",fill:"currentColor"}})])])}),[],!1,null,null,null).exports),m=n(257),b=n(93),v=n.n(b),_={components:{NavLink:r,DropdownTransition:m.a},data:()=>({open:!1}),props:{item:{required:!0}},computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},methods:{toggle(){this.open=!this.open},isLastItemOfArray:(t,e)=>v()(e)===t},watch:{$route(){this.open=!1}}},k=(n(262),{components:{NavLink:r,DropdownLink:Object(a.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{"aria-label":t.dropdownAriaLabel,type:"button"},on:{click:t.toggle}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v("\n  vue\n  "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,s){return e("li",{key:n.link||s,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(s){return e("li",{key:s.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.toggle()}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const a=t[i],r=s[i]&&s[i].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===o)||(o=i)),{text:r,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.j)(t),{items:(t.items||[]).map(s.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}}),x=(n(263),Object(a.a)(k,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,rel:"noopener noreferrer",target:"_blank"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function C(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var $={components:{SidebarButton:g,NavLinks:x,SearchBox:f,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(C(this.$el,"paddingLeft"))+parseInt(C(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<1e3?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},y=(n(264),Object(a.a)($,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[e("figure",[t.$site.themeConfig.logo?e("img",{attrs:{alt:t.$siteTitle,src:t.$withBase(t.$site.themeConfig.logo)}}):t._e()]),t._v(" "),e("div",{ref:"siteName"},[e("strong",[t._v("Choa Dev Home")]),t._v(" "),e("em",[t._v("Better than Yesterday")])])]),t._v(" "),e("NavLinks",{staticClass:"can-hide"}),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e()],1)],1)}),[],!1,null,null,null).exports),L=n(247),w=n.n(L),S={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=w()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:s="master",docsRepo:i=e}=this.$site.themeConfig;return t&&i&&this.$page.relativePath?this.createEditLink(e,i,n,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,i,a){if(/bitbucket.org/.test(t)){return(s.i.test(e)?e:t).replace(s.a,"")+"/src"+`/${i}/`+(n?n.replace(s.a,"")+"/":"")+a+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}return(s.i.test(e)?e:"https://github.com/"+e).replace(s.a,"")+"/edit"+`/${i}/`+(n?n.replace(s.a,"")+"/":"")+a}}},O=(n(265),Object(a.a)(S,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,rel:"noopener noreferrer",target:"_blank"}},[t._v("\n      "+t._s(t.editLinkText)+"\n    ")]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),I=n(266),j=n.n(I),T={name:"PageNav",props:["sidebarItems"],computed:{prev(){return A(P.PREV,this)},next(){return A(P.NEXT,this)}}};const P={NEXT:{resolveLink:function(t,e){return D(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return D(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function A(t,{$themeConfig:e,$page:n,$route:i,$site:a,sidebarItems:r}){const{resolveLink:o,getThemeLinkConfig:l,getPageLinkConfig:u}=t,c=l(e),h=u(n),p=w()(h)?c:h;return!1===p?void 0:j()(p)?Object(s.k)(a.pages,p,i.path):o(n,r)}function D(t,e,n){const s=[];!function t(e,n){for(let s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],n):n.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+n]}}var N=T,E=(n(267),{components:{PageEdit:O,PageNav:Object(a.a)(N,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")]):t._e()],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},[t.next?e("router-link",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]):t._e()],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),H=(n(268),Object(a.a)(E,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),U={name:"Sidebar",components:{SidebarLinks:n(256).default,NavLinks:x},props:["items"]},B=(n(271),Object(a.a)(U,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),W=(n(272),{components:{Home:l,Page:H,Sidebar:B,Navbar:y,Footer:Object(a.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("footer",{staticClass:"siteFooter"},[t("div",{staticClass:"container"},[t("p",{staticClass:"siteFooterCopyright"},[this._v("\n      Copyright © 2021 All Right. "),t("em",[this._v(" Full Stack Programmer ")])]),this._v(" "),t("p",{staticClass:"siteFooterContact"},[this._v(" dolifeis2short@gmail.com  +82-10-2352-4964\n        "),t("a",{attrs:{href:"https://github.com/dolifeis2short",target:"_blank"}},[this._v("GitHub")]),this._v(" \n        "),t("a",{attrs:{href:"http://choa.info",target:"_blank"}},[this._v("Blog")])])])])}],!1,null,null,null).exports},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(s.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]},getPath(){return this.$route.path}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,document.getElementsByClassName("sidebar")[0].style.height=this.cal()+"px",this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},cal:function(){return window.innerHeight+""},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),G=Object(a.a)(W,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{position:"sticky",top:"0","z-index":"30"}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e()],1),t._v(" "),e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchend:t.onTouchEnd,touchstart:t.onTouchStart}},[t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2)],1),t._v(" "),"/"==this.$route.path?e("div",[e("Footer")],1):t._e()])}),[],!1,null,null,null);e.default=G.exports}}]);