(this["webpackJsonpmy-qs"]=this["webpackJsonpmy-qs"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(6),i=n.n(r),a=n(55),c=n.n(a),s=(n(71),n(72),n(12)),l=n(94),o=function(e){alert("Une erreur est survenue, recommence \ud83d\ude1c"),console.error("errorCode",null===e||void 0===e?void 0:e.code),console.error("errorMessage",null===e||void 0===e?void 0:e.message)},j=n(3),b=n(0),d=n.n(b),u=n(25),x=n(42),O=n(57),p=n(17),h=Object(O.a)({apiKey:"AIzaSyBF25OZgwRM4sJomPY03QNkEndvXF7FMdI",authDomain:"myqs-1ab0a.firebaseapp.com",databaseURL:"https://myqs-1ab0a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"myqs-1ab0a",storageBucket:"myqs-1ab0a.appspot.com",messagingSenderId:"405974773090",appId:"1:405974773090:web:a638f39dc508d46e3ad03b"}),m=Object(p.a)(h),f=Object(u.b)(),v=function(){Object(u.i)(f)},g=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(u.c)(f,window.location.href)){e.next=5;break}return(t=window.localStorage.getItem("emailForSignIn"))||(t=window.prompt("Entrez votre email pour confirmation")),e.next=5,Object(u.h)(f,t,window.location.href).then((function(){window.localStorage.removeItem("emailForSignIn"),window.location.search=""})).catch((function(e){"auth/invalid-action-code"!==(null===e||void 0===e?void 0:e.code)&&o(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(x.a)(f),t=Object(s.a)(e,2);return{user:t[0],loadingUser:t[1]}},w=n(7),I=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],a=function(e){i(!0),function(e){var t={url:window.location.href,handleCodeInApp:!0};return Promise.resolve(Object(u.f)(f,e,t))}(e).then((function(){window.localStorage.setItem("emailForSignIn",e),alert("Tu vas recevoir un mail pour te connecter \ud83d\udc8c"),i(!1)})).catch(o)};return Object(w.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(w.jsxs)("form",{onSubmit:function(e){var t,n,r;e.preventDefault();var i=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.elements)||void 0===n||null===(r=n.email)||void 0===r?void 0:r.value;a(i)},children:[Object(w.jsxs)("label",{children:["Renseigne ton email",Object(w.jsx)("input",{type:"email",name:"email",id:"email",required:!0,style:{marginLeft:"10px"}})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{type:"submit",variant:"contained",disabled:n,children:n?"Patiente un peu \ud83d\ude80":"Recevoir le lien de connexion"})]})})},S=n(52),D=n(14),C=n(60),F=n(59),q=function(){var e=Object(x.a)(f),t=Object(s.a)(e,1)[0],n=null===t||void 0===t?void 0:t.uid,r=Object(F.a)(Object(p.h)(m,"users/".concat(n))),i=Object(s.a)(r,2);return{diets:i[0]||[],loadingDiets:i[1]}},M=function(){var e=y().user,t=q().diets,n=function(){var e=new Date,n=t.reduce((function(e,t){return e.push(t.date),e}),[]);return Object(D.a)(n).sort((function(t,n){return Math.abs(new Date(t)-e)-Math.abs(new Date(n)-e)}))[0]},r={border:"solid 1px black",height:"100px",borderRadius:"5px",padding:"5px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},i=Object(S.a)(Object(S.a)({},r),{},{width:"65px",height:"65px"}),a=n()?new Date(n()).toLocaleDateString("fr"):"Aucune \ud83e\udd37\u200d";return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{style:{width:"70%",height:"300px",margin:"0 auto 30px"},children:0===t.length?Object(w.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(w.jsx)("p",{children:"Remplis le formulaire \ud83d\ude09"})}):Object(w.jsx)(C.PieChart,{data:function(){var e=t,n=e.filter((function(e){return"vegan"===e.diet})),r=e.filter((function(e){return"vegetarian"===e.diet})),i=e.filter((function(e){return"omnivore"===e.diet}));return[{title:"vegan",value:n.length,color:"#75DBCD"},{title:"v\xe9g\xe9tarien",value:r.length,color:"#FAA381"},{title:"omnivore",value:i.length,color:"#DCDBA8"}]}(),label:function(e){var t=e.dataEntry;return t.value>0?"".concat(t.title," : ").concat(Math.round(t.percentage),"%"):null},labelStyle:{fontSize:"6px"}})}),Object(w.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target.date.value,i=n.target.diet.value,a=n.target.meal.value,c=t,s={date:r,diet:i,meal:a},l=function(e){return s.date===e.date&&s.meal===e.meal},o=c.filter(l),j=c.findIndex(l);o.length>0&&c.splice(j,o.length);var b=[].concat(Object(D.a)(c),[s]);!function(e,t){Object(p.i)(Object(p.h)(m,"users/".concat(null===e||void 0===e?void 0:e.uid)),t)}(e,b)},children:[Object(w.jsxs)("label",{children:["Date",Object(w.jsx)("input",{type:"date",name:"date",id:"date",required:!0})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"40px"},children:[Object(w.jsxs)("label",{style:i,children:["Matin ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"breakfast",required:!0})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:i,children:["Midi ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"lunch"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:i,children:["Go\xfbter ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"snack"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:i,children:["Soir ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"meal",value:"dinner"})]})]}),Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(w.jsxs)("label",{style:r,children:["V\xe9g\xe9tarien ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"diet",value:"vegetarian",required:!0})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:r,children:["V\xe9gan ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"diet",value:"vegan"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{style:r,children:["Omnivore ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"diet",value:"omnivore"})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{type:"submit",variant:"contained",children:"Enregistrer"})]}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["Nombre de jours : ",function(){var e=t.reduce((function(e,t){return e.push(t.date),e}),[]);return e.filter((function(t,n){return e.indexOf(t)===n})).length}()]}),Object(w.jsxs)("p",{children:["Date la plus proche renseign\xe9e : ",a]})]}),Object(w.jsx)("hr",{}),e&&Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["Utilisateur: ",e.email]}),Object(w.jsx)(l.a,{onClick:v,type:"submit",variant:"outlined",children:"Se d\xe9connecter"})]}),Object(w.jsx)("hr",{}),Object(w.jsx)("br",{})]})},k=(n(79),n(96)),A=function(){return Object(w.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(w.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),Object(w.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(w.jsxs)("div",{className:"loading",children:[Object(w.jsx)(k.a,{component:"p",children:"Patiente pendant que la magie op\xe8re \u2728"}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{})]})})]})},B=function(e){var t=e.children,n=Object(r.useState)(!0),i=Object(s.a)(n,2),a=i[0],c=i[1],l=q().loadingDiets,o=y().loadingUser||l;return Object(r.useEffect)((function(){o?setTimeout((function(){return c(!0)}),500):setTimeout((function(){return c(!1)}),500)}),[c,o]),a?Object(w.jsx)(A,{}):t};var E=function(){var e=y().user;return Object(r.useEffect)((function(){return g()})),Object(w.jsx)(B,{children:Object(w.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(w.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),e?Object(w.jsx)(M,{}):Object(w.jsx)(I,{})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root")),P()}},[[80,1,2]]]);
//# sourceMappingURL=main.b9879df9.chunk.js.map