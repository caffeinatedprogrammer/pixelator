(this.webpackJsonppixelator=this.webpackJsonppixelator||[]).push([[0],{23:function(e,t,a){e.exports=a(44)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),o=(a(28),a(1)),l=a(6);a(29);function u(e){var t=e.startNavigation,a=Object(l.g)(),c=Object(n.useCallback)((function(e){e.preventDefault();t((function(){a.push({pathname:"/"})}))}),[t,a]),i=Object(n.useCallback)((function(e){e.preventDefault();t((function(){a.push({pathname:"/about"})}))}),[t,a]);return r.a.createElement("div",{className:"top-bar"},r.a.createElement("p",{className:"title"},"Pixelator"),r.a.createElement("a",{href:"/",onClick:c},r.a.createElement("p",{className:"link"},"Home")),r.a.createElement("a",{href:"/about",onClick:i},r.a.createElement("p",{className:"link"},"About")))}var s=a(12),m=a(5),f=a(7),d=(a(35),a(14)),b=r.a.forwardRef((function(e,t){var a=e.type,n=Object(d.a)(e,["type"]);return r.a.createElement("button",Object.assign({type:a||"button",ref:t},n,{className:"button"}))})),p=r.a.forwardRef((function(e,t){var a=e.type,n=Object(d.a)(e,["type"]);return r.a.createElement("button",Object.assign({type:a||"button",ref:t},n,{className:"button rounded"}))}));a(36);function h(e){var t=e.square,a=e.other;return r.a.createElement("div",{className:"square-container"},r.a.createElement("div",{className:"square-other"},a),r.a.createElement("div",{className:"square-block"},t))}a(37);function g(e){var t=e.name,a=e.children,n=e.end;return r.a.createElement("div",{className:"flex-container"},r.a.createElement("p",{className:"flex-fixed setting-name"},t),r.a.createElement("div",{className:"flex-expand"},a),r.a.createElement("div",{className:"flex-fixed setting-end"},n))}var E=function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){return t.current=document.title,function(){document.title=t.current}}),[]),Object(n.useEffect)((function(){document.title=e}),[e])},v=function(e){return e(Object(n.useContext)(q))};function O(e){var t=e.onSubmit,a=v((function(e){return e.settings})),c=a.data,i=a.width,l=a.imageWidth,u=a.imageHeight,d=a.initialColor,E=a.initialEdge,O=a.iterationCount,j=a.sampleDistance,N=Object(n.useState)(l),y=Object(o.a)(N,2),w=y[0],x=y[1],C=Object(n.useState)(u),I=Object(o.a)(C,2),k=I[0],S=I[1],T=Object(n.useState)(i),A=Object(o.a)(T,2),R=A[0],D=A[1],F=Object(n.useState)({nextIndex:d.length,color:d.map((function(e,t){return Object(f.a)({},t,e)})).reduce((function(e,t){return Object.assign({},e,t)}),{}),id:new Array(d.length).fill(0).map((function(e,t){return t}))}),H=Object(o.a)(F,2),P=H[0],L=H[1],M=Object(n.useState)({nextIndex:E.length,edge:E.map((function(e,t){return Object(f.a)({},t,e)})).reduce((function(e,t){return Object.assign({},e,t)}),{}),id:new Array(E.length).fill(0).map((function(e,t){return t}))}),W=Object(o.a)(M,2),B=W[0],_=W[1],U=Object(n.useState)(c),q=Object(o.a)(U,2),G=q[0],Y=q[1],J=Object(n.useState)(O),V=Object(o.a)(J,2),z=V[0],K=V[1],X=Object(n.useState)(j),$=Object(o.a)(X,2),Q=$[0],Z=$[1],ee=Object(n.useRef)(),te=Object(n.useRef)(),ae=Object(n.useCallback)((function(e){e.preventDefault(),te.current.click()}),[te]),ne=Object(n.useCallback)((function(e){var t=new FileReader;t.onload=function(){return a.src=t.result},t.readAsDataURL(e.target.files[0]);var a=new Image;a.onload=function(){if(x(a.width),S(a.height),ee.current){var e=ee.current.getContext("2d");e.drawImage(a,0,0,a.width,a.height),Y(e.getImageData(0,0,a.width,a.height).data),Z(Math.ceil(Math.max(a.width,a.height)/50))}}}),[ee,Y,x,S]),re=Object(n.useCallback)((function(e){D(e.target.value)}),[D]),ce=Object(n.useCallback)((function(e){e.preventDefault();var t=e.target.name,a=e.target.value;L((function(e){var n=Object.assign({},e.color);return n[t]=a,Object(m.a)({},e,{color:n})}))}),[L]),ie=Object(n.useCallback)((function(e){e.preventDefault(),L((function(e){return Object(m.a)({},e,{nextIndex:e.nextIndex+1,id:[].concat(Object(s.a)(e.id),[e.nextIndex]),color:Object(m.a)({},e.color,Object(f.a)({},e.nextIndex,"#000000"))})}))}),[L]),oe=Object(n.useCallback)((function(e){e.preventDefault(),L((function(e){var t=e.id,a=t.pop(),n=e.color;return delete n[a],Object(m.a)({},e,{color:n,id:t})}))}),[L]),le=Object(n.useCallback)((function(e){e.preventDefault();var t=e.target.name,a=e.target.value;_((function(e){var n=Object.assign({},e.edge);return n[t]=a,Object(m.a)({},e,{edge:n})}))}),[_]),ue=Object(n.useCallback)((function(e){e.preventDefault(),_((function(e){return Object(m.a)({},e,{nextIndex:e.nextIndex+1,id:[].concat(Object(s.a)(e.id),[e.nextIndex]),edge:Object(m.a)({},e.edge,Object(f.a)({},e.nextIndex,"#000000"))})}))}),[_]),se=Object(n.useCallback)((function(e){e.preventDefault(),_((function(e){var t=e.id,a=t.pop(),n=e.edge;return delete n[a],Object(m.a)({},e,{edge:n,id:t})}))}),[_]),me=Object(n.useCallback)((function(e){e.preventDefault(),K(e.target.value)}),[]),fe=Object(n.useCallback)((function(e){e.preventDefault(),Z(e.target.value)}),[]),de=Object(n.useCallback)((function(e){e.preventDefault(),t&&t(G,w,k,Number(R),Object.values(P.color),Object.values(B.edge),Number(z),Number(Q))}),[t,R,G,w,k,P,B,z,Q]);return Object(n.useEffect)((function(){G&&ee.current.getContext("2d").putImageData(new ImageData(G,w,k),0,0)}),[]),r.a.createElement(h,{other:r.a.createElement("form",{className:"form normal-page-padding",onSubmit:de},r.a.createElement("div",{className:"dummy-height"}),r.a.createElement("h1",null,"Instructions"),r.a.createElement("div",{className:"normal-padding"},r.a.createElement("p",null,"Select an image with few colors and sufficiently wide margin."),r.a.createElement("p",null,"Choose the main colors in the image."),r.a.createElement("p",null,"Choose the color of the edge if necessary."),r.a.createElement("p",null,"Increase sample distance if the calculation is too slow.")),r.a.createElement(g,{name:"Image"},r.a.createElement("input",{className:"hidden",ref:te,type:"file",onChange:ne}),r.a.createElement(b,{"aria-label":"Choose",onClick:ae},"Choose")),r.a.createElement(g,{name:"Tile width"},r.a.createElement("input",{type:"number","aria-label":"Tile width",onChange:re,value:R})),r.a.createElement(g,{name:"Iteration Count"},r.a.createElement("input",{type:"number","aria-label":"Iteration count",onChange:me,value:z})),r.a.createElement(g,{name:"Sample Distance"},r.a.createElement("input",{type:"number","aria-label":"Sample distance",onChange:fe,value:Q})),r.a.createElement(g,{name:"Color",end:r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{"aria-label":"add",onClick:ie},"+"),r.a.createElement(p,{"aria-label":"remove",onClick:oe},"-"))},P.id.map((function(e){return r.a.createElement("input",{key:"color_".concat(e),type:"color",value:P.color[e],name:e,onChange:ce})}))),r.a.createElement(g,{name:"Edge",end:r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{"aria-label":"add",onClick:ue},"+"),r.a.createElement(p,{"aria-label":"remove",onClick:se},"-"))},B.id.map((function(e){return r.a.createElement("input",{key:"edge_".concat(e),type:"color",value:B.edge[e],name:e,onChange:le})}))),r.a.createElement("div",{className:"normal-padding"},r.a.createElement(b,{disabled:!G,type:"submit"},"Submit"))),square:r.a.createElement("div",{className:"overflow-scroll full"},r.a.createElement("div",{className:"dummy-height"}),r.a.createElement("canvas",{ref:ee,width:w.toString(),height:k.toString()}))})}var j=a(4),N=a.n(j),y=a(9);function w(e,t){var a=new Array(256).fill(0),n=new Array(256).fill(0),r=new Array(256).fill(0),c=new Array(256).fill(0),i=!0,o=!1,l=void 0;try{for(var u,s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){for(var m=u.value,f=e.length/4,d=0,b=0;b<e.length;b+=4){I(e.slice(b,b+4),m)<30&&d++}if(d>.03*f)return m}}catch(p){o=!0,l=p}finally{try{i||null==s.return||s.return()}finally{if(o)throw l}}return e.forEach((function(e,t){switch(t%4){case 0:a[e]++;break;case 1:n[e]++;break;case 2:r[e]++;break;case 3:c[e]++}})),[a,n,r,c].map((function(t){for(var a=0,n=0;n<256;n++)if((a+=t[n])>=e.length/8)return n;return 255}))}function x(e,t,a,n,r,c){return C.apply(this,arguments)}function C(){return(C=Object(y.a)(N.a.mark((function e(t,a,n,r,c,i){var o,l,u,s,m,f,d,b;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=Math.ceil(a/r),l=Math.ceil(n/o),u=new Array(r*l),s=0;s<l;s++)for(m=0;m<r;m++)for(f=s*o;f<(s+1)*o;f+=c)for(d=m*o;d<(m+1)*o;d+=c)u[s*r+m]||(u[s*r+m]=[]),b=f*a+d,u[s*r+m].push(t.slice(4*b,4*b+4));return e.abrupt("return",u.map((function(e){return w(e.reduce((function(e,t){return Array.from(e).concat(Array.from(t))})),i)})).reduce((function(e,t){return e.concat(t)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){for(var a=0,n=0;n<3;n++)a+=(e[n]-t[n])*(e[n]-t[n]);return a}function k(e){var t=e[3]/255;return t?[e[0]*t,e[1]*t,e[2]*t,255]:new Array(4).fill(255)}function S(e,t,a){return T.apply(this,arguments)}function T(){return(T=Object(y.a)(N.a.mark((function e(t,a,n){var r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],c=0;c<t.length;c+=4)r.push(k(t.slice(c,c+4)));return e.abrupt("return",new Promise((function(e){return e(D(r,I,a,n))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,a){return R.apply(this,arguments)}function R(){return(R=Object(y.a)(N.a.mark((function e(t,a,n){var r,c,i,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,a,n);case 2:for(o in r=e.sent,c=r.centroid,i=r.types)t.splice.apply(t,[4*o,4].concat(Object(s.a)(c[i[o]])));return e.next=8,t;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,a,n){var r=a,c=e.map((function(e,t){return 0})),i=a.length;return function(e,t){for(var a=0;a<t;a++)e(a)}((function(){for(var n=new Array(i).fill(new Array(a[0].length).fill(0)),o=new Array(i).fill(0),l=function(a){var i=function(e,t,a){var n=-1,r=-1;return t.forEach((function(t,c){var i=a(e,t);(i<r||-1===r)&&(n=c,r=i)})),n}(e[a],r,t);c[a]=i,n[i]=n[i].map((function(t,n){return t+e[a][n]})),o[i]++},u=0;u<e.length;u++)l(u);r=n.map((function(e,t){return 0!==o[t]?e.map((function(e){return e/o[t]})):r[t]}))}),n),{centroid:r,types:c}}function F(e){var t=e.startNavigation,a=Object(l.g)(),c=function(e){var t=Object(n.useContext)(G);return Object(n.useCallback)((function(a){t({type:e,payload:a})}),[t,e])}("save_settings"),i=Object(n.useCallback)((function(){a.push({pathname:"/result"})}),[a]),o=Object(n.useCallback)((function(e,a,n,r,o,l,u,s){c({data:e,imageWidth:a,imageHeight:n,width:r,initialColor:o,initialEdge:l,iterationCount:u,sampleDistance:s});for(var m=0;m<e.length;m+=4){var f=k(e.slice(m,m+4));e[m]=f[0],e[m+1]=f[1],e[m+2]=f[2],e[m+3]=f[3]}t(i)}),[t,i,c]);return E("Pixelator"),r.a.createElement(O,{onSubmit:o})}a(39);function H(e){var t=e.data,a=e.width,n=e.height,c=e.hasBorder;if(!t)return r.a.createElement("div",null);for(var i=[],o=0;o<n;o++){i.push([]);for(var l=0;l<a;l++){var u=4*(o*a+l),s=t.slice(u,u+4);i[o].push(r.a.createElement("div",{key:"".concat(o," ").concat(l),style:{position:"relative",width:"calc(100% / ".concat(a,")"),paddingBottom:"calc(100% / ".concat(a,")"),flex:"0 0 auto"}},r.a.createElement("div",{style:{position:"absolute",top:c?"7.5%":"0px",left:c?"7.5%":"0px",right:c?"7.5%":"0px",bottom:c?"7.5%":"0px",backgroundColor:"rgb(".concat(s[0],", ").concat(s[1],", ").concat(s[2],", ").concat(s[3],")")}})))}}return r.a.createElement("div",null,i.map((function(e,t){return r.a.createElement("div",{className:"result-line",key:t.toString()},e)})))}a(40);function P(e){var t=e.mapping;return r.a.createElement("div",{className:"result-guide-container normal-page-padding"},Object.keys(t).map((function(e){return r.a.createElement("div",{id:e.toString(),key:e.toString(),className:"result-guide-item"},r.a.createElement("div",{style:{backgroundColor:e,width:"50px",height:"50px",minWidth:"50px",minHeight:"50px",border:"1px solid black",marginRight:"8px"}}),r.a.createElement("label",{htmlFor:e.toString()},t[e]))})))}function L(e){var t=Object(n.useCallback)((function(e){return e.map((function(e){return[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16),255]}))}),[]),a=v((function(e){return e.settings})),c=a.data,i=a.imageWidth,u=a.imageHeight,s=a.width,m=a.initialColor,f=a.initialEdge,d=a.iterationCount,b=a.sampleDistance,p=Object(n.useMemo)((function(){return t(m)}),[t,m]),g=Object(n.useMemo)((function(){return t(f)}),[t,f]),O=Object(n.useState)(),j=Object(o.a)(O,2),w=j[0],C=j[1];E("Pixelator | Result"),Object(n.useEffect)((function(){c&&function(){var e=Object(y.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(c,i,u,s,b,g);case 2:return t=e.sent,e.next=5,A(t,p,d);case 5:a=e.sent,C(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,i,u,s,p,g,d,b]);var I={};if(w)for(var k=0;k<w.length;k+=4){var S="rgb(".concat(w[k],", ").concat(w[k+1],", ").concat(w[k+2],")");I[S]?I[S]++:I[S]=1}var T=Object(n.useState)(!1),R=Object(o.a)(T,2),D=R[0],F=R[1],L=Object(n.useCallback)((function(e){F(e.target.checked)}),[F]);return c?r.a.createElement(h,{square:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dummy-height"}),r.a.createElement(H,{hasBorder:D,data:w,width:s,height:Math.floor(u/Math.floor(i/s))})),other:r.a.createElement("div",{className:"normal-page-padding"},r.a.createElement("div",{className:"dummy-height"}),r.a.createElement(P,{mapping:I}),r.a.createElement("div",{className:"normal-page-padding"},r.a.createElement("label",{htmlFor:"border-checkbox"},"Show border"),r.a.createElement("input",{id:"border-checkbox",className:"normal-margin-left",type:"checkbox",checked:D,onChange:L})))}):r.a.createElement(l.a,{to:"/"})}a(41);function M(){return E("Pixelator | About"),r.a.createElement("div",{className:"normal-page-padding"},r.a.createElement("div",{className:"dummy-height"}),r.a.createElement("h1",null,"About"),r.a.createElement("div",{className:"normal-padding"},r.a.createElement("p",null,'Pixelator is an "image discretizer" which generates Lennon Arts, written by Caffeinated Programmer.'),r.a.createElement("p",null,"The ",r.a.createElement("a",{className:"source-code",href:"https://github.com/caffeinatedprogrammer/pixelator",target:"_blank",rel:"noopener noreferrer"},"source code")," is release under the MIT License."),r.a.createElement("div",{className:"license"},r.a.createElement("p",{className:"mono"},"Copyright 2020 Caffeinated Programmer"),r.a.createElement("p",{className:"mono"},'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'),r.a.createElement("p",{className:"mono"},"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."),r.a.createElement("p",{className:"mono"},'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'))))}a(42);var W=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(o.a)(a,2),i=c[0],u=c[1],s=Object(l.h)();Object(n.useEffect)((function(){u("fading_in");var e=setTimeout((function(){u("faded_in")}),500);return function(){clearTimeout(e)}}),[s]);var m=Object(n.useRef)(),f=Object(n.useCallback)((function(e){u("fading_out"),m.current=setTimeout((function(){e()}),500)}),[m]);Object(n.useEffect)((function(){return function(){m.current&&clearTimeout(m.current)}}),[s]);var d=null;switch(i){case null:case"fading_out":d="fading";break;default:case"fading_in":d="faded"}return r.a.createElement("div",{className:"full ".concat(d)},t(f))},B=(a(43),a(8)),_=function(e,t){switch(t.type){case"save_settings":return Object.assign({},e,{settings:t.payload});default:return e}},U={settings:{width:20,imageWidth:0,imageHeight:0,initialColor:["#000000","#FFFFFF","#FFFF00","#FF0000"],initialEdge:["#000000"],iterationCount:50,sampleDistance:5}},q=r.a.createContext(),G=r.a.createContext();var Y=function(){var e=Object(n.useReducer)(_,U),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(q.Provider,{value:a},r.a.createElement(G.Provider,{value:c},r.a.createElement(B.a,{basename:"/pixelator"},r.a.createElement("div",{className:"container"},r.a.createElement(W,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{startNavigation:e}),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/result"},r.a.createElement(L,{startNavigation:e})),r.a.createElement(l.b,{exact:!0,path:"/about"},r.a.createElement(M,{startNavigation:e})),r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(F,{startNavigation:e}))))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ee48d312.chunk.js.map