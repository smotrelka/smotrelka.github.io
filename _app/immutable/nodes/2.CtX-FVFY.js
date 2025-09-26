import"../chunks/DsnmJJEf.js";import"../chunks/DHeCs-eF.js";import{R as Me,b as $,h as N,aa as j,t as L,y as Oe,aK as Le,ab as Pe,aj as Q,d as W,s as O,e as m,C as Re,ax as De,ac as P,aN as He,aL as Ve,a9 as Ue,c as se,aQ as We,a6 as J,au as fe,O as le,aU as ze,aO as Z,ae as ne,aV as Ye,aW as $e,aX as B,ai as R,g as Be,aY as Fe,at as qe,aZ as Ke,w as ue,a_ as je,am as Ge,a$ as Xe,aw as Ze,f as Qe,aP as oe,b0 as Je,b1 as xe,b2 as er,b3 as rr,b4 as ar,aM as tr,b5 as ir,b6 as sr,b7 as fr,b8 as lr,b9 as nr,_ as ce,ba as ur,l as ve,m as z,a1 as de,a2 as _e,a4 as he,p as ge,a3 as be,j as pe,k as Ae,aS as or,bb as cr,n as vr}from"../chunks/DpaN6yqI.js";import{p as H,r as Ee,s as dr}from"../chunks/CSnslhkE.js";import{b as _r,c as hr,d as gr,e as br,n as pr,f as Ar}from"../chunks/YgZRq6Ku.js";function Er(e,a){if(a){const r=document.body;e.autofocus=!0,Me(()=>{document.activeElement===r&&e.focus()})}}let x=!1;function Nr(){x||(x=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const a of e.target.elements)a.__on_r?.()})},{capture:!0}))}function Tr(e,a){return a}function wr(e,a,r){for(var t=e.items,i=[],f=a.length,l=0;l<f;l++)Fe(a[l].e,i,!0);var c=f>0&&i.length===0&&r!==null;if(c){var n=r.parentNode;qe(n),n.append(r),t.clear(),k(e,a[0].prev,a[f-1].next)}Ke(i,()=>{for(var o=0;o<f;o++){var b=a[o];c||(t.delete(b.k),k(e,b.prev,b.next)),R(b.e,!c)}})}function Sr(e,a,r,t,i,f=null){var l=e,c={flags:a,items:new Map,first:null};N&&j();var n=null,o=!1,b=new Map,h=Oe(()=>{var u=r();return le(u)?u:u==null?[]:fe(u)}),s,g;function v(){yr(g,s,c,b,l,i,a,t,r),f!==null&&(s.length===0?n?Z(n):n=P(()=>f(l)):n!==null&&ne(n,()=>{n=null}))}$(()=>{g??=ue,s=L(h);var u=s.length;if(o&&u===0)return;o=u===0;let p=!1;if(N){var I=Le(l)===Pe;I!==(u===0)&&(l=Q(),W(l),O(!1),p=!0)}if(N){for(var y=null,A,d=0;d<u;d++){if(m.nodeType===Re&&m.data===De){l=m,p=!0,O(!1);break}var C=s[d],_=t(C,d);A=G(m,c,y,null,C,_,d,i,a,r),c.items.set(_,A),y=A}u>0&&W(Q())}if(N)u===0&&f&&(n=P(()=>f(l)));else if(He()){var E=new Set,T=Ve;for(d=0;d<u;d+=1){C=s[d],_=t(C,d);var S=c.items.get(_)??b.get(_);S?Ne(S,C,d):(A=G(null,c,null,null,C,_,d,i,a,r,!0),b.set(_,A)),E.add(_)}for(const[w,M]of c.items)E.has(w)||T.skipped_effects.add(M.e);T.add_callback(v)}else v();p&&O(!0),L(h)}),N&&(l=m)}function yr(e,a,r,t,i,f,l,c,n){var o=a.length,b=r.items,h=r.first,s=h,g,v=null,u=[],p=[],I,y,A,d;for(d=0;d<o;d+=1){if(I=a[d],y=c(I,d),A=b.get(y),A===void 0){var C=t.get(y);if(C!==void 0){t.delete(y),b.set(y,C);var _=v?v.next:s;k(r,v,C),k(r,C,_),F(C,_,i),v=C}else{var E=s?s.e.nodes_start:i;v=G(E,r,v,v===null?r.first:v.next,I,y,d,f,l,n)}b.set(y,v),u=[],p=[],s=v.next;continue}if(Ne(A,I,d),(A.e.f&B)!==0&&Z(A.e),A!==s){if(g!==void 0&&g.has(A)){if(u.length<p.length){var T=p[0],S;v=T.prev;var w=u[0],M=u[u.length-1];for(S=0;S<u.length;S+=1)F(u[S],T,i);for(S=0;S<p.length;S+=1)g.delete(p[S]);k(r,w.prev,M.next),k(r,v,w),k(r,M,T),s=T,v=M,d-=1,u=[],p=[]}else g.delete(A),F(A,s,i),k(r,A.prev,A.next),k(r,A,v===null?r.first:v.next),k(r,v,A),v=A;continue}for(u=[],p=[];s!==null&&s.k!==y;)(s.e.f&B)===0&&(g??=new Set).add(s),p.push(s),s=s.next;if(s===null)continue;A=s}u.push(A),v=A,s=A.next}if(s!==null||g!==void 0){for(var D=g===void 0?[]:fe(g);s!==null;)(s.e.f&B)===0&&D.push(s),s=s.next;var Ie=D.length;if(Ie>0){var ke=null;wr(r,D,ke)}}e.first=r.first&&r.first.e,e.last=v&&v.e;for(var me of t.values())R(me.e);t.clear()}function Ne(e,a,r,t){Ue(e.v,a),e.i=r}function G(e,a,r,t,i,f,l,c,n,o,b){var h=(n&Ye)!==0,s=(n&$e)===0,g=h?s?We(i,!1,!1):J(i):i,v=(n&ze)===0?l:J(l),u={i:v,v:g,k:f,a:null,e:null,prev:r,next:t};try{if(e===null){var p=document.createDocumentFragment();p.append(e=se())}return u.e=P(()=>c(e,g,v,o),N),u.e.prev=r&&r.e,u.e.next=t&&t.e,r===null?b||(a.first=u):(r.next=u,r.e.next=u.e),t!==null&&(t.prev=u,t.e.prev=u.e),u}finally{}}function F(e,a,r){for(var t=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,f=e.e.nodes_start;f!==null&&f!==t;){var l=Be(f);i.before(f),f=l}}function k(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Cr(e,a,r,t,i,f){let l=N;N&&j();var c,n,o=null;N&&m.nodeType===je&&(o=m,j());var b=N?m:e,h;$(()=>{const s=a()||null;var g=Xe;s!==c&&(h&&(s===null?ne(h,()=>{h=null,n=null}):s===n?Z(h):R(h)),s&&s!==n&&(h=P(()=>{if(o=N?o:document.createElementNS(g,s),Ze(o,o),t){N&&_r(s)&&o.append(document.createComment(""));var v=N?Qe(o):o.appendChild(se());N&&(v===null?O(!1):W(v)),t(o,v)}ue.nodes_end=o,b.before(o)})),c=s,c&&(n=c))},Ge),l&&(O(!0),W(b))}function Ir(e,a){var r=void 0,t;$(()=>{r!==(r=a())&&(t&&(R(t),t=null),r&&(t=P(()=>{oe(()=>r(e))})))})}function Te(e){var a,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(a=0;a<i;a++)e[a]&&(r=Te(e[a]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function kr(){for(var e,a,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(a=Te(e))&&(t&&(t+=" "),t+=a);return t}function mr(e){return typeof e=="object"?kr(e):e??""}const ee=[...` 	
\r\f \v\uFEFF`];function Mr(e,a,r){var t=e==null?"":""+e;if(r){for(var i in r)if(r[i])t=t?t+" "+i:i;else if(t.length)for(var f=i.length,l=0;(l=t.indexOf(i,l))>=0;){var c=l+f;(l===0||ee.includes(t[l-1]))&&(c===t.length||ee.includes(t[c]))?t=(l===0?"":t.substring(0,l))+t.substring(c+1):l=c}}return t===""?null:t}function re(e,a=!1){var r=a?" !important;":";",t="";for(var i in e){var f=e[i];f!=null&&f!==""&&(t+=" "+i+": "+f+r)}return t}function q(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Or(e,a){if(a){var r="",t,i;if(Array.isArray(a)?(t=a[0],i=a[1]):t=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var f=!1,l=0,c=!1,n=[];t&&n.push(...Object.keys(t).map(q)),i&&n.push(...Object.keys(i).map(q));var o=0,b=-1;const u=e.length;for(var h=0;h<u;h++){var s=e[h];if(c?s==="/"&&e[h-1]==="*"&&(c=!1):f?f===s&&(f=!1):s==="/"&&e[h+1]==="*"?c=!0:s==='"'||s==="'"?f=s:s==="("?l++:s===")"&&l--,!c&&f===!1&&l===0){if(s===":"&&b===-1)b=h;else if(s===";"||h===u-1){if(b!==-1){var g=q(e.substring(o,b).trim());if(!n.includes(g)){s!==";"&&h++;var v=e.substring(o,h).trim();r+=" "+v+";"}}o=h+1,b=-1}}}}return t&&(r+=re(t)),i&&(r+=re(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Lr(e,a,r,t,i,f){var l=e.__className;if(N||l!==r||l===void 0){var c=Mr(r,t,f);(!N||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):a?e.className=c:e.setAttribute("class",c)),e.__className=r}else if(f&&i!==f)for(var n in f){var o=!!f[n];(i==null||o!==!!i[n])&&e.classList.toggle(n,o)}return f}function K(e,a={},r,t){for(var i in r){var f=r[i];a[i]!==f&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,f,t))}}function Pr(e,a,r,t){var i=e.__style;if(N||i!==a){var f=Or(a,t);(!N||f!==e.getAttribute("style"))&&(f==null?e.removeAttribute("style"):e.style.cssText=f),e.__style=a}else t&&(Array.isArray(t)?(K(e,r?.[0],t[0]),K(e,r?.[1],t[1],"important")):K(e,r,t));return t}function X(e,a,r=!1){if(e.multiple){if(a==null)return;if(!le(a))return Je();for(var t of e.options)t.selected=a.includes(ae(t));return}for(t of e.options){var i=ae(t);if(xe(i,a)){t.selected=!0;return}}(!r||a!==void 0)&&(e.selectedIndex=-1)}function Rr(e){var a=new MutationObserver(()=>{X(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),er(()=>{a.disconnect()})}function ae(e){return"__value"in e?e.__value:e.value}const V=Symbol("class"),U=Symbol("style"),we=Symbol("is custom element"),Se=Symbol("is html");function Dr(e){if(N){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var t=e.value;Y(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var i=e.checked;Y(e,"checked",null),e.checked=i}}};e.__on_r=r,ir(r),Nr()}}function Hr(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Y(e,a,r,t){var i=ye(e);N&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=r)&&(a==="loading"&&(e[lr]=r),r==null?e.removeAttribute(a):typeof r!="string"&&Ce(e).includes(a)?e[a]=r:e.setAttribute(a,r))}function Vr(e,a,r,t,i=!1,f=!1){if(N&&i&&e.tagName==="INPUT"){var l=e,c=l.type==="checkbox"?"defaultChecked":"defaultValue";c in r||Dr(l)}var n=ye(e),o=n[we],b=!n[Se];let h=N&&o;h&&O(!1);var s=a||{},g=e.tagName==="OPTION";for(var v in a)v in r||(r[v]=null);r.class?r.class=mr(r.class):r[V]&&(r.class=null),r[U]&&(r.style??=null);var u=Ce(e);for(const _ in r){let E=r[_];if(g&&_==="value"&&E==null){e.value=e.__value="",s[_]=E;continue}if(_==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Lr(e,p,E,t,a?.[V],r[V]),s[_]=E,s[V]=r[V];continue}if(_==="style"){Pr(e,E,a?.[U],r[U]),s[_]=E,s[U]=r[U];continue}var I=s[_];if(!(E===I&&!(E===void 0&&e.hasAttribute(_)))){s[_]=E;var y=_[0]+_[1];if(y!=="$$")if(y==="on"){const T={},S="$$"+_;let w=_.slice(2);var A=Ar(w);if(hr(w)&&(w=w.slice(0,-7),T.capture=!0),!A&&I){if(E!=null)continue;e.removeEventListener(w,s[S],T),s[S]=null}if(E!=null)if(A)e[`__${w}`]=E,br([w]);else{let M=function(D){s[_].call(this,D)};s[S]=gr(w,e,M,T)}else A&&(e[`__${w}`]=void 0)}else if(_==="style")Y(e,_,E);else if(_==="autofocus")Er(e,!!E);else if(!o&&(_==="__value"||_==="value"&&E!=null))e.value=e.__value=E;else if(_==="selected"&&g)Hr(e,E);else{var d=_;b||(d=pr(d));var C=d==="defaultValue"||d==="defaultChecked";if(E==null&&!o&&!C)if(n[_]=null,d==="value"||d==="checked"){let T=e;const S=a===void 0;if(d==="value"){let w=T.defaultValue;T.removeAttribute(d),T.defaultValue=w,T.value=T.__value=S?w:null}else{let w=T.defaultChecked;T.removeAttribute(d),T.defaultChecked=w,T.checked=S?w:!1}}else e.removeAttribute(_);else C||u.includes(d)&&(o||typeof E!="string")?(e[d]=E,d in n&&(n[d]=tr)):typeof E!="function"&&Y(e,d,E)}}}return h&&O(!0),s}function te(e,a,r=[],t=[],i,f=!1,l=!1){rr(r,t,c=>{var n=void 0,o={},b=e.nodeName==="SELECT",h=!1;if($(()=>{var g=a(...c.map(L)),v=Vr(e,n,g,i,f,l);h&&b&&"value"in g&&X(e,g.value);for(let p of Object.getOwnPropertySymbols(o))g[p]||R(o[p]);for(let p of Object.getOwnPropertySymbols(g)){var u=g[p];p.description===ar&&(!n||u!==n[p])&&(o[p]&&R(o[p]),o[p]=P(()=>Ir(e,()=>u))),v[p]=u}n=v}),b){var s=e;oe(()=>{X(s,n.value,!0),Rr(s)})}h=!0})}function ye(e){return e.__attributes??={[we]:e.nodeName.includes("-"),[Se]:e.namespaceURI===sr}}var ie=new Map;function Ce(e){var a=e.getAttribute("is")||e.nodeName,r=ie.get(a);if(r)return r;ie.set(a,r=[]);for(var t,i=e,f=Element.prototype;f!==i;){t=nr(i);for(var l in t)t[l].set&&r.push(l);i=fr(i)}return r}/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ur={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Wr=ur("<svg><!><!></svg>");function zr(e,a){ce(a,!0);const r=H(a,"color",3,"currentColor"),t=H(a,"size",3,24),i=H(a,"strokeWidth",3,2),f=H(a,"absoluteStrokeWidth",3,!1),l=H(a,"iconNode",19,()=>[]),c=Ee(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var n=Wr();te(n,h=>({...Ur,...c,width:t(),height:t(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>f()?Number(i())*24/Number(t()):i()]);var o=_e(n);Sr(o,17,l,Tr,(h,s)=>{var g=or(()=>cr(L(s),2));let v=()=>L(g)[0],u=()=>L(g)[1];var p=pe(),I=Ae(p);Cr(I,v,!0,(y,A)=>{te(y,()=>({...u()}))}),z(h,p)});var b=he(o);ve(b,()=>a.children??ge),be(n),z(e,n),de()}function Yr(e,a){ce(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=Ee(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];zr(e,dr({name:"skull"},()=>r,{get iconNode(){return t},children:(i,f)=>{var l=pe(),c=Ae(l);ve(c,()=>a.children??ge),z(i,l)},$$slots:{default:!0}})),de()}var $r=vr("<h1>hello <!></h1>");function Gr(e){var a=$r(),r=he(_e(a));Yr(r,{}),be(a),z(e,a)}export{Gr as component};
