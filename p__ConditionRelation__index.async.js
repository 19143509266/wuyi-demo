(self.webpackChunk=self.webpackChunk||[]).push([[187],{33409:function(u,R,o){"use strict";o.r(R),o.d(R,{default:function(){return K}});var F=o(15558),k=o.n(F),m=o(48305),I=o.n(m),A=o(75271),s={},M=function x(n,t){return n.forEach(function(i){var e;(e=i.child)!==null&&e!==void 0&&e.length?t=x(i.child,t):t+=1}),t+=1,t},Z=function x(n,t){return n.child.forEach(function(i){var e;if(i.x=n.x+1,(e=i.child)!==null&&e!==void 0&&e.length){var g=M(i.child,0);i.y=Math.floor(g/2)+t,t=x(i,t)}else t+=1,i.y=t-1}),t+=1,t},b=function x(n){var t,i=I()(n,1),e=i[0];return(t=e.child)!==null&&t!==void 0&&t.length?x(e.child):e.y},z=function x(n){var t=n.child.length;if(!t)return"";var i="",e=n.x,g=n.y;return n.child.forEach(function(f,p){var C,S,y=f.y,T=f.z;if((C=f.child)!==null&&C!==void 0&&C.length){var U=M(n.child,0)*41.4/2+(b(n.child)||0)*41.4,L=M(f.child,0)*41.4/2+b(f.child)*41.4,a=0,c=0;U<L?(a=U,c=L):(a=L,c=U),g>=y&&(a=U,c=L),i+="M".concat(24+e*68," ").concat(a," L").concat(24+e*68," ").concat(c," L").concat(68+e*68," ").concat(c),i+=x(f)}if(!((S=f.child)!==null&&S!==void 0&&S.length))if(y>=g)i+="M".concat(24+e*68," ").concat(g*40," L").concat(24+e*68," ").concat((y+1)*41.4-20.69921875," L").concat(68+e*68," ").concat((y+1)*41.4-20.69921875);else{var v;i+="M".concat(24+e*68," ").concat((y+(t===1&&p===0?0:1)+((v=n.child[p+1])!==null&&v!==void 0&&(v=v.child)!==null&&v!==void 0&&v.length?g-y-1:0))*41.4+20+(t===1&&p===0?26:0)," L").concat(24+e*68," ").concat((y+1)*41.4-20.69921875-(t===1&&p===0?(T||0)*1.4:0)," L").concat(68+e*68," ").concat((y+1)*41.4-20.69921875-(t===1&&p===0?(T||0)*1.4:0))}}),i},Y=function x(n,t){return n.child.forEach(function(i){var e;(e=i.child)!==null&&e!==void 0&&e.length?t=x(i,t):t=Math.max(t,i.y,n.y)}),t},O=function x(n){var t,i,e=(t=n.child)===null||t===void 0?void 0:t.length,g="";if(!e&&Array.isArray(n.child)){var f=n.x,p=n.y;g+="M".concat(48+f*68," ").concat(p*41.4+20," L").concat(88+f*68," ").concat(p*41.4+20)}else if((i=n.child)!==null&&i!==void 0&&i.length){var C=Math.max(Y(n,0),M(n.child,0)+b(n.child)-1),S=M(n.child,0)*41.4/2+(b(n.child)||0)*41.4,y=n.x;g+="M".concat(24+y*68," ").concat(S," L").concat(24+y*68," ").concat(C*41.4+20," L").concat(64+y*68," ").concat(C*41.4+20),n.child.forEach(function(T){g+=x(T)})}return g},l=o(26068),r=o.n(l),j={},N=o(99452),E=o(26939),B=o(59739),Q={},d=o(52676),H=function(){return(0,d.jsx)("div",{className:"filed",style:{width:750},children:"\u5B57\u6BB5"})},$=H,P=[{key:"and",label:"and"},{key:"or",label:"or"}],X=function x(n){var t=n.x,i=n.relationList,e=n.logic,g=n.addCondReal,f=n.setRelationList,p=n.removeRelationList,C=n.setLogic,S=function a(c,v){return c.map(function(h){var D=v==="and"?"or":"and";return h.child?r()(r()({},h),{},{logic:D,child:a(h.child,D)}):r()(r()({},h),{},{logic:D})})},y=function(c){C(c.key),f(function(v){return S(v,c.key)})},T=(0,A.useMemo)(function(){return{marginLeft:t?"20px":0}},[]),U=function(c,v,h){var D=c==="condition"?{fieldId:"",value:"",enumValue:"",term:"",filterType:"logic",name:"",deType:"",key:(0,B.Z)()}:{child:[],logic:h,key:(0,B.Z)()};f(function(W){return W.map(function(w){return w.key===v?r()(r()({},w),{},{child:[].concat(k()(w.child),[D])}):w.child&&w.child.length>0?r()(r()({},w),{},{child:w.child.map(function(V){return V.key===v?r()(r()({},V),{},{child:[].concat(k()(V.child),[D])}):V})}):w})})},L=function(c){f(function(v){return v.find(function(h){return h.key===c.key})?v.filter(function(h){return h.key!==c.key}):v.map(function(h){if(h.child){var D=h.child.filter(function(W){return W.key!==c.key});return r()(r()({},h),{},{child:D})}return h})})};return(0,d.jsxs)("div",{className:"logic",style:T,children:[(0,d.jsx)("div",{className:"logic-left",children:(0,d.jsx)("div",{className:"operate-title",children:t?(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsx)("span",{style:{color:"#bfbfbf"},className:"mrg-title",children:e==="or"?"OR":"AND"}),(0,d.jsx)("span",{className:"operate-icon",children:(0,d.jsx)(N.Z,{onClick:function(c){return p(c)}})})]}):(0,d.jsx)(E.Z,{menu:{items:P,onClick:y},placement:"bottom",trigger:["click"],children:(0,d.jsx)("span",{style:{color:"rgba(0 0 0 / 65%)"},className:"mrg-title fir",children:e==="or"?"OR":"AND"})})})}),(0,d.jsxs)("div",{className:"logic-right",children:[i.map(function(a,c){return a.child?(0,d.jsx)(x,{x:a.x,logic:a.logic,relationList:a.child,addCondReal:function(h,D){return U(h,a.key,D)},setRelationList:f,removeRelationList:function(){return L(a)},setLogic:C},a.key):(0,d.jsx)($,{},a.key)}),(0,d.jsxs)("div",{className:"logic-right-add",children:[(0,d.jsx)("button",{onClick:function(){return g("condition",e==="or"?"and":"or")},className:"operand-btn",children:"+\u6DFB\u52A0\u6761\u4EF6"}),t<2&&(0,d.jsx)("button",{onClick:function(){return g("relation",e==="or"?"and":"or")},className:"operand-btn",children:"+\u6DFB\u52A0\u5173\u7CFB"})]})]})]})},G=X,J=function(){var n=(0,A.useState)([]),t=I()(n,2),i=t[0],e=t[1],g=(0,A.useState)("or"),f=I()(g,2),p=f[0],C=f[1],S=(0,A.useMemo)(function(){var L=i.length,a={x:0,y:0,child:i};if(a.y=Math.floor(Z(a,0)/2),!L)return"";var c=z(a);return c},[i]),y=(0,A.useMemo)(function(){var L=i.length,a={x:0,y:0,child:i};if(a.y=Math.floor(Z(a,0)/2),!L)return"M48 20 L68 20";var c=O(a);return c},[i]),T=function(a,c){var v=a==="condition"?{fieldId:"",value:"",enumValue:"",term:"",filterType:"logic",name:"",deType:"",key:(0,B.Z)()}:{child:[],logic:c,key:(0,B.Z)()};e(function(h){return[].concat(k()(h),[v])})},U=function(a){e([])};return(0,d.jsx)("div",{style:{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",display:"flex",background:"#d3d3d3",padding:12,boxSizing:"border-box"},children:(0,d.jsxs)("div",{style:{width:850,background:"#fff",display:"flex",alignItems:"center",position:"relative"},children:[(0,d.jsx)(G,{x:0,relationList:i,logic:p,addCondReal:T,setRelationList:e,removeRelationList:U,setLogic:C}),(0,d.jsx)("svg",{width:"388",height:"100%",className:"real-line",children:(0,d.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",d:S,fill:"none",stroke:"#CCCCCC",strokeWidth:"0.5"})}),(0,d.jsx)("svg",{width:"388",height:"100%",className:"dash-line",children:(0,d.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",d:y,fill:"none",stroke:"#CCCCCC",strokeWidth:"0.5",strokeDasharray:"4,4"})})]})})},K=J},59739:function(u,R,o){"use strict";o.d(R,{Z:function(){return O}});var F=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),k={randomUUID:F},m,I=new Uint8Array(16);function A(){if(!m&&(m=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(I)}for(var s=[],M=0;M<256;++M)s.push((M+256).toString(16).slice(1));function Z(l,r=0){return(s[l[r+0]]+s[l[r+1]]+s[l[r+2]]+s[l[r+3]]+"-"+s[l[r+4]]+s[l[r+5]]+"-"+s[l[r+6]]+s[l[r+7]]+"-"+s[l[r+8]]+s[l[r+9]]+"-"+s[l[r+10]]+s[l[r+11]]+s[l[r+12]]+s[l[r+13]]+s[l[r+14]]+s[l[r+15]]).toLowerCase()}function b(l,r=0){var j=Z(l,r);if(!validate(j))throw TypeError("Stringified UUID is invalid");return j}var z=null;function Y(l,r,j){if(k.randomUUID&&!r&&!l)return k.randomUUID();l=l||{};var N=l.random||(l.rng||A)();if(N[6]=N[6]&15|64,N[8]=N[8]&63|128,r){j=j||0;for(var E=0;E<16;++E)r[j+E]=N[E];return r}return Z(N)}var O=Y},38498:function(u,R,o){var F=o(78770);function k(m){if(Array.isArray(m))return F(m)}u.exports=k,u.exports.__esModule=!0,u.exports.default=u.exports},20698:function(u){function R(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}u.exports=R,u.exports.__esModule=!0,u.exports.default=u.exports},91162:function(u){function R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u.exports=R,u.exports.__esModule=!0,u.exports.default=u.exports},15558:function(u,R,o){var F=o(38498),k=o(20698),m=o(31479),I=o(91162);function A(s){return F(s)||k(s)||m(s)||I()}u.exports=A,u.exports.__esModule=!0,u.exports.default=u.exports}}]);