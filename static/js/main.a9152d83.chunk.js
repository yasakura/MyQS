(this["webpackJsonpmy-qs"]=this["webpackJsonpmy-qs"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),i=n.n(c),l=(n(113),n(114),n(97)),o=n(178),s=n(12),u=n(177),d=function(e){alert("Une erreur est survenue, recommence \ud83d\ude1c"),console.error("errorCode",null===e||void 0===e?void 0:e.code),console.error("errorMessage",null===e||void 0===e?void 0:e.message)},j=n(6),b=n(1),v=n.n(b),m=n(34),O=n(62),f=n(88),h=n(25),p=Object(f.a)({apiKey:"AIzaSyBF25OZgwRM4sJomPY03QNkEndvXF7FMdI",authDomain:"myqs-1ab0a.firebaseapp.com",databaseURL:"https://myqs-1ab0a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"myqs-1ab0a",storageBucket:"myqs-1ab0a.appspot.com",messagingSenderId:"405974773090",appId:"1:405974773090:web:a638f39dc508d46e3ad03b"}),x=Object(h.a)(p),g=Object(m.b)(),w=function(){Object(m.i)(g)},S=function(){var e=Object(j.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(m.c)(g,window.location.href)){e.next=5;break}return(t=window.localStorage.getItem("emailForSignIn"))||(t=window.prompt("Entrez votre email pour confirmation")),e.next=5,Object(m.h)(g,t,window.location.href).then((function(){window.localStorage.removeItem("emailForSignIn"),window.location.search=""})).catch((function(e){"auth/invalid-action-code"!==(null===e||void 0===e?void 0:e.code)&&d(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(g),t=Object(s.a)(e,2);return{user:t[0],loadingUser:t[1]}},k=n(174),N=n(169),E=n(3),C=function(e){var t=e.isEmailOnError,n=e.setEmailOnError,r=Object(a.useState)(" "),c=Object(s.a)(r,2),i=c[0],l=c[1],o=function(){n(!1),l(" ")};return Object(E.jsx)(k.a,{children:Object(E.jsx)(N.a,{id:"email",type:"email",label:"email",className:"emailField",placeholder:"Entrez votre email",required:!0,onBlur:function(e){var t=e.target.value,a=0===t.length,r=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t);switch(!0){case a:n(!0),l("Tu n'as pas rempli ton email");break;case!r:n(!0),l("Le format de l'email n'est pas bon");break;default:o()}},onChange:function(e){t&&/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)&&o()},error:t,helperText:i})})},D=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),l=i[0],o=i[1],j=function(e){r(!0),function(e){var t={url:window.location.href,handleCodeInApp:!0};return Promise.resolve(Object(m.f)(g,e,t))}(e).then((function(){window.localStorage.setItem("emailForSignIn",e),alert("Tu vas recevoir un mail pour te connecter \ud83d\udc8c"),r(!1)})).catch((function(e){d(e),r(!1)}))};return Object(E.jsx)("div",{className:"formContainer",children:Object(E.jsxs)("form",{onSubmit:function(e){var t,n,a;e.preventDefault();var r=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.elements)||void 0===n||null===(a=n.email)||void 0===a?void 0:a.value;l||j(r)},children:[Object(E.jsx)(C,{isEmailOnError:l,setEmailOnError:o}),Object(E.jsx)(u.a,{type:"submit",variant:"contained",disabled:n,children:n?"Patiente un peu \ud83d\ude80":"Recevoir le lien de connexion"})]})})},F=n(21),I=n(92),P=n(171),M=n(173),q=function(e){var t,n=e.snackPack,c=e.setSnackPack,i=Object(a.useState)(!1),l=Object(s.a)(i,2),o=l[0],u=l[1],d=r.a.useState(void 0),j=Object(s.a)(d,2),b=j[0],v=j[1];return r.a.useEffect((function(){n.length&&!b?(v(Object(I.a)({},n[0])),c((function(e){return e.slice(1)})),u(!0)):n.length&&b&&o&&u(!1)}),[n,c,b,o]),Object(E.jsx)(M.a,{TransitionProps:{onExited:function(){v(void 0)}},anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:function(e,t){"clickaway"!==t&&u(!1)},open:o,children:Object(E.jsx)(P.a,{severity:"success",children:"Repas enregistr\xe9"})},null!==(t=null===b||void 0===b?void 0:b.key)&&void 0!==t?t:void 0)},T=n(93),A=function(){var e=Object(O.a)(g),t=Object(s.a)(e,1)[0],n=null===t||void 0===t?void 0:t.uid,a=Object(T.a)(Object(h.h)(x,"users/".concat(n))),r=Object(s.a)(a,2);return{diets:r[0]||[],loadingDiets:r[1]}},B=function(){return Math.random().toString().slice(2,9)},L=n(175),z=n(180),J=n(172),R=function(e){var t,n,a=e.data,r=e.cssClassName;return Object(E.jsx)("div",{className:"mb40",children:Object(E.jsx)(L.a,{row:!0,"aria-label":"position",name:null===a||void 0===a||null===(t=a[0])||void 0===t?void 0:t.name,defaultValue:null===a||void 0===a||null===(n=a[0])||void 0===n?void 0:n.value,className:"radioGroup",children:a.map((function(e){return Object(E.jsx)(z.a,{value:null===e||void 0===e?void 0:e.value,control:Object(E.jsx)(J.a,{size:"small"}),label:null===e||void 0===e?void 0:e.label,labelPlacement:"top",className:r},B())}))})})},U=n(94),V=n(95),G=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=y().user,i=A().diets,l=function(){r((function(e){return[].concat(Object(F.a)(e),[{key:B()}])}))};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.date.value,n=e.target.diet.value,a=e.target.meal.value;(function(e,t){return Object(h.i)(Object(h.h)(x,"users/".concat(null===e||void 0===e?void 0:e.uid)),t)})(c,function(e,t,n){var a=i,r={date:e,diet:t,meal:n},c=function(e){return r.date===e.date&&r.meal===e.meal},l=a.filter(c),o=a.findIndex(c);return l.length>0&&a.splice(o,l.length),[].concat(Object(F.a)(a),[r])}(t,n,a)).then(l)},children:[Object(E.jsxs)(k.a,{component:"fieldset",className:"w100",children:[Object(E.jsx)("div",{className:"dateContainer mb40",children:Object(E.jsx)(N.a,{id:"date",label:"Date du repas",type:"date",className:"dateField",InputLabelProps:{shrink:!0},required:!0})}),Object(E.jsx)(R,{cssClassName:"mealLabel",data:U}),Object(E.jsx)(R,{cssClassName:"label",data:V})]}),Object(E.jsx)(u.a,{type:"submit",variant:"contained",children:"Enregistrer"})]}),Object(E.jsx)(q,{snackPack:n,setSnackPack:r})]})},Q=n(96),$=function(e){var t=e.diets,n=e.data,a=e.label;return Object(E.jsx)("div",{className:"chartContainer",children:0===t.length?Object(E.jsx)("div",{className:"chartEmpty",children:Object(E.jsx)("p",{children:"Remplis le formulaire \ud83d\ude09"})}):Object(E.jsx)(Q.PieChart,{data:n,label:a,labelStyle:{fontSize:"6px"}})})},H=function(){var e=y().user,t=A().diets,n=function(){var e=new Date,n=t.reduce((function(e,t){return e.push(t.date),e}),[]);return Object(F.a)(n).sort((function(t,n){return Math.abs(new Date(t)-e)-Math.abs(new Date(n)-e)}))[0]},a=n()?new Date(n()).toLocaleDateString("fr"):"Aucune \ud83e\udd37\u200d";return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)($,{diets:t,data:function(){var e=t,n=e.filter((function(e){return"vegan"===e.diet})),a=e.filter((function(e){return"vegetarian"===e.diet})),r=e.filter((function(e){return"omnivore"===e.diet}));return[{title:"vegan",value:n.length,color:"#75DBCD"},{title:"v\xe9g\xe9tarien",value:a.length,color:"#FAA381"},{title:"omnivore",value:r.length,color:"#DCDBA8"}]}(),label:function(e){var t=e.dataEntry;return t.value>0?"".concat(t.title," : ").concat(Math.round(t.percentage),"%"):null}}),Object(E.jsx)(G,{}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("p",{children:["Nombre de jours : ",function(){var e=t.reduce((function(e,t){return e.push(t.date),e}),[]);return e.filter((function(t,n){return e.indexOf(t)===n})).length}()]}),Object(E.jsxs)("p",{children:["Date la plus proche renseign\xe9e : ",a]})]}),Object(E.jsx)("hr",{}),e&&Object(E.jsxs)("div",{children:[Object(E.jsxs)("p",{children:["Utilisateur: ",e.email]}),Object(E.jsx)(u.a,{onClick:w,className:"logOut",type:"submit",variant:"outlined",children:"Se d\xe9connecter"})]}),Object(E.jsx)("hr",{})]})},K=n(182),X=n(183),Y=n(184),Z=n(181),_=function(){return Object(E.jsx)(K.a,{children:Object(E.jsx)(X.a,{position:"fixed",children:Object(E.jsx)(Y.a,{children:Object(E.jsx)(Z.a,{variant:"h6",component:"div",className:"appBarText",children:"My QS"})})})})},W=(n(122),function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(_,{}),Object(E.jsx)("div",{className:"loadingContainer",children:Object(E.jsxs)("div",{className:"loading",children:[Object(E.jsx)(K.a,{component:"p",children:"Patiente pendant que la magie op\xe8re \u2728"}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{})]})})]})}),ee=function(e){var t=e.children,n=Object(a.useState)(!0),r=Object(s.a)(n,2),c=r[0],i=r[1],l=A().loadingDiets,o=y().loadingUser||l;return Object(a.useEffect)((function(){o?setTimeout((function(){return i(!0)}),500):setTimeout((function(){return i(!1)}),500)}),[i,o]),c?Object(E.jsx)(W,{}):t},te=function(){return Object(E.jsx)("footer",{children:Object(E.jsx)(Z.a,{children:"Fait avec \u2764\ufe0f par yasakura_"})})};var ne=function(){var e=y().user,t=Object(l.a)({palette:{primary:{main:"#007ea7"}}});return Object(a.useEffect)((function(){return S()})),Object(E.jsx)(ee,{children:Object(E.jsxs)(o.a,{theme:t,children:[Object(E.jsx)(_,{}),Object(E.jsx)("div",{className:"App",children:e?Object(E.jsx)(H,{}):Object(E.jsx)(D,{})}),e&&Object(E.jsx)(te,{})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(ne,{})}),document.getElementById("root")),ae()},94:function(e){e.exports=JSON.parse('[{"label":"Matin","name":"meal","value":"breakfast"},{"label":"Midi","name":"meal","value":"lunch"},{"label":"Go\xfbter","name":"meal","value":"snack"},{"label":"Soir","name":"meal","value":"dinner"}]')},95:function(e){e.exports=JSON.parse('[{"label":"V\xe9g\xe9tarien","name":"diet","value":"vegetarian"},{"label":"V\xe9gan","name":"diet","value":"vegan"},{"label":"Omnivore","name":"diet","value":"omnivore"}]')}},[[123,1,2]]]);
//# sourceMappingURL=main.a9152d83.chunk.js.map