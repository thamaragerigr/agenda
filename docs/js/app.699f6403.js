(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)s=o[u],r[s]&&m.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"0cc3d2db"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,a[1](s)}r[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/agenda/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09ab":function(t,e,a){},"09d7":function(t,e,a){t.exports=a.p+"img/parrot.e4d958b3.gif"},"480c":function(t,e,a){"use strict";var n=a("f564"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("9f7b"),i=a.n(r),s=a("ecee"),o=a("f2d1"),c=a("c074"),l=a("ad3d"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-container",[a("router-view")],1)],1)},d=[],m=(a("7faf"),a("2877")),f={},p=Object(m["a"])(f,u,d,!1,null,null,null),h=p.exports,b=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("BaseHeader",{attrs:{title:t.data.title}}),a("ScheduleList",{attrs:{tracks:t.data.tracks}}),a("BaseFooter")],1)},_=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"base-header d-flex justify-content-between"},[a("h1",{staticClass:"title"},[t._v("\n      "+t._s(t.title)+"\n      "),a("small",{staticClass:"time"},[a("b-badge",{attrs:{variant:"info"}},[t._v(t._s(t.data.startTime))]),a("span",{staticClass:"text-muted px-2"},[t._v("-")]),a("b-badge",{attrs:{variant:"info"}},[t._v(t._s(t.data.endTime))])],1)]),a("b-button",{staticClass:"align-self-center",attrs:{variant:"primary"},on:{click:t.goBack}},[t._v("Volver a OSW")])],1)])},y=[],k=a("5176"),T=a.n(k),w={title:"Agenda Junio 2019",date:"30/03/2019",description:"xxx",startTime:"10:00",endTime:"14:30",tracks:[{name:"Auditorio",content:[{title:"Recepción y café ☕️",startTime:{h:"10",m:"00"},endTime:{h:"10",m:"30"},type:1},{title:"KeyNote 📜",description:["- Novedades y noticias","- Más movidas"],startTime:{h:"10",m:"30"},endTime:{h:"11",m:"00"},type:1},{title:"Por confirmar",duration:45,description:["..."],startTime:{h:"11",m:"00"},endTime:{h:"11",m:"45"},type:2,authors:[]},{title:"Networking 🤗",startTime:{h:"13",m:"15"},endTime:{h:"14",m:"30"},type:1,authors:[],note:""}]},{name:"Planta 0 (Cafetería)",content:[{title:"Guilds",description:["Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para continuar con sus proyectos, idear, definir... lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)"],startTime:{h:"11",m:"00"},endTime:{h:"14",m:"00"},type:1}]},{name:"Planta 1 (Cafetería)",content:[{title:"¿Escribimos programas seguros? - HackMadrid %27",description:["Un breve análisis de la situación en materia de seguridad informática. Repaso de los tres eslabones: usuarios-programadores-empresas.","Errores, problemas en cada uno de ellos y focalización de los problemas particulares de los programadores."],authors:[{name:"Daniel Mery",avatar:"",bio:["Miembro y cofundador de: Planet Linux Caffe, HaskellMAD, HackMadrid%27, blockMAD"],social:{twitter:"https://twitter.com/dmery",url:"http://hackmadrid.org/"}}],startTime:{h:"11",m:"30"},endTime:{h:"13",m:"00"},type:3}]},{name:"Planta 0 (Corner)",content:[{title:"Taller - Montar un micro blog con React y Wordpress",description:["Taller en el que veremos como a montar un micro blog en react, con el back en wordpress · https://frontity.org/"],startTime:{h:"11:30",m:"00"},endTime:{h:"13",m:"00"},type:2,authors:[{name:"David Arenas",avatar:"",bio:["Software Developer at Frontity"],social:{github:"https://github.com/DAreRodz",url:"https://frontity.org/"}}]}]}]},C=w,O={name:"BaseHeader",props:{title:{type:String,required:!0}},data:function(){return{data:C}},methods:{goBack:function(){T()(document.createElement("a"),{target:"_blank",href:"https://osweekends.com"}).click()}}},S=O,x=(a("480c"),Object(m["a"])(S,g,y,!1,null,null,null)),j=x.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.tracks,function(t,e){return[a("ScheduleTable",{key:e,attrs:{track:t}})]})],2)},A=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-5"},[a("b-table",{attrs:{items:t.track.content,fields:t.fields,outlined:"",hover:""},scopedSlots:t._u([{key:"startTime",fn:function(t){return[a("ScheduleTableColTime",{attrs:{data:t}})]}},{key:"title",fn:function(e){return[a("TalkTitle",{attrs:{title:e.item.title,type:e.item.type}}),e.item.description?a("TalkDescription",{attrs:{data:e.item.description}}):t._e(),e.item.authors?a("TalkAuthors",{attrs:{data:e.item.authors}}):t._e()]}}])})],1)},q=[],M=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time-col"},[a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[t._v(t._s(t.data.item.startTime.h))]),a("span",{staticClass:"colon"},[t._v(":")]),a("span",{staticClass:"time--m"},[t._v(t._s(t.data.item.startTime.m))])]),a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[t._v(t._s(t.data.item.endTime.h))]),a("span",{staticClass:"colon"},[t._v(":")]),a("span",{staticClass:"time--m"},[t._v(t._s(t.data.item.endTime.m))])])])}),P=[],B={name:"ScheduleTableColTime",props:{data:{required:!0,type:Object||Array}}},D=B,H=Object(m["a"])(D,M,P,!1,null,"1b943ddc",null),W=H.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t.type?a("b-badge",{attrs:{variant:t.badgeVariant(t.type)}},[t._v(" · ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1)])},U=[],F=["primary","success","danger"],G={props:{type:{required:!1},title:{type:String,required:!0}},methods:{badgeVariant:function(t){return F[t-1]}}},R=G,J=Object(m["a"])(R,L,U,!1,null,"74070a21",null),N=J.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.data,function(e,n){return a("p",{key:n,staticClass:"lead"},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},z=[],I={props:{data:{type:Array,required:!0}}},K=I,Q=Object(m["a"])(K,V,z,!1,null,"4853fa50",null),X=Q.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.data,function(e,n){return[a("div",{key:"auth_"+n},[a("h5",[t._v(t._s(e.name))]),e.social?a("AuthorsSocial",{attrs:{social:e.social}}):t._e(),e.bio?a("AuthorsBio",{attrs:{bio:e.bio}}):t._e()],1)]})],2)},Z=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-inline"},t._l(t.social,function(e,n){return a("li",{key:n,staticClass:"list-inline-item"},[a("a",{staticClass:"ico-link",class:"ico-"+n,attrs:{href:e}},[a("font-awesome-icon",{attrs:{icon:t.getIcon(n)}})],1)])}),0)},et=[],at={twitch:["fab","twitch"],github:["fab","github"],twitter:["fab","twitter-square"],youtube:["fab","youtube-square"],facebook:["fab","facebook-square"],linkedin:["fab","linkedin"],instagram:["fab","instagram"],meetup:["fab","meetup"],url:"link"},nt={name:"AuthorsSocial",props:{social:{type:Object}},methods:{getIcon:function(t){return at[t]}}},rt=nt,it=(a("a26a"),Object(m["a"])(rt,tt,et,!1,null,null,null)),st=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.bio,function(e,n){return a("p",{key:n,staticClass:"lead text-muted"},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},ct=[],lt={name:"AuthorsBio",props:{bio:{type:Array}}},ut=lt,dt=Object(m["a"])(ut,ot,ct,!1,null,"655bb19a",null),mt=dt.exports,ft={components:{AuthorsSocial:st,AuthorsBio:mt},props:{data:{type:Array,reuired:!0}}},pt=ft,ht=Object(m["a"])(pt,Y,Z,!1,null,null,null),bt=ht.exports,vt={name:"ScheduleTable",components:{ScheduleTableColTime:W,TalkTitle:N,TalkDescription:X,TalkAuthors:bt},props:{track:{type:Object,required:!0}},data:function(){return{fields:[{key:"startTime",label:"Hora",class:"time-column"},{key:"title",label:this.track.name}]}},methods:{}},_t=vt,gt=(a("9be5"),Object(m["a"])(_t,$,q,!1,null,null,null)),yt=gt.exports,kt={name:"ScheduleList",components:{ScheduleTable:yt},props:{tracks:{type:Array,required:!0}},data:function(){return{key:"value"}}},Tt=kt,wt=Object(m["a"])(Tt,E,A,!1,null,null,null),Ct=wt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-center"},[t._m(0),a("p",[t._m(1),a("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.goUrl("https://github.com/OSWeekends/agenda?ref=agenda")}}},[t._v("Editar en Github")]),a("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.goUrl("https://osweekends.com/?ref=agenda")}}},[t._v("OSW")]),a("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.goUrl("https://invitations-osweekends.herokuapp.com/?ref=agenda")}}},[t._v("#Slack")]),t._m(2)],1)])},St=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Made with 💙 by OSWeekends "),a("a",{attrs:{href:"https://github.com/OSWeekends/agenda/graphs/contributors",target:"_blank"}},[t._v("Guilders")]),t._v(" 🦄")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("09d7"),alt:"parrot"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("68f2"),alt:"parrot"}})])}],xt={name:"BaseFooter",methods:{goUrl:function(t){T()(document.createElement("a"),{target:"_blank",href:t}).click()}}},jt=xt,Et=(a("e4a9"),Object(m["a"])(jt,Ot,St,!1,null,null,null)),At=Et.exports,$t={name:"home",components:{BaseHeader:j,ScheduleList:Ct,BaseFooter:At},data:function(){return{data:C}}},qt=$t,Mt=Object(m["a"])(qt,v,_,!1,null,null,null),Pt=Mt.exports;n["a"].use(b["a"]);var Bt=new b["a"]({routes:[{path:"/",name:"home",component:Pt},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}]}),Dt=a("2f62");n["a"].use(Dt["a"]);var Ht=new Dt["a"].Store({state:{},mutations:{},actions:{}});a("f9e3"),a("2dd8");s["c"].add(o["g"],o["b"],o["a"],o["h"],o["d"],o["c"],o["f"],c["a"],o["e"]),n["a"].component("font-awesome-icon",l["a"]),n["a"].use(i.a),n["a"].config.productionTip=!1,new n["a"]({router:Bt,store:Ht,render:function(t){return t(h)}}).$mount("#app")},"68f2":function(t,e,a){t.exports=a.p+"img/parrotright.db57bf97.gif"},"7faf":function(t,e,a){"use strict";var n=a("8fba"),r=a.n(n);r.a},"871f":function(t,e,a){},"8fba":function(t,e,a){},"9be5":function(t,e,a){"use strict";var n=a("871f"),r=a.n(n);r.a},a26a:function(t,e,a){"use strict";var n=a("d406"),r=a.n(n);r.a},d406:function(t,e,a){},e4a9:function(t,e,a){"use strict";var n=a("09ab"),r=a.n(n);r.a},f564:function(t,e,a){}});
//# sourceMappingURL=app.699f6403.js.map