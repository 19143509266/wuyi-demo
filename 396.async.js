"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[396],{87325:function(fn,nt,s){s.d(nt,{Z:function(){return j}});var D=s(79482),M=s(75271),K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},ae=K,A=s(70507),U=function(he,Ge){return M.createElement(A.Z,(0,D.Z)({},he,{ref:Ge,icon:ae}))},He=M.forwardRef(U),j=He},44256:function(fn,nt,s){s.d(nt,{Z:function(){return St}});var D=s(79482),M=s(58673),K=s(76314),ae=s(49124),A=s(68881),U=s(82187),He=s.n(U),j=s(3083),P=s(75271),he=s(1260),Ge=s(15363),Mt=he.Z.ESC,t=he.Z.TAB;function Vt(v){var fe=v.visible,$=v.triggerRef,ie=v.onVisibleChange,Ie=v.autoFocus,z=v.overlayRef,X=P.useRef(!1),oe=function(){if(fe){var B,de;(B=$.current)===null||B===void 0||(de=B.focus)===null||de===void 0||de.call(B),ie==null||ie(!1)}},Ne=function(){var B;return(B=z.current)!==null&&B!==void 0&&B.focus?(z.current.focus(),X.current=!0,!0):!1},ye=function(B){switch(B.keyCode){case Mt:oe();break;case t:{var de=!1;X.current||(de=Ne()),de?B.preventDefault():oe();break}}};P.useEffect(function(){return fe?(window.addEventListener("keydown",ye),Ie&&(0,Ge.Z)(Ne,3),function(){window.removeEventListener("keydown",ye),X.current=!1}):function(){X.current=!1}},[fe])}var It=(0,P.forwardRef)(function(v,fe){var $=v.overlay,ie=v.arrow,Ie=v.prefixCls,z=(0,P.useMemo)(function(){var oe;return typeof $=="function"?oe=$():oe=$,oe},[$]),X=(0,j.sQ)(fe,z==null?void 0:z.ref);return P.createElement(P.Fragment,null,ie&&P.createElement("div",{className:"".concat(Ie,"-arrow")}),P.cloneElement(z,{ref:(0,j.Yr)(z)?X:void 0}))}),Rt=It,Ce={adjustX:1,adjustY:1},Me=[0,0],Ut={topLeft:{points:["bl","tl"],overflow:Ce,offset:[0,-4],targetOffset:Me},top:{points:["bc","tc"],overflow:Ce,offset:[0,-4],targetOffset:Me},topRight:{points:["br","tr"],overflow:Ce,offset:[0,-4],targetOffset:Me},bottomLeft:{points:["tl","bl"],overflow:Ce,offset:[0,4],targetOffset:Me},bottom:{points:["tc","bc"],overflow:Ce,offset:[0,4],targetOffset:Me},bottomRight:{points:["tr","br"],overflow:Ce,offset:[0,4],targetOffset:Me}},Y=Ut,zt=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function Ee(v,fe){var $,ie=v.arrow,Ie=ie===void 0?!1:ie,z=v.prefixCls,X=z===void 0?"rc-dropdown":z,oe=v.transitionName,Ne=v.animation,ye=v.align,Ye=v.placement,B=Ye===void 0?"bottomLeft":Ye,de=v.placements,dn=de===void 0?Y:de,le=v.getPopupContainer,Ke=v.showAction,rt=v.hideAction,at=v.overlayClassName,it=v.overlayStyle,Xe=v.visible,we=v.trigger,ot=we===void 0?["hover"]:we,Oe=v.autoFocus,Re=v.overlay,Ae=v.children,lt=v.onVisibleChange,jt=(0,ae.Z)(v,zt),Bt=P.useState(),Je=(0,K.Z)(Bt,2),Zt=Je[0],Qe=Je[1],ut="visible"in v?Xe:Zt,Pt=P.useRef(null),qe=P.useRef(null),st=P.useRef(null);P.useImperativeHandle(fe,function(){return Pt.current});var xt=function(ue){Qe(ue),lt==null||lt(ue)};Vt({visible:ut,triggerRef:st,onVisibleChange:xt,autoFocus:Oe,overlayRef:qe});var ct=function(ue){var _e=v.onOverlayClick;Qe(!1),_e&&_e(ue)},Et=function(){return P.createElement(Rt,{ref:qe,overlay:Re,prefixCls:X,arrow:Ie})},Le=function(){return typeof Re=="function"?Et:Et()},Ht=function(){var ue=v.minOverlayWidthMatchTrigger,_e=v.alignPoint;return"minOverlayWidthMatchTrigger"in v?ue:!_e},Nt=function(){var ue=v.openClassName;return ue!==void 0?ue:"".concat(X,"-open")},Gt=P.cloneElement(Ae,{className:He()(($=Ae.props)===null||$===void 0?void 0:$.className,ut&&Nt()),ref:(0,j.Yr)(Ae)?(0,j.sQ)(st,Ae.ref):void 0}),vt=rt;return!vt&&ot.indexOf("contextMenu")!==-1&&(vt=["click"]),P.createElement(A.Z,(0,D.Z)({builtinPlacements:dn},jt,{prefixCls:X,ref:Pt,popupClassName:He()(at,(0,M.Z)({},"".concat(X,"-show-arrow"),Ie)),popupStyle:it,action:ot,showAction:Ke,hideAction:vt,popupPlacement:B,popupAlign:ye,popupTransitionName:oe,popupAnimation:Ne,popupVisible:ut,stretch:Ht()?"minWidth":"",popup:Le(),onPopupVisibleChange:xt,onPopupClick:ct,getPopupContainer:le}),Gt)}var Wt=P.forwardRef(Ee),St=Wt},60186:function(fn,nt,s){s.d(nt,{iz:function(){return Xt},ck:function(){return ft},BW:function(){return Jt},sN:function(){return ft},Wd:function(){return wt},ZP:function(){return pr},Xl:function(){return $}});var D=s(79482),M=s(58673),K=s(13800),ae=s(87724),A=s(76314),U=s(49124),He=s(82187),j=s.n(He),P=s(76341),he=s(6522),Ge=s(19088),Mt=s(7432),t=s(75271),Vt=s(30967),It=t.createContext(null);function Rt(e,r){return e===void 0?null:"".concat(e,"-").concat(r)}function Ce(e){var r=t.useContext(It);return Rt(r,e)}var Me=s(95410),Ut=["children","locked"],Y=t.createContext(null);function zt(e,r){var a=(0,K.Z)({},e);return Object.keys(r).forEach(function(n){var i=r[n];i!==void 0&&(a[n]=i)}),a}function Ee(e){var r=e.children,a=e.locked,n=(0,U.Z)(e,Ut),i=t.useContext(Y),o=(0,Me.Z)(function(){return zt(i,n)},[i,n],function(l,u){return!a&&(l[0]!==u[0]||!(0,Ge.Z)(l[1],u[1],!0))});return t.createElement(Y.Provider,{value:o},r)}var Wt=[],St=t.createContext(null);function v(){return t.useContext(St)}var fe=t.createContext(Wt);function $(e){var r=t.useContext(fe);return t.useMemo(function(){return e!==void 0?[].concat((0,ae.Z)(r),[e]):r},[r,e])}var ie=t.createContext(null),Ie=t.createContext({}),z=Ie,X=s(39840);function oe(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if((0,X.Z)(e)){var a=e.nodeName.toLowerCase(),n=["input","select","textarea","button"].includes(a)||e.isContentEditable||a==="a"&&!!e.getAttribute("href"),i=e.getAttribute("tabindex"),o=Number(i),l=null;return i&&!Number.isNaN(o)?l=o:n&&l===null&&(l=0),n&&e.disabled&&(l=null),l!==null&&(l>=0||r&&l<0)}return!1}function Ne(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=(0,ae.Z)(e.querySelectorAll("*")).filter(function(n){return oe(n,r)});return oe(e,r)&&a.unshift(e),a}var ye=null;function Ye(){ye=document.activeElement}function B(){ye=null}function de(){if(ye)try{ye.focus()}catch(e){}}function dn(e,r){if(r.keyCode===9){var a=Ne(e),n=a[r.shiftKey?0:a.length-1],i=n===document.activeElement||e===document.activeElement;if(i){var o=a[r.shiftKey?a.length-1:0];o.focus(),r.preventDefault()}}}var le=s(1260),Ke=s(15363),rt=le.Z.LEFT,at=le.Z.RIGHT,it=le.Z.UP,Xe=le.Z.DOWN,we=le.Z.ENTER,ot=le.Z.ESC,Oe=le.Z.HOME,Re=le.Z.END,Ae=[it,Xe,rt,at];function lt(e,r,a,n){var i,o="prev",l="next",u="children",d="parent";if(e==="inline"&&n===we)return{inlineTrigger:!0};var c=(0,M.Z)((0,M.Z)({},it,o),Xe,l),R=(0,M.Z)((0,M.Z)((0,M.Z)((0,M.Z)({},rt,a?l:o),at,a?o:l),Xe,u),we,u),f=(0,M.Z)((0,M.Z)((0,M.Z)((0,M.Z)((0,M.Z)((0,M.Z)({},it,o),Xe,l),we,u),ot,d),rt,a?u:d),at,a?d:u),m={inline:c,horizontal:R,vertical:f,inlineSub:c,horizontalSub:f,verticalSub:f},I=(i=m["".concat(e).concat(r?"":"Sub")])===null||i===void 0?void 0:i[n];switch(I){case o:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function jt(e){for(var r=e;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Bt(e,r){for(var a=e||document.activeElement;a;){if(r.has(a))return a;a=a.parentElement}return null}function Je(e,r){var a=Ne(e,!0);return a.filter(function(n){return r.has(n)})}function Zt(e,r,a){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var i=Je(e,r),o=i.length,l=i.findIndex(function(u){return a===u});return n<0?l===-1?l=o-1:l-=1:n>0&&(l+=1),l=(l+o)%o,i[l]}var Qe=function(r,a){var n=new Set,i=new Map,o=new Map;return r.forEach(function(l){var u=document.querySelector("[data-menu-id='".concat(Rt(a,l),"']"));u&&(n.add(u),o.set(u,l),i.set(l,u))}),{elements:n,key2element:i,element2key:o}};function ut(e,r,a,n,i,o,l,u,d,c){var R=t.useRef(),f=t.useRef();f.current=r;var m=function(){Ke.Z.cancel(R.current)};return t.useEffect(function(){return function(){m()}},[]),function(I){var C=I.which;if([].concat(Ae,[we,ot,Oe,Re]).includes(C)){var x=o(),y=Qe(x,n),S=y,L=S.elements,p=S.key2element,h=S.element2key,Z=p.get(r),g=Bt(Z,L),E=h.get(g),H=lt(e,l(E,!0).length===1,a,C);if(!H&&C!==Oe&&C!==Re)return;(Ae.includes(C)||[Oe,Re].includes(C))&&I.preventDefault();var w=function(q){if(q){var ce=q,_=q.querySelector("a");_!=null&&_.getAttribute("href")&&(ce=_);var pe=h.get(q);u(pe),m(),R.current=(0,Ke.Z)(function(){f.current===pe&&ce.focus()})}};if([Oe,Re].includes(C)||H.sibling||!g){var J;!g||e==="inline"?J=i.current:J=jt(g);var F,V=Je(J,L);C===Oe?F=V[0]:C===Re?F=V[V.length-1]:F=Zt(J,L,g,H.offset),w(F)}else if(H.inlineTrigger)d(E);else if(H.offset>0)d(E,!0),m(),R.current=(0,Ke.Z)(function(){y=Qe(x,n);var me=g.getAttribute("aria-controls"),q=document.getElementById(me),ce=Zt(q,y.elements);w(ce)},5);else if(H.offset<0){var Q=l(E,!0),ne=Q[Q.length-2],se=p.get(ne);d(ne,!1),w(se)}}c==null||c(I)}}function Pt(e){Promise.resolve().then(e)}var qe="__RC_UTIL_PATH_SPLIT__",st=function(r){return r.join(qe)},xt=function(r){return r.split(qe)},ct="rc-menu-more";function Et(){var e=t.useState({}),r=(0,A.Z)(e,2),a=r[1],n=(0,t.useRef)(new Map),i=(0,t.useRef)(new Map),o=t.useState([]),l=(0,A.Z)(o,2),u=l[0],d=l[1],c=(0,t.useRef)(0),R=(0,t.useRef)(!1),f=function(){R.current||a({})},m=(0,t.useCallback)(function(p,h){var Z=st(h);i.current.set(Z,p),n.current.set(p,Z),c.current+=1;var g=c.current;Pt(function(){g===c.current&&f()})},[]),I=(0,t.useCallback)(function(p,h){var Z=st(h);i.current.delete(Z),n.current.delete(p)},[]),C=(0,t.useCallback)(function(p){d(p)},[]),x=(0,t.useCallback)(function(p,h){var Z=n.current.get(p)||"",g=xt(Z);return h&&u.includes(g[0])&&g.unshift(ct),g},[u]),y=(0,t.useCallback)(function(p,h){return p.filter(function(Z){return Z!==void 0}).some(function(Z){var g=x(Z,!0);return g.includes(h)})},[x]),S=function(){var h=(0,ae.Z)(n.current.keys());return u.length&&h.push(ct),h},L=(0,t.useCallback)(function(p){var h="".concat(n.current.get(p)).concat(qe),Z=new Set;return(0,ae.Z)(i.current.keys()).forEach(function(g){g.startsWith(h)&&Z.add(i.current.get(g))}),Z},[]);return t.useEffect(function(){return function(){R.current=!0}},[]),{registerPath:m,unregisterPath:I,refreshOverflowKeys:C,isSubPathKey:y,getKeyPath:x,getKeys:S,getSubPathKeys:L}}function Le(e){var r=t.useRef(e);r.current=e;var a=t.useCallback(function(){for(var n,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=r.current)===null||n===void 0?void 0:n.call.apply(n,[r].concat(o))},[]);return e?a:void 0}var Ht=Math.random().toFixed(5).toString().slice(2),Nt=0;function Gt(e){var r=(0,he.Z)(e,{value:e}),a=(0,A.Z)(r,2),n=a[0],i=a[1];return t.useEffect(function(){Nt+=1;var o="".concat(Ht,"-").concat(Nt);i("rc-menu-uuid-".concat(o))},[]),n}var vt=s(9175),De=s(96675),ue=s(28318),_e=s(43705),mn=s(2021),Fn=s(3083);function pn(e,r,a,n){var i=t.useContext(Y),o=i.activeKey,l=i.onActive,u=i.onInactive,d={active:o===e};return r||(d.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),l(e)},d.onMouseLeave=function(c){n==null||n({key:e,domEvent:c}),u(e)}),d}function gn(e){var r=t.useContext(Y),a=r.mode,n=r.rtl,i=r.inlineIndent;if(a!=="inline")return null;var o=e;return n?{paddingRight:o*i}:{paddingLeft:o*i}}function hn(e){var r=e.icon,a=e.props,n=e.children,i;return r===null||r===!1?null:(typeof r=="function"?i=t.createElement(r,(0,K.Z)({},a)):typeof r!="boolean"&&(i=r),i||n||null)}var Vn=["item"];function Kt(e){var r=e.item,a=(0,U.Z)(e,Vn);return Object.defineProperty(a,"item",{get:function(){return(0,Mt.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),a}var Un=["title","attribute","elementRef"],zn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Wn=["active"],jn=function(e){(0,ue.Z)(a,e);var r=(0,_e.Z)(a);function a(){return(0,vt.Z)(this,a),r.apply(this,arguments)}return(0,De.Z)(a,[{key:"render",value:function(){var i=this.props,o=i.title,l=i.attribute,u=i.elementRef,d=(0,U.Z)(i,Un),c=(0,mn.Z)(d,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,Mt.ZP)(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(P.Z.Item,(0,D.Z)({},l,{title:typeof o=="string"?o:void 0},c,{ref:u}))}}]),a}(t.Component),Bn=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.eventKey,o=e.warnKey,l=e.disabled,u=e.itemIcon,d=e.children,c=e.role,R=e.onMouseEnter,f=e.onMouseLeave,m=e.onClick,I=e.onKeyDown,C=e.onFocus,x=(0,U.Z)(e,zn),y=Ce(i),S=t.useContext(Y),L=S.prefixCls,p=S.onItemClick,h=S.disabled,Z=S.overflowDisabled,g=S.itemIcon,E=S.selectedKeys,H=S.onActive,w=t.useContext(z),J=w._internalRenderMenuItem,F="".concat(L,"-item"),V=t.useRef(),Q=t.useRef(),ne=h||l,se=(0,Fn.x1)(r,Q),me=$(i),q=function(W){return{key:i,keyPath:(0,ae.Z)(me).reverse(),item:V.current,domEvent:W}},ce=u||g,_=pn(i,ne,R,f),pe=_.active,$e=(0,U.Z)(_,Wn),Se=E.includes(i),ke=gn(me.length),Fe=function(W){if(!ne){var ge=q(W);m==null||m(Kt(ge)),p(ge)}},G=function(W){if(I==null||I(W),W.which===le.Z.ENTER){var ge=q(W);m==null||m(Kt(ge)),p(ge)}},re=function(W){H(i),C==null||C(W)},et={};e.role==="option"&&(et["aria-selected"]=Se);var Ve=t.createElement(jn,(0,D.Z)({ref:V,elementRef:se,role:c===null?"none":c||"menuitem",tabIndex:l?null:-1,"data-menu-id":Z&&y?null:y},x,$e,et,{component:"li","aria-disabled":l,style:(0,K.Z)((0,K.Z)({},ke),a),className:j()(F,(0,M.Z)((0,M.Z)((0,M.Z)({},"".concat(F,"-active"),pe),"".concat(F,"-selected"),Se),"".concat(F,"-disabled"),ne),n),onClick:Fe,onKeyDown:G,onFocus:re}),d,t.createElement(hn,{props:(0,K.Z)((0,K.Z)({},e),{},{isSelected:Se}),icon:ce}));return J&&(Ve=J(Ve,e,{selected:Se})),Ve});function Hn(e,r){var a=e.eventKey,n=v(),i=$(a);return t.useEffect(function(){if(n)return n.registerPath(a,i),function(){n.unregisterPath(a,i)}},[i]),n?null:t.createElement(Bn,(0,D.Z)({},e,{ref:r}))}var ft=t.forwardRef(Hn),Gn=["className","children"],Yn=function(r,a){var n=r.className,i=r.children,o=(0,U.Z)(r,Gn),l=t.useContext(Y),u=l.prefixCls,d=l.mode,c=l.rtl;return t.createElement("ul",(0,D.Z)({className:j()(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(d==="inline"?"inline":"vertical"),n),role:"menu"},o,{"data-menu-list":!0,ref:a}),i)},Cn=t.forwardRef(Yn);Cn.displayName="SubMenuList";var yn=Cn,Xn=s(22615);function Yt(e,r){return(0,Xn.Z)(e).map(function(a,n){if(t.isValidElement(a)){var i,o,l=a.key,u=(i=(o=a.props)===null||o===void 0?void 0:o.eventKey)!==null&&i!==void 0?i:l,d=u==null;d&&(u="tmp_key-".concat([].concat((0,ae.Z)(r),[n]).join("-")));var c={key:u,eventKey:u};return t.cloneElement(a,c)}return a})}var Jn=s(68881),k={adjustX:1,adjustY:1},Qn={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},leftTop:{points:["tr","tl"],overflow:k},leftBottom:{points:["br","bl"],overflow:k},rightTop:{points:["tl","tr"],overflow:k},rightBottom:{points:["bl","br"],overflow:k}},qn={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},rightTop:{points:["tr","tl"],overflow:k},rightBottom:{points:["br","bl"],overflow:k},leftTop:{points:["tl","tr"],overflow:k},leftBottom:{points:["bl","br"],overflow:k}},Hr=null;function bn(e,r,a){if(r)return r;if(a)return a[e]||a.other}var _n={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function er(e){var r=e.prefixCls,a=e.visible,n=e.children,i=e.popup,o=e.popupStyle,l=e.popupClassName,u=e.popupOffset,d=e.disabled,c=e.mode,R=e.onVisibleChange,f=t.useContext(Y),m=f.getPopupContainer,I=f.rtl,C=f.subMenuOpenDelay,x=f.subMenuCloseDelay,y=f.builtinPlacements,S=f.triggerSubMenuAction,L=f.forceSubMenuRender,p=f.rootClassName,h=f.motion,Z=f.defaultMotions,g=t.useState(!1),E=(0,A.Z)(g,2),H=E[0],w=E[1],J=I?(0,K.Z)((0,K.Z)({},qn),y):(0,K.Z)((0,K.Z)({},Qn),y),F=_n[c],V=bn(c,h,Z),Q=t.useRef(V);c!=="inline"&&(Q.current=V);var ne=(0,K.Z)((0,K.Z)({},Q.current),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),se=t.useRef();return t.useEffect(function(){return se.current=(0,Ke.Z)(function(){w(a)}),function(){Ke.Z.cancel(se.current)}},[a]),t.createElement(Jn.Z,{prefixCls:r,popupClassName:j()("".concat(r,"-popup"),(0,M.Z)({},"".concat(r,"-rtl"),I),l,p),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:m,builtinPlacements:J,popupPlacement:F,popupVisible:H,popup:i,popupStyle:o,popupAlign:u&&{offset:u},action:d?[]:[S],mouseEnterDelay:C,mouseLeaveDelay:x,onPopupVisibleChange:R,forceRender:L,popupMotion:ne,fresh:!0},n)}var tr=s(88522);function nr(e){var r=e.id,a=e.open,n=e.keyPath,i=e.children,o="inline",l=t.useContext(Y),u=l.prefixCls,d=l.forceSubMenuRender,c=l.motion,R=l.defaultMotions,f=l.mode,m=t.useRef(!1);m.current=f===o;var I=t.useState(!m.current),C=(0,A.Z)(I,2),x=C[0],y=C[1],S=m.current?a:!1;t.useEffect(function(){m.current&&y(!1)},[f]);var L=(0,K.Z)({},bn(o,c,R));n.length>1&&(L.motionAppear=!1);var p=L.onVisibleChanged;return L.onVisibleChanged=function(h){return!m.current&&!h&&y(!0),p==null?void 0:p(h)},x?null:t.createElement(Ee,{mode:o,locked:!m.current},t.createElement(tr.ZP,(0,D.Z)({visible:S},L,{forceRender:d,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(h){var Z=h.className,g=h.style;return t.createElement(yn,{id:r,className:Z,style:g},i)}))}var rr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],ar=["active"],ir=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.title,o=e.eventKey,l=e.warnKey,u=e.disabled,d=e.internalPopupClose,c=e.children,R=e.itemIcon,f=e.expandIcon,m=e.popupClassName,I=e.popupOffset,C=e.popupStyle,x=e.onClick,y=e.onMouseEnter,S=e.onMouseLeave,L=e.onTitleClick,p=e.onTitleMouseEnter,h=e.onTitleMouseLeave,Z=(0,U.Z)(e,rr),g=Ce(o),E=t.useContext(Y),H=E.prefixCls,w=E.mode,J=E.openKeys,F=E.disabled,V=E.overflowDisabled,Q=E.activeKey,ne=E.selectedKeys,se=E.itemIcon,me=E.expandIcon,q=E.onItemClick,ce=E.onOpenChange,_=E.onActive,pe=t.useContext(z),$e=pe._internalRenderSubMenuItem,Se=t.useContext(ie),ke=Se.isSubPathKey,Fe=$(),G="".concat(H,"-submenu"),re=F||u,et=t.useRef(),Ve=t.useRef(),Ue=R!=null?R:se,W=f!=null?f:me,ge=J.includes(o),Ze=!V&&ge,Ot=ke(ne,o),tt=pn(o,re,p,h),ze=tt.active,qt=(0,U.Z)(tt,ar),In=t.useState(!1),_t=(0,A.Z)(In,2),mt=_t[0],At=_t[1],pt=function(T){re||At(T)},en=function(T){pt(!0),y==null||y({key:o,domEvent:T})},tn=function(T){pt(!1),S==null||S({key:o,domEvent:T})},gt=t.useMemo(function(){return ze||(w!=="inline"?mt||ke([Q],o):!1)},[w,ze,Q,mt,o,ke]),be=gn(Fe.length),nn=function(T){re||(L==null||L({key:o,domEvent:T}),w==="inline"&&ce(o,!ge))},rn=Le(function(ve){x==null||x(Kt(ve)),q(ve)}),Lt=function(T){w!=="inline"&&ce(o,T)},Dt=function(){_(o)},ht=g&&"".concat(g,"-popup"),Pe=t.createElement("div",(0,D.Z)({role:"menuitem",style:be,className:"".concat(G,"-title"),tabIndex:re?null:-1,ref:et,title:typeof i=="string"?i:null,"data-menu-id":V&&g?null:g,"aria-expanded":Ze,"aria-haspopup":!0,"aria-controls":ht,"aria-disabled":re,onClick:nn,onFocus:Dt},qt),i,t.createElement(hn,{icon:w!=="horizontal"?W:void 0,props:(0,K.Z)((0,K.Z)({},e),{},{isOpen:Ze,isSubMenu:!0})},t.createElement("i",{className:"".concat(G,"-arrow")}))),We=t.useRef(w);if(w!=="inline"&&Fe.length>1?We.current="vertical":We.current=w,!V){var je=We.current;Pe=t.createElement(er,{mode:je,prefixCls:G,visible:!d&&Ze&&w!=="inline",popupClassName:m,popupOffset:I,popupStyle:C,popup:t.createElement(Ee,{mode:je==="horizontal"?"vertical":je},t.createElement(yn,{id:ht,ref:Ve},c)),disabled:re,onVisibleChange:Lt},Pe)}var Ct=t.createElement(P.Z.Item,(0,D.Z)({ref:r,role:"none"},Z,{component:"li",style:a,className:j()(G,"".concat(G,"-").concat(w),n,(0,M.Z)((0,M.Z)((0,M.Z)((0,M.Z)({},"".concat(G,"-open"),Ze),"".concat(G,"-active"),gt),"".concat(G,"-selected"),Ot),"".concat(G,"-disabled"),re)),onMouseEnter:en,onMouseLeave:tn}),Pe,!V&&t.createElement(nr,{id:ht,open:Ze,keyPath:Fe},c));return $e&&(Ct=$e(Ct,e,{selected:Ot,active:gt,open:Ze,disabled:re})),t.createElement(Ee,{onItemClick:rn,mode:w==="horizontal"?"vertical":w,itemIcon:Ue,expandIcon:W},Ct)}),or=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=$(a),o=Yt(n,i),l=v();t.useEffect(function(){if(l)return l.registerPath(a,i),function(){l.unregisterPath(a,i)}},[i]);var u;return l?u=o:u=t.createElement(ir,(0,D.Z)({ref:r},e),o),t.createElement(fe.Provider,{value:i},u)}),wt=or,lr=s(74468);function Xt(e){var r=e.className,a=e.style,n=t.useContext(Y),i=n.prefixCls,o=v();return o?null:t.createElement("li",{role:"separator",className:j()("".concat(i,"-item-divider"),r),style:a})}var ur=["className","title","eventKey","children"],sr=t.forwardRef(function(e,r){var a=e.className,n=e.title,i=e.eventKey,o=e.children,l=(0,U.Z)(e,ur),u=t.useContext(Y),d=u.prefixCls,c="".concat(d,"-item-group");return t.createElement("li",(0,D.Z)({ref:r,role:"presentation"},l,{onClick:function(f){return f.stopPropagation()},className:j()(c,a)}),t.createElement("div",{role:"presentation",className:"".concat(c,"-title"),title:typeof n=="string"?n:void 0},n),t.createElement("ul",{role:"group",className:"".concat(c,"-list")},o))}),cr=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=$(a),o=Yt(n,i),l=v();return l?o:t.createElement(sr,(0,D.Z)({ref:r},(0,mn.Z)(e,["warnKey"])),o)}),Jt=cr,vr=["label","children","key","type","extra"];function Qt(e,r,a){var n=r.item,i=r.group,o=r.submenu,l=r.divider;return(e||[]).map(function(u,d){if(u&&(0,lr.Z)(u)==="object"){var c=u,R=c.label,f=c.children,m=c.key,I=c.type,C=c.extra,x=(0,U.Z)(c,vr),y=m!=null?m:"tmp-".concat(d);return f||I==="group"?I==="group"?t.createElement(i,(0,D.Z)({key:y},x,{title:R}),Qt(f,r,a)):t.createElement(o,(0,D.Z)({key:y},x,{title:R}),Qt(f,r,a)):I==="divider"?t.createElement(l,(0,D.Z)({key:y},x)):t.createElement(n,(0,D.Z)({key:y},x),R,(!!C||C===0)&&t.createElement("span",{className:"".concat(a,"-item-extra")},C))}return null}).filter(function(u){return u})}function Mn(e,r,a,n,i){var o=e,l=(0,K.Z)({divider:Xt,item:ft,group:Jt,submenu:wt},n);return r&&(o=Qt(r,l,i)),Yt(o,a)}var fr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],Te=[],dr=t.forwardRef(function(e,r){var a,n=e,i=n.prefixCls,o=i===void 0?"rc-menu":i,l=n.rootClassName,u=n.style,d=n.className,c=n.tabIndex,R=c===void 0?0:c,f=n.items,m=n.children,I=n.direction,C=n.id,x=n.mode,y=x===void 0?"vertical":x,S=n.inlineCollapsed,L=n.disabled,p=n.disabledOverflow,h=n.subMenuOpenDelay,Z=h===void 0?.1:h,g=n.subMenuCloseDelay,E=g===void 0?.1:g,H=n.forceSubMenuRender,w=n.defaultOpenKeys,J=n.openKeys,F=n.activeKey,V=n.defaultActiveFirst,Q=n.selectable,ne=Q===void 0?!0:Q,se=n.multiple,me=se===void 0?!1:se,q=n.defaultSelectedKeys,ce=n.selectedKeys,_=n.onSelect,pe=n.onDeselect,$e=n.inlineIndent,Se=$e===void 0?24:$e,ke=n.motion,Fe=n.defaultMotions,G=n.triggerSubMenuAction,re=G===void 0?"hover":G,et=n.builtinPlacements,Ve=n.itemIcon,Ue=n.expandIcon,W=n.overflowedIndicator,ge=W===void 0?"...":W,Ze=n.overflowedIndicatorPopupClassName,Ot=n.getPopupContainer,tt=n.onClick,ze=n.onOpenChange,qt=n.onKeyDown,In=n.openAnimation,_t=n.openTransitionName,mt=n._internalRenderMenuItem,At=n._internalRenderSubMenuItem,pt=n._internalComponents,en=(0,U.Z)(n,fr),tn=t.useMemo(function(){return[Mn(m,f,Te,pt,o),Mn(m,f,Te,{},o)]},[m,f,pt]),gt=(0,A.Z)(tn,2),be=gt[0],nn=gt[1],rn=t.useState(!1),Lt=(0,A.Z)(rn,2),Dt=Lt[0],ht=Lt[1],Pe=t.useRef(),We=Gt(C),je=I==="rtl",Ct=(0,he.Z)(w,{value:J,postState:function(b){return b||Te}}),ve=(0,A.Z)(Ct,2),T=ve[0],Rn=ve[1],an=function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function ee(){Rn(b),ze==null||ze(b)}N?(0,Vt.flushSync)(ee):ee()},gr=t.useState(T),Sn=(0,A.Z)(gr,2),hr=Sn[0],Cr=Sn[1],on=t.useRef(!1),yr=t.useMemo(function(){return(y==="inline"||y==="vertical")&&S?["vertical",S]:[y,!1]},[y,S]),Zn=(0,A.Z)(yr,2),Tt=Zn[0],ln=Zn[1],Pn=Tt==="inline",br=t.useState(Tt),xn=(0,A.Z)(br,2),xe=xn[0],Mr=xn[1],Ir=t.useState(ln),En=(0,A.Z)(Ir,2),Rr=En[0],Sr=En[1];t.useEffect(function(){Mr(Tt),Sr(ln),on.current&&(Pn?Rn(hr):an(Te))},[Tt,ln]);var Zr=t.useState(0),Nn=(0,A.Z)(Zr,2),$t=Nn[0],Pr=Nn[1],un=$t>=be.length-1||xe!=="horizontal"||p;t.useEffect(function(){Pn&&Cr(T)},[T]),t.useEffect(function(){return on.current=!0,function(){on.current=!1}},[]);var Be=Et(),Kn=Be.registerPath,wn=Be.unregisterPath,xr=Be.refreshOverflowKeys,On=Be.isSubPathKey,Er=Be.getKeyPath,An=Be.getKeys,Nr=Be.getSubPathKeys,Kr=t.useMemo(function(){return{registerPath:Kn,unregisterPath:wn}},[Kn,wn]),wr=t.useMemo(function(){return{isSubPathKey:On}},[On]);t.useEffect(function(){xr(un?Te:be.slice($t+1).map(function(O){return O.key}))},[$t,un]);var Or=(0,he.Z)(F||V&&((a=be[0])===null||a===void 0?void 0:a.key),{value:F}),Ln=(0,A.Z)(Or,2),yt=Ln[0],sn=Ln[1],Ar=Le(function(O){sn(O)}),Lr=Le(function(){sn(void 0)});(0,t.useImperativeHandle)(r,function(){return{list:Pe.current,focus:function(b){var N,ee=An(),te=Qe(ee,We),Ft=te.elements,cn=te.key2element,jr=te.element2key,$n=Je(Pe.current,Ft),kn=yt!=null?yt:$n[0]?jr.get($n[0]):(N=be.find(function(Br){return!Br.props.disabled}))===null||N===void 0?void 0:N.key,bt=cn.get(kn);if(kn&&bt){var vn;bt==null||(vn=bt.focus)===null||vn===void 0||vn.call(bt,b)}}}});var Dr=(0,he.Z)(q||[],{value:ce,postState:function(b){return Array.isArray(b)?b:b==null?Te:[b]}}),Dn=(0,A.Z)(Dr,2),kt=Dn[0],Tr=Dn[1],$r=function(b){if(ne){var N=b.key,ee=kt.includes(N),te;me?ee?te=kt.filter(function(cn){return cn!==N}):te=[].concat((0,ae.Z)(kt),[N]):te=[N],Tr(te);var Ft=(0,K.Z)((0,K.Z)({},b),{},{selectedKeys:te});ee?pe==null||pe(Ft):_==null||_(Ft)}!me&&T.length&&xe!=="inline"&&an(Te)},kr=Le(function(O){tt==null||tt(Kt(O)),$r(O)}),Tn=Le(function(O,b){var N=T.filter(function(te){return te!==O});if(b)N.push(O);else if(xe!=="inline"){var ee=Nr(O);N=N.filter(function(te){return!ee.has(te)})}(0,Ge.Z)(T,N,!0)||an(N,!0)}),Fr=function(b,N){var ee=N!=null?N:!T.includes(b);Tn(b,ee)},Vr=ut(xe,yt,je,We,Pe,An,Er,sn,Fr,qt);t.useEffect(function(){ht(!0)},[]);var Ur=t.useMemo(function(){return{_internalRenderMenuItem:mt,_internalRenderSubMenuItem:At}},[mt,At]),zr=xe!=="horizontal"||p?be:be.map(function(O,b){return t.createElement(Ee,{key:O.key,overflowDisabled:b>$t},O)}),Wr=t.createElement(P.Z,(0,D.Z)({id:C,ref:Pe,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:ft,className:j()(o,"".concat(o,"-root"),"".concat(o,"-").concat(xe),d,(0,M.Z)((0,M.Z)({},"".concat(o,"-inline-collapsed"),Rr),"".concat(o,"-rtl"),je),l),dir:I,style:u,role:"menu",tabIndex:R,data:zr,renderRawItem:function(b){return b},renderRawRest:function(b){var N=b.length,ee=N?be.slice(-N):null;return t.createElement(wt,{eventKey:ct,title:ge,disabled:un,internalPopupClose:N===0,popupClassName:Ze},ee)},maxCount:xe!=="horizontal"||p?P.Z.INVALIDATE:P.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(b){Pr(b)},onKeyDown:Vr},en));return t.createElement(z.Provider,{value:Ur},t.createElement(It.Provider,{value:We},t.createElement(Ee,{prefixCls:o,rootClassName:l,mode:xe,openKeys:T,rtl:je,disabled:L,motion:Dt?ke:null,defaultMotions:Dt?Fe:null,activeKey:yt,onActive:Ar,onInactive:Lr,selectedKeys:kt,inlineIndent:Se,subMenuOpenDelay:Z,subMenuCloseDelay:E,forceSubMenuRender:H,builtinPlacements:et,triggerSubMenuAction:re,getPopupContainer:Ot,itemIcon:Ve,expandIcon:Ue,onItemClick:kr,onOpenChange:Tn},t.createElement(ie.Provider,{value:wr},Wr),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(St.Provider,{value:Kr},nn)))))}),mr=dr,dt=mr;dt.Item=ft,dt.SubMenu=wt,dt.ItemGroup=Jt,dt.Divider=Xt;var pr=dt}}]);
