(this["webpackJsonpmy-qs"]=this["webpackJsonpmy-qs"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),c=n(55),i=n.n(c),s=(n(71),n(12)),l=(n(72),n(25)),j=n(35),o=n(57),b=n(17),d=Object(o.a)({apiKey:"AIzaSyBF25OZgwRM4sJomPY03QNkEndvXF7FMdI",authDomain:"myqs-1ab0a.firebaseapp.com",databaseURL:"https://myqs-1ab0a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"myqs-1ab0a",storageBucket:"myqs-1ab0a.appspot.com",messagingSenderId:"405974773090",appId:"1:405974773090:web:a638f39dc508d46e3ad03b"}),u=Object(b.a)(d),x=Object(l.b)(),p=function(){Object(l.i)(x)},O=n(3),h=n(0),m=n.n(h),v=n(94),f=function(e){alert("Une erreur est survenue, recommence \ud83d\ude1c"),console.error("errorCode",null===e||void 0===e?void 0:e.code),console.error("errorMessage",null===e||void 0===e?void 0:e.message)},g=(n(76),n(96)),y=n(7),w=function(){return Object(y.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(y.jsxs)("div",{className:"loading",children:[Object(y.jsx)(g.a,{component:"p",children:"Patiente pendant que la magie op\xe8re \u2728"}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{})]})})},I=function(){var e=Object(j.a)(x),t=Object(s.a)(e,1)[0],n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],i=r[1],o=function(){var e=Object(O.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),n={url:window.location.href,handleCodeInApp:!0},e.next=4,Object(l.f)(x,t,n).then((function(){window.localStorage.setItem("emailForSignIn",t),alert("Tu vas recevoir un mail pour te connecter \ud83d\udc8c"),i(!1)})).catch(f);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:t?Object(y.jsx)(w,{}):Object(y.jsxs)("form",{onSubmit:function(e){var t,n,a;e.preventDefault();var r=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.elements)||void 0===n||null===(a=n.email)||void 0===a?void 0:a.value;o(r)},children:[Object(y.jsxs)("label",{children:["Renseigne ton email",Object(y.jsx)("input",{type:"email",name:"email",id:"email",required:!0,style:{marginLeft:"10px"}})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(v.a,{type:"submit",variant:"contained",disabled:c,children:c?"Patiente un peu \ud83d\ude80":"Recevoir le lien de connexion"})]})})},S=n(52),D=n(14),C=n(60),F=n(59),q=function(){var e=Object(j.a)(x),t=Object(s.a)(e,1)[0],n=null===t||void 0===t?void 0:t.uid,a=Object(F.a)(Object(b.h)(u,"users/".concat(n))),r=Object(s.a)(a,2),c=r[0],i=r[1],l=c||[],o=function(){var e=Object(O.a)(m.a.mark((function e(t){var a,r,c,i,s,j,o,d,x;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.date.value,r=t.target.diet.value,c=t.target.meal.value,s={date:a,diet:r,meal:c},j=function(e){return s.date===e.date&&s.meal===e.meal},o=(i=l).filter(j),d=i.findIndex(j),o.length>0&&i.splice(d,o.length),x=[].concat(Object(D.a)(i),[s]),p=x,Object(b.i)(Object(b.h)(u,"users/".concat(n)),p);case 13:case"end":return e.stop()}var p}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=new Date,t=l.reduce((function(e,t){return e.push(t.date),e}),[]);return Object(D.a)(t).sort((function(t,n){return Math.abs(new Date(t)-e)-Math.abs(new Date(n)-e)}))[0]},h={border:"solid 1px black",height:"100px",borderRadius:"5px",padding:"5px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},f=Object(S.a)(Object(S.a)({},h),{},{width:"65px",height:"65px"}),g=d()?new Date(d()).toLocaleDateString("fr"):"Aucune \ud83e\udd37\u200d";return i?Object(y.jsx)(w,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{style:{width:"70%",height:"300px",margin:"0 auto 30px"},children:0===l.length?Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(y.jsx)("p",{children:"Remplis le formulaire \ud83d\ude09"})}):Object(y.jsx)(C.PieChart,{data:function(){var e=l,t=e.filter((function(e){return"vegan"===e.diet})),n=e.filter((function(e){return"vegetarian"===e.diet})),a=e.filter((function(e){return"omnivore"===e.diet}));return[{title:"vegan",value:t.length,color:"#75DBCD"},{title:"v\xe9g\xe9tarien",value:n.length,color:"#FAA381"},{title:"omnivore",value:a.length,color:"#DCDBA8"}]}(),label:function(e){var t=e.dataEntry;return t.value>0?"".concat(t.title," : ").concat(Math.round(t.percentage),"%"):null},labelStyle:{fontSize:"6px"}})}),Object(y.jsxs)("form",{onSubmit:o,children:[Object(y.jsxs)("label",{children:["Date",Object(y.jsx)("input",{type:"date",name:"date",id:"date",required:!0})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"40px"},children:[Object(y.jsxs)("label",{style:f,children:["Matin ",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"radio",name:"meal",value:"breakfast",required:!0})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("label",{style:f,children:["Midi ",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"radio",name:"meal",value:"lunch"})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("label",{style:f,children:["Go\xfbter ",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"radio",name:"meal",value:"snack"})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("label",{style:f,children:["Soir ",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"radio",name:"meal",value:"dinner"})]})]}),Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(y.jsxs)("label",{style:h,children:["V\xe9g\xe9tarien ",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"radio",name:"diet",value:"vegetarian",required:!0})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("label",{style:h,children:["V\xe9gan ",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"radio",name:"diet",value:"vegan"})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("label",{style:h,children:["Omnivore ",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"radio",name:"diet",value:"omnivore"})]})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(v.a,{type:"submit",variant:"contained",children:"Enregistrer"})]}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("p",{children:["Nombre de jours : ",function(){var e=l.reduce((function(e,t){return e.push(t.date),e}),[]);return e.filter((function(t,n){return e.indexOf(t)===n})).length}()]}),Object(y.jsxs)("p",{children:["Date la plus proche renseign\xe9e : ",g]})]}),Object(y.jsx)("hr",{}),t&&Object(y.jsxs)("div",{children:[Object(y.jsxs)("p",{children:["Utilisateur: ",t.email]}),Object(y.jsx)(v.a,{onClick:p,type:"submit",variant:"outlined",children:"Se d\xe9connecter"})]}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{})]})};var M=function(){var e=Object(j.a)(x),t=Object(s.a)(e,2),n=t[0],a=t[1];if(Object(l.c)(x,window.location.href)){var r=window.localStorage.getItem("emailForSignIn");r||(r=window.prompt("Entrez votre email pour confirmation")),Object(l.h)(x,r,window.location.href).then((function(){window.localStorage.removeItem("emailForSignIn"),window.location.search=""})).catch(f)}return a?Object(y.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(y.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),Object(y.jsx)(w,{})]}):Object(y.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(y.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),n?Object(y.jsx)(q,{}):Object(y.jsx)(I,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),k()}},[[80,1,2]]]);
//# sourceMappingURL=main.be957047.chunk.js.map