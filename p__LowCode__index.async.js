"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12],{24541:function(Ye,O,i){i.r(O),i.d(O,{default:function(){return Ke}});var K=i(15558),H=i.n(K),Q=i(26068),r=i.n(Q),Y=i(48305),Z=i.n(Y),F=i(75271),q={container:"container___zfp_d"},V=i(99275),_=i(8212),E={container:"container___v4ahw",groupTitle:"groupTitle___EOhGN",divider:"divider___pP60E",componentGroup:"componentGroup___FFg_d",componentItem:"componentItem___JLfXp"},a=i(52676),ee=[{key:"general",title:"\u901A\u7528",components:[{label:"\u6309\u94AE",value:"Button",type:"button"},{label:"\u56FE\u6807",value:"Icon",type:"icon"}]},{key:"layout",title:"\u5E03\u5C40",components:[{label:"\u5206\u5272\u7EBF",value:"Divider",type:"layout"}]},{key:"data-entry",title:"\u6570\u636E\u5F55\u5165",components:[{label:"\u7EA7\u8054\u9009\u62E9",value:"Cascader",type:"form-item"},{label:"\u591A\u9009\u6846",value:"Checkbox",type:"form-item"},{label:"\u65E5\u671F\u9009\u62E9\u6846",value:"DatePicker",type:"form-item"},{label:"\u8F93\u5165\u6846",value:"Input",type:"form-item"},{label:"\u6570\u5B57\u8F93\u5165\u6846",value:"InputNumber",type:"form-item"},{label:"\u5355\u9009\u6846",value:"Radio",type:"form-item"},{label:"\u8BC4\u5206",value:"Rate",type:"form-item"},{label:"\u9009\u62E9\u5668",value:"Select",type:"form-item"},{label:"\u6ED1\u52A8\u8F93\u5165\u6761",value:"Slider",type:"form-item"},{label:"\u5F00\u5173",value:"Switch",type:"form-item"},{label:"\u65F6\u95F4\u9009\u62E9\u6846",value:"TimePicker",type:"form-item"},{label:"\u6811\u9009\u62E9",value:"TreeSelect",type:"form-item"},{label:"\u4E0A\u4F20",value:"Upload",type:"form-item"}]},{key:"data-display",title:"\u6570\u636E\u5C55\u793A",components:[{label:"\u5934\u50CF",value:"Avatar",type:"data-display"},{label:"\u65E5\u5386",value:"Calendar",type:"data-display"},{label:"\u5361\u7247",value:"Card",type:"data-display"},{label:"\u8D70\u9A6C\u706F",value:"Carousel",type:"data-display"},{label:"\u6298\u53E0\u9762\u677F",value:"Collapse",type:"data-display"},{label:"\u63CF\u8FF0\u5217\u8868",value:"Descriptions",type:"data-display"},{label:"\u7A7A\u72B6\u6001",value:"Empty",type:"data-display"},{label:"\u56FE\u7247",value:"Image",type:"data-display"},{label:"\u5217\u8868",value:"List",type:"data-display"},{label:"\u6C14\u6CE1\u5361\u7247",value:"Popover",type:"data-display"},{label:"\u4E8C\u7EF4\u7801",value:"QRCode",type:"data-display"},{label:"\u5206\u6BB5\u63A7\u5236\u5668",value:"Segmented",type:"data-display"},{label:"\u7EDF\u8BA1\u6570\u503C",value:"Statistic",type:"data-display"},{label:"\u8868\u683C",value:"Table",type:"data-display"},{label:"\u6807\u7B7E\u9875",value:"Tabs",type:"data-display"},{label:"\u6807\u7B7E",value:"Tag",type:"data-display"},{label:"\u65F6\u95F4\u8F74",value:"Timeline",type:"data-display"},{label:"\u6587\u5B57\u63D0\u793A",value:"Tooltip",type:"data-display"},{label:"\u6F2B\u6E38\u5F0F\u5F15\u5BFC",value:"Tour",type:"data-display"},{label:"\u6811\u5F62\u63A7\u4EF6",value:"Tree",type:"data-display"}]}],ae=function(e){var t=e.handleComponentDragEnd;return(0,a.jsx)("div",{className:E.container,children:ee.map(function(n){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:E.groupTitle,children:n.title}),(0,a.jsx)(_.Z,{className:E.divider}),(0,a.jsx)("div",{className:E.componentGroup,children:n.components.map(function(l){return(0,a.jsx)("div",{className:E.componentItem,draggable:!0,onDragEnd:function(d){return t(d,r()(r()({},l),{},{componentCategory:"form"}))},children:l.label},l.value)})})]},n.key)})})},te=ae,N=260,P=["s","w","e","n","sw","nw","se","ne"],le=[{label:"\u9ED8\u8BA4",value:"default"},{label:"\u4E3B\u8981",value:"primary"},{label:"\u865A\u7EBF",value:"dashed"},{label:"\u94FE\u63A5",value:"link"},{label:"\u6587\u5B57",value:"text"}],ne=[{label:"\u5F53\u524D\u7A97\u53E3",value:"_self"},{label:"\u65B0\u7A97\u53E3",value:"_blank"}],oe=[{label:"\u5927",value:"large"},{label:"\u4E2D",value:"middle"},{label:"\u5C0F",value:"small"}],re=[{label:"\u9ED8\u8BA4",value:"default"},{label:"\u5706\u5F62",value:"circle"},{label:"\u5706\u89D2",value:"round"}],G={Button:{props:{block:!0,danger:!1,disabled:!1,ghost:!1,href:null,icon:null,iconPosition:"start",shape:"default",size:"middle",target:"_blank",type:"default"},customAttr:{label:"\u6309 \u94AE",event:null},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"},{type:"select",label:"\u6309\u94AE\u7C7B\u578B",name:"type",options:le,attr:"props"},{type:"switch",label:"\u5371\u9669",name:"danger",attr:"props"},{type:"input",label:"\u94FE\u63A5",name:"href",attr:"props"},{type:"radio",label:"\u6253\u5F00\u65B9\u5F0F",name:"target",options:ne,attr:"props"},{type:"radio",label:"\u6309\u94AE\u5927\u5C0F",name:"size",options:oe,attr:"props"},{type:"radio",label:"\u6309\u94AE\u5F62\u72B6",name:"shape",options:re,attr:"props"},{type:"radio",label:"\u4E8B\u4EF6",name:"event",options:[{label:"\u63D0\u4EA4\u8868\u5355",value:"submit"},{label:"\u91CD\u7F6E\u8868\u5355",value:"reset"}],attr:"customAttr"}]},Cascader:{props:{options:[{label:"\u9009\u98791",value:"1",key:"1",children:[{label:"\u9009\u98791-1",value:"1-1",key:"1-1",children:[]}]}],placeholder:"\u8BF7\u9009\u62E9",showSearch:!1,multiple:!1,expandTrigger:"click"},customAttr:{dataMode:"static",label:"Cascader"},configItems:[{type:"radio",label:"",name:"dataMode",options:[{label:"\u9759\u6001\u6570\u636E",value:"static"},{label:"\u52A8\u6001\u6570\u636E",value:"dynamic"}],attr:"customAttr"},{type:"tree-datasource",name:"options"},{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"},{type:"input",label:"\u5360\u4F4D\u7B26",name:"placeholder",attr:"props"},{type:"switch",label:"\u641C\u7D22",name:"showSearch",attr:"props"},{type:"switch",label:"\u591A\u9009",name:"multiple",attr:"props"},{type:"radio",label:"\u6B21\u7EA7\u83DC\u5355\u5C55\u5F00\u65B9\u5F0F",name:"expandTrigger",options:[{label:"\u70B9\u51FB",value:"click"},{label:"\u79FB\u5165",value:"hover"}],attr:"props"}]},Checkbox:{props:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},customAttr:{label:"Checkbox",dataMode:"static"},configItems:[{type:"radio",label:"",name:"dataMode",options:[{label:"\u9759\u6001\u6570\u636E",value:"static"},{label:"\u52A8\u6001\u6570\u636E",value:"dynamic"}],attr:"customAttr"},{type:"datasource",name:"options"},{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},DatePicker:{props:{},customAttr:{label:"DatePicker"},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},Input:{props:{addonBefore:null,addonAfter:null,maxLength:null,showCount:!1,allowClear:!1,placeholder:"\u8BF7\u8F93\u5165"},customAttr:{label:"Input"},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"},{type:"input",label:"\u5360\u4F4D\u7B26",name:"placeholder",attr:"props"},{type:"input",label:"\u524D\u7F6E\u6807\u7B7E",name:"addonBefore",attr:"props"},{type:"input",label:"\u540E\u7F6E\u6807\u7B7E",name:"addonAfter",attr:"props"},{type:"input-number",label:"\u6700\u5927\u957F\u5EA6",name:"maxLength",attr:"props"},{type:"switch",label:"\u5C55\u793A\u5B57\u6570",name:"showCount",attr:"props"},{type:"switch",label:"\u53EF\u6E05\u9664",name:"allowClear",attr:"props"}]},InputNumber:{props:{},customAttr:{label:"InputNumber"},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},Radio:{props:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},customAttr:{label:"Radio",dataMode:"static"},configItems:[{type:"radio",label:"",name:"dataMode",options:[{label:"\u9759\u6001\u6570\u636E",value:"static"},{label:"\u52A8\u6001\u6570\u636E",value:"dynamic"}],attr:"customAttr"},{type:"datasource",name:"options"},{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},Rate:{props:{},customAttr:{label:"Rate"},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},Select:{props:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}],placeholder:"\u8BF7\u9009\u62E9",allowClear:!1,showSearch:!1,mode:"single"},customAttr:{label:"Select",dataMode:"static"},configItems:[{type:"radio",label:"",name:"dataMode",options:[{label:"\u9759\u6001\u6570\u636E",value:"static"},{label:"\u52A8\u6001\u6570\u636E",value:"dynamic"}],attr:"customAttr"},{type:"datasource",name:"options"},{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"},{type:"input",label:"\u5360\u4F4D\u7B26",name:"placeholder",attr:"props"},{type:"switch",label:"\u53EF\u6E05\u9664",name:"allowClear",attr:"props"},{type:"switch",label:"\u641C\u7D22",name:"showSearch",attr:"props"},{type:"radio",label:"\u6A21\u5F0F",name:"mode",attr:"props",options:[{label:"\u5355\u9009",value:"single"},{label:"\u591A\u9009",value:"multiple"}]}]},Slider:{props:{},customAttr:{label:"Slider"},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},Switch:{props:{},customAttr:{label:"Switch"},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},TimePicker:{props:{},customAttr:{label:"TimePicker"},configItems:[{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"}]},TreeSelect:{props:{treeData:[{label:"\u9009\u98791",value:"1",key:"1",children:[{label:"\u9009\u98791-1",value:"1-1",key:"1-1",children:[]}]}],placeholder:"\u8BF7\u9009\u62E9",allowClear:!1,showSearch:!1,multiple:!1},customAttr:{dataMode:"static",label:"TreeSelect"},configItems:[{type:"radio",label:"",name:"dataMode",options:[{label:"\u9759\u6001\u6570\u636E",value:"static"},{label:"\u52A8\u6001\u6570\u636E",value:"dynamic"}],attr:"customAttr"},{type:"tree-datasource",name:"treeData"},{type:"input",label:"\u540D\u79F0",name:"label",attr:"customAttr"},{type:"input",label:"\u5360\u4F4D\u7B26",name:"placeholder",attr:"props"},{type:"switch",label:"\u53EF\u6E05\u9664",name:"allowClear",attr:"props"},{type:"switch",label:"\u641C\u7D22",name:"showSearch",attr:"props"},{type:"switch",label:"\u591A\u9009",name:"multiple",attr:"props"}]},Avatar:{props:{alt:"\u65E0\u6CD5\u663E\u793A",shape:"circle",size:32,src:""},customAttr:{},configItems:[{type:"input",label:"\u9519\u8BEF\u663E\u793A",name:"alt",attr:"props"},{type:"radio",label:"\u5F62\u72B6",name:"shape",attr:"props",options:[{label:"\u5706\u5F62",value:"circle"},{label:"\u65B9\u5F62",value:"square"}]},{type:"input-number",label:"\u5927\u5C0F",name:"size",attr:"props"},{type:"input",label:"\u5730\u5740",name:"src",attr:"props"}]},Calendar:{props:{},customAttr:{},configItems:[]}},ie=function(e){var t=e.handleComponentDragEnd,n=[{key:"form",label:"\u8868\u5355",children:(0,a.jsx)(te,{handleComponentDragEnd:t})},{key:"chart",label:"\u56FE\u8868",children:"Tab 2 content"}];return(0,a.jsx)("div",{className:q.container,style:{width:N},children:(0,a.jsx)(V.Z,{items:n})})},se=ie,C={container:"container___VTM4x","grid-item":"grid-item___NAIDX","grid-item-content":"grid-item-content___OX_bK","drag-handle":"drag-handle___iG4GC",top:"top___LbvRG",bottom:"bottom___QlbNI",left:"left___cbULG",right:"right___Jnp8w"},ue=i(62288),de=i.n(ue),ce=i(89200),$=i(2309),pe=i(75261),y=i(35048),me={container:"container___2UBTL"},ve=function(e){var t=e.componentItem,n=e.form,l=function(){switch(t.componentType){case"Checkbox":return ce.Z.Group;case"Radio":return $.ZP.Group;default:return pe[t.componentType]}},o=l();if(!o)return(0,a.jsxs)("div",{children:["Invalid component type: ",t.componentType]});var d=function(){var p,u=t==null||(p=t.customAttr)===null||p===void 0?void 0:p.event;switch(u){case"submit":n.validateFields().then(function(f){console.log("Form values:",f)});break;case"reset":n.resetFields();break}},s=function(p){var u,f;switch(p){case"form-item":return(0,a.jsx)(y.Z.Item,{name:t.i,label:t==null||(u=t.customAttr)===null||u===void 0?void 0:u.label,children:(0,a.jsx)(o,r()({},t.props))});case"button":return(0,a.jsx)(y.Z.Item,{children:(0,a.jsx)(o,r()(r()({},t.props),{},{onClick:d,children:(t==null||(f=t.customAttr)===null||f===void 0?void 0:f.label)||""}))});case"layout":return(0,a.jsx)(y.Z.Item,{children:(0,a.jsx)(o,r()({},t.props))});case"data-display":return(0,a.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(o,r()({},t.props))});default:return(0,a.jsx)("div",{children:"Invalid component type:"})}};return(0,a.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center"},className:me.container,children:s(t.type)})},he=ve,U=i(99452),ye={"container-fluid":"container-fluid___dR0V0"},be=function(e){var t=e.componentItem,n=e.handleEditComponent;return(0,a.jsx)("div",{className:ye["container-fluid"],children:(0,a.jsx)(U.Z,{style:{cursor:"pointer"},onClick:function(o){o.stopPropagation(),n(t,"delete")}})})},fe=be,B=i(27616),ge=function(e){var t=e.layout,n=e.setLayout,l=e.curComponent,o=e.setCurComponent,d=e.form,s=(0,B.tT)("low_code"),c=s.gridCols,p=s.gridRowHeight,u=(0,F.useState)(window.innerWidth-520),f=Z()(u,2),w=f[0],S=f[1];(0,F.useEffect)(function(){var v=function(){return S(window.innerWidth-520)};return window.addEventListener("resize",v),function(){return window.removeEventListener("resize",v)}},[]);var R=function(g){n(function(b){return b.map(function(x){var I=g.find(function(h){return h.i===x.i});if(I){var A=r()(r()({},x),{},{x:I.x,y:I.y,h:I.h,w:I.w,resizeHandles:(l==null?void 0:l.id)===x.i?P:x.resizeHandles});return A.i===(l==null?void 0:l.id)&&o(A),A}return x})})},z=function(g,b){switch(b){case"delete":o(null),n(function(x){return x.filter(function(I){return I.id!==g.id})});break}};return(0,a.jsx)("div",{className:C.container,style:{width:"calc(100% - ".concat(N*2,"px)")},children:(0,a.jsx)(y.Z,{form:d,children:(0,a.jsx)(de(),{className:"layout",layout:t,cols:c,rowHeight:p,width:w,onLayoutChange:R,draggableHandle:".".concat(C["drag-handle"]),children:t.map(function(v){return(0,a.jsxs)("div",{style:{background:"#e6f7ff"},onClick:function(b){b.stopPropagation(),o(v)},children:[(l==null?void 0:l.id)===v.i&&(0,a.jsx)(fe,{componentItem:v,handleEditComponent:z}),(0,a.jsxs)("div",{className:C["grid-item"],style:(l==null?void 0:l.id)===v.i?{outline:"1px solid #70c0ff"}:{},children:[(0,a.jsx)("div",{className:"".concat(C["drag-handle"]," ").concat(C.top)}),(0,a.jsx)("div",{className:"".concat(C["drag-handle"]," ").concat(C.bottom)}),(0,a.jsx)("div",{className:"".concat(C["drag-handle"]," ").concat(C.left)}),(0,a.jsx)("div",{className:"".concat(C["drag-handle"]," ").concat(C.right)}),(0,a.jsx)("div",{className:C["grid-item-content"],children:(0,a.jsx)(he,{componentItem:v,form:d})})]})]},v.id)})})})})},Ce=ge,xe={container:"container___Ofx95"},je=i(82092),L=i.n(je),M=i(58482),Ie=i(8211),Ae=i(10491),D=i(1191),Se=i(20029),Te=i(79341),Ze=i(92430),Fe=i(55206),we=i(81347),ke=i(78196),Ee=i(34900);function W(m,e,t){var n=function l(o,d){return o.some(function(s){return s.key===d||s.children&&l(s.children,d)})};return n(m,t.key)?(Ee.ZP.error("key \u5DF2\u7ECF\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"),m):e===null?[].concat(H()(m),[t]):m.map(function(l){return l.key===e?r()(r()({},l),{},{children:[].concat(H()(l.children||[]),[t])}):l.children?r()(r()({},l),{},{children:W(l.children,e,t)}):l})}function X(m,e){return m.filter(function(t){return t.key!==e}).map(function(t){return r()(r()({},t),{},{children:t.children?X(t.children,e):[]})})}var Ne=function(e){var t=e.name,n=e.options,l=e.setCurComponent,o=e.isTree,d=(0,F.useState)(!1),s=Z()(d,2),c=s[0],p=s[1],u=(0,F.useState)(null),f=Z()(u,2),w=f[0],S=f[1],R=y.Z.useForm(),z=Z()(R,1),v=z[0],g=function(){S(null),p(!0)},b=function(h){return(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{children:[h==null?void 0:h.label,"(key: ",h==null?void 0:h.key,")"]}),(0,a.jsxs)(Se.Z,{children:[o&&(0,a.jsx)(we.Z,{onClick:function(j){j.stopPropagation(),S(h==null?void 0:h.key),p(!0)}}),(0,a.jsx)(U.Z,{onClick:function(j){j.stopPropagation(),l(function(T){if(T){var Qe=X((T==null?void 0:T.props[t])||[],h==null?void 0:h.key);return r()(r()({},T),{},{props:r()(r()({},T.props),{},L()({},t,Qe))})}return null})}})]})]})},x=function(){v.resetFields(),p(!1)},I=function(){v.validateFields().then(function(h){var k=r()(r()({},h),{},{key:h.value,children:[]});l(function(j){if(j){var T=W((j==null?void 0:j.props[t])||[],w,k);return r()(r()({},j),{},{props:r()(r()({},j.props),{},L()({},t,T))})}return null}),x()})};return(0,a.jsxs)("div",{children:[(n==null?void 0:n.length)===0?(0,a.jsx)("div",{style:{textAlign:"center"},children:"\u6682\u65E0\u6570\u636E"}):(0,a.jsx)(Te.Z,{treeData:n,blockNode:!0,showLine:o,titleRender:b,defaultExpandAll:!0}),(0,a.jsx)(Ze.ZP,{type:"link",size:"small",icon:(0,a.jsx)(ke.Z,{}),onClick:g,children:"\u6DFB\u52A0"}),(0,a.jsx)(Fe.Z,{title:"\u6DFB\u52A0\u6570\u636E",open:c,onCancel:x,onOk:I,centered:!0,children:(0,a.jsxs)(y.Z,{form:v,children:[(0,a.jsx)(y.Z.Item,{label:"label",name:"label",rules:[{required:!0,message:"\u8BF7\u8F93\u5165label"}],children:(0,a.jsx)(M.Z,{})}),(0,a.jsx)(y.Z.Item,{label:"value",name:"value",rules:[{required:!0,message:"\u8BF7\u8F93\u5165value"}],children:(0,a.jsx)(M.Z,{})})]})})]})},J=Ne,Re=function(e){var t=e.label,n=e.name,l=e.value,o=e.onChange;return(0,a.jsx)(y.Z.Item,{label:t,name:n,initialValue:l,children:(0,a.jsx)(M.Z,{onChange:function(s){return o(s.target.value)},placeholder:"\u8BF7\u8F93\u5165"})})},ze=function(e){var t=e.label,n=e.name,l=e.value,o=e.options,d=e.onChange;return(0,a.jsx)(y.Z.Item,{label:t,name:n,initialValue:l,children:(0,a.jsx)(Ie.default,{options:o,onChange:function(c){return d(c)},placeholder:"\u8BF7\u9009\u62E9"})})},Le=function(e){var t=e.label,n=e.name,l=e.value,o=e.onChange;return(0,a.jsx)(y.Z.Item,{label:t,name:n,initialValue:l,layout:"horizontal",children:(0,a.jsx)(Ae.Z,{onChange:function(s){return o(s)}})})},He=function(e){var t=e.label,n=e.name,l=e.value,o=e.options,d=e.onChange;return(0,a.jsx)(y.Z.Item,{label:t,name:n,initialValue:l,children:(0,a.jsx)($.ZP.Group,{options:o,onChange:function(c){return d(c.target.value)}})})},Pe=function(e){var t=e.label,n=e.name,l=e.value,o=e.onChange;return(0,a.jsx)(y.Z.Item,{label:t,name:n,initialValue:l,layout:"horizontal",children:(0,a.jsx)(D.Z,{onChange:function(s){return o(s)}})})},Ge=function(e,t,n,l){var o;if(e.type!=="datasource"&&e.type!=="tree-datasource"){var d;o=t==null||(d=t[e.attr])===null||d===void 0?void 0:d[e.name]}switch(e.type){case"input":return(0,a.jsx)(Re,{label:e.label,name:e.name,value:o,onChange:function(c){return n(e.attr,e.name,c)}});case"select":return(0,a.jsx)(ze,{label:e.label,name:e.name,value:o,options:e.options,onChange:function(c){return n(e.attr,e.name,c)}});case"switch":return(0,a.jsx)(Le,{label:e.label,name:e.name,value:o,onChange:function(c){return n(e.attr,e.name,c)}});case"radio":return(0,a.jsx)(He,{label:e.label,name:e.name,value:o,options:e.options,onChange:function(c){return n(e.attr,e.name,c)}});case"input-number":return(0,a.jsx)(Pe,{label:e.label,name:e.name,value:o,onChange:function(c){return n(e.attr,e.name,c)}});case"tree-datasource":return(0,a.jsx)(J,{name:e==null?void 0:e.name,options:t==null?void 0:t.props[e==null?void 0:e.name],setCurComponent:l,isTree:!0});case"datasource":return(0,a.jsx)(J,{name:e==null?void 0:e.name,options:t==null?void 0:t.props[e==null?void 0:e.name],setCurComponent:l,isTree:!1});default:return null}},Be=function(e){var t=e.curComponent,n=e.setCurComponent;if(!t)return null;var l=y.Z.useForm(),o=Z()(l,1),d=o[0],s=(0,F.useMemo)(function(){var p;return((p=G[t.componentType])===null||p===void 0?void 0:p.configItems)||[]},[t]),c=function(u,f,w){n(function(S){return S?r()(r()({},S),{},L()({},u,r()(r()({},S[u]),{},L()({},f,w)))):null})};return(0,a.jsx)("div",{style:{padding:12,boxSizing:"border-box"},children:(0,a.jsx)(y.Z,{form:d,size:"small",layout:"vertical",children:s.map(function(p){return(0,a.jsx)("div",{children:Ge(p,t,c,n)},p.name)})})})},Me=Be,De=function(){var e=(0,B.tT)("low_code"),t=e.gridCols,n=e.setGridCols,l=e.gridRowHeight,o=e.setGridRowHeight,d=y.Z.useForm(),s=Z()(d,1),c=s[0];return(0,a.jsx)("div",{style:{padding:12,boxSizing:"border-box"},children:(0,a.jsxs)(y.Z,{form:c,children:[(0,a.jsx)(y.Z.Item,{label:"\u7F51\u683C\u5217\u6570",name:"gridCols",initialValue:t,children:(0,a.jsx)(D.Z,{size:"small",onChange:function(u){typeof u=="number"&&n(u)}})}),(0,a.jsx)(y.Z.Item,{label:"\u7F51\u683C\u884C\u9AD8",name:"gridRowHeight",initialValue:l,children:(0,a.jsx)(D.Z,{size:"small",onChange:function(u){typeof u=="number"&&o(u)}})})]})})},Oe=De,Ve=function(e){var t=e.curComponent,n=e.setCurComponent,l=[{key:"form",label:"\u7EC4\u4EF6\u914D\u7F6E",children:(0,a.jsx)(Me,{curComponent:t,setCurComponent:n})},{key:"chart",label:"\u6574\u4F53\u914D\u7F6E",children:(0,a.jsx)(Oe,{})}];return(0,a.jsx)("div",{className:xe.container,style:{width:N},children:(0,a.jsx)(V.Z,{items:l})})},$e=Ve,Ue=i(59739),We=i(18626),Xe=i(98721),qe=i(64134),_e=i(54949),Je=function(){var e=(0,B.tT)("low_code"),t=e.gridCols,n=e.gridRowHeight,l=(0,F.useState)([]),o=Z()(l,2),d=o[0],s=o[1],c=(0,F.useState)(null),p=Z()(c,2),u=p[0],f=p[1],w=y.Z.useForm(),S=Z()(w,1),R=S[0],z=function(g,b){var x=window.innerWidth-N*2,I=g.clientX-N,A=Math.ceil(I/x*t);if(A>0&&A<=t){var h,k,j=Math.ceil(g.clientY/n),T={x:A,y:j,w:6,h:3,id:(0,Ue.Z)(),componentCategory:b.componentCategory,componentType:b.value,type:b.type,resizeHandles:[],customStyle:{},props:((h=G[b.value])===null||h===void 0?void 0:h.props)||{},customAttr:((k=G[b.value])===null||k===void 0?void 0:k.customAttr)||{}};f(T)}};return(0,F.useEffect)(function(){s(u?function(v){var g=v.some(function(b){return b.id===u.id});return g?v.map(function(b){return b.id===u.id?r()(r()({},u),{},{i:u.id,resizeHandles:P}):r()(r()({},b),{},{resizeHandles:[]})}):[].concat(H()(v.map(function(b){return r()(r()({},b),{},{resizeHandles:[]})})),[r()(r()({},u),{},{i:u.id,resizeHandles:P})])}:function(v){return v.map(function(g){return r()(r()({},g),{},{resizeHandles:[]})})})},[u]),(0,a.jsx)("div",{style:{width:"100%",height:"100%",display:"flex"},children:(0,a.jsxs)(We.ZP,{locale:Xe.Z,children:[(0,a.jsx)(se,{handleComponentDragEnd:z}),(0,a.jsx)(Ce,{layout:d,setLayout:s,curComponent:u,setCurComponent:f,form:R}),(0,a.jsx)($e,{curComponent:u,setCurComponent:f},u==null?void 0:u.id)]})})},Ke=Je}}]);
