(this["webpackJsonpmy-qs"]=this["webpackJsonpmy-qs"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=n(56),r=n.n(i),s=(n(71),n(12)),l=(n(72),n(32)),j=n(58),o=n(17),b=n(25),d=Object(j.a)({apiKey:"AIzaSyBF25OZgwRM4sJomPY03QNkEndvXF7FMdI",authDomain:"myqs-1ab0a.firebaseapp.com",databaseURL:"https://myqs-1ab0a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"myqs-1ab0a",storageBucket:"myqs-1ab0a.appspot.com",messagingSenderId:"405974773090",appId:"1:405974773090:web:a638f39dc508d46e3ad03b"}),u=Object(o.a)(d),O=Object(b.b)(),x=n(94),p=function(e){alert("Une erreur est survenue, recommence \ud83d\ude1c"),console.error("errorCode",null===e||void 0===e?void 0:e.code),console.error("errorMessage",null===e||void 0===e?void 0:e.message)},h=function(){Object(b.i)(O)},m=n(7),v=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],i=function(e){c(!0),function(e){var t={url:window.location.href,handleCodeInApp:!0};return Promise.resolve(Object(b.f)(O,e,t))}(e).then((function(){window.localStorage.setItem("emailForSignIn",e),alert("Tu vas recevoir un mail pour te connecter \ud83d\udc8c"),c(!1)})).catch(p)};return Object(m.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(m.jsxs)("form",{onSubmit:function(e){var t,n,a;e.preventDefault();var c=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.elements)||void 0===n||null===(a=n.email)||void 0===a?void 0:a.value;i(c)},children:[Object(m.jsxs)("label",{children:["Renseigne ton email",Object(m.jsx)("input",{type:"email",name:"email",id:"email",required:!0,style:{marginLeft:"10px"}})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(x.a,{type:"submit",variant:"contained",disabled:n,children:n?"Patiente un peu \ud83d\ude80":"Recevoir le lien de connexion"})]})})},f=n(53),g=n(14),y=n(3),w=n(0),I=n.n(w),S=n(60),D=n(44),C=function(){var e=Object(l.a)(O),t=Object(s.a)(e,1)[0],n=null===t||void 0===t?void 0:t.uid,a=Object(D.a)(Object(o.h)(u,"users/".concat(n))),c=Object(s.a)(a,1)[0]||[],i=function(){var e=Object(y.a)(I.a.mark((function e(t){var a,i,r,s,l,j,b,d,O;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.date.value,i=t.target.diet.value,r=t.target.meal.value,l={date:a,diet:i,meal:r},j=function(e){return l.date===e.date&&l.meal===e.meal},b=(s=c).filter(j),d=s.findIndex(j),b.length>0&&s.splice(d,b.length),O=[].concat(Object(g.a)(s),[l]),x=O,Object(o.i)(Object(o.h)(u,"users/".concat(n)),x);case 13:case"end":return e.stop()}var x}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=new Date,t=c.reduce((function(e,t){return e.push(t.date),e}),[]);return Object(g.a)(t).sort((function(t,n){return Math.abs(new Date(t)-e)-Math.abs(new Date(n)-e)}))[0]},j={border:"solid 1px black",height:"100px",borderRadius:"5px",padding:"5px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},b=Object(f.a)(Object(f.a)({},j),{},{width:"65px",height:"65px"}),d=r()?new Date(r()).toLocaleDateString("fr"):"Aucune \ud83e\udd37\u200d";return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{width:"70%",height:"300px",margin:"0 auto 30px"},children:0===c.length?Object(m.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(m.jsx)("p",{children:"Remplis le formulaire \ud83d\ude09"})}):Object(m.jsx)(S.PieChart,{data:function(){var e=c,t=e.filter((function(e){return"vegan"===e.diet})),n=e.filter((function(e){return"vegetarian"===e.diet})),a=e.filter((function(e){return"omnivore"===e.diet}));return[{title:"vegan",value:t.length,color:"#75DBCD"},{title:"v\xe9g\xe9tarien",value:n.length,color:"#FAA381"},{title:"omnivore",value:a.length,color:"#DCDBA8"}]}(),label:function(e){var t=e.dataEntry;return t.value>0?"".concat(t.title," : ").concat(Math.round(t.percentage),"%"):null},labelStyle:{fontSize:"6px"}})}),Object(m.jsxs)("form",{onSubmit:i,children:[Object(m.jsxs)("label",{children:["Date",Object(m.jsx)("input",{type:"date",name:"date",id:"date",required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"40px"},children:[Object(m.jsxs)("label",{style:b,children:["Matin ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",name:"meal",value:"breakfast",required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{style:b,children:["Midi ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",name:"meal",value:"lunch"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{style:b,children:["Go\xfbter ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",name:"meal",value:"snack"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{style:b,children:["Soir ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",name:"meal",value:"dinner"})]})]}),Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(m.jsxs)("label",{style:j,children:["V\xe9g\xe9tarien ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",name:"diet",value:"vegetarian",required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{style:j,children:["V\xe9gan ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",name:"diet",value:"vegan"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{style:j,children:["Omnivore ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",name:"diet",value:"omnivore"})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(x.a,{type:"submit",variant:"contained",children:"Enregistrer"})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Nombre de jours : ",function(){var e=c.reduce((function(e,t){return e.push(t.date),e}),[]);return e.filter((function(t,n){return e.indexOf(t)===n})).length}()]}),Object(m.jsxs)("p",{children:["Date la plus proche renseign\xe9e : ",d]})]}),Object(m.jsx)("hr",{}),t&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Utilisateur: ",t.email]}),Object(m.jsx)(x.a,{onClick:h,type:"submit",variant:"outlined",children:"Se d\xe9connecter"})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{})]})},F=(n(79),n(96)),q=function(){return Object(m.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(m.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),Object(m.jsx)("div",{style:{height:"calc(100vh - 200px)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(m.jsxs)("div",{className:"loading",children:[Object(m.jsx)(F.a,{component:"p",children:"Patiente pendant que la magie op\xe8re \u2728"}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})})]})},M=function(e){var t=e.children,n=Object(a.useState)(!0),c=Object(s.a)(n,2),i=c[0],r=c[1],j=Object(l.a)(O),b=Object(s.a)(j,2)[1],d=Object(l.a)(O),x=Object(s.a)(d,1)[0],p=null===x||void 0===x?void 0:x.uid,h=Object(D.a)(Object(o.h)(u,"users/".concat(p))),v=Object(s.a)(h,2)[1];return console.log("loading",b),console.log("loadingDatabase",v),b&&v||setTimeout((function(){return r(!1)}),1e3),Object(a.useContext)((function(){r(!(!b&&!v))})),i?Object(m.jsx)(q,{}):t};var k=function(){var e=Object(l.a)(O),t=Object(s.a)(e,1)[0];return Object(a.useEffect)((function(){return function(){if(Object(b.c)(O,window.location.href)){var e=window.localStorage.getItem("emailForSignIn");e||(e=window.prompt("Entrez votre email pour confirmation")),Object(b.h)(O,e,window.location.href).then((function(){window.localStorage.removeItem("emailForSignIn"),window.location.search=""})).catch((function(e){"auth/invalid-action-code"!==(null===e||void 0===e?void 0:e.code)&&p(e)}))}}()})),Object(m.jsx)(M,{children:Object(m.jsxs)("div",{className:"App",style:{maxWidth:"375px",margin:"0 auto",padding:"0 10px"},children:[Object(m.jsx)("header",{style:{margin:"20px 0"},children:"My QS"}),t?Object(m.jsx)(C,{}):Object(m.jsx)(v,{})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),A()}},[[80,1,2]]]);
//# sourceMappingURL=main.81579b13.chunk.js.map