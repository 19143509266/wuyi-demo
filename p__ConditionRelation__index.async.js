"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[187],{63057:function(K,B,f){f.r(B),f.d(B,{default:function(){return J}});var T=f(15558),S=f.n(T),Y=f(48305),p=f.n(Y),D=f(75271),Q={},N=function h(n,i){return n.forEach(function(t){var a;(a=t.child)!==null&&a!==void 0&&a.length?i=h(t.child,i):i+=1}),i+=1,i},E=function h(n,i){return n.child.forEach(function(t){var a;if(t.x=n.x+1,(a=t.child)!==null&&a!==void 0&&a.length){var s=N(t.child,0);t.y=Math.floor(s/2)+i,i=h(t,i)}else i+=1,t.y=i-1}),i+=1,i},M=function h(n){var i,t=p()(n,1),a=t[0];return(i=a.child)!==null&&i!==void 0&&i.length?h(a.child):a.y},Z=function h(n){var i=n.child.length;if(!i)return"";var t="",a=n.x,s=n.y;return n.child.forEach(function(d,g){var L,x,u=d.y,R=d.z;if((L=d.child)!==null&&L!==void 0&&L.length){var k=N(n.child,0)*41.4/2+(M(n.child)||0)*41.4,y=N(d.child,0)*41.4/2+M(d.child)*41.4,l=0,e=0;k<y?(l=k,e=y):(l=y,e=k),s>=u&&(l=k,e=y),t+="M".concat(24+a*68," ").concat(l," L").concat(24+a*68," ").concat(e," L").concat(68+a*68," ").concat(e),t+=h(d)}if(!((x=d.child)!==null&&x!==void 0&&x.length))if(u>=s)t+="M".concat(24+a*68," ").concat(s*40," L").concat(24+a*68," ").concat((u+1)*41.4-20.69921875," L").concat(68+a*68," ").concat((u+1)*41.4-20.69921875);else{var c;t+="M".concat(24+a*68," ").concat((u+(i===1&&g===0?0:1)+((c=n.child[g+1])!==null&&c!==void 0&&(c=c.child)!==null&&c!==void 0&&c.length?s-u-1:0))*41.4+20+(i===1&&g===0?26:0)," L").concat(24+a*68," ").concat((u+1)*41.4-20.69921875-(i===1&&g===0?(R||0)*1.4:0)," L").concat(68+a*68," ").concat((u+1)*41.4-20.69921875-(i===1&&g===0?(R||0)*1.4:0))}}),t},O=function h(n,i){return n.child.forEach(function(t){var a;(a=t.child)!==null&&a!==void 0&&a.length?i=h(t,i):i=Math.max(i,t.y,n.y)}),i},z=function h(n){var i,t,a=(i=n.child)===null||i===void 0?void 0:i.length,s="";if(!a&&Array.isArray(n.child)){var d=n.x,g=n.y;s+="M".concat(48+d*68," ").concat(g*41.4+20," L").concat(88+d*68," ").concat(g*41.4+20)}else if((t=n.child)!==null&&t!==void 0&&t.length){var L=Math.max(O(n,0),N(n.child,0)+M(n.child)-1),x=N(n.child,0)*41.4/2+(M(n.child)||0)*41.4,u=n.x;s+="M".concat(24+u*68," ").concat(x," L").concat(24+u*68," ").concat(L*41.4+20," L").concat(64+u*68," ").concat(L*41.4+20),n.child.forEach(function(R){s+=h(R)})}return s},$=f(26068),v=f.n($),U={},P=f(99452),V=f(76586),A=f(59739),b={},r=f(52676),W=function(){return(0,r.jsx)("div",{className:"filed",style:{width:750},children:"\u5B57\u6BB5"})},X=W,w=[{key:"and",label:"and"},{key:"or",label:"or"}],G=function h(n){var i=n.x,t=n.relationList,a=n.logic,s=n.addCondReal,d=n.setRelationList,g=n.removeRelationList,L=n.setLogic,x=function l(e,c){return e.map(function(o){var C=c==="and"?"or":"and";return o.child?v()(v()({},o),{},{logic:C,child:l(o.child,C)}):v()(v()({},o),{},{logic:C})})},u=function(e){L(e.key),d(function(c){return x(c,e.key)})},R=(0,D.useMemo)(function(){return{marginLeft:i?"20px":0}},[]),k=function(e,c,o){var C=e==="condition"?{fieldId:"",value:"",enumValue:"",term:"",filterType:"logic",name:"",deType:"",key:(0,A.Z)()}:{child:[],logic:o,key:(0,A.Z)()};d(function(j){return j.map(function(m){return m.key===c?v()(v()({},m),{},{child:[].concat(S()(m.child),[C])}):m.child&&m.child.length>0?v()(v()({},m),{},{child:m.child.map(function(F){return F.key===c?v()(v()({},F),{},{child:[].concat(S()(F.child),[C])}):F})}):m})})},y=function(e){d(function(c){return c.find(function(o){return o.key===e.key})?c.filter(function(o){return o.key!==e.key}):c.map(function(o){if(o.child){var C=o.child.filter(function(j){return j.key!==e.key});return v()(v()({},o),{},{child:C})}return o})})};return(0,r.jsxs)("div",{className:"logic",style:R,children:[(0,r.jsx)("div",{className:"logic-left",children:(0,r.jsx)("div",{className:"operate-title",children:i?(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("span",{style:{color:"#bfbfbf"},className:"mrg-title",children:a==="or"?"OR":"AND"}),(0,r.jsx)("span",{className:"operate-icon",children:(0,r.jsx)(P.Z,{onClick:function(e){return g(e)}})})]}):(0,r.jsx)(V.Z,{menu:{items:w,onClick:u},placement:"bottom",trigger:["click"],children:(0,r.jsx)("span",{style:{color:"rgba(0 0 0 / 65%)"},className:"mrg-title fir",children:a==="or"?"OR":"AND"})})})}),(0,r.jsxs)("div",{className:"logic-right",children:[t.map(function(l,e){return l.child?(0,r.jsx)(h,{x:l.x,logic:l.logic,relationList:l.child,addCondReal:function(o,C){return k(o,l.key,C)},setRelationList:d,removeRelationList:function(){return y(l)},setLogic:L},l.key):(0,r.jsx)(X,{},l.key)}),(0,r.jsxs)("div",{className:"logic-right-add",children:[(0,r.jsx)("button",{onClick:function(){return s("condition",a==="or"?"and":"or")},className:"operand-btn",children:"+\u6DFB\u52A0\u6761\u4EF6"}),i<2&&(0,r.jsx)("button",{onClick:function(){return s("relation",a==="or"?"and":"or")},className:"operand-btn",children:"+\u6DFB\u52A0\u5173\u7CFB"})]})]})]})},H=G,I=function(){var n=(0,D.useState)([]),i=p()(n,2),t=i[0],a=i[1],s=(0,D.useState)("or"),d=p()(s,2),g=d[0],L=d[1],x=(0,D.useMemo)(function(){var y=t.length,l={x:0,y:0,child:t};if(l.y=Math.floor(E(l,0)/2),!y)return"";var e=Z(l);return e},[t]),u=(0,D.useMemo)(function(){var y=t.length,l={x:0,y:0,child:t};if(l.y=Math.floor(E(l,0)/2),!y)return"M48 20 L68 20";var e=z(l);return e},[t]),R=function(l,e){var c=l==="condition"?{fieldId:"",value:"",enumValue:"",term:"",filterType:"logic",name:"",deType:"",key:(0,A.Z)()}:{child:[],logic:e,key:(0,A.Z)()};a(function(o){return[].concat(S()(o),[c])})},k=function(l){a([])};return(0,r.jsx)("div",{style:{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",display:"flex",background:"#d3d3d3",padding:12,boxSizing:"border-box"},children:(0,r.jsxs)("div",{style:{width:850,background:"#fff",display:"flex",alignItems:"center",position:"relative"},children:[(0,r.jsx)(H,{x:0,relationList:t,logic:g,addCondReal:R,setRelationList:a,removeRelationList:k,setLogic:L}),(0,r.jsx)("svg",{width:"388",height:"100%",className:"real-line",children:(0,r.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",d:x,fill:"none",stroke:"#CCCCCC",strokeWidth:"0.5"})}),(0,r.jsx)("svg",{width:"388",height:"100%",className:"dash-line",children:(0,r.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",d:u,fill:"none",stroke:"#CCCCCC",strokeWidth:"0.5",strokeDasharray:"4,4"})})]})})},J=I}}]);