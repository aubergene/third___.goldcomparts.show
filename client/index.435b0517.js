import{S as e,i as t,s as l,e as s,t as a,g as r,h as n,j as o,d as i,n as c,o as h,w as u,a as v,f,k as g,l as d,A as m,B as p,C as _,D as E,q as w,E as y,F as b,G as I,H as q,p as O,r as N,u as T,I as D,J as C,K as V,L as $,M as j,N as x}from"./client.6a39f6ac.js";import{t as S}from"./tsv.6a7ced64.js";import{s as k}from"./helpers.b84b4fdd.js";import{f as P,a as R}from"./index.2e824a60.js";function B(e,t,l){const s=e.slice();return s[13]=t[l],s[15]=l,s}function L(e,t,l){const s=e.slice();return s[4]=t[l],s}function M(e,t,l){const s=e.slice();return s[3]=t[l],s}function A(e,t,l){const s=e.slice();return s[2]=t[l],s}function F(e){let t,l,v,f=e[2]+"";return{c(){t=s("option"),l=a(f),this.h()},l(e){t=r(e,"OPTION",{value:!0});var s=n(t);l=o(s,f),s.forEach(i),this.h()},h(){t.__value=v=e[2],t.value=t.__value},m(e,s){c(e,t,s),h(t,l)},p(e,s){1&s&&f!==(f=e[2]+"")&&u(l,f),1&s&&v!==(v=e[2])&&(t.__value=v,t.value=t.__value)},d(e){e&&i(t)}}}function G(e){let t,l,v,f=e[3]+"";return{c(){t=s("option"),l=a(f),this.h()},l(e){t=r(e,"OPTION",{value:!0});var s=n(t);l=o(s,f),s.forEach(i),this.h()},h(){t.__value=v=e[3],t.value=t.__value},m(e,s){c(e,t,s),h(t,l)},p(e,s){1&s&&f!==(f=e[3]+"")&&u(l,f),1&s&&v!==(v=e[3])&&(t.__value=v,t.value=t.__value)},d(e){e&&i(t)}}}function H(e){let t,l,v,f=e[4]+"";return{c(){t=s("option"),l=a(f),this.h()},l(e){t=r(e,"OPTION",{value:!0});var s=n(t);l=o(s,f),s.forEach(i),this.h()},h(){t.__value=v=e[4],t.value=t.__value},m(e,s){c(e,t,s),h(t,l)},p(e,s){1&s&&f!==(f=e[4]+"")&&u(l,f),1&s&&v!==(v=e[4])&&(t.__value=v,t.value=t.__value)},d(e){e&&i(t)}}}function Y(e){let t,l,u,d,m,p,_,E,w;return{c(){t=s("div"),l=a("Sorry your filter return no results\n\t\t\t\t"),u=s("br"),d=v(),m=s("div"),p=a("Click here to remove filters"),_=v(),this.h()},l(e){t=r(e,"DIV",{});var s=n(t);l=o(s,"Sorry your filter return no results\n\t\t\t\t"),u=r(s,"BR",{}),d=f(s),m=r(s,"DIV",{class:!0});var a=n(m);p=o(a,"Click here to remove filters"),a.forEach(i),_=f(s),s.forEach(i),this.h()},h(){g(m,"class","button")},m(s,a){c(s,t,a),h(t,l),h(t,u),h(t,d),h(t,m),h(m,p),h(t,_),E||(w=b(m,"click",e[9]),E=!0)},p:O,d(e){e&&i(t),E=!1,w()}}}function J(e,t){let l,w,y,b,I,q,N,T,D,C,$,j,x,S,B,L,M,A,F,G=t[13].name+"",H=t[13].otherName?`  (${t[13].otherName})`:"",Y=t[13].title+"",J=O;return{key:e,first:null,c(){l=s("div"),w=s("a"),y=s("div"),b=s("div"),I=v(),q=s("div"),N=v(),T=s("h6"),D=a(G),C=v(),$=a(H),j=v(),x=s("p"),S=a(Y),L=v(),this.h()},l(e){l=r(e,"DIV",{class:!0});var t=n(l);w=r(t,"A",{href:!0});var s=n(w);y=r(s,"DIV",{class:!0});var a=n(y);b=r(a,"DIV",{class:!0}),n(b).forEach(i),I=f(a),q=r(a,"DIV",{class:!0,style:!0}),n(q).forEach(i),a.forEach(i),N=f(s),T=r(s,"H6",{class:!0});var c=n(T);D=o(c,G),C=f(c),$=o(c,H),c.forEach(i),j=f(s),x=r(s,"P",{class:!0});var h=n(x);S=o(h,Y),h.forEach(i),s.forEach(i),L=f(t),t.forEach(i),this.h()},h(){g(b,"class","bio-photo-BG svelte-1qewv89"),g(q,"class","bio-photo svelte-1qewv89"),d(q,"background-image","url(img/bios/"+t[13].username+".jpeg),url(img/grain400.png)"),g(y,"class","bio-photo-container svelte-1qewv89"),g(T,"class","svelte-1qewv89"),g(x,"class","svelte-1qewv89"),g(w,"href",B="artists/"+k(t[13].name)),g(l,"class","bio-box svelte-1qewv89"),this.first=l},m(e,t){c(e,l,t),h(l,w),h(w,y),h(y,b),h(y,I),h(y,q),h(w,N),h(w,T),h(T,D),h(T,C),h(T,$),h(w,j),h(w,x),h(x,S),h(l,L),F=!0},p(e,t){(!F||2&t)&&d(q,"background-image","url(img/bios/"+e[13].username+".jpeg),url(img/grain400.png)"),(!F||2&t)&&G!==(G=e[13].name+"")&&u(D,G),(!F||2&t)&&H!==(H=e[13].otherName?`  (${e[13].otherName})`:"")&&u($,H),(!F||2&t)&&Y!==(Y=e[13].title+"")&&u(S,Y),(!F||2&t&&B!==(B="artists/"+k(e[13].name)))&&g(w,"href",B)},r(){A=l.getBoundingClientRect()},f(){m(l),J(),p(l,A)},a(){J(),J=_(l,A,P,{delay:10*t[15],duration:400})},i(e){F||(V(()=>{M||(M=E(l,R,{duration:300,y:200},!0)),M.run(1)}),F=!0)},o(e){M||(M=E(l,R,{duration:300,y:200},!1)),M.run(0),F=!1},d(e){e&&i(l),e&&M&&M.end()}}}function K(e){let t,l,u,d,m,p,_,E,O,x,S,k,P,R,K,z,Q,U,W,X,Z,ee,te,le,se=[],ae=new Map,re=e[0].themes,ne=[];for(let t=0;t<re.length;t+=1)ne[t]=F(A(e,re,t));let oe=e[0].media,ie=[];for(let t=0;t<oe.length;t+=1)ie[t]=G(M(e,oe,t));let ce=e[0].years.reverse(),he=[];for(let t=0;t<ce.length;t+=1)he[t]=H(L(e,ce,t));let ue=e[1];const ve=e=>e[13].username;for(let t=0;t<ue.length;t+=1){let l=B(e,ue,t),s=ve(l);ae.set(s,se[t]=J(s,l))}let fe=null;return ue.length||(fe=Y(e)),{c(){t=v(),l=s("section"),u=s("div"),d=s("div"),m=s("div"),p=s("select"),_=s("option"),E=a("Theme");for(let e=0;e<ne.length;e+=1)ne[e].c();x=v(),S=s("select"),k=s("option"),P=a("Media");for(let e=0;e<ie.length;e+=1)ie[e].c();K=v(),z=s("select"),Q=s("option"),U=a("Year");for(let e=0;e<he.length;e+=1)he[e].c();X=v(),Z=s("div");for(let e=0;e<se.length;e+=1)se[e].c();fe&&fe.c(),this.h()},l(e){w('[data-svelte="svelte-1mylat4"]',document.head).forEach(i),t=f(e),l=r(e,"SECTION",{class:!0});var s=n(l);u=r(s,"DIV",{class:!0});var a=n(u);d=r(a,"DIV",{class:!0});var c=n(d);m=r(c,"DIV",{class:!0});var h=n(m);p=r(h,"SELECT",{class:!0});var v=n(p);_=r(v,"OPTION",{value:!0,selected:!0});var g=n(_);E=o(g,"Theme"),g.forEach(i);for(let e=0;e<ne.length;e+=1)ne[e].l(v);v.forEach(i),x=f(h),S=r(h,"SELECT",{class:!0});var y=n(S);k=r(y,"OPTION",{value:!0,selected:!0});var b=n(k);P=o(b,"Media"),b.forEach(i);for(let e=0;e<ie.length;e+=1)ie[e].l(y);y.forEach(i),K=f(h),z=r(h,"SELECT",{class:!0});var I=n(z);Q=r(I,"OPTION",{value:!0,selected:!0});var q=n(Q);U=o(q,"Year"),q.forEach(i);for(let e=0;e<he.length;e+=1)he[e].l(I);I.forEach(i),h.forEach(i),X=f(c),Z=r(c,"DIV",{class:!0});var O=n(Z);for(let e=0;e<se.length;e+=1)se[e].l(O);fe&&fe.l(O),O.forEach(i),c.forEach(i),a.forEach(i),s.forEach(i),this.h()},h(){document.title="Final Show - 2021",_.__value=O=null,_.value=_.__value,_.selected=!0,g(p,"class","svelte-1qewv89"),void 0===e[2]&&V(()=>e[6].call(p)),k.__value=R=null,k.value=k.__value,k.selected=!0,g(S,"class","svelte-1qewv89"),void 0===e[3]&&V(()=>e[7].call(S)),Q.__value=W=null,Q.value=Q.__value,Q.selected=!0,g(z,"class","svelte-1qewv89"),void 0===e[4]&&V(()=>e[8].call(z)),g(m,"class","selectors svelte-1qewv89"),g(Z,"class","bio-boxes svelte-1qewv89"),g(d,"class","content"),g(u,"class","container page-max-width artists-container svelte-1qewv89"),g(l,"class","section bg-col-7")},m(s,a){c(s,t,a),c(s,l,a),h(l,u),h(u,d),h(d,m),h(m,p),h(p,_),h(_,E);for(let e=0;e<ne.length;e+=1)ne[e].m(p,null);y(p,e[2]),h(m,x),h(m,S),h(S,k),h(k,P);for(let e=0;e<ie.length;e+=1)ie[e].m(S,null);y(S,e[3]),h(m,K),h(m,z),h(z,Q),h(Q,U);for(let e=0;e<he.length;e+=1)he[e].m(z,null);y(z,e[4]),h(d,X),h(d,Z);for(let e=0;e<se.length;e+=1)se[e].m(Z,null);fe&&fe.m(Z,null),ee=!0,te||(le=[b(p,"change",e[6]),b(S,"change",e[7]),b(z,"change",e[8])],te=!0)},p(e,[t]){if(1&t){let l;for(re=e[0].themes,l=0;l<re.length;l+=1){const s=A(e,re,l);ne[l]?ne[l].p(s,t):(ne[l]=F(s),ne[l].c(),ne[l].m(p,null))}for(;l<ne.length;l+=1)ne[l].d(1);ne.length=re.length}if(5&t&&y(p,e[2]),1&t){let l;for(oe=e[0].media,l=0;l<oe.length;l+=1){const s=M(e,oe,l);ie[l]?ie[l].p(s,t):(ie[l]=G(s),ie[l].c(),ie[l].m(S,null))}for(;l<ie.length;l+=1)ie[l].d(1);ie.length=oe.length}if(9&t&&y(S,e[3]),1&t){let l;for(ce=e[0].years.reverse(),l=0;l<ce.length;l+=1){const s=L(e,ce,l);he[l]?he[l].p(s,t):(he[l]=H(s),he[l].c(),he[l].m(z,null))}for(;l<he.length;l+=1)he[l].d(1);he.length=ce.length}if(17&t&&y(z,e[4]),30&t){const l=e[1];$();for(let e=0;e<se.length;e+=1)se[e].r();se=I(se,t,ve,1,e,l,ae,Z,j,J,null,B);for(let e=0;e<se.length;e+=1)se[e].a();q(),!l.length&&fe?fe.p(e,t):l.length?fe&&(fe.d(1),fe=null):(fe=Y(e),fe.c(),fe.m(Z,null))}},i(e){if(!ee){for(let e=0;e<ue.length;e+=1)N(se[e]);ee=!0}},o(e){for(let e=0;e<se.length;e+=1)T(se[e]);ee=!1},d(e){e&&i(t),e&&i(l),D(ne,e),D(ie,e),D(he,e);for(let e=0;e<se.length;e+=1)se[e].d();fe&&fe.d(),te=!1,C(le)}}}async function z({params:e}){return{artistsRows:await this.fetch("artists.tsv").then(e=>e.text()),tags:await this.fetch("/artists/tags.json").then(e=>e.json())}}function Q(e,t,l){let{artistsRows:s}=t,{tags:a}=t,r=null,n=null,o=null;let i,c,h;return e.$$set=e=>{"artistsRows"in e&&l(5,s=e.artistsRows),"tags"in e&&l(0,a=e.tags)},e.$$.update=()=>{32&e.$$.dirty&&l(10,i=S(s).sort((e,t)=>e.name.localeCompare(t.name,"en",{sensitivity:"base"}))),3100&e.$$.dirty&&l(1,h=i.filter(e=>(!n||e.media&&e.media.includes(n))&&(!r||e.themes&&e.themes.includes(r))&&(!o||e.years&&e.years.includes(o))).sort(c.fn))},l(11,c={title:"Artist",fn:(e,t)=>e.name.localeCompare(t.name,"en",{sensitivity:"base"})}),[a,h,r,n,o,s,function(){r=x(this),l(2,r),l(0,a)},function(){n=x(this),l(3,n),l(0,a)},function(){o=x(this),l(4,o),l(0,a)},()=>l(2,r=l(3,n=l(4,o=null)))]}export default class extends e{constructor(e){super(),t(this,e,Q,K,l,{artistsRows:5,tags:0})}}export{z as preload};
