"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23],{44026:function(Q,R,a){a.r(R),a.d(R,{default:function(){return I}});var N=a(26068),j=a.n(N),V=a(48305),v=a.n(V),d=a(75271),D=a(62288),G=a.n(D),X=a(64134),Z=a(54949),r={"grid-item":"grid-item___bvQI8","grid-item-content":"grid-item-content___NXm3S","drag-handle":"drag-handle___RY5YS",top:"top___SAT0Z",bottom:"bottom___To2lC",left:"left___yWaxu",right:"right___VejV4"},C=a(63642);function H(o,s){var t={data:s,xField:"field",yField:"value",seriesField:"category",isGroup:!0,isStack:!0};return new C.sg(o,t)}function A(o,s){var t={data:s,xField:"field",yField:"value",seriesField:"category",isStack:!0};return new C.x1(o,t)}function E(o,s){var t={data:s,angleField:"value",colorField:"field"};return new C.by(o,t)}var i=a(52676),T={a:{type:"bar"},b:{type:"line"},c:{type:"pie"}},z=[{field:"2021",value:100,category:"A"},{field:"2022",value:200,category:"B"},{field:"2023",value:150,category:"C"}],W=[{field:"A",value:40},{field:"B",value:30},{field:"C",value:30}],B=function(s){var t=s.id,L=(0,d.useState)({}),x=v()(L,2),f=x[0],S=x[1],l=(0,d.useRef)(null),y=(0,d.useState)(null),w=v()(y,2),c=w[0],m=w[1],b=function(p){var n=j()({id:p},T[p]);S(n)};return(0,d.useEffect)(function(){b(t)},[t]),(0,d.useEffect)(function(){if(l.current&&f.type){var u=null;switch(f.type){case"bar":u=H(l.current,z);break;case"line":u=A(l.current,z);break;case"pie":u=E(l.current,W);break;default:break}u&&u.render(),c&&c.destroy(),m(u)}return function(){c&&c.destroy()}},[f]),(0,i.jsx)("div",{id:t,ref:l,style:{width:"100%",height:"100%"}})},Y=B,J={},F=["s","w","e","n","sw","nw","se","ne"],k=function(){var s=(0,d.useState)(window.innerWidth),t=v()(s,2),L=t[0],x=t[1],f=(0,d.useState)([]),S=v()(f,2),l=S[0],y=S[1],w=(0,d.useState)(null),c=v()(w,2),m=c[0],b=c[1],u=function(){var h=[{id:"a",x:0,y:0,w:4,h:9},{id:"b",x:4,y:0,w:4,h:9},{id:"c",x:8,y:0,w:4,h:9}],g=h.map(function(e){return{i:e.id,x:e.x,y:e.y,w:e.w,h:e.h,resizeHandles:[]}});y(g)};(0,d.useEffect)(function(){u();var n=function(){return x(window.innerWidth)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}},[]);var p=function(h){var g=h.map(function(e){return{i:e.i,x:e.x,y:e.y,w:e.w,h:e.h,resizeHandles:m===e.i?F:[]}});y(g)};return(0,i.jsx)(G(),{className:"layout",layout:l,cols:12,rowHeight:30,width:L,onLayoutChange:p,draggableHandle:".".concat(r["drag-handle"]),children:l.map(function(n){return(0,i.jsx)("div",{style:{background:"#ccc"},onClick:function(){b(n.i),y(function(g){return g.map(function(e){return e.i===n.i?j()(j()({},e),{},{resizeHandles:F}):e})})},children:(0,i.jsxs)("div",{className:r["grid-item"],style:m===n.i?{outline:"1px solid #70c0ff"}:{},children:[(0,i.jsx)("div",{className:"".concat(r["drag-handle"]," ").concat(r.top)}),(0,i.jsx)("div",{className:"".concat(r["drag-handle"]," ").concat(r.bottom)}),(0,i.jsx)("div",{className:"".concat(r["drag-handle"]," ").concat(r.left)}),(0,i.jsx)("div",{className:"".concat(r["drag-handle"]," ").concat(r.right)}),(0,i.jsx)("div",{className:r["grid-item-content"],children:(0,i.jsx)(Y,{id:n.i})})]})},n.i)})})},I=k}}]);
