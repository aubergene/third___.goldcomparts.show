import{O as t}from"./client.a1bbba89.js";function n(t){const n=t-1;return n*n*n+1}function o(o,a,r){const e=getComputedStyle(o),s="none"===e.transform?"":e.transform,i=a.from.width/o.clientWidth,f=a.from.height/o.clientHeight,c=(a.from.left-a.to.left)/i,m=(a.from.top-a.to.top)/f,l=Math.sqrt(c*c+m*m),{delay:p=0,duration:d=(t=>120*Math.sqrt(t)),easing:u=n}=r;return{delay:p,duration:t(d)?d(l):d,easing:u,css:(t,n)=>`transform: ${s} translate(${n*c}px, ${n*m}px);`}}function a(t,{delay:o=0,duration:a=400,easing:r=n,x:e=0,y:s=0,opacity:i=0}){const f=getComputedStyle(t),c=+f.opacity,m="none"===f.transform?"":f.transform,l=c*(1-i);return{delay:o,duration:a,easing:r,css:(t,n)=>`\n\t\t\ttransform: ${m} translate(${(1-t)*e}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-l*n}`}}export{a,o as f};
