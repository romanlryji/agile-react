(this["webpackJsonpagile-react"]=this["webpackJsonpagile-react"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(21),i=n.n(a),l=(n(27),n(22)),r=(n(28),n(19)),u=n(2),d=n(6),s=n(35),j=n(9),b=n(12),f=n(14),O=n(1),g=function(e){var t=Object(o.useState)({title:""}),n=Object(d.a)(t,2),c=n[0],a=n[1];return Object(O.jsxs)(j.a,{className:"mb-3",children:[Object(O.jsx)(f.a,{value:c.title,onChange:function(e){console.log(e.target.value),a({title:e.target.value})},placeholder:"New Todo Item","aria-label":"New Todo Item","aria-describedby":"basic-addon2"}),Object(O.jsx)(b.a,{variant:"outline-secondary",id:"button-addon2",onClick:function(t){t.preventDefault(),c.title.trim()?(e.addTodoFunc(c.title),a({title:""})):alert("Enter something please"),console.log(c.title+" added")},children:"Add"})]})},h=n(18),m=function(e){var t=e.todo,n=t.completed,c=t.id,a=t.title,i=Object(o.useState)(!1),l=Object(d.a)(i,2),r=l[0],u=l[1];return Object(O.jsxs)(j.a,{children:[Object(O.jsx)(j.a.Checkbox,{"aria-label":"Checkbox for following text input",checked:n,onChange:function(){return e.handleCompletedToggleFunc(c)}}),Object(O.jsx)(f.a,{readOnly:!r,style:n?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,value:a,onDoubleClick:function(){u(!0)},onKeyDown:function(e){"Enter"!==e.key&&"Escape"!==e.key||u(!1)},onBlur:function(){u(!1)},onChange:function(t){return e.setNewTitleFunc(c,t.target.value)}}),Object(O.jsx)(b.a,{variant:"outline-secondary",id:"button-addon2",onClick:function(){e.deleteTodoFunc(c)},children:"Delete"})]})},p=function(e){return Object(O.jsx)(h.a,{children:e.todos.map((function(t){return Object(O.jsx)(h.a.Item,{children:Object(O.jsx)(m,{todo:t,handleCompletedToggleFunc:e.handleCompletedToggleFunc,deleteTodoFunc:e.deleteTodoFunc,setNewTitleFunc:e.setNewTitleFunc},t.id)},t.id)}))})},x=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(d.a)(e,2),n=t[0],c=t[1];function a(){return Date.now()}return Object(o.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{addTodoFunc:function(e){var t={id:Object(s.a)(),title:e,completed:!1,created:a(),modified:a()};c([].concat(Object(r.a)(n),[t]))}}),Object(O.jsx)(p,{todos:n.sort((function(e,t){return e.created<t.created})),deleteTodoFunc:function(e){c(Object(r.a)(n.filter((function(t){return t.id!==e}))))},handleCompletedToggleFunc:function(e){c((function(t){return t.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed,modified:a()}):t}))}))},setNewTitleFunc:function(e,t){c(n.map((function(n){return n.id===e&&(n.title=t),n})))}})]})};var v=function(){return Object(O.jsx)(l.a,{className:"p-3",children:Object(O.jsx)(x,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};n(32);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),F()}},[[33,1,2]]]);
//# sourceMappingURL=main.9b85a6cc.chunk.js.map