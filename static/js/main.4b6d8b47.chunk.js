(this["webpackJsonpreact-todo-main"]=this["webpackJsonpreact-todo-main"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(6),a=c.n(s),i=c(7),o=c(5),r=c(0);function l(e){return Object(r.jsx)("div",{className:"container bgcolor",children:Object(r.jsxs)("div",{className:"row my-2",children:[Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)("h6",{className:"mono",children:e.task})}),Object(r.jsx)("div",{className:"col-6  text-end",children:Object(r.jsx)("button",{className:"bgcolor",onClick:function(){e.onSelcet(e.id)},children:"\u2715"})})]})})}c(13);function d(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),d=Object(o.a)(a,2),j=d[0],b=d[1],m=function(e){var t=j.filter((function(t,c){return c!==e}));b(t)};return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row justify-content-center align-items-center main-row",children:Object(r.jsxs)("div",{className:" col mt-3 ms-1 me-1 shadow main-col bg-white",children:[Object(r.jsx)("div",{className:"row bg-dark text-white",children:Object(r.jsx)("div",{className:"col  p-2",children:Object(r.jsx)("h2",{className:"mono text-center",children:"Todo App Using React JS"})})}),Object(r.jsx)("form",{onSubmit:function(e){if(""===c||null===c||void 0===c)window.alert("Task can't be empty!"),e.preventDefault();else{e.preventDefault();var t=c;b([].concat(Object(i.a)(j),[t])),s("")}},children:Object(r.jsxs)("div",{className:"row justify-content-between text-white p-2",children:[Object(r.jsx)("div",{className:"form-group p-0 ps-xs-1 pe-2  mb-2 col-9",children:Object(r.jsx)("input",{id:"todo-input",type:"text",className:"form-control",value:c,onChange:function(e){s(e.target.value)}})}),Object(r.jsx)("button",{type:"submit",className:"mono btn btn-dark mb-2 ml-2 col-3",children:"Add todo"})]})}),j.map((function(e,t){return Object(r.jsx)(l,{id:t,task:e,onSelcet:m},t)}))]})})})}var j=function(){return Object(r.jsx)("div",{style:{background:"beige"},children:Object(r.jsx)(d,{})})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4b6d8b47.chunk.js.map