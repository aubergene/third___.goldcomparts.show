import{W as t}from"./client.a25e3f5f.js";function n(t){var n=t-1;return n*n*n+1}function o(o,a,r){var i=getComputedStyle(o),e="none"===i.transform?"":i.transform,c=a.from.width/o.clientWidth,f=a.from.height/o.clientHeight,s=(a.from.left-a.to.left)/c,d=(a.from.top-a.to.top)/f,u=Math.sqrt(s*s+d*d),m=r.delay,l=void 0===m?0:m,p=r.duration,v=void 0===p?function(t){return 120*Math.sqrt(t)}:p,y=r.easing,g=void 0===y?n:y;return{delay:l,duration:t(v)?v(u):v,easing:g,css:function(t,n){return"transform: ".concat(e," translate(").concat(n*s,"px, ").concat(n*d,"px);")}}}function a(t,o){var a=o.delay,r=void 0===a?0:a,i=o.duration,e=void 0===i?400:i,c=o.easing,f=void 0===c?n:c,s=o.x,d=void 0===s?0:s,u=o.y,m=void 0===u?0:u,l=o.opacity,p=void 0===l?0:l,v=getComputedStyle(t),y=+v.opacity,g="none"===v.transform?"":v.transform,h=y*(1-p);return{delay:r,duration:e,easing:f,css:function(t,n){return"\n\t\t\ttransform: ".concat(g," translate(").concat((1-t)*d,"px, ").concat((1-t)*m,"px);\n\t\t\topacity: ").concat(y-h*n)}}}export{a,o as f};
