import{P as e,S as t,i as s,s as l,e as r,t as a,g as n,h as o,j as i,d as c,k as h,l as f,n as u,F as d,Q as m,v as g,a as v,R as p,f as E,z as b,I as w,q as A,T as y,o as I,J as N,U as S}from"./client.8c3136ae.js";import{t as k}from"./tsv.6a7ced64.js";import{f as D,a as T,b as C,s as $}from"./helpers.b84b4fdd.js";import{E as L}from"./constants.b29215a8.js";function V(e){for(var t in e){var s,l,r=e[t].trim();if(r)if("true"===r)r=!0;else if("false"===r)r=!1;else if("NaN"===r)r=NaN;else if(isNaN(s=+r)){if(!(l=r.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;O&&l[4]&&!l[7]&&(r=r.replace(/-/g,"/").replace(/T/," ")),r=new Date(r)}else r=s;else r=null;e[t]=r}return e}var O=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function H(e){return e}function R(e,...t){return function(e,t,s,l){return function e(r,a){if(a>=l.length)return s(r);const n=new Map,o=l[a++];let i=-1;for(const e of r){const t=o(e,++i,r),s=n.get(t);s?s.push(e):n.set(t,[e])}for(const[t,s]of n)n.set(t,e(s,a));return t(n)}(e,0)}(e,H,H,t)}const x=e(null,e=>{e(new Date);const t=setInterval(()=>{e(new Date)},1e3);return()=>clearInterval(t)}),{document:j}=S;function J(e,t,s){const l=e.slice();return l[21]=t[s],l}function P(e,t,s){const l=e.slice();return l[21]=t[s],l}function B(e,t,s){const l=e.slice();return l[18]=t[s],l[20]=s,l}function F(e,t,s){const l=e.slice();return l[15]=t[s][0],l[2]=t[s][1],l}function q(e,t,s){const l=e.slice();return l[15]=t[s][0],l[2]=t[s][1],l}function G(e){let t,s,l,v,p,E=D(e[2][0].startsAt)+"";return{c(){t=r("a"),s=a(E),this.h()},l(e){t=n(e,"A",{class:!0,href:!0});var l=o(t);s=i(l,E),l.forEach(c),this.h()},h(){h(t,"class","rounded-link bd-col-1 col-1"),h(t,"href",l="#"+D(e[2][0].startsAt).toLowerCase())},m(e,l){f(e,t,l),u(t,s),v||(p=d(t,"click",m(ee)),v=!0)},p(e,r){2&r&&E!==(E=D(e[2][0].startsAt)+"")&&g(s,E),2&r&&l!==(l="#"+D(e[2][0].startsAt).toLowerCase())&&h(t,"href",l)},d(e){e&&c(t),v=!1,p()}}}function M(e){let t,s;return{c(){t=r("a"),s=a("ONLINE"),this.h()},l(e){t=n(e,"A",{href:!0,class:!0});var l=o(t);s=i(l,"ONLINE"),l.forEach(c),this.h()},h(){h(t,"href","/live"),h(t,"class","rounded-link bd-col-1 col-1 svelte-eosgbm")},m(e,l){f(e,t,l),u(t,s)},d(e){e&&c(t)}}}function Y(e){let t,s;return{c(){t=r("a"),s=a("ONSITE"),this.h()},l(e){t=n(e,"A",{href:!0,class:!0});var l=o(t);s=i(l,"ONSITE"),l.forEach(c),this.h()},h(){h(t,"href","/getting-there"),h(t,"class","rounded-link bd-col-1 col-1 svelte-eosgbm")},m(e,l){f(e,t,l),u(t,s)},d(e){e&&c(t)}}}function z(e){let t,s,l,d,m=e[21].name+"";return{c(){t=r("a"),s=a(m),l=v(),this.h()},l(e){t=n(e,"A",{href:!0,class:!0});var r=o(t);s=i(r,m),l=E(r),r.forEach(c),this.h()},h(){h(t,"href",d="artists/"+e[21].slug),h(t,"class","artist-name col-5 svelte-eosgbm")},m(e,r){f(e,t,r),u(t,s),u(t,l)},p(e,l){2&l&&m!==(m=e[21].name+"")&&g(s,m),2&l&&d!==(d="artists/"+e[21].slug)&&h(t,"href",d)},d(e){e&&c(t)}}}function Q(e){let t,s,l,a;return{c(){t=r("a"),s=r("span"),l=v(),this.h()},l(e){t=n(e,"A",{href:!0});var r=o(t);s=n(r,"SPAN",{class:!0,style:!0}),o(s).forEach(c),l=E(r),r.forEach(c),this.h()},h(){h(s,"class","bio-photo svelte-eosgbm"),b(s,"background-image","url(img/bios/"+e[21].username+".jpeg)"),h(t,"href",a="artists/"+e[21].slug)},m(e,r){f(e,t,r),u(t,s),u(t,l)},p(e,l){2&l&&b(s,"background-image","url(img/bios/"+e[21].username+".jpeg)"),2&l&&a!==(a="artists/"+e[21].slug)&&h(t,"href",a)},d(e){e&&c(t)}}}function U(e){let t,s,l,d,m,p,b,A,y,I,N,S,k,T,$,L,V,O,H,R,x,j,B,F,q=C(e[18].startsAt)+"",G=D(e[18].startsAt)+"",U=e[18].title+"",Z=e[18].desc+"",_=e[18].livestream&&M(),K=e[18].physical&&Y(),W=e[18].artists,X=[];for(let t=0;t<W.length;t+=1)X[t]=z(P(e,W,t));let ee=e[18].artists,te=[];for(let t=0;t<ee.length;t+=1)te[t]=Q(J(e,ee,t));return{c(){t=r("div"),s=r("div"),l=r("div"),_&&_.c(),d=v(),K&&K.c(),m=v(),p=r("div"),b=r("div"),A=a(q),y=v(),I=a(G),N=v(),S=r("div"),k=a(U),T=v(),$=r("div"),L=a(Z),V=v();for(let e=0;e<X.length;e+=1)X[e].c();O=v(),H=r("div");for(let e=0;e<te.length;e+=1)te[e].c();R=v(),this.h()},l(e){t=n(e,"DIV",{id:!0,class:!0,live:!0,physical:!0});var r=o(t);s=n(r,"DIV",{class:!0});var a=o(s);l=n(a,"DIV",{class:!0});var h=o(l);_&&_.l(h),d=E(h),K&&K.l(h),h.forEach(c),m=E(a),p=n(a,"DIV",{class:!0});var f=o(p);b=n(f,"DIV",{class:!0});var u=o(b);A=i(u,q),y=E(u),I=i(u,G),u.forEach(c),N=E(f),S=n(f,"DIV",{class:!0});var g=o(S);k=i(g,U),g.forEach(c),T=E(f),$=n(f,"DIV",{class:!0});var v=o($);L=i(v,Z),v.forEach(c),V=E(f);for(let e=0;e<X.length;e+=1)X[e].l(f);f.forEach(c),O=E(a),H=n(a,"DIV",{class:!0});var w=o(H);for(let e=0;e<te.length;e+=1)te[e].l(w);w.forEach(c),a.forEach(c),R=E(r),r.forEach(c),this.h()},h(){h(l,"class","column is-1 location-data svelte-eosgbm"),h(b,"class","event-time col-3 svelte-eosgbm"),h(S,"class","event-title svelte-eosgbm"),h($,"class","event-description svelte-eosgbm"),h(p,"class","column is-9"),h(H,"class","column text-align-right svelte-eosgbm"),h(s,"class","columns"),h(t,"id",x=e[18].id),h(t,"class",j=" event "+e[3](e[18])+" svelte-eosgbm"),h(t,"live",B=e[18].livestream),h(t,"physical",F=e[18].physical)},m(e,r){f(e,t,r),u(t,s),u(s,l),_&&_.m(l,null),u(l,d),K&&K.m(l,null),u(s,m),u(s,p),u(p,b),u(b,A),u(b,y),u(b,I),u(p,N),u(p,S),u(S,k),u(p,T),u(p,$),u($,L),u(p,V);for(let e=0;e<X.length;e+=1)X[e].m(p,null);u(s,O),u(s,H);for(let e=0;e<te.length;e+=1)te[e].m(H,null);u(t,R)},p(e,s){if(e[18].livestream?_||(_=M(),_.c(),_.m(l,d)):_&&(_.d(1),_=null),e[18].physical?K||(K=Y(),K.c(),K.m(l,null)):K&&(K.d(1),K=null),2&s&&q!==(q=C(e[18].startsAt)+"")&&g(A,q),2&s&&G!==(G=D(e[18].startsAt)+"")&&g(I,G),2&s&&U!==(U=e[18].title+"")&&g(k,U),2&s&&Z!==(Z=e[18].desc+"")&&g(L,Z),2&s){let t;for(W=e[18].artists,t=0;t<W.length;t+=1){const l=P(e,W,t);X[t]?X[t].p(l,s):(X[t]=z(l),X[t].c(),X[t].m(p,null))}for(;t<X.length;t+=1)X[t].d(1);X.length=W.length}if(2&s){let t;for(ee=e[18].artists,t=0;t<ee.length;t+=1){const l=J(e,ee,t);te[t]?te[t].p(l,s):(te[t]=Q(l),te[t].c(),te[t].m(H,null))}for(;t<te.length;t+=1)te[t].d(1);te.length=ee.length}2&s&&x!==(x=e[18].id)&&h(t,"id",x),2&s&&j!==(j=" event "+e[3](e[18])+" svelte-eosgbm")&&h(t,"class",j),2&s&&B!==(B=e[18].livestream)&&h(t,"live",B),2&s&&F!==(F=e[18].physical)&&h(t,"physical",F)},d(e){e&&c(t),_&&_.d(),K&&K.d(),w(X,e),w(te,e)}}}function Z(e){let t,s,l,d,m,b=T(e[2][0].startsAt)+"",A=e[2],y=[];for(let t=0;t<A.length;t+=1)y[t]=U(B(e,A,t));return{c(){t=r("h2"),s=a(b),d=v();for(let e=0;e<y.length;e+=1)y[e].c();m=p(),this.h()},l(e){t=n(e,"H2",{id:!0});var l=o(t);s=i(l,b),l.forEach(c),d=E(e);for(let t=0;t<y.length;t+=1)y[t].l(e);m=p(),this.h()},h(){h(t,"id",l=D(e[2][0].startsAt).toLowerCase())},m(e,l){f(e,t,l),u(t,s),f(e,d,l);for(let t=0;t<y.length;t+=1)y[t].m(e,l);f(e,m,l)},p(e,r){if(2&r&&b!==(b=T(e[2][0].startsAt)+"")&&g(s,b),2&r&&l!==(l=D(e[2][0].startsAt).toLowerCase())&&h(t,"id",l),10&r){let t;for(A=e[2],t=0;t<A.length;t+=1){const s=B(e,A,t);y[t]?y[t].p(s,r):(y[t]=U(s),y[t].c(),y[t].m(m.parentNode,m))}for(;t<y.length;t+=1)y[t].d(1);y.length=A.length}},d(e){e&&c(t),e&&c(d),w(y,e),e&&c(m)}}}function _(e){let t,s,l,m,g,p,b,S,k,D,T,C,$,V,O,H,R,x,J,P,B,M,Y,z,Q,U,_,K,ee,te,se,le,re,ae,ne,oe,ie,ce,he=e[1],fe=[];for(let t=0;t<he.length;t+=1)fe[t]=G(q(e,he,t));let ue=e[1],de=[];for(let t=0;t<ue.length;t+=1)de[t]=Z(F(e,ue,t));return{c(){t=v(),s=r("section"),l=r("div"),m=r("div"),g=r("h2"),p=a("Events"),b=v(),S=r("p"),k=a("The online component of Chimera Garden features a mixture of live\n        performance, discussion and demonstrations, streamed directly from St\n        James Hatcham Church and remote artists’ locations. You will be able to\n        catch the online stream "),D=r("a"),T=a("here on our website"),C=a(" during the\n        show."),$=v(),V=r("p"),O=a("Below you can find the line up of events, some that will be happening\n        physically in St James Hatcham Church and those that will be streaming\n        online. Below you can register for free tickets for the online events.\n        If you would like to visit us at St James Hatcham Church please read our\n        "),H=r("a"),R=a("safety guidelines and register here."),x=v(),J=r("h2"),P=a("Schedule"),B=v(),M=r("div");for(let e=0;e<fe.length;e+=1)fe[e].c();Y=v(),z=r("a"),Q=a("Free online tickets"),U=v(),_=r("div"),K=r("span"),ee=a("ALL"),te=v(),se=r("span"),le=a("ONLINE"),re=v(),ae=r("span"),ne=a("ONSITE"),oe=v();for(let e=0;e<de.length;e+=1)de[e].c();this.h()},l(e){A('[data-svelte="svelte-1llonc1"]',j.head).forEach(c),t=E(e),s=n(e,"SECTION",{class:!0});var r=o(s);l=n(r,"DIV",{class:!0});var a=o(l);m=n(a,"DIV",{class:!0});var h=o(m);g=n(h,"H2",{});var f=o(g);p=i(f,"Events"),f.forEach(c),b=E(h),S=n(h,"P",{});var u=o(S);k=i(u,"The online component of Chimera Garden features a mixture of live\n        performance, discussion and demonstrations, streamed directly from St\n        James Hatcham Church and remote artists’ locations. You will be able to\n        catch the online stream "),D=n(u,"A",{href:!0});var d=o(D);T=i(d,"here on our website"),d.forEach(c),C=i(u," during the\n        show."),u.forEach(c),$=E(h),V=n(h,"P",{});var v=o(V);O=i(v,"Below you can find the line up of events, some that will be happening\n        physically in St James Hatcham Church and those that will be streaming\n        online. Below you can register for free tickets for the online events.\n        If you would like to visit us at St James Hatcham Church please read our\n        "),H=n(v,"A",{href:!0});var w=o(H);R=i(w,"safety guidelines and register here."),w.forEach(c),v.forEach(c),x=E(h),J=n(h,"H2",{});var y=o(J);P=i(y,"Schedule"),y.forEach(c),B=E(h),M=n(h,"DIV",{});var I=o(M);for(let e=0;e<fe.length;e+=1)fe[e].l(I);Y=E(I),z=n(I,"A",{class:!0,href:!0,target:!0});var N=o(z);Q=i(N,"Free online tickets"),N.forEach(c),I.forEach(c),U=E(h),_=n(h,"DIV",{class:!0});var L=o(_);K=n(L,"SPAN",{class:!0});var F=o(K);ee=i(F,"ALL"),F.forEach(c),te=E(L),se=n(L,"SPAN",{class:!0});var q=o(se);le=i(q,"ONLINE"),q.forEach(c),re=E(L),ae=n(L,"SPAN",{class:!0});var G=o(ae);ne=i(G,"ONSITE"),G.forEach(c),L.forEach(c),oe=E(h);for(let e=0;e<de.length;e+=1)de[e].l(h);h.forEach(c),a.forEach(c),r.forEach(c),this.h()},h(){j.title="Schedule - Final Show - 2020",h(D,"href","/live"),h(H,"href","/getting-there"),h(z,"class","rounded-link bd-col-2 col-2"),h(z,"href",L),h(z,"target","_blank"),h(K,"class","filter-item svelte-eosgbm"),y(K,"is-selected",null===e[0]),h(se,"class","filter-item svelte-eosgbm"),y(se,"is-selected",e[0]===X),h(ae,"class","filter-item svelte-eosgbm"),y(ae,"is-selected",e[0]===W),h(_,"class","filter-items svelte-eosgbm"),h(m,"class","content"),h(l,"class","container page-max-width"),h(s,"class","section bg-col-7")},m(r,a){f(r,t,a),f(r,s,a),u(s,l),u(l,m),u(m,g),u(g,p),u(m,b),u(m,S),u(S,k),u(S,D),u(D,T),u(S,C),u(m,$),u(m,V),u(V,O),u(V,H),u(H,R),u(m,x),u(m,J),u(J,P),u(m,B),u(m,M);for(let e=0;e<fe.length;e+=1)fe[e].m(M,null);u(M,Y),u(M,z),u(z,Q),u(m,U),u(m,_),u(_,K),u(K,ee),u(_,te),u(_,se),u(se,le),u(_,re),u(_,ae),u(ae,ne),u(m,oe);for(let e=0;e<de.length;e+=1)de[e].m(m,null);ie||(ce=[d(K,"click",e[6]),d(se,"click",e[7]),d(ae,"click",e[8])],ie=!0)},p(e,[t]){if(2&t){let s;for(he=e[1],s=0;s<he.length;s+=1){const l=q(e,he,s);fe[s]?fe[s].p(l,t):(fe[s]=G(l),fe[s].c(),fe[s].m(M,Y))}for(;s<fe.length;s+=1)fe[s].d(1);fe.length=he.length}if(1&t&&y(K,"is-selected",null===e[0]),1&t&&y(se,"is-selected",e[0]===X),1&t&&y(ae,"is-selected",e[0]===W),10&t){let s;for(ue=e[1],s=0;s<ue.length;s+=1){const l=F(e,ue,s);de[s]?de[s].p(l,t):(de[s]=Z(l),de[s].c(),de[s].m(m,null))}for(;s<de.length;s+=1)de[s].d(1);de.length=ue.length}},i:I,o:I,d(e){e&&c(t),e&&c(s),w(fe,e),w(de,e),ie=!1,N(ce)}}}async function K({params:e}){return{scheduleRows:await this.fetch("schedule.tsv").then(e=>e.text()),artistsRows:await this.fetch("artists.tsv").then(e=>e.text())}}const W="ONSITE",X="ONLINE";function ee({target:e}){document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}function te(e,t,s){let l,r,{scheduleRows:a}=t,{artistsRows:n}=t,o=new Map,i=null;let c,h,f;return e.$$set=e=>{"scheduleRows"in e&&s(4,a=e.scheduleRows),"artistsRows"in e&&s(5,n=e.artistsRows)},e.$$.update=()=>{560&e.$$.dirty&&(s(9,l=k(n)),l.forEach(e=>{o.set(e.username,e),e.slug=$(e.name)}),s(2,r=k(a,V).map(e=>(e.artists=[],e.username&&e.username.trim()&&e.username.split(/,\s*/).forEach(t=>{const s=o.get(t);s?e.artists.push(s):console.log(`Couldn't find "${t}"`)}),e.startsAt=new Date(e.startTime),e)).filter(e=>e.startTime))),5&e.$$.dirty&&s(10,c=r.filter(e=>!i||(i===W?e.physical:i===X?e.livestream:void 0))),1024&e.$$.dirty&&s(11,h=R(c,e=>e.startTime.toISOString().slice(0,10))),2048&e.$$.dirty&&s(1,f=Array.from(h.entries()).sort((e,t)=>function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}(e[0],t[0])).map(([e,t])=>(t.sort((e,t)=>e.startsAt-t.startsAt),[e,t])))},[i,f,r,function(e){return function(e){return e.endsAt<x}(e)?"bd-col-7":function(e){return e.startsAt>=x&&e.endsAt<x}(e.startsAt)?"bd-col-1":void 0},a,n,()=>s(0,i=null),()=>s(0,i=X),()=>s(0,i=W)]}export default class extends t{constructor(e){super(),s(this,e,te,_,l,{scheduleRows:4,artistsRows:5})}}export{K as preload};
