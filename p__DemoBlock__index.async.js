(self.webpackChunk=self.webpackChunk||[]).push([[974],{91864:function(s,m,a){"use strict";a.d(m,{Z:function(){return T}});var f=a(79482),l=a(75271),p={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},v=p,b=a(70507),S=function(d,E){return l.createElement(b.Z,(0,f.Z)({},d,{ref:E,icon:v}))},O=l.forwardRef(S),T=O},63451:function(s,m,a){"use strict";a.r(m),a.d(m,{default:function(){return Q}});var f=a(75271),l=a(26068),p=a.n(l),v=a(67825),b=a.n(v),S=a(76777),O=function(j){if(j){var e=getComputedStyle(j),t=parseFloat(e.marginTop),n=parseFloat(e.marginBottom);return t+n}return 0},T=a(15558),_=a.n(T),d=a(37995),E=a(66292),D=a.n(E);function G(h){var j=(0,f.useRef)(h);return j.current=h,j}var F=G,C=function(h){return h!==null&&typeof h=="object"},I=function(h){return typeof h=="function"},z=function(h){return typeof h=="string"},Y=function(h){return typeof h=="boolean"},N=function(h){return typeof h=="number"},H=function(h){return typeof h=="undefined"},M=!1,V=M,q=function(h){V&&(I(h)||console.error("useUnmount expected parameter is a function, got ".concat(typeof h)));var j=F(h);(0,f.useEffect)(function(){return function(){j.current()}},[])},k=q;function $(h,j){var e;V&&(I(h)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof h)));var t=F(h),n=(e=j==null?void 0:j.wait)!==null&&e!==void 0?e:1e3,r=(0,f.useMemo)(function(){return D()(function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];return t.current.apply(t,(0,d.ev)([],(0,d.CR)(i),!1))},n,j)},[]);return k(function(){r.cancel()}),{run:r,cancel:r.cancel,flush:r.flush}}var J=$,ee=function(j){var e=j.resizeFn,t=j.containerRef,n=j.deptParams,r=j.wait,i=r===void 0?200:r,o=J(e,{wait:i}),u=o.run;return(0,f.useEffect)(function(){var y=new ResizeObserver(function(){return u()}),P=new MutationObserver(u),c=t.current;return c&&(y.observe(c),P.observe(c,{childList:!0,subtree:!0})),u(),function(){c&&(y.unobserve(c),P.disconnect())}},[].concat(_()(n),[u])),{}},B=a(52676),X=["autoFitContent"],w=function(j){var e=j.autoFitContent,t=b()(j,X),n=(0,f.useRef)(null),r=function(){if(e){var o=n.current;if(o){var u=o.querySelector(".ant-tabs-nav"),y=u?u.clientHeight+O(u):0,P=o.clientHeight-y,c=o.querySelector(".ant-tabs-content");c&&(c.style.height="".concat(P,"px"),c.style.overflow="auto")}}};return e&&ee({resizeFn:r,containerRef:n,deptParams:[e]}),(0,B.jsx)("div",{ref:n,style:{width:"100%",height:"100%"},children:(0,B.jsx)(S.Z,p()({},t))})},L=w,U=function(){var j=Array(200).fill(1).map(function(t){return(0,B.jsx)("div",{style:{width:100,height:100,background:"#ccc"},children:t},t)}),e=[{key:"1",label:"Tab 1",children:(0,B.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:j})},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}];return(0,B.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,B.jsx)(L,{items:e,style:{width:"100%",height:"100%"},autoFitContent:!0})})},Q=U},74396:function(s,m,a){var f=a(29165),l=f.Symbol;s.exports=l},80732:function(s,m,a){var f=a(74396),l=a(31239),p=a(57058),v="[object Null]",b="[object Undefined]",S=f?f.toStringTag:void 0;function O(T){return T==null?T===void 0?b:v:S&&S in Object(T)?l(T):p(T)}s.exports=O},33124:function(s,m,a){var f=a(82996),l=/^\s+/;function p(v){return v&&v.slice(0,f(v)+1).replace(l,"")}s.exports=p},96476:function(s,m,a){var f=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g;s.exports=f},31239:function(s,m,a){var f=a(74396),l=Object.prototype,p=l.hasOwnProperty,v=l.toString,b=f?f.toStringTag:void 0;function S(O){var T=p.call(O,b),_=O[b];try{O[b]=void 0;var d=!0}catch(D){}var E=v.call(O);return d&&(T?O[b]=_:delete O[b]),E}s.exports=S},57058:function(s){var m=Object.prototype,a=m.toString;function f(l){return a.call(l)}s.exports=f},29165:function(s,m,a){var f=a(96476),l=typeof self=="object"&&self&&self.Object===Object&&self,p=f||l||Function("return this")();s.exports=p},82996:function(s){var m=/\s/;function a(f){for(var l=f.length;l--&&m.test(f.charAt(l)););return l}s.exports=a},66292:function(s,m,a){var f=a(36838),l=a(76668),p=a(12448),v="Expected a function",b=Math.max,S=Math.min;function O(T,_,d){var E,D,G,F,C,I,z=0,Y=!1,N=!1,H=!0;if(typeof T!="function")throw new TypeError(v);_=p(_)||0,f(d)&&(Y=!!d.leading,N="maxWait"in d,G=N?b(p(d.maxWait)||0,_):G,H="trailing"in d?!!d.trailing:H);function M(w){var L=E,U=D;return E=D=void 0,z=w,F=T.apply(U,L),F}function V(w){return z=w,C=setTimeout($,_),Y?M(w):F}function q(w){var L=w-I,U=w-z,Q=_-L;return N?S(Q,G-U):Q}function k(w){var L=w-I,U=w-z;return I===void 0||L>=_||L<0||N&&U>=G}function $(){var w=l();if(k(w))return J(w);C=setTimeout($,q(w))}function J(w){return C=void 0,H&&E?M(w):(E=D=void 0,F)}function ee(){C!==void 0&&clearTimeout(C),z=0,E=I=D=C=void 0}function B(){return C===void 0?F:J(l())}function X(){var w=l(),L=k(w);if(E=arguments,D=this,I=w,L){if(C===void 0)return V(I);if(N)return clearTimeout(C),C=setTimeout($,_),M(I)}return C===void 0&&(C=setTimeout($,_)),F}return X.cancel=ee,X.flush=B,X}s.exports=O},36838:function(s){function m(a){var f=typeof a;return a!=null&&(f=="object"||f=="function")}s.exports=m},55073:function(s){function m(a){return a!=null&&typeof a=="object"}s.exports=m},16764:function(s,m,a){var f=a(80732),l=a(55073),p="[object Symbol]";function v(b){return typeof b=="symbol"||l(b)&&f(b)==p}s.exports=v},76668:function(s,m,a){var f=a(29165),l=function(){return f.Date.now()};s.exports=l},12448:function(s,m,a){var f=a(33124),l=a(36838),p=a(16764),v=NaN,b=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,O=/^0o[0-7]+$/i,T=parseInt;function _(d){if(typeof d=="number")return d;if(p(d))return v;if(l(d)){var E=typeof d.valueOf=="function"?d.valueOf():d;d=l(E)?E+"":E}if(typeof d!="string")return d===0?d:+d;d=f(d);var D=S.test(d);return D||O.test(d)?T(d.slice(2),D?2:8):b.test(d)?v:+d}s.exports=_},67825:function(s,m,a){var f=a(64382);function l(p,v){if(p==null)return{};var b=f(p,v),S,O;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(p);for(O=0;O<T.length;O++)S=T[O],!(v.indexOf(S)>=0)&&Object.prototype.propertyIsEnumerable.call(p,S)&&(b[S]=p[S])}return b}s.exports=l,s.exports.__esModule=!0,s.exports.default=s.exports},64382:function(s){function m(a,f){if(a==null)return{};var l={},p=Object.keys(a),v,b;for(b=0;b<p.length;b++)v=p[b],!(f.indexOf(v)>=0)&&(l[v]=a[v]);return l}s.exports=m,s.exports.__esModule=!0,s.exports.default=s.exports},37995:function(s,m,a){"use strict";a.d(m,{CR:function(){return z},Jh:function(){return G},XA:function(){return I},ZT:function(){return l},_T:function(){return v},ev:function(){return H},mG:function(){return D},pi:function(){return p},pr:function(){return N}});var f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},f(e,t)};function l(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");f(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var p=function(){return p=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},p.apply(this,arguments)};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function b(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var y=e.length-1;y>=0;y--)(u=e[y])&&(o=(i<3?u(o):i>3?u(t,n,o):u(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function S(e,t){return function(n,r){t(n,r,e)}}function O(e,t,n,r,i,o){function u(K){if(K!==void 0&&typeof K!="function")throw new TypeError("Function expected");return K}for(var y=r.kind,P=y==="getter"?"get":y==="setter"?"set":"value",c=!t&&e?r.static?e:e.prototype:null,x=t||(c?Object.getOwnPropertyDescriptor(c,r.name):{}),R,te=!1,g=n.length-1;g>=0;g--){var A={};for(var W in r)A[W]=W==="access"?{}:r[W];for(var W in r.access)A.access[W]=r.access[W];A.addInitializer=function(K){if(te)throw new TypeError("Cannot add initializers after decoration has completed");o.push(u(K||null))};var Z=(0,n[g])(y==="accessor"?{get:x.get,set:x.set}:x[P],A);if(y==="accessor"){if(Z===void 0)continue;if(Z===null||typeof Z!="object")throw new TypeError("Object expected");(R=u(Z.get))&&(x.get=R),(R=u(Z.set))&&(x.set=R),(R=u(Z.init))&&i.unshift(R)}else(R=u(Z))&&(y==="field"?i.unshift(R):x[P]=R)}c&&Object.defineProperty(c,r.name,x),te=!0}function T(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0}function _(e){return typeof e=="symbol"?e:"".concat(e)}function d(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function E(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function D(e,t,n,r){function i(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function y(x){try{c(r.next(x))}catch(R){u(R)}}function P(x){try{c(r.throw(x))}catch(R){u(R)}}function c(x){x.done?o(x.value):i(x.value).then(y,P)}c((r=r.apply(e,t||[])).next())})}function G(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return u.next=y(0),u.throw=y(1),u.return=y(2),typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function y(c){return function(x){return P([c,x])}}function P(c){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(x){c=[6,x],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var F=Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]};function C(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&F(t,e,n)}function I(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function z(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],u;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(y){u={error:y}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return o}function Y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(z(arguments[t]));return e}function N(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],u=0,y=o.length;u<y;u++,i++)r[i]=o[u];return r}function H(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function M(e){return this instanceof M?(this.v=e,this):new M(e)}function V(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),y("next"),y("throw"),y("return",u),i[Symbol.asyncIterator]=function(){return this},i;function u(g){return function(A){return Promise.resolve(A).then(g,R)}}function y(g,A){r[g]&&(i[g]=function(W){return new Promise(function(Z,K){o.push([g,W,Z,K])>1||P(g,W)})},A&&(i[g]=A(i[g])))}function P(g,A){try{c(r[g](A))}catch(W){te(o[0][3],W)}}function c(g){g.value instanceof M?Promise.resolve(g.value.v).then(x,R):te(o[0][2],g)}function x(g){P("next",g)}function R(g){P("throw",g)}function te(g,A){g(A),o.shift(),o.length&&P(o[0][0],o[0][1])}}function q(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,o){t[i]=e[i]?function(u){return(n=!n)?{value:M(e[i](u)),done:!1}:o?o(u):u}:o}}function k(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof I=="function"?I(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(u){return new Promise(function(y,P){u=e[o](u),i(y,P,u.done,u.value)})}}function i(o,u,y,P){Promise.resolve(P).then(function(c){o({value:c,done:y})},u)}}function $(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var J=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function ee(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&F(t,e,n);return J(t,e),t}function B(e){return e&&e.__esModule?e:{default:e}}function X(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}function w(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n}function L(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function U(e,t,n){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var r,i;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose],n&&(i=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");i&&(r=function(){try{i.call(this)}catch(o){return Promise.reject(o)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var Q=typeof SuppressedError=="function"?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function h(e){function t(o){e.error=e.hasError?new Q(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}var n,r=0;function i(){for(;n=e.stack.pop();)try{if(!n.async&&r===1)return r=0,e.stack.push(n),Promise.resolve().then(i);if(n.dispose){var o=n.dispose.call(n.value);if(n.async)return r|=2,Promise.resolve(o).then(i,function(u){return t(u),i()})}else r|=1}catch(u){t(u)}if(r===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return i()}var j={__extends:l,__assign:p,__rest:v,__decorate:b,__param:S,__metadata:E,__awaiter:D,__generator:G,__createBinding:F,__exportStar:C,__values:I,__read:z,__spread:Y,__spreadArrays:N,__spreadArray:H,__await:M,__asyncGenerator:V,__asyncDelegator:q,__asyncValues:k,__makeTemplateObject:$,__importStar:ee,__importDefault:B,__classPrivateFieldGet:X,__classPrivateFieldSet:w,__classPrivateFieldIn:L,__addDisposableResource:U,__disposeResources:h}}}]);
