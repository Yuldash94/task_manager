import{_,o as d,c as i,a as l,t as k,r as u,w as v,v as p,b as O,d as m,e as g,F as y,f as D,g as x}from"./index-f1e3fe1e.js";const I={props:{model:{required:!0,default:{id:0,title:"Task title",description:"Task description",status:!1}}},setup(s,{emit:e}){return{emitOnDone:()=>{e("onDone")},emitOnRemove:()=>{e("onRemove")}}}},C={class:"task-card my-style"};function A(s,e,a,t,r,o){return d(),i("div",C,[l("div",null,[l("h3",null,k(a.model.title),1),l("p",null,k(a.model.description),1)]),l("div",null,[a.model.status?(d(),i("button",{key:1,onClick:e[1]||(e[1]=(...n)=>t.emitOnRemove&&t.emitOnRemove(...n))},"✖")):(d(),i("button",{key:0,onClick:e[0]||(e[0]=(...n)=>t.emitOnDone&&t.emitOnDone(...n))},"✔"))])])}const L=_(I,[["render",A]]);const R={setup(s,{emit:e}){const a=u(""),t=u("");return{title:a,description:t,onAddTask:()=>{e("onAddTask",{title:a.value,description:t.value})}}}},S={class:"task-input tasks-list"};function b(s,e,a,t,r,o){return d(),i("div",S,[v(l("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>t.title=n),type:"text",placeholder:"Название"},null,512),[[p,t.title]]),v(l("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>t.description=n),type:"text",placeholder:"Описание"},null,512),[[p,t.description]]),l("button",{onClick:e[2]||(e[2]=(...n)=>t.onAddTask&&t.onAddTask(...n))},"Добавить")])}const B=_(R,[["render",b],["__scopeId","data-v-0e7a5e3a"]]);const N={components:{TaskCard:L,TaskInput:B},setup(){const s=u([{id:0,title:"Список",description:"Написать список задач на сегодня",status:!1}]);O(()=>{localStorage.getItem("taskList")&&(s.value=JSON.parse(localStorage.getItem("taskList")))});const e=o=>{localStorage.setItem("taskList",JSON.stringify(o))};return{taskList:s,addTask:({title:o,description:n})=>{if(o===""||n===""){alert("Заполните все поля");return}s.value=[...s.value,{id:s.value.length===0?0:s.value[s.value.length-1].id+1,title:o,description:n,status:!1}],e(s.value)},setDoneTask:o=>{s.value=s.value.map(n=>(n.id===o&&(n.status=!0),n)),e(s.value)},removeTask:o=>{s.value=s.value.filter(n=>n.id!==o),e(s.value)}}}},V={class:"tasks"},h={class:"task-list"};function $(s,e,a,t,r,o){const n=m("TaskInput"),T=m("TaskCard");return d(),i("div",V,[g(n,{onOnAddTask:t.addTask},null,8,["onOnAddTask"]),l("div",h,[(d(!0),i(y,null,D(t.taskList,c=>(d(),x(T,{key:c.id,onOnRemove:f=>t.removeTask(c.id),onOnDone:f=>t.setDoneTask(c.id),model:c},null,8,["onOnRemove","onOnDone","model"]))),128))])])}const F=_(N,[["render",$],["__scopeId","data-v-69732917"]]);export{F as default};
