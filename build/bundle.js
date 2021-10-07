var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function a(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let g;function $(t){g=t}function h(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const x=[],y=[],b=[],_=[],v=Promise.resolve();let w=!1;function k(t){b.push(t)}let E=!1;const S=new Set;function z(){if(!E){E=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];$(n),q(n.$$)}for($(null),x.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];S.has(n)||(S.add(n),n())}b.length=0}while(x.length);for(;_.length;)_.pop()();w=!1,E=!1,S.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const A=new Set;let M;function j(t,n){t&&t.i&&(A.delete(t),t.i(n))}function C(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),M.c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function N(t){t&&t.c()}function O(t,e,s,c){const{fragment:l,on_mount:i,on_destroy:u,after_update:f}=t.$$;l&&l.m(e,s),c||k((()=>{const e=i.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(k)}function T(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(x.push(t),w||(w=!0,v.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(n,r,s,c,l,u,f,a=[-1]){const d=g;$(n);const p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:a,skip_bound:!1,root:r.target||d.$$.root};f&&f(p.root);let m=!1;if(p.ctx=s?s(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&B(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&j(n.$$.fragment),O(n,r.target,r.anchor,r.customElement),z()}$(d)}class P{$destroy(){T(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(n){let e,o,r,s,m,g,$,h,x,y,b=n[0].x+"",_=n[0].y+"";return{c(){e=u("div"),o=u("span"),r=f("(11"),s=f(b),m=f(", "),g=f(_),$=f(")"),h=a(),x=u("span"),y=f(n[1]),d(o,"class","cell-position svelte-qf9cd4"),d(x,"class","cell-assignment svelte-qf9cd4"),d(e,"class","cell svelte-qf9cd4")},m(t,n){l(t,e,n),c(e,o),c(o,r),c(o,s),c(o,m),c(o,g),c(o,$),c(e,h),c(e,x),c(x,y)},p(t,[n]){1&n&&b!==(b=t[0].x+"")&&p(s,b),1&n&&_!==(_=t[0].y+"")&&p(g,_),2&n&&p(y,t[1])},i:t,o:t,d(t){t&&i(e)}}}function L(t,n,e){let{pos:o={x:0,y:0}}=n,{assignment:r}=n;return t.$$set=t=>{"pos"in t&&e(0,o=t.pos),"assignment"in t&&e(1,r=t.assignment)},[o,r]}class D extends P{constructor(t){super(),F(this,t,L,H,s,{pos:0,assignment:1})}}function G(t,n,e){const o=t.slice();return o[2]=n[e],o[4]=e,o}function I(t){let n,e;return n=new D({props:{x:t[4]%t[0]+1,y:Math.floor(t[4]/t[0])+1,assignment:t[4]}}),{c(){N(n.$$.fragment)},m(t,o){O(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.x=t[4]%t[0]+1),1&e&&(o.y=Math.floor(t[4]/t[0])+1),n.$set(o)},i(t){e||(j(n.$$.fragment,t),e=!0)},o(t){C(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function J(t){let n,e,r=t[1],s=[];for(let n=0;n<r.length;n+=1)s[n]=I(G(t,r,n));const c=t=>C(s[t],1,1,(()=>{s[t]=null}));return{c(){n=u("div");for(let t=0;t<s.length;t+=1)s[t].c();d(n,"id","grid"),m(n,"grid-template-columns","repeat("+t[0]+", minmax(0, 1fr))"),d(n,"class","svelte-1nfmxnm")},m(t,o){l(t,n,o);for(let t=0;t<s.length;t+=1)s[t].m(n,null);e=!0},p(t,[l]){if(3&l){let e;for(r=t[1],e=0;e<r.length;e+=1){const o=G(t,r,e);s[e]?(s[e].p(o,l),j(s[e],1)):(s[e]=I(o),s[e].c(),j(s[e],1),s[e].m(n,null))}for(M={r:0,c:[],p:M},e=r.length;e<s.length;e+=1)c(e);M.r||o(M.c),M=M.p}(!e||1&l)&&m(n,"grid-template-columns","repeat("+t[0]+", minmax(0, 1fr))")},i(t){if(!e){for(let t=0;t<r.length;t+=1)j(s[t]);e=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)C(s[t]);e=!1},d(t){t&&i(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(s,t)}}}function K(t,n,e){let o,{gridSize:r=3}=n;return h((()=>{for(let n=0;n<r;n++)for(let n=0;n<r;n++){var t=document.createElement("div");e(1,o=[...o,t])}})),t.$$set=t=>{"gridSize"in t&&e(0,r=t.gridSize)},e(1,o=[]),[r,o]}class Q extends P{constructor(t){super(),F(this,t,K,J,s,{gridSize:0})}}function R(n){let e,o,r,s,f,p,m,g;return f=new Q({}),{c(){e=u("main"),o=u("header"),o.innerHTML='<h1 class="svelte-f8o1p0">3t</h1>',r=a(),s=u("div"),N(f.$$.fragment),p=a(),m=u("footer"),m.textContent="Footer",d(o,"class","svelte-f8o1p0"),d(s,"class","game svelte-f8o1p0"),d(m,"class","svelte-f8o1p0"),d(e,"class","svelte-f8o1p0")},m(t,n){l(t,e,n),c(e,o),c(e,r),c(e,s),O(f,s,null),c(e,p),c(e,m),g=!0},p:t,i(t){g||(j(f.$$.fragment,t),g=!0)},o(t){C(f.$$.fragment,t),g=!1},d(t){t&&i(e),T(f)}}}return new class extends P{constructor(t){super(),F(this,t,null,R,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
