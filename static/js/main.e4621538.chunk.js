(this["webpackJsonpmy-qs"]=this["webpackJsonpmy-qs"]||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),r=n(41),c=n.n(r),s=(n(85),n(86),n(13)),l=n(123),o=function(e){alert("Une erreur est survenue, recommence \ud83d\ude1c"),console.error("errorCode",null===e||void 0===e?void 0:e.code),console.error("errorMessage",null===e||void 0===e?void 0:e.message)},j=n(4),u=n(0),b=n.n(u),d=n(30),x=n(53),O=n(68),p=n(21),h=Object(O.a)({apiKey:"AIzaSyBF25OZgwRM4sJomPY03QNkEndvXF7FMdI",authDomain:"myqs-1ab0a.firebaseapp.com",databaseURL:"https://myqs-1ab0a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"myqs-1ab0a",storageBucket:"myqs-1ab0a.appspot.com",messagingSenderId:"405974773090",appId:"1:405974773090:web:a638f39dc508d46e3ad03b"}),f=Object(p.a)(h),m=Object(d.b)(),v=function(){Object(d.i)(m)},g=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(d.c)(m,window.location.href)){e.next=5;break}return(t=window.localStorage.getItem("emailForSignIn"))||(t=window.prompt("Entrez votre email pour confirmation")),e.next=5,Object(d.h)(m,t,window.location.href).then((function(){window.localStorage.removeItem("emailForSignIn"),window.location.search=""})).catch((function(e){"auth/invalid-action-code"!==(null===e||void 0===e?void 0:e.code)&&o(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(x.a)(m),t=Object(s.a)(e,2);return{user:t[0],loadingUser:t[1]}},w=n(5),S=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=function(e){i(!0),function(e){var t={url:window.location.href,handleCodeInApp:!0};return Promise.resolve(Object(d.f)(m,e,t))}(e).then((function(){window.localStorage.setItem("emailForSignIn",e),alert("Tu vas recevoir un mail pour te connecter \ud83d\udc8c"),i(!1)})).catch(o)};return Object(w.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(w.jsxs)("form",{onSubmit:function(e){var t,n,a;e.preventDefault();var i=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.elements)||void 0===n||null===(a=n.email)||void 0===a?void 0:a.value;r(i)},children:[Object(w.jsxs)("label",{children:["Renseigne ton email",Object(w.jsx)("input",{type:"email",name:"email",id:"email",required:!0,style:{marginLeft:"10px"}})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{type:"submit",variant:"contained",disabled:n,children:n?"Patiente un peu \ud83d\ude80":"Recevoir le lien de connexion"})]})})},D=n(16),I=n(58),C=n(120),k=n(119),F=n(70),q=function(){var e=Object(x.a)(m),t=Object(s.a)(e,1)[0],n=null===t||void 0===t?void 0:t.uid,a=Object(F.a)(Object(p.h)(f,"users/".concat(n))),i=Object(s.a)(a,2);return{diets:i[0]||[],loadingDiets:i[1]}},M=function(){var e=y().user,t=q().diets,n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],o=r[1],j=i.a.useState([]),u=Object(s.a)(j,2),b=u[0],d=u[1],x=i.a.useState(void 0),O=Object(s.a)(x,2),h=O[0],m=O[1],v=function(){d((function(e){return[].concat(Object(D.a)(e),[{message:(new Date).getTime(),key:(new Date).getTime()}])}))},g={border:"solid 1px black",height:"100px",borderRadius:"5px",padding:"5px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},S=Object(I.a)(Object(I.a)({},g),{},{width:"65px",height:"65px"});return i.a.useEffect((function(){b.length&&!h?(m(Object(I.a)({},b[0])),d((function(e){return e.slice(1)})),o(!0)):b.length&&h&&c&&o(!1)}),[b,h,c]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target.date.value,i=n.target.diet.value,r=n.target.meal.value;(function(e,t){return Object(p.i)(Object(p.h)(f,"users/".concat(null===e||void 0===e?void 0:e.uid)),t)})(e,function(e,n,a){var i=t,r={date:e,diet:n,meal:a},c=function(e){return r.date===e.date&&r.meal===e.meal},s=i.filter(c),l=i.findIndex(c);return s.length>0&&i.splice(l,s.length),[].concat(Object(D.a)(i),[r])}(a,i,r)).then(v)},children:[Object(w.jsxs)("label",{children:["Date",Object(w.jsx)("input",{type:"date",name:"date",id:"date",required:!0})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"40px"},children:[Object(w.jsxs)("label",{style:S,children:["Matin ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"breakfast",required:!0})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:S,children:["Midi ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"lunch"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:S,children:["Go\xfbter ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"snack"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:S,children:["Soir ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"dinner"})]})]}),Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(w.jsxs)("label",{style:g,children:["V\xe9g\xe9tarien ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"diet",value:"vegetarian",required:!0})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:g,children:["V\xe9gan ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"diet",value:"vegan"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:g,children:["Omnivore ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"diet",value:"omnivore"})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{type:"submit",variant:"contained",children:"Enregistrer"})]}),Object(w.jsx)(C.a,{open:c,autoHideDuration:3e3,onClose:function(e,t){"clickaway"!==t&&o(!1)},TransitionProps:{onExited:function(){m(void 0)}},children:Object(w.jsx)(k.a,{severity:"success",children:"Repas enregistr\xe9"})},h?h.key:void 0)]})},E=n(71),A=function(e){var t=e.diets,n=e.data,a=e.label;return Object(w.jsx)("div",{style:{width:"70%",height:"300px",margin:"0 auto 30px"},children:0===t.length?Object(w.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(w.jsx)("p",{children:"Remplis le formulaire \ud83d\ude09"})}):Object(w.jsx)(E.PieChart,{data:n,label:a,labelStyle:{fontSize:"6px"}})})},P=function(){var e=y().user,t=q().diets,n=function(){var e=new Date,n=t.reduce((function(e,t){return e.push(t.date),e}),[]);return Object(D.a)(n).sort((function(t,n){return Math.abs(new Date(t)-e)-Math.abs(new Date(n)-e)}))[0]},a=n()?new Date(n()).toLocaleDateString("fr"):"Aucune \ud83e\udd37\u200d";return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A,{diets:t,data:function(){var e=t,n=e.filter((function(e){return"vegan"===e.diet})),a=e.filter((function(e){return"vegetarian"===e.diet})),i=e.filter((function(e){return"omnivore"===e.diet}));return[{title:"vegan",value:n.length,color:"#75DBCD"},{title:"v\xe9g\xe9tarien",value:a.length,color:"#FAA381"},{title:"omnivore",value:i.length,color:"#DCDBA8"}]}(),label:function(e){var t=e.dataEntry;return t.value>0?"".concat(t.title," : ").concat(Math.round(t.percentage),"%"):null}}),Object(w.jsx)(M,{}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["Nombre de jours : ",function(){var e=t.reduce((function(e,t){return e.push(t.date),e}),[]);return e.filter((function(t,n){return e.indexOf(t)===n})).length}()]}),Object(w.jsxs)("p",{children:["Date la plus proche renseign\xe9e : ",a]})]}),Object(w.jsx)("hr",{}),e&&Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["Utilisateur: ",e.email]}),Object(w.jsx)(l.a,{onClick:v,type:"submit",variant:"outlined",children:"Se d\xe9connecter"})]}),Object(w.jsx)("hr",{}),Object(w.jsx)("br",{})]})},T=(n(93),n(124)),B=function(){return Object(w.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(w.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),Object(w.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(w.jsxs)("div",{className:"loading",children:[Object(w.jsx)(T.a,{component:"p",children:"Patiente pendant que la magie op\xe8re \u2728"}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{})]})})]})},R=function(e){var t=e.children,n=Object(a.useState)(!0),i=Object(s.a)(n,2),r=i[0],c=i[1],l=q().loadingDiets,o=y().loadingUser||l;return Object(a.useEffect)((function(){o?setTimeout((function(){return c(!0)}),500):setTimeout((function(){return c(!1)}),500)}),[c,o]),r?Object(w.jsx)(B,{}):t};var L=function(){var e=y().user;return Object(a.useEffect)((function(){return g()})),Object(w.jsx)(R,{children:Object(w.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(w.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),e?Object(w.jsx)(P,{}):Object(w.jsx)(S,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root")),N()}},[[94,1,2]]]);
//# sourceMappingURL=main.e4621538.chunk.js.map