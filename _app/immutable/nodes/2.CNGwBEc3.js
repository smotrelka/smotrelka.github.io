import"../chunks/DsnmJJEf.js";import{i as Nr,a as Tr,c as Ir,d as We,n as Mr,b as Cr,s as me,e as Ae,r as Or,o as rr}from"../chunks/BJUxkD1i.js";import{l as le,i as C,o as tr,g as He,y as Ue,h as Ne,L as d,a3 as Lr,U as zr,V as Pr,W as Ve,s as re,m as J,C as Rr,aF as Dr,u as _e,x as Ur,aW as Te,aX as Ie,p as G,aY as ar,aD as ir,ay as sr,aS as Kr,ah as Ye,aj as Ge,r as nr,t as jr,aZ as Oe,Z as lr,q as ge,a_ as Wr,a$ as Hr,k as Br,b0 as Fr,aC as $r,b1 as qr,a7 as or,b2 as Vr,E as Yr,b3 as Gr,A as Jr,B as cr,X as Be,b4 as ur,b5 as fr,b6 as Xr,b7 as Zr,b8 as Qr,b9 as et,ba as rt,bb as tt,bc as at,bd as it,be as st,bf as nt,bg as lt,aR as dr,I as ot,Y as ct,O as $,bh as ut,R as T,T as K,d as X,S as N,a as M,Q as q,c as B,b as W,aU as oe,bi as ft,f as R,P as Y,aT as U,a5 as O,a4 as vr,G as pe,bj as dt,bk as vt}from"../chunks/BQe5Yv5F.js";import{p as H,r as te,s as ce,i as j,b as hr}from"../chunks/DYJCkJhz.js";import{B as ht,s as Z}from"../chunks/BDH_J7MV.js";function Ke(e,r){return r}function mt(e,r,t){for(var a=e.items,i=[],c=r.length,s=0;s<c;s++)Fr(r[s].e,i,!0);var l=c>0&&i.length===0&&t!==null;if(l){var f=t.parentNode;$r(f),f.append(t),a.clear(),V(e,r[0].prev,r[c-1].next)}qr(i,()=>{for(var n=0;n<c;n++){var v=r[n];l||(a.delete(v.k),V(e,v.prev,v.next)),ge(v.e,!l)}})}function Se(e,r,t,a,i,c=null){var s=e,l={flags:r,items:new Map,first:null},f=(r&ar)!==0;if(f){var n=e;s=C?le(tr(n)):n.appendChild(He())}C&&Ue();var v=null,w=!1,p=new Map,E=Lr(()=>{var g=t();return sr(g)?g:g==null?[]:ir(g)}),_,k;function o(){pt(k,_,l,p,s,i,r,a,t),c!==null&&(_.length===0?v?nr(v):v=_e(()=>c(s)):v!==null&&jr(v,()=>{v=null}))}Ne(()=>{k??=or,_=d(E);var g=_.length;if(w&&g===0)return;w=g===0;let y=!1;if(C){var A=zr(s)===Pr;A!==(g===0)&&(s=Ve(),le(s),re(!1),y=!0)}if(C){for(var m=null,b,u=0;u<g;u++){if(J.nodeType===Rr&&J.data===Dr){s=J,y=!0,re(!1);break}var h=_[u],S=a(h,u);b=je(J,l,m,null,h,S,u,i,r,t),l.items.set(S,b),m=b}g>0&&le(Ve())}if(C)g===0&&c&&(v=_e(()=>c(s)));else if(Ur()){var L=new Set,I=G;for(u=0;u<g;u+=1){h=_[u],S=a(h,u);var D=l.items.get(S)??p.get(S);D?(r&(Te|Ie))!==0&&mr(D,h,u,r):(b=je(null,l,null,null,h,S,u,i,r,t,!0),p.set(S,b)),L.add(S)}for(const[P,ae]of l.items)L.has(P)||I.skipped_effects.add(ae.e);I.add_callback(o)}else o();y&&re(!0),d(E)}),C&&(s=J)}function pt(e,r,t,a,i,c,s,l,f){var n=(s&Hr)!==0,v=(s&(Te|Ie))!==0,w=r.length,p=t.items,E=t.first,_=E,k,o=null,g,y=[],A=[],m,b,u,h;if(n)for(h=0;h<w;h+=1)m=r[h],b=l(m,h),u=p.get(b),u!==void 0&&(u.a?.measure(),(g??=new Set).add(u));for(h=0;h<w;h+=1){if(m=r[h],b=l(m,h),u=p.get(b),u===void 0){var S=a.get(b);if(S!==void 0){a.delete(b),p.set(b,S);var L=o?o.next:_;V(t,o,S),V(t,S,L),Le(S,L,i),o=S}else{var I=_?_.e.nodes_start:i;o=je(I,t,o,o===null?t.first:o.next,m,b,h,c,s,f)}p.set(b,o),y=[],A=[],_=o.next;continue}if(v&&mr(u,m,h,s),(u.e.f&Oe)!==0&&(nr(u.e),n&&(u.a?.unfix(),(g??=new Set).delete(u))),u!==_){if(k!==void 0&&k.has(u)){if(y.length<A.length){var D=A[0],P;o=D.prev;var ae=y[0],ie=y[y.length-1];for(P=0;P<y.length;P+=1)Le(y[P],D,i);for(P=0;P<A.length;P+=1)k.delete(A[P]);V(t,ae.prev,ie.next),V(t,o,ae),V(t,ie,D),_=D,o=ie,h-=1,y=[],A=[]}else k.delete(u),Le(u,_,i),V(t,u.prev,u.next),V(t,u,o===null?t.first:o.next),V(t,o,u),o=u;continue}for(y=[],A=[];_!==null&&_.k!==b;)(_.e.f&Oe)===0&&(k??=new Set).add(_),A.push(_),_=_.next;if(_===null)continue;u=_}y.push(u),o=u,_=u.next}if(_!==null||k!==void 0){for(var Q=k===void 0?[]:ir(k);_!==null;)(_.e.f&Oe)===0&&Q.push(_),_=_.next;var ee=Q.length;if(ee>0){var ye=(s&ar)!==0&&w===0?i:null;if(n){for(h=0;h<ee;h+=1)Q[h].a?.measure();for(h=0;h<ee;h+=1)Q[h].a?.fix()}mt(t,Q,ye)}}n&&lr(()=>{if(g!==void 0)for(u of g)u.a?.apply()}),e.first=t.first&&t.first.e,e.last=o&&o.e;for(var Me of a.values())ge(Me.e);a.clear()}function mr(e,r,t,a){(a&Te)!==0&&Ge(e.v,r),(a&Ie)!==0?Ge(e.i,t):e.i=t}function je(e,r,t,a,i,c,s,l,f,n,v){var w=(f&Te)!==0,p=(f&Wr)===0,E=w?p?Kr(i,!1,!1):Ye(i):i,_=(f&Ie)===0?s:Ye(s),k={i:_,v:E,k:c,a:null,e:null,prev:t,next:a};try{if(e===null){var o=document.createDocumentFragment();o.append(e=He())}return k.e=_e(()=>l(e,E,_,n),C),k.e.prev=t&&t.e,k.e.next=a&&a.e,t===null?v||(r.first=k):(t.next=k,t.e.next=k.e),a!==null&&(a.prev=k,a.e.prev=k.e),k}finally{}}function Le(e,r,t){for(var a=e.next?e.next.e.nodes_start:t,i=r?r.e.nodes_start:t,c=e.e.nodes_start;c!==null&&c!==a;){var s=Br(c);i.before(c),c=s}}function V(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function bt(e,r,t,a,i,c){let s=C;C&&Ue();var l=null;C&&J.nodeType===Vr&&(l=J,Ue());var f=C?J:e,n=new ht(f,!1);Ne(()=>{const v=r()||null;var w=Gr;if(v===null){n.ensure(null,null);return}return n.ensure(v,p=>{if(v){if(l=C?l:document.createElementNS(w,v),Jr(l,l),a){C&&Nr(v)&&l.append(document.createComment(""));var E=C?tr(l):l.appendChild(He());C&&(E===null?re(!1):le(E)),a(l,E)}or.nodes_end=l,p.before(l)}C&&le(p)}),()=>{}},Yr),cr(()=>{}),s&&(re(!0),le(f))}function _t(e,r){var t=void 0,a;Ne(()=>{t!==(t=r())&&(a&&(ge(a),a=null),t&&(a=_e(()=>{Be(()=>t(e))})))})}function pr(e){var r,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=pr(e[r]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function gt(){for(var e,r,t=0,a="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=pr(e))&&(a&&(a+=" "),a+=r);return a}function yt(e){return typeof e=="object"?gt(e):e??""}const Je=[...` 	
\r\f \v\uFEFF`];function wt(e,r,t){var a=e==null?"":""+e;if(r&&(a=a?a+" "+r:r),t){for(var i in t)if(t[i])a=a?a+" "+i:i;else if(a.length)for(var c=i.length,s=0;(s=a.indexOf(i,s))>=0;){var l=s+c;(s===0||Je.includes(a[s-1]))&&(l===a.length||Je.includes(a[l]))?a=(s===0?"":a.substring(0,s))+a.substring(l+1):s=l}}return a===""?null:a}function Xe(e,r=!1){var t=r?" !important;":";",a="";for(var i in e){var c=e[i];c!=null&&c!==""&&(a+=" "+i+": "+c+t)}return a}function ze(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function kt(e,r){if(r){var t="",a,i;if(Array.isArray(r)?(a=r[0],i=r[1]):a=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var c=!1,s=0,l=!1,f=[];a&&f.push(...Object.keys(a).map(ze)),i&&f.push(...Object.keys(i).map(ze));var n=0,v=-1;const k=e.length;for(var w=0;w<k;w++){var p=e[w];if(l?p==="/"&&e[w-1]==="*"&&(l=!1):c?c===p&&(c=!1):p==="/"&&e[w+1]==="*"?l=!0:p==='"'||p==="'"?c=p:p==="("?s++:p===")"&&s--,!l&&c===!1&&s===0){if(p===":"&&v===-1)v=w;else if(p===";"||w===k-1){if(v!==-1){var E=ze(e.substring(n,v).trim());if(!f.includes(E)){p!==";"&&w++;var _=e.substring(n,w).trim();t+=" "+_+";"}}n=w+1,v=-1}}}}return a&&(t+=Xe(a)),i&&(t+=Xe(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Fe(e,r,t,a,i,c){var s=e.__className;if(C||s!==t||s===void 0){var l=wt(t,a,c);(!C||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):r?e.className=l:e.setAttribute("class",l)),e.__className=t}else if(c&&i!==c)for(var f in c){var n=!!c[f];(i==null||n!==!!i[f])&&e.classList.toggle(f,n)}return c}function Pe(e,r={},t,a){for(var i in t){var c=t[i];r[i]!==c&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,c,a))}}function br(e,r,t,a){var i=e.__style;if(C||i!==r){var c=kt(r,a);(!C||c!==e.getAttribute("style"))&&(c==null?e.removeAttribute("style"):e.style.cssText=c),e.__style=r}else a&&(Array.isArray(a)?(Pe(e,t?.[0],a[0]),Pe(e,t?.[1],a[1],"important")):Pe(e,t,a));return a}function xe(e,r,t=!1){if(e.multiple){if(r==null)return;if(!sr(r))return Xr();for(var a of e.options)a.selected=r.includes(be(a));return}for(a of e.options){var i=be(a);if(Zr(i,r)){a.selected=!0;return}}(!t||r!==void 0)&&(e.selectedIndex=-1)}function _r(e){var r=new MutationObserver(()=>{xe(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),cr(()=>{r.disconnect()})}function Et(e,r,t=r){var a=new WeakSet,i=!0;ur(e,"change",c=>{var s=c?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(s),be);else{var f=e.querySelector(s)??e.querySelector("option:not([disabled])");l=f&&be(f)}t(l),G!==null&&a.add(G)}),Be(()=>{var c=r();if(e===document.activeElement){var s=fr??G;if(a.has(s))return}if(xe(e,c,i),i&&c===void 0){var l=e.querySelector(":checked");l!==null&&(c=be(l),t(c))}e.__value=c,i=!1}),_r(e)}function be(e){return"__value"in e?e.__value:e.value}const ve=Symbol("class"),he=Symbol("style"),gr=Symbol("is custom element"),yr=Symbol("is html");function wr(e){if(C){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var a=e.value;F(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var i=e.checked;F(e,"checked",null),e.checked=i}}};e.__on_r=t,lr(t),rt()}}function At(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function F(e,r,t,a){var i=kr(e);C&&(i[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||i[r]!==(i[r]=t)&&(r==="loading"&&(e[tt]=t),t==null?e.removeAttribute(r):typeof t!="string"&&Er(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function St(e,r,t,a,i=!1,c=!1){if(C&&i&&e.tagName==="INPUT"){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in t||wr(s)}var f=kr(e),n=f[gr],v=!f[yr];let w=C&&n;w&&re(!1);var p=r||{},E=e.tagName==="OPTION";for(var _ in r)_ in t||(t[_]=null);t.class?t.class=yt(t.class):t[ve]&&(t.class=null),t[he]&&(t.style??=null);var k=Er(e);for(const u in t){let h=t[u];if(E&&u==="value"&&h==null){e.value=e.__value="",p[u]=h;continue}if(u==="class"){var o=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fe(e,o,h,a,r?.[ve],t[ve]),p[u]=h,p[ve]=t[ve];continue}if(u==="style"){br(e,h,r?.[he],t[he]),p[u]=h,p[he]=t[he];continue}var g=p[u];if(!(h===g&&!(h===void 0&&e.hasAttribute(u)))){p[u]=h;var y=u[0]+u[1];if(y!=="$$")if(y==="on"){const S={},L="$$"+u;let I=u.slice(2);var A=Cr(I);if(Tr(I)&&(I=I.slice(0,-7),S.capture=!0),!A&&g){if(h!=null)continue;e.removeEventListener(I,p[L],S),p[L]=null}if(h!=null)if(A)e[`__${I}`]=h,We([I]);else{let D=function(P){p[u].call(this,P)};p[L]=Ir(I,e,D,S)}else A&&(e[`__${I}`]=void 0)}else if(u==="style")F(e,u,h);else if(u==="autofocus")nt(e,!!h);else if(!n&&(u==="__value"||u==="value"&&h!=null))e.value=e.__value=h;else if(u==="selected"&&E)At(e,h);else{var m=u;v||(m=Mr(m));var b=m==="defaultValue"||m==="defaultChecked";if(h==null&&!n&&!b)if(f[u]=null,m==="value"||m==="checked"){let S=e;const L=r===void 0;if(m==="value"){let I=S.defaultValue;S.removeAttribute(m),S.defaultValue=I,S.value=S.__value=L?I:null}else{let I=S.defaultChecked;S.removeAttribute(m),S.defaultChecked=I,S.checked=L?I:!1}}else e.removeAttribute(u);else b||k.includes(m)&&(n||typeof h!="string")?(e[m]=h,m in f&&(f[m]=lt)):typeof h!="function"&&F(e,m,h)}}}return w&&re(!0),p}function Ze(e,r,t=[],a=[],i,c=!1,s=!1){it(t,a,l=>{var f=void 0,n={},v=e.nodeName==="SELECT",w=!1;if(Ne(()=>{var E=r(...l.map(d)),_=St(e,f,E,i,c,s);w&&v&&"value"in E&&xe(e,E.value);for(let o of Object.getOwnPropertySymbols(n))E[o]||ge(n[o]);for(let o of Object.getOwnPropertySymbols(E)){var k=E[o];o.description===st&&(!f||k!==f[o])&&(n[o]&&ge(n[o]),n[o]=_e(()=>_t(e,()=>k))),_[o]=k}f=_}),v){var p=e;Be(()=>{xe(p,f.value,!0),_r(p)})}w=!0})}function kr(e){return e.__attributes??={[gr]:e.nodeName.includes("-"),[yr]:e.namespaceURI===Qr}}var Qe=new Map;function Er(e){var r=e.getAttribute("is")||e.nodeName,t=Qe.get(r);if(t)return t;Qe.set(r,t=[]);for(var a,i=e,c=Element.prototype;c!==i;){a=at(i);for(var s in a)a[s].set&&t.push(s);i=et(i)}return t}function xt(e,r,t=r){var a=new WeakSet;ur(e,"input",async i=>{var c=i?e.defaultValue:e.value;if(c=Re(e)?De(c):c,t(c),G!==null&&a.add(G),await dr(),c!==(c=r())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=c??"",l!==null){var n=e.value.length;s===l&&l===f&&n>f?(e.selectionStart=n,e.selectionEnd=n):(e.selectionStart=s,e.selectionEnd=Math.min(l,n))}}}),(C&&e.defaultValue!==e.value||ot(r)==null&&e.value)&&(t(Re(e)?De(e.value):e.value),G!==null&&a.add(G)),ct(()=>{var i=r();if(e===document.activeElement){var c=fr??G;if(a.has(c))return}Re(e)&&i===De(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Re(e){var r=e.type;return r==="number"||r==="range"}function De(e){return e===""?null:+e}const Nt="https://search.smotrelka.org",Tt="7ea4364936aee87d8b00d9e2d139b4890e758ea83bc59ef76652b93f766cf247";/**
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
 */const It={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Mt=ut("<svg><!><!></svg>");function ue(e,r){$(r,!0);const t=H(r,"color",3,"currentColor"),a=H(r,"size",3,24),i=H(r,"strokeWidth",3,2),c=H(r,"absoluteStrokeWidth",3,!1),s=H(r,"iconNode",19,()=>[]),l=te(r,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var f=Mt();Ze(f,w=>({...It,...l,width:a(),height:a(),stroke:t(),"stroke-width":w,class:["lucide-icon lucide",r.name&&`lucide-${r.name}`,r.class]}),[()=>c()?Number(i())*24/Number(a()):i()]);var n=T(f);Se(n,17,s,Ke,(w,p)=>{var E=oe(()=>ft(d(p),2));let _=()=>d(E)[0],k=()=>d(E)[1];var o=B(),g=W(o);bt(g,_,!0,(y,A)=>{Ze(y,()=>({...k()}))}),M(w,o)});var v=K(n);Z(v,()=>r.children??X),N(f),M(e,f),q()}function Ct(e,r){$(r,!0);/**
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
 */let t=te(r,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];ue(e,ce({name:"chevron-down"},()=>t,{get iconNode(){return a},children:(i,c)=>{var s=B(),l=W(s);Z(l,()=>r.children??X),M(i,s)},$$slots:{default:!0}})),q()}function Ot(e,r){$(r,!0);/**
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
 */let t=te(r,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 18-6-6 6-6"}]];ue(e,ce({name:"chevron-left"},()=>t,{get iconNode(){return a},children:(i,c)=>{var s=B(),l=W(s);Z(l,()=>r.children??X),M(i,s)},$$slots:{default:!0}})),q()}function Lt(e,r){$(r,!0);/**
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
 */let t=te(r,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ue(e,ce({name:"external-link"},()=>t,{get iconNode(){return a},children:(i,c)=>{var s=B(),l=W(s);Z(l,()=>r.children??X),M(i,s)},$$slots:{default:!0}})),q()}function zt(e,r){$(r,!0);/**
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
 */let t=te(r,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>t,{get iconNode(){return a},children:(i,c)=>{var s=B(),l=W(s);Z(l,()=>r.children??X),M(i,s)},$$slots:{default:!0}})),q()}function Pt(e,r){$(r,!0);/**
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
 */let t=te(r,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ue(e,ce({name:"loader"},()=>t,{get iconNode(){return a},children:(i,c)=>{var s=B(),l=W(s);Z(l,()=>r.children??X),M(i,s)},$$slots:{default:!0}})),q()}function Rt(e,r){$(r,!0);/**
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
 */let t=te(r,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ue(e,ce({name:"search"},()=>t,{get iconNode(){return a},children:(i,c)=>{var s=B(),l=W(s);Z(l,()=>r.children??X),M(i,s)},$$slots:{default:!0}})),q()}var Dt=R('<span class="relative block w-full rounded-sm bg-zinc-900 pt-[150%]"><span class="absolute inset-0 flex items-center justify-center opacity-70"><!></span></span>'),Ut=R('<img loading="lazy"/>'),Kt=R('<span class="rounded-md bg-zinc-900 px-2 py-1 dark:bg-zinc-900"> </span>'),jt=R('<span class="rounded-md bg-zinc-900 px-2 py-1 dark:bg-zinc-900"> </span>'),Wt=R('<button type="button" class="group w-full cursor-pointer text-left outline-none"><span class="relative block"><!> <!></span> <span class="mt-2 block font-semibold text-balance group-hover:text-violet-500"> </span> <span class="mt-2 flex flex-wrap gap-2 text-xs"><!> <!></span></button>');function Ht(e,r){$(r,!0);let t=U(!1),a=U(!1);const i=oe(()=>r.item.mydramalist_cover||r.item.shikimori_cover||r.item.kinopoisk_cover),c=oe(()=>!d(i)||!d(t)||d(a)),s={anime_movie:"Аниме",anime_series:"Аниме",series:"Сериал",movie:"Фильм",show:"Шоу"};var l=Wt();l.__click=function(...m){r.onclick?.apply(this,m)};var f=T(l),n=T(f);{var v=m=>{var b=Dt(),u=T(b),h=T(u);zt(h,{size:24}),N(u),N(b),M(m,b)};j(n,m=>{d(c)&&m(v)})}var w=K(n,2);{var p=m=>{var b=Ut();let u;Y(h=>{u=Fe(b,1,"w-full rounded-sm transition-opacity duration-200",null,u,h),F(b,"src",d(i)),F(b,"alt",r.item.title_ru||r.item.title_en||r.item.original_title)},[()=>({"opacity-0":!d(t),absolute:!d(t),"inset-0":!d(t)})]),Ae("load",b,()=>O(t,!0)),Ae("error",b,()=>O(a,!0)),Or(b),M(m,b)};j(w,m=>{d(i)&&m(p)})}N(f);var E=K(f,2),_=T(E,!0);N(E);var k=K(E,2),o=T(k);{var g=m=>{var b=Kt(),u=T(b,!0);N(b),Y(()=>me(u,r.item.year)),M(m,b)};j(o,m=>{r.item.year&&m(g)})}var y=K(o,2);{var A=m=>{var b=jt(),u=T(b,!0);N(b),Y(()=>me(u,s[r.item.category]||r.item.category)),M(m,b)};j(y,m=>{r.item.category&&m(A)})}N(k),N(l),Y(()=>me(_,r.item.title_ru||r.item.title_en||r.item.original_title||r.item.alt_titles?.[0])),M(e,l),q()}We(["click"]);var Bt=R("<div><!></div>");function Ft(e,r){$(r,!0);let t=H(r,"stretchFirst",3,!1),a=H(r,"gap",3,"1em"),i=H(r,"padding",3,"0"),c=H(r,"colWidth",3,"minmax(min(10em, 100%), 1fr)"),s=U(null),l=U(vr([])),f=U(null),n=U(0);function v(){if(!d(s)||!d(l).length)return;const o=getComputedStyle(d(s)),g=o.gridTemplateColumns.split(" ").length,y=parseFloat(o.gridRowGap)||0;d(l).forEach(A=>A.style.marginTop=""),g>1&&d(l).slice(g).forEach((A,m)=>{const b=d(l)[m].getBoundingClientRect().bottom,u=A.getBoundingClientRect().top;A.style.marginTop=`${b+y-u}px`})}async function w(){await dr(),d(s)&&(O(l,Array.from(d(s).children).filter(o=>o.nodeType===1&&getComputedStyle(o).gridColumnEnd!=="-1"),!0),d(l).forEach(o=>{o.querySelectorAll("img").forEach(y=>{y.complete||y.addEventListener("load",()=>{dt(n),requestAnimationFrame(v)},{once:!0})})}),requestAnimationFrame(v))}rr(()=>{if(!d(s))return;r.onRefresh?.(v),w();const o=new MutationObserver(()=>{w()});return o.observe(d(s),{childList:!0,subtree:!1}),O(f,new ResizeObserver(()=>{requestAnimationFrame(v)}),!0),d(f).observe(d(s)),window.addEventListener("resize",v),()=>{o.disconnect(),d(f)?.disconnect(),window.removeEventListener("resize",v)}}),pe(()=>{d(n),requestAnimationFrame(v)});var p=Bt();let E,_;var k=T(p);Z(k,()=>r.children??X),N(p),hr(p,o=>O(s,o),()=>d(s)),Y((o,g)=>{E=Fe(p,1,"masonry svelte-99y4nj",null,E,o),_=br(p,"",_,g)},[()=>({"stretch-first":t()}),()=>({"--gap":a(),"--padding":i(),"--col-width":c()})]),M(e,p),q()}var $t=R('<iframe title="Smotrelka" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" allowfullscreen="" allow="autoplay *; fullscreen *; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>');function qt(e,r){var t=$t();Y(()=>F(t,"src",r.embedUrl)),M(e,t)}var Vt=R("<option> </option>"),Yt=R("<optgroup></optgroup>"),Gt=R('<a target="_blank" rel="noopener noreferrer" class="inline-flex shrink-0 items-center gap-1 rounded-md border border-zinc-900 p-2 text-sm text-blue-400 transition-colors hover:text-blue-300"><!> <span> </span></a>'),Jt=R('<div class="p-4 sm:p-0"><div class="flex flex-wrap gap-2"><div class="relative inline-flex text-ellipsis not-sm:w-full"><select class="min-w-0 appearance-none rounded-md bg-zinc-900 px-3 py-2 pr-10 text-ellipsis not-sm:w-full"></select> <span class="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"><!></span></div> <!></div></div>');function Xt(e,r){$(r,!0);let t=H(r,"embedUrl",15),a=H(r,"priorityOrder",19,()=>["turbo","lumex","kodik"]);const i={kodik:{label:"Kodik",base:"https://kodik.cc/find-player?",param:(o,g)=>`${o}ID=${g}`},lumex:{label:"Lumex",base:"https://p.lumex.cloud/f8GoATHamU0d?",param:(o,g)=>o==="imdb"?`imdb_id=${g}`:`kp_id=${g}`},turbo:{label:"Turbo",base:"https://52dce3a2.obrut.show/embed/0MTM?",param:(o,g)=>o==="worldart"?`worldart_id=${g}`:o==="imdb"?`imdb_id=${g}`:`kinopoisk_id=${g}`},flixcdn:{label:"FlixCDN",base:"https://player0.flixcdn.space/show/",param:(o,g)=>`${o}/${g}`}},c={imdb:{label:"IMDB",link:o=>`https://www.imdb.com/title/${o}/`},kinopoisk:{label:"КиноПоиск",link:o=>`https://www.kinopoisk.ru/film/${o}/`},shikimori:{label:"Shikimori",link:o=>`https://shikimori.one/animes/${o}`},tmdb:{label:"TMDB",link:o=>`https://www.themoviedb.org/movie/${o}`},mydramalist:{label:"MyDramaList",link:o=>`https://mydramalist.com/${o}`},worldart:{label:"World-Art",link:o=>`http://www.world-art.ru/${r.category?.includes("anime")||Object.values(r.providerIds).some(y=>y.shikimori?.length)?"animation/animation.php":"cinema/cinema.php"}?id=${o}`}},s=oe(()=>{const o=[];for(const[y,A]of Object.entries(r.providerIds)){const m=y.startsWith("lumex")?"lumex":y,b=i[m];if(b){for(const[u,h]of Object.entries(A))if(h?.length)for(const S of h){const L=typeof S=="object"?S.id:S,I=typeof S=="object"&&S.label?S.label:String(L),D=b.base+b.param(u,L);o.push({label:I,url:D,providerKey:m,providerLabel:b.label,sourceKey:u,id:L})}}}o.sort((y,A)=>y.label.localeCompare(A.label));const g=new Map;for(const y of o)g.has(y.providerKey)||g.set(y.providerKey,[]),g.get(y.providerKey).push(y);return Array.from(g.entries()).sort(([y],[A])=>{const m=a().indexOf(y),b=a().indexOf(A);return(m===-1?999:m)-(b===-1?999:b)}).map(([y,A])=>({provider:A[0].providerLabel,items:A}))}),l=oe(()=>d(s).flatMap(o=>o.items).find(o=>o.url===t()));pe(()=>{!t()&&d(s)[0]?.items[0]&&t(d(s)[0].items[0].url)});var f=Jt(),n=T(f),v=T(n),w=T(v);Se(w,21,()=>d(s),Ke,(o,g)=>{var y=Yt();Se(y,21,()=>d(g).items,Ke,(A,m)=>{var b=Vt(),u=T(b,!0);N(b);var h={};Y(()=>{me(u,d(m).label),h!==(h=d(m).url)&&(b.value=(b.__value=d(m).url)??"")}),M(A,b)}),N(y),Y(()=>F(y,"label",d(g).provider)),M(o,y)}),N(w);var p=K(w,2),E=T(p);Ct(E,{size:16}),N(p),N(v);var _=K(v,2);{var k=o=>{const g=oe(()=>c[d(l).sourceKey]?.link(d(l).id));var y=B(),A=W(y);{var m=b=>{var u=Gt(),h=T(u);Lt(h,{size:16});var S=K(h,2),L=T(S,!0);N(S),N(u),Y(()=>{F(u,"href",d(g)),me(L,c[d(l).sourceKey].label)}),M(b,u)};j(A,b=>{d(g)&&b(m)})}M(o,y)};j(_,o=>{d(l)&&o(k)})}N(n),N(f),Et(w,t),M(e,f),q()}const er=["imdb","kinopoisk","shikimori","tmdb","mydramalist","worldart"];class Zt{baseUrl;apiKey;constructor(r,t){this.baseUrl=r.replace(/\/$/,""),this.apiKey=t}async searchTitles(r,t={}){const{limit:a=30,offset:i=0,providers:c=null,categories:s=null}=t,l=this.buildFilters(c,s),f=Math.min(a*5,1e3),n=await this.search(r,{limit:f,offset:0,sort:["year:desc"],filter:l.length?l.join(" AND "):void 0}),v=this.groupDuplicates(n.hits);return{hits:v.slice(i,i+a),hasMore:v.length>i+a,estimatedTotalHits:v.length}}async search(r,t={}){const a=`${this.baseUrl}/indexes/media/search`,i={"Content-Type":"application/json"};this.apiKey&&(i.Authorization=`Bearer ${this.apiKey}`);const c={q:r,...t};try{const s=await fetch(a,{method:"POST",headers:i,body:JSON.stringify(c)});if(!s.ok){const l=await s.json().catch(()=>({message:s.statusText}));throw new Error(`Meilisearch error: ${l.message||s.statusText}`)}return await s.json()}catch(s){throw console.error("Meilisearch search failed:",s),s}}buildFilters(r,t){const a=[];return r?.length&&a.push(`provider IN [${r.map(i=>`"${i}"`).join(",")}]`),t?.length&&a.push(`category IN [${t.map(i=>`"${i}"`).join(",")}]`),a}groupDuplicates(r){if(r.length===0)return[];const t=new Int32Array(r.length);for(let n=0;n<r.length;n++)t[n]=n;const a=n=>(t[n]!==n&&(t[n]=a(t[n])),t[n]),i=(n,v)=>{t[a(n)]=a(v)},c=er.map(()=>new Map);r.forEach((n,v)=>{[n.imdb_id,n.kinopoisk_id,n.shikimori_id,n.tmdb_id,n.mydramalist_id,n.worldart_id].forEach((p,E)=>{if(p){const _=String(p),k=c[E];k.has(_)||k.set(_,[]),k.get(_).push(v)}})}),c.forEach(n=>{n.forEach(v=>{for(let w=1;w<v.length;w++)i(v[0],v[w])})});const s=n=>{if(n){if(n.startsWith("lumex"))return"lumex";if(n.startsWith("kodik"))return"kodik";if(n.startsWith("turbo"))return"turbo";if(n.startsWith("flixcdn"))return"flixcdn"}},l=()=>{const n=()=>({imdb:[],kinopoisk:[],shikimori:[],tmdb:[],mydramalist:[],worldart:[]});return{kodik:n(),turbo:n(),flixcdn:n(),lumex:n()}},f=new Map;return r.forEach((n,v)=>{const w=a(v);f.has(w)||f.set(w,{hit:n,providers:l()});const p=s(n.provider);if(!p)return;const E=f.get(w),_=n.provider_title||n.title_ru||n.title_en||n.original_title||n.alt_titles?.[0]||"-"+(n.year?` (${n.year})`:""),k=[n.imdb_id,n.kinopoisk_id,n.shikimori_id,n.tmdb_id,n.mydramalist_id,n.worldart_id];er.forEach((o,g)=>{const y=k[g];if(y){const A=E.providers[p][o];A.some(m=>m.id===y)||A.push({id:y,label:_})}})}),Array.from(f.values(),({hit:n,providers:v})=>({...n,provider_ids:v}))}}var Qt=(e,r)=>{e.preventDefault(),O(r,"watch")},ea=R('<button type="button" class="cursor-pointer rounded-md bg-zinc-800 p-2 transition-transform duration-75 hover:bg-zinc-700 active:scale-95"><!></button>'),ra=R("<p>😔 Увы, по Вашему запросу ничего не найдено</p>"),ta=(e,r)=>{e.preventDefault(),O(r,"#popular")},aa=(e,r)=>{e.preventDefault(),O(r,"#hot")},ia=R('<div class="space-y-4"><div class="flex flex-wrap gap-2 text-xs"><button type="button" class="rounded-full border border-zinc-800 px-3 py-2 select-none hover:border-zinc-700">🏆 Популярное</button> <button type="button" class="rounded-full border border-zinc-800 px-3 py-2 select-none hover:border-zinc-700">🔥 Сейчас смотрят</button></div></div>'),sa=R('<header class="sticky top-0 z-10 flex h-16 items-center bg-zinc-900/60 backdrop-blur-lg"><div class="mx-auto flex w-full max-w-5xl gap-2 px-4"><!> <div class="relative grow"><input name="search" type="search" autocomplete="off" autocorrect="off" autocapitalize="off" class="peer w-full min-w-0 rounded-md bg-zinc-800 px-3 py-2 ps-9 pe-9 text-sm text-ellipsis outline-none focus-visible:border-violet-500 focus-visible:ring-3 focus-visible:ring-violet-500/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&amp;::-webkit-search-cancel-button]:appearance-none [&amp;::-webkit-search-decoration]:appearance-none [&amp;::-webkit-search-results-button]:appearance-none [&amp;::-webkit-search-results-decoration]:appearance-none" placeholder="начните вводить название…"/> <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 opacity-70 peer-disabled:opacity-50"><!></div></div></div></header> <main><div><div class="mx-auto w-full max-w-5xl space-y-4 sm:p-4"><!> <div class="overflow-hidden rounded-lg" style="position: relative; width: 100%; padding-top: 57%; background: #000;"><!></div></div></div> <div><div class="mx-auto w-full max-w-5xl p-4"><!></div></div></main>',1);function fa(e,r){$(r,!0);let t=U("search"),a=U(""),i=U(void 0),c=U(!1),s=U(vr([])),l,f=U(null),n=U(null),v=U(null);pe(()=>{clearTimeout(l);const x=d(a).trim();if(!x){O(s,[],!0),O(c,!1);return}l=setTimeout(()=>p(x),100)}),pe(()=>{d(f)?.provider_ids&&O(n,Object.keys(d(f)?.provider_ids)[0],!0)}),pe(()=>{d(f)&&localStorage.setItem("recent_title",JSON.stringify(d(f)))}),rr(()=>{const x=localStorage.getItem("recent_title");if(x){const z=JSON.parse(x);O(f,z,!0),O(t,"watch")}});const w=new Zt(Nt,Tt);async function p(x){if(!x.trim()){O(s,[],!0);return}const z=await w.searchTitles(x,{limit:20,offset:0});O(s,z.hits,!0)}function E(x){if((x.key==="k"||x.key==="/")&&(x.metaKey||x.ctrlKey)){x.preventDefault(),d(i)?.focus();return}document.activeElement!==d(i)&&(x.key.length>1||d(i)?.focus())}var _=sa();Ae("keydown",vt,E);var k=W(_),o=T(k),g=T(o);{var y=x=>{var z=ea();z.__click=[Qt,t];var se=T(z);Ot(se,{size:20}),N(z),M(x,z)};j(g,x=>{d(t)!=="watch"&&d(f)&&x(y)})}var A=K(g,2),m=T(A);wr(m),hr(m,x=>O(i,x),()=>d(i));var b=K(m,2),u=T(b);{var h=x=>{Pt(x,{class:"animate-spin",size:16,"aria-hidden":"true",role:"presentation"})},S=x=>{Rt(x,{size:16,"aria-hidden":"true"})};j(u,x=>{d(c)?x(h):x(S,!1)})}N(b),N(A),N(o),N(k);var L=K(k,2),I=T(L),D=T(I),P=T(D);{var ae=x=>{Xt(x,{get providerIds(){return d(f).provider_ids},get category(){return d(f).category},get embedUrl(){return d(v)},set embedUrl(z){O(v,z,!0)}})};j(P,x=>{d(f)&&x(ae)})}var ie=K(P,2),Q=T(ie);qt(Q,{get embedUrl(){return d(v)}}),N(ie),N(D),N(I);var ee=K(I,2),ye=T(ee),Me=T(ye);{var Ar=x=>{var z=B(),se=W(z);{var we=ne=>{Ft(ne,{children:(ke,$e)=>{var Ee=B(),fe=W(Ee);Se(fe,17,()=>d(s),de=>de.id,(de,qe)=>{Ht(de,{get item(){return d(qe)},onclick:xr=>{xr.preventDefault(),O(f,d(qe),!0),O(v,null),O(t,"watch")}})}),M(ke,Ee)},$$slots:{default:!0}})},Ce=ne=>{var ke=B(),$e=W(ke);{var Ee=fe=>{var de=ra();M(fe,de)};j($e,fe=>{d(c)||fe(Ee)},!0)}M(ne,ke)};j(se,ne=>{d(s).length?ne(we):ne(Ce,!1)})}M(x,z)},Sr=x=>{var z=ia(),se=T(z),we=T(se);we.__click=[ta,a];var Ce=K(we,2);Ce.__click=[aa,a],N(se),N(z),M(x,z)};j(Me,x=>{d(a).trim().length?x(Ar):x(Sr,!1)})}N(ye),N(ee),N(L),Y(()=>{F(I,"hidden",d(t)!=="watch"),F(ee,"hidden",d(t)!=="search")}),Ae("focus",m,()=>O(t,"search")),xt(m,()=>d(a),x=>O(a,x)),M(e,_),q()}We(["click"]);export{fa as component};
