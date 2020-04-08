(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return m}));var n=r(1),o=r(10),c=(r(0),r(206)),a={id:"tutorials-creating-custom-theme",title:"Creating a custom theme"},s={id:"tutorials-creating-custom-theme",title:"Creating a custom theme",description:"We've made hundreds of custom components across dozens of projects, including complete custom themes.",source:"@site/../docs/tutorials-creating-custom-theme.md",permalink:"/docs/tutorials-creating-custom-theme",sidebar:"docs",previous:{title:"Creating a custom field",permalink:"/docs/tutorials-creating-custom-field"},next:{title:"Common forms",permalink:"/docs/examples-common-forms"}},i=[{value:"Copy theme source",id:"copy-theme-source",children:[]},{value:"Import newly created theme",id:"import-newly-created-theme",children:[]},{value:"Referenced issues and pull requests",id:"referenced-issues-and-pull-requests",children:[]}],u={rightToc:i};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"We've made hundreds of custom components across dozens of projects, including complete custom themes.\nMost of them began as source forks of ",Object(c.b)("inlineCode",{parentName:"p"},"uniforms-unstyled")," - one simply copies the source\nand imports ",Object(c.b)("inlineCode",{parentName:"p"},"./some/project/path/uniforms-custom-theme-with-a-cool-name"),"."),Object(c.b)("p",null,"For the purposes of this tutorial we will be using ",Object(c.b)("inlineCode",{parentName:"p"},"uniforms-custom-theme")," as our custom theme name."),Object(c.b)("h3",{id:"copy-theme-source"},"Copy theme source"),Object(c.b)("p",null,"Copy source of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/tree/master/packages/uniforms-unstyled"}),"uniforms-unstyled")," package from uniforms repository, or any other provided theme that you would like to extend, and put it somewhere inside your project, e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"./uniforms-custom-theme"),"."),Object(c.b)("p",null,"Now you can start making changes to your own custom theme!"),Object(c.b)("h3",{id:"import-newly-created-theme"},"Import newly created theme"),Object(c.b)("p",null,"Instead of importing themes from ",Object(c.b)("inlineCode",{parentName:"p"},"node_modules")," (original uniforms theme packages), simply import theme from your local path."),Object(c.b)("p",null,"That's all!"),Object(c.b)("h3",{id:"referenced-issues-and-pull-requests"},"Referenced issues and pull requests"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/issues/433"}),"#433"),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/issues/609#issuecomment-545079686"}),"#609"),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/pull/612#issuecomment-545643935"}),"#612")))}m.isMDXComponent=!0},206:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),m=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=m(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||l[d]||c;return r?o.a.createElement(f,s({ref:t},u,{components:r})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);