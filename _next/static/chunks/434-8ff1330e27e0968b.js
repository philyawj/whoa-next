(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{3175:function(e,t,r){"use strict";var n=r(5893),o=r(1664);t.Z=function(e){var t=e.categories;return(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:t.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/category/".concat(e.toLowerCase()),children:e})},t)}))})})}},1314:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),o=r(9008),a=(r(7294),r(1664)),c=function(){return(0,n.jsx)("header",{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("nav",{children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})}),(0,n.jsx)(a.default,{href:"/about",children:(0,n.jsx)("a",{children:"About"})})]})})})},i=function(e){var t=e.title,r=void 0===t?"Whoa Static Site":t,a=e.keywords,i=void 0===a?"whoa, amazing":a,l=e.description,u=void 0===l?"Amazing facts. Whao":l,s=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{name:"keywords",content:i}),(0,n.jsx)("meta",{name:"description",content:u})]}),(0,n.jsx)(c,{}),(0,n.jsx)("main",{className:"container",children:s})]})}},1772:function(e,t,r){"use strict";var n=r(5893),o=r(1664);t.Z=function(e){var t=e.post;return(0,n.jsxs)("div",{className:"post",children:[(0,n.jsx)("h2",{children:(0,n.jsx)(o.default,{href:"/".concat(t.slug),children:t.frontmatter.title})}),(0,n.jsx)("img",{src:t.frontmatter.cover_image,width:400,className:"responsive",alt:t.frontmatter.cover_image_alt}),(0,n.jsx)("p",{children:t.frontmatter.excerpt}),(0,n.jsxs)("p",{children:["Category:"," ",(0,n.jsx)(o.default,{href:"/category/".concat(t.frontmatter.category.toLowerCase()),children:t.frontmatter.category})]}),(0,n.jsxs)("p",{children:["Posted: ",t.frontmatter.date]}),(0,n.jsx)(o.default,{href:"/".concat(t.slug),children:"Full Post"})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(l){i=!0,o=l}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,c=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),l=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=c.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,h=a.as,p=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var b=(t=c.default.Children.only(p))&&"object"===typeof t&&t.ref,j=o(u.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],A=c.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);c.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,w,g,r,n]);var C={ref:A,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:c}))}(e,n,d,h,v,y,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:n&&n.locale,L=n&&n.isLocaleDomain&&i.getDomainLocale(h,E,n&&n.locales,n&&n.domainLocales);C.href=L||i.addBasePath(i.addLocale(h,E,n&&n.defaultLocale))}return c.default.cloneElement(t,C)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(l){i=!0,o=l}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,u=a.useRef(),s=o(a.useState(!1),2),f=s[0],d=s[1],h=o(a.useState(t?t.current:null),2),p=h[0],v=h[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:r}))}),[n,p,r,f]);return a.useEffect((function(){if(!i&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,f]};var a=r(7294),c=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}}]);