import{s as O,n as v,c as U,u as V,g as k,d as q}from"../chunks/scheduler.4eff0beb.js";import{S as j,i as L,g as p,m as b,s as w,h as $,j as g,n as y,f as m,c as E,x as F,k as x,a as M,y as f,r as H,u as N,v as z,d as T,t as C,w as B}from"../chunks/index.3c06d407.js";import{b as D}from"../chunks/paths.724ad1b2.js";const P=!0,tt=Object.freeze(Object.defineProperty({__proto__:null,prerender:P},Symbol.toStringTag,{value:"Module"}));const I="rizal suryawan";function R(_){let t,s,r,l=I+"",c,o,a,u=`<li><a href="${`${D}/showcase`}">showcase</a></li>`,n,e,i="contact";return{c(){t=p("nav"),s=p("a"),r=p("b"),c=b(l),o=w(),a=p("ul"),a.innerHTML=u,n=w(),e=p("button"),e.textContent=i,this.h()},l(h){t=$(h,"NAV",{class:!0});var d=g(t);s=$(d,"A",{href:!0});var S=g(s);r=$(S,"B",{});var A=g(r);c=y(A,l),A.forEach(m),S.forEach(m),o=E(d),a=$(d,"UL",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-daepn1"&&(a.innerHTML=u),n=E(d),e=$(d,"BUTTON",{"data-svelte-h":!0}),F(e)!=="svelte-a5egou"&&(e.textContent=i),d.forEach(m),this.h()},h(){x(s,"href",`${D}/`),x(a,"class","flex gap-2"),x(t,"class","my-4 flex items-center justify-between text-white")},m(h,d){M(h,t,d),f(t,s),f(s,r),f(r,c),f(t,o),f(t,a),f(t,n),f(t,e)},p:v,i:v,o:v,d(h){h&&m(t)}}}class Y extends j{constructor(t){super(),L(this,t,null,R,O,{})}}function G(_){let t,s=I+"",r,l,c=new Date().getFullYear()+"",o;return{c(){t=p("footer"),r=b(s),l=b(" © "),o=b(c),this.h()},l(a){t=$(a,"FOOTER",{class:!0});var u=g(t);r=y(u,s),l=y(u," © "),o=y(u,c),u.forEach(m),this.h()},h(){x(t,"class","text-white")},m(a,u){M(a,t,u),f(t,r),f(t,l),f(t,o)},p:v,i:v,o:v,d(a){a&&m(t)}}}class J extends j{constructor(t){super(),L(this,t,null,G,O,{})}}function K(_){let t,s,r,l,c,o,a;s=new Y({});const u=_[1].default,n=U(u,_,_[0],null);return o=new J({}),{c(){t=p("div"),H(s.$$.fragment),r=w(),l=p("main"),n&&n.c(),c=w(),H(o.$$.fragment),this.h()},l(e){t=$(e,"DIV",{class:!0});var i=g(t);N(s.$$.fragment,i),r=E(i),l=$(i,"MAIN",{class:!0});var h=g(l);n&&n.l(h),h.forEach(m),c=E(i),N(o.$$.fragment,i),i.forEach(m),this.h()},h(){x(l,"class","flex flex-col lg:flex-row"),x(t,"class","layout")},m(e,i){M(e,t,i),z(s,t,null),f(t,r),f(t,l),n&&n.m(l,null),f(t,c),z(o,t,null),a=!0},p(e,[i]){n&&n.p&&(!a||i&1)&&V(n,u,e,e[0],a?q(u,e[0],i,null):k(e[0]),null)},i(e){a||(T(s.$$.fragment,e),T(n,e),T(o.$$.fragment,e),a=!0)},o(e){C(s.$$.fragment,e),C(n,e),C(o.$$.fragment,e),a=!1},d(e){e&&m(t),B(s),n&&n.d(e),B(o)}}}function Q(_,t,s){let{$$slots:r={},$$scope:l}=t;return _.$$set=c=>{"$$scope"in c&&s(0,l=c.$$scope)},[l,r]}class et extends j{constructor(t){super(),L(this,t,Q,K,O,{})}}export{et as component,tt as universal};