(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{479:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},499:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(552),l=a(243),o=a(438),i="",s="dark",u=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),u=Object(n.useCallback)((function(){c(i),o(i)}),[]),d=Object(n.useCallback)((function(){c(s),o(s)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),{isDarkTheme:r===s,setLightTheme:u,setDarkTheme:d}},d=a(462);var h=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},m=(a(76),a(74),a(1)),f=a(10),v=a(409),b=(a(58),a(27),a(21),a(20),a(78),a(183)),p=a.n(b),g=a(479),k=(a(140),function(e){var t=Object(n.useState)(!1),c=t[0],o=t[1],i=Object(n.useRef)(null),s=Object(l.a)().siteConfig,u=(void 0===s?{}:s).themeConfig.algolia,d=Object(g.b)();var h=function(e){void 0===e&&(e=!0),c||Promise.all([a.e(36).then(a.t.bind(null,1246,7)),a.e(22).then(a.t.bind(null,1247,7))]).then((function(t){var a=t[0].default;o(!0),window.docsearch=a,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;d.push(r)}}),e&&i.current.focus()}(e)}))},m=Object(n.useCallback)((function(){h(),c&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;h(t)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:p()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:p()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:v,onFocus:v,onBlur:f,ref:i}))}),E=a(553),_=a.n(E),y=a(141),O=a.n(y),j=function(){return r.a.createElement("span",{className:p()(O.a.toggle,O.a.moon)})},w=function(){return r.a.createElement("span",{className:p()(O.a.toggle,O.a.sun)})},N=function(e){var t=Object(l.a)().isClient;return r.a.createElement(_.a,Object(m.a)({disabled:!t,icons:{checked:r.a.createElement(j,null),unchecked:r.a.createElement(w,null)}},e))},C=a(501);var S=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},T=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),h=d[0],m=d[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(g.c)(),b=S(v.hash),p=b[0],k=b[1],E=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(!(e<h)){if(l)return o(!1),r(!1),void u(e);var t=document.documentElement.scrollHeight-h,a=window.innerHeight;s&&e>s?r(!1):e+a<t&&r(!0),u(e)}};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[s,h]),Object(n.useEffect)((function(){e&&(r(!0),k(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&o(!0)}),[p]),{navbarRef:f,isNavbarVisible:a}},x=a(513),B=a(142),M=a.n(B);function D(e){var t=e.to,a=e.href,n=e.label,c=(e.position,Object(f.a)(e,["to","href","label","position"])),l=Object(o.a)(t);return r.a.createElement(v.a,Object(m.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:l},c),n)}var L=function(){var e,t=Object(l.a)().siteConfig,a=void 0===t?{}:t,c=a.baseUrl,i=a.themeConfig,s=void 0===i?{}:i,u=s.navbar,d=void 0===u?{}:u,h=s.disableDarkMode,f=void 0!==h&&h,b=d.title,g=d.logo,E=void 0===g?{}:g,_=d.links,y=void 0===_?[]:_,O=d.hideOnScroll,j=void 0!==O&&O,w=Object(n.useState)(!1),S=w[0],B=w[1],L=Object(n.useState)(!1),P=L[0],F=L[1],X=Object(C.a)(),I=X.isDarkTheme,R=X.setLightTheme,H=X.setDarkTheme,A=T(j),K=A.navbarRef,V=A.isNavbarVisible;Object(x.a)(S);var Y=Object(n.useCallback)((function(){B(!0)}),[B]),J=Object(n.useCallback)((function(){B(!1)}),[B]),U=Object(n.useCallback)((function(e){return e.target.checked?H():R()}),[R,H]),q=E.href||c,W=/http/.test(q)?{rel:"noopener noreferrer",target:"_blank"}:null,z=E.srcDark&&I?E.srcDark:E.src,G=Object(o.a)(z);return r.a.createElement("nav",{ref:K,className:p()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":S},e[M.a.navbarHideable]=j,e[M.a.navbarHidden]=!V,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Y,onKeyDown:Y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(v.a,Object(m.a)({className:"navbar__brand",to:q},W),null!=E&&r.a.createElement("img",{className:"navbar__logo",src:G,alt:E.alt}),null!=b&&r.a.createElement("strong",{className:P?M.a.hideLogoText:""},b)),y.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(D,Object(m.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},y.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(D,Object(m.a)({},e,{key:t}))})),!f&&r.a.createElement(N,{className:M.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:U}),r.a.createElement(k,{handleSearchBarToggle:F,isSearchBarExpanded:P}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(v.a,Object(m.a)({className:"navbar__brand",onClick:J,to:q},W),null!=E&&r.a.createElement("img",{className:"navbar__logo",src:G,alt:E.alt}),null!=b&&r.a.createElement("strong",null,b)),!f&&S&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:U})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},y.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(D,Object(m.a)({className:"menu__link"},e,{onClick:J})))})))))))},P=(a(239),a(143)),F=a.n(P);function X(e){var t=e.to,a=e.href,n=e.label,c=Object(f.a)(e,["to","href","label"]),l=Object(o.a)(t);return r.a.createElement(v.a,Object(m.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var I=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var R=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,h=Object(o.a)(d.src);return a?r.a.createElement("footer",{className:p()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(X,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:F.a.footerLogoLink},r.a.createElement(I,{alt:d.alt,url:h})):r.a.createElement(I,{alt:d.alt,url:h})),c))):null};a(144);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.title,s=a.themeConfig.image,u=a.url,d=e.children,m=e.title,f=e.noFooter,v=e.description,b=e.image,p=e.keywords,g=e.permalink,k=e.version,E=m?m+" | "+i:i,_=b||s,y=u+Object(o.a)(_),O=Object(o.a)(n);return r.a.createElement(h,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:O}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:y}),_&&r.a.createElement("meta",{property:"twitter:image",content:y}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(L,null),r.a.createElement("div",{className:"main-wrapper"},d),!f&&r.a.createElement(R,null))}},513:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},553:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),o=h(a(183)),i=h(a(13)),s=h(a(554)),u=h(a(555)),d=a(556);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},555:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},556:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);