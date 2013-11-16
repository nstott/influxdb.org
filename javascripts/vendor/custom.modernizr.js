window.Modernizr=function(t,e,n){function i(t){h.cssText=t}function r(t,e){return typeof t===e}var o,a,s,u="2.6.2",c={},l=!0,f=e.documentElement,d="modernizr",p=e.createElement(d),h=p.style,m={}.toString,g=" -webkit- -moz- -o- -ms- ".split(" "),v={svg:"http://www.w3.org/2000/svg"},y={},b=[],x=b.slice,w=function(t,n,i,r){var o,a,s,u,c=e.createElement("div"),l=e.body,p=l||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:d+(i+1),c.appendChild(s);return o=["&#173;",'<style id="s',d,'">',t,"</style>"].join(""),c.id=d,(l?c:p).innerHTML+=o,p.appendChild(c),l||(p.style.background="",p.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),a=n(c,t),l?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),f.style.overflow=u),!!a},_=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return w("@media "+e+" { #"+d+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},T={}.hasOwnProperty;s=r(T,"undefined")||r(T.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return T.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=x.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var o=new r,a=e.apply(o,n.concat(x.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(x.call(arguments)))};return i}),y.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:w(["@media (",g.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},y.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==v.svg},y.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(m.call(e.createElementNS(v.svg,"clipPath")))};for(var E in y)s(y,E)&&(a=E.toLowerCase(),c[a]=y[E](),b.push((c[a]?"":"no-")+a));return c.addTest=function(t,e){if("object"==typeof t)for(var i in t)s(t,i)&&c.addTest(i,t[i]);else{if(t=t.toLowerCase(),c[t]!==n)return c;e="function"==typeof e?e():e,"undefined"!=typeof l&&l&&(f.className+=" "+(e?"":"no-")+t),c[t]=e}return c},i(""),p=o=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=g[t[h]];return e||(e={},m++,t[h]=m,g[m]=e),e}function o(t,n,i){if(n||(n=e),l)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():p.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),o.canHaveChildren&&!d.test(t)?i.frag.appendChild(o):o}function a(t,n){if(t||(t=e),l)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),a=0,s=i(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function u(t){t||(t=e);var i=r(t);return v.shivCSS&&!c&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||s(t,i),t}var c,l,f=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,g={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,l=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,l=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};t.html5=v,u(e)}(this,e),c._version=u,c._prefixes=g,c.mq=_,c.testStyles=w,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+b.join(" "):""),c}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==g.call(t)}function r(t){return"string"==typeof t}function o(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=v.shift();y=1,t?t.t?h(function(){("c"==t.t?d.injectCss:d.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):y=0}function u(t,n,i,r,o,u,c){function l(e){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&s(),f.onload=f.onreadystatechange=null,e)){"img"!=t&&h(function(){w.removeChild(f)},50);for(var i in N[n])N[n].hasOwnProperty(i)&&N[n][i].onload()}}var c=c||d.errorTimeout,f=e.createElement(t),p=0,g=0,b={t:i,s:n,e:o,a:u,x:c};1===N[n]&&(g=1,N[n]=[]),"object"==t?f.data=n:(f.src=n,f.type=t),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,g)},v.splice(r,0,b),"img"!=t&&(g||2===N[n]?(w.insertBefore(f,x?null:m),h(l,c)):N[n].push(f))}function c(t,e,n,i,o){return y=0,e=e||"j",r(t)?u("c"==e?T:_,t,e,this.i++,n,i,o):(v.splice(this.i++,0,t),1==v.length&&s()),this}function l(){var t=d;return t.loader={load:c,i:0},t}var f,d,p=e.documentElement,h=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!e.createRange().compareNode,w=x?p:m.parentNode,p=t.opera&&"[object Opera]"==g.call(t.opera),p=!!e.attachEvent&&!p,_=b?"object":p?"script":"img",T=p?"script":_,E=Array.isArray||function(t){return"[object Array]"==g.call(t)},C=[],N={},S={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};d=function(t){function e(t){var e,n,i,t=t.split("!"),r=C.length,o=t.pop(),a=t.length,o={url:o,origUrl:o,prefixes:t};for(n=0;a>n;n++)i=t[n].split("="),(e=S[i.shift()])&&(o=e(o,i));for(n=0;r>n;n++)o=C[n](o);return o}function a(t,r,o,a,s){var u=e(t),c=u.autoCallback;u.url.split(".").pop().split("?").shift(),u.bypass||(r&&(r=i(r)?r:r[t]||r[a]||r[t.split("/").pop().split("?")[0]]),u.instead?u.instead(t,r,o,a,s):(N[u.url]?u.noexec=!0:N[u.url]=1,o.load(u.url,u.forceCSS||!u.forceJS&&"css"==u.url.split(".").pop().split("?").shift()?"c":n,u.noexec,u.attrs,u.timeout),(i(r)||i(c))&&o.load(function(){l(),r&&r(u.origUrl,s,a),c&&c(u.origUrl,s,a),N[u.url]=2})))}function s(t,e){function n(t,n){if(t){if(r(t))n||(f=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}),a(t,f,e,0,c);else if(Object(t)===t)for(u in s=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(u)&&(!n&&!--s&&(i(f)?f=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}:f[u]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(d[u])),a(t[u],f,e,u,c))}else!n&&p()}var s,u,c=!!t.test,l=t.load||t.both,f=t.callback||o,d=f,p=t.complete||o;n(c?t.yep:t.nope,!!l),l&&n(l)}var u,c,f=this.yepnope.loader;if(r(t))a(t,0,f,0);else if(E(t))for(u=0;u<t.length;u++)c=t[u],r(c)?a(c,0,f,0):E(c)?d(c):Object(c)===c&&s(c,f);else Object(t)===t&&s(t,f)},d.addPrefix=function(t,e){S[t]=e},d.addFilter=function(t){C.push(t)},d.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,0),e.readyState="complete"},0)),t.yepnope=l(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,n,i,r,u,c){var l,f,p=e.createElement("script"),r=r||d.errorTimeout;p.src=t;for(f in i)p.setAttribute(f,i[f]);n=c?s:n||o,p.onreadystatechange=p.onload=function(){!l&&a(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},h(function(){l||(l=1,n(1))},r),u?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,n,i,r,a,u){var c,r=e.createElement("link"),n=u?s:n||o;r.href=t,r.rel="stylesheet",r.type="text/css";for(c in i)r.setAttribute(c,i[c]);a||(m.parentNode.insertBefore(r,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});