(this["webpackJsonpreact-todo-main"]=this["webpackJsonpreact-todo-main"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(6),a=c.n(s),o=c(7),i=c(5),r=c(0);function l(e){return Object(r.jsx)("div",{className:"container bgcolor",children:Object(r.jsxs)("div",{className:"row my-2",children:[Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)("h6",{className:"mono",children:e.task})}),Object(r.jsx)("div",{className:"col-6  text-end",children:Object(r.jsx)("button",{className:"bgcolor",onClick:function(){e.onSelcet(e.id)},children:"\u2715"})})]})})}c(13);function j(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),j=Object(i.a)(a,2),d=j[0],b=j[1],m=function(e){var t=d.filter((function(t,c){return c!==e}));b(t)};return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row justify-content-center align-items-center main-row",children:Object(r.jsxs)("div",{className:" col mt-3 ms-1 me-1 shadow main-col bg-white",children:[Object(r.jsx)("div",{className:"row bg-dark text-white",children:Object(r.jsx)("div",{className:"col  p-2",children:Object(r.jsx)("h2",{className:"mono text-center",children:"Todo App Using React JS"})})}),Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=c;b([].concat(Object(o.a)(d),[t])),s("")},children:Object(r.jsxs)("div",{className:"row justify-content-between text-white p-2",children:[Object(r.jsx)("div",{className:"form-group p-0 ps-xs-1 pe-2  mb-2 col-9",children:Object(r.jsx)("input",{id:"todo-input",type:"text",className:"form-control",value:c,onChange:function(e){s(e.target.value)}})}),Object(r.jsx)("button",{type:"submit",className:"mono btn btn-dark mb-2 ml-2 col-3",children:"Add todo"})]})}),d.map((function(e,t){return Object(r.jsx)(l,{id:t,task:e,onSelcet:m},t)}))]})})})}var d=function(){return Object(r.jsx)("div",{style:{background:"beige"},children:Object(r.jsx)(j,{})})};a.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4a26cd93.chunk.js.map