import"../chunks/DsnmJJEf.js";import{i as Nt,a as xt,c as Tt,d as We,n as Mt,b as Ct,s as pe,e as Ae,r as It,o as et}from"../chunks/DGn0u_WA.js";import{l as oe,i as I,o as tt,g as Ke,x as Ue,h as xe,K as d,a2 as Ot,T as zt,U as Lt,V as Ve,s as te,m as J,C as Pt,aE as Dt,u as _e,w as Rt,aV as Te,aW as Me,p as Y,aX as rt,aC as at,ax as it,aR as Ut,ag as Ye,ai as Ge,r as st,t as $t,aY as Oe,Y as nt,q as ge,aZ as jt,a_ as Wt,k as Kt,a$ as Bt,aB as Ht,b0 as Ft,a6 as ot,b1 as qt,E as Vt,b2 as Yt,z as Gt,A as lt,W as Be,b3 as ut,b4 as ct,b5 as Jt,b6 as Qt,b7 as Xt,b8 as Zt,b9 as er,ba as tr,bb as rr,bc as ar,bd as ir,be as sr,bf as nr,aQ as ft,G as or,X as lr,N as F,bg as ur,Q as T,S as U,d as Q,R as x,a as C,P as q,c as B,b as j,aT as le,bh as cr,f as $,O as G,aS as R,a4 as z,a3 as dt,F as he,bi as fr,bj as dr}from"../chunks/CdaOsg_R.js";import{p as K,r as re,s as ue,i as W,b as vt}from"../chunks/Dg8aUJng.js";import{B as vr,s as X}from"../chunks/CZ8TtnBb.js";function $e(e,t){return t}function mr(e,t,r){for(var a=e.items,i=[],u=t.length,s=0;s<u;s++)Bt(t[s].e,i,!0);var l=u>0&&i.length===0&&r!==null;if(l){var n=r.parentNode;Ht(n),n.append(r),a.clear(),V(e,t[0].prev,t[u-1].next)}Ft(i,()=>{for(var f=0;f<u;f++){var v=t[f];l||(a.delete(v.k),V(e,v.prev,v.next)),ge(v.e,!l)}})}function Se(e,t,r,a,i,u=null){var s=e,l={flags:t,items:new Map,first:null},n=(t&rt)!==0;if(n){var f=e;s=I?oe(tt(f)):f.appendChild(Ke())}I&&Ue();var v=null,g=!1,p=new Map,S=Ot(()=>{var m=r();return it(m)?m:m==null?[]:at(m)}),_,y;function o(){pr(y,_,l,p,s,i,t,a,r),u!==null&&(_.length===0?v?st(v):v=_e(()=>u(s)):v!==null&&$t(v,()=>{v=null}))}xe(()=>{y??=ot,_=d(S);var m=_.length;if(g&&m===0)return;g=m===0;let k=!1;if(I){var w=zt(s)===Lt;w!==(m===0)&&(s=Ve(),oe(s),te(!1),k=!0)}if(I){for(var b=null,E,c=0;c<m;c++){if(J.nodeType===Pt&&J.data===Dt){s=J,k=!0,te(!1);break}var h=_[c],N=a(h,c);E=je(J,l,b,null,h,N,c,i,t,r),l.items.set(N,E),b=E}m>0&&oe(Ve())}if(I)m===0&&u&&(v=_e(()=>u(s)));else if(Rt()){var O=new Set,M=Y;for(c=0;c<m;c+=1){h=_[c],N=a(h,c);var D=l.items.get(N)??p.get(N);D?(t&(Te|Me))!==0&&mt(D,h,c,t):(E=je(null,l,null,null,h,N,c,i,t,r,!0),p.set(N,E)),O.add(N)}for(const[L,ae]of l.items)O.has(L)||M.skipped_effects.add(ae.e);M.add_callback(o)}else o();k&&te(!0),d(S)}),I&&(s=J)}function pr(e,t,r,a,i,u,s,l,n){var f=(s&Wt)!==0,v=(s&(Te|Me))!==0,g=t.length,p=r.items,S=r.first,_=S,y,o=null,m,k=[],w=[],b,E,c,h;if(f)for(h=0;h<g;h+=1)b=t[h],E=l(b,h),c=p.get(E),c!==void 0&&(c.a?.measure(),(m??=new Set).add(c));for(h=0;h<g;h+=1){if(b=t[h],E=l(b,h),c=p.get(E),c===void 0){var N=a.get(E);if(N!==void 0){a.delete(E),p.set(E,N);var O=o?o.next:_;V(r,o,N),V(r,N,O),ze(N,O,i),o=N}else{var M=_?_.e.nodes_start:i;o=je(M,r,o,o===null?r.first:o.next,b,E,h,u,s,n)}p.set(E,o),k=[],w=[],_=o.next;continue}if(v&&mt(c,b,h,s),(c.e.f&Oe)!==0&&(st(c.e),f&&(c.a?.unfix(),(m??=new Set).delete(c))),c!==_){if(y!==void 0&&y.has(c)){if(k.length<w.length){var D=w[0],L;o=D.prev;var ae=k[0],ie=k[k.length-1];for(L=0;L<k.length;L+=1)ze(k[L],D,i);for(L=0;L<w.length;L+=1)y.delete(w[L]);V(r,ae.prev,ie.next),V(r,o,ae),V(r,ie,D),_=D,o=ie,h-=1,k=[],w=[]}else y.delete(c),ze(c,_,i),V(r,c.prev,c.next),V(r,c,o===null?r.first:o.next),V(r,o,c),o=c;continue}for(k=[],w=[];_!==null&&_.k!==E;)(_.e.f&Oe)===0&&(y??=new Set).add(_),w.push(_),_=_.next;if(_===null)continue;c=_}k.push(c),o=c,_=c.next}if(_!==null||y!==void 0){for(var Z=y===void 0?[]:at(y);_!==null;)(_.e.f&Oe)===0&&Z.push(_),_=_.next;var ee=Z.length;if(ee>0){var ye=(s&rt)!==0&&g===0?i:null;if(f){for(h=0;h<ee;h+=1)Z[h].a?.measure();for(h=0;h<ee;h+=1)Z[h].a?.fix()}mr(r,Z,ye)}}f&&nt(()=>{if(m!==void 0)for(c of m)c.a?.apply()}),e.first=r.first&&r.first.e,e.last=o&&o.e;for(var Ce of a.values())ge(Ce.e);a.clear()}function mt(e,t,r,a){(a&Te)!==0&&Ge(e.v,t),(a&Me)!==0?Ge(e.i,r):e.i=r}function je(e,t,r,a,i,u,s,l,n,f,v){var g=(n&Te)!==0,p=(n&jt)===0,S=g?p?Ut(i,!1,!1):Ye(i):i,_=(n&Me)===0?s:Ye(s),y={i:_,v:S,k:u,a:null,e:null,prev:r,next:a};try{if(e===null){var o=document.createDocumentFragment();o.append(e=Ke())}return y.e=_e(()=>l(e,S,_,f),I),y.e.prev=r&&r.e,y.e.next=a&&a.e,r===null?v||(t.first=y):(r.next=y,r.e.next=y.e),a!==null&&(a.prev=y,a.e.prev=y.e),y}finally{}}function ze(e,t,r){for(var a=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,u=e.e.nodes_start;u!==null&&u!==a;){var s=Kt(u);i.before(u),u=s}}function V(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function hr(e,t,r,a,i,u){let s=I;I&&Ue();var l=null;I&&J.nodeType===qt&&(l=J,Ue());var n=I?J:e,f=new vr(n,!1);xe(()=>{const v=t()||null;var g=Yt;if(v===null){f.ensure(null,null);return}return f.ensure(v,p=>{if(v){if(l=I?l:document.createElementNS(g,v),Gt(l,l),a){I&&Nt(v)&&l.append(document.createComment(""));var S=I?tt(l):l.appendChild(Ke());I&&(S===null?te(!1):oe(S)),a(l,S)}ot.nodes_end=l,p.before(l)}I&&oe(p)}),()=>{}},Vt),lt(()=>{}),s&&(te(!0),oe(n))}function br(e,t){var r=void 0,a;xe(()=>{r!==(r=t())&&(a&&(ge(a),a=null),r&&(a=_e(()=>{Be(()=>r(e))})))})}function pt(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=pt(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function _r(){for(var e,t,r=0,a="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=pt(e))&&(a&&(a+=" "),a+=t);return a}function gr(e){return typeof e=="object"?_r(e):e??""}const Je=[...` 	
\r\f \v\uFEFF`];function yr(e,t,r){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),r){for(var i in r)if(r[i])a=a?a+" "+i:i;else if(a.length)for(var u=i.length,s=0;(s=a.indexOf(i,s))>=0;){var l=s+u;(s===0||Je.includes(a[s-1]))&&(l===a.length||Je.includes(a[l]))?a=(s===0?"":a.substring(0,s))+a.substring(l+1):s=l}}return a===""?null:a}function Qe(e,t=!1){var r=t?" !important;":";",a="";for(var i in e){var u=e[i];u!=null&&u!==""&&(a+=" "+i+": "+u+r)}return a}function Le(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function wr(e,t){if(t){var r="",a,i;if(Array.isArray(t)?(a=t[0],i=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,s=0,l=!1,n=[];a&&n.push(...Object.keys(a).map(Le)),i&&n.push(...Object.keys(i).map(Le));var f=0,v=-1;const y=e.length;for(var g=0;g<y;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):u?u===p&&(u=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?u=p:p==="("?s++:p===")"&&s--,!l&&u===!1&&s===0){if(p===":"&&v===-1)v=g;else if(p===";"||g===y-1){if(v!==-1){var S=Le(e.substring(f,v).trim());if(!n.includes(S)){p!==";"&&g++;var _=e.substring(f,g).trim();r+=" "+_+";"}}f=g+1,v=-1}}}}return a&&(r+=Qe(a)),i&&(r+=Qe(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function He(e,t,r,a,i,u){var s=e.__className;if(I||s!==r||s===void 0){var l=yr(r,a,u);(!I||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e.__className=r}else if(u&&i!==u)for(var n in u){var f=!!u[n];(i==null||f!==!!i[n])&&e.classList.toggle(n,f)}return u}function Pe(e,t={},r,a){for(var i in r){var u=r[i];t[i]!==u&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,u,a))}}function ht(e,t,r,a){var i=e.__style;if(I||i!==t){var u=wr(t,a);(!I||u!==e.getAttribute("style"))&&(u==null?e.removeAttribute("style"):e.style.cssText=u),e.__style=t}else a&&(Array.isArray(a)?(Pe(e,r?.[0],a[0]),Pe(e,r?.[1],a[1],"important")):Pe(e,r,a));return a}function Ne(e,t,r=!1){if(e.multiple){if(t==null)return;if(!it(t))return Jt();for(var a of e.options)a.selected=t.includes(be(a));return}for(a of e.options){var i=be(a);if(Qt(i,t)){a.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function bt(e){var t=new MutationObserver(()=>{Ne(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),lt(()=>{t.disconnect()})}function kr(e,t,r=t){var a=new WeakSet,i=!0;ut(e,"change",u=>{var s=u?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(s),be);else{var n=e.querySelector(s)??e.querySelector("option:not([disabled])");l=n&&be(n)}r(l),Y!==null&&a.add(Y)}),Be(()=>{var u=t();if(e===document.activeElement){var s=ct??Y;if(a.has(s))return}if(Ne(e,u,i),i&&u===void 0){var l=e.querySelector(":checked");l!==null&&(u=be(l),r(u))}e.__value=u,i=!1}),bt(e)}function be(e){return"__value"in e?e.__value:e.value}const ve=Symbol("class"),me=Symbol("style"),_t=Symbol("is custom element"),gt=Symbol("is html");function yt(e){if(I){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;H(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var i=e.checked;H(e,"checked",null),e.checked=i}}};e.__on_r=r,nt(r),er()}}function Er(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function H(e,t,r,a){var i=wt(e);I&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=r)&&(t==="loading"&&(e[tr]=r),r==null?e.removeAttribute(t):typeof r!="string"&&kt(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Ar(e,t,r,a,i=!1,u=!1){if(I&&i&&e.tagName==="INPUT"){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in r||yt(s)}var n=wt(e),f=n[_t],v=!n[gt];let g=I&&f;g&&te(!1);var p=t||{},S=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=gr(r.class):r[ve]&&(r.class=null),r[me]&&(r.style??=null);var y=kt(e);for(const c in r){let h=r[c];if(S&&c==="value"&&h==null){e.value=e.__value="",p[c]=h;continue}if(c==="class"){var o=e.namespaceURI==="http://www.w3.org/1999/xhtml";He(e,o,h,a,t?.[ve],r[ve]),p[c]=h,p[ve]=r[ve];continue}if(c==="style"){ht(e,h,t?.[me],r[me]),p[c]=h,p[me]=r[me];continue}var m=p[c];if(!(h===m&&!(h===void 0&&e.hasAttribute(c)))){p[c]=h;var k=c[0]+c[1];if(k!=="$$")if(k==="on"){const N={},O="$$"+c;let M=c.slice(2);var w=Ct(M);if(xt(M)&&(M=M.slice(0,-7),N.capture=!0),!w&&m){if(h!=null)continue;e.removeEventListener(M,p[O],N),p[O]=null}if(h!=null)if(w)e[`__${M}`]=h,We([M]);else{let D=function(L){p[c].call(this,L)};p[O]=Tt(M,e,D,N)}else w&&(e[`__${M}`]=void 0)}else if(c==="style")H(e,c,h);else if(c==="autofocus")sr(e,!!h);else if(!f&&(c==="__value"||c==="value"&&h!=null))e.value=e.__value=h;else if(c==="selected"&&S)Er(e,h);else{var b=c;v||(b=Mt(b));var E=b==="defaultValue"||b==="defaultChecked";if(h==null&&!f&&!E)if(n[c]=null,b==="value"||b==="checked"){let N=e;const O=t===void 0;if(b==="value"){let M=N.defaultValue;N.removeAttribute(b),N.defaultValue=M,N.value=N.__value=O?M:null}else{let M=N.defaultChecked;N.removeAttribute(b),N.defaultChecked=M,N.checked=O?M:!1}}else e.removeAttribute(c);else E||y.includes(b)&&(f||typeof h!="string")?(e[b]=h,b in n&&(n[b]=nr)):typeof h!="function"&&H(e,b,h)}}}return g&&te(!0),p}function Xe(e,t,r=[],a=[],i,u=!1,s=!1){ar(r,a,l=>{var n=void 0,f={},v=e.nodeName==="SELECT",g=!1;if(xe(()=>{var S=t(...l.map(d)),_=Ar(e,n,S,i,u,s);g&&v&&"value"in S&&Ne(e,S.value);for(let o of Object.getOwnPropertySymbols(f))S[o]||ge(f[o]);for(let o of Object.getOwnPropertySymbols(S)){var y=S[o];o.description===ir&&(!n||y!==n[o])&&(f[o]&&ge(f[o]),f[o]=_e(()=>br(e,()=>y))),_[o]=y}n=_}),v){var p=e;Be(()=>{Ne(p,n.value,!0),bt(p)})}g=!0})}function wt(e){return e.__attributes??={[_t]:e.nodeName.includes("-"),[gt]:e.namespaceURI===Xt}}var Ze=new Map;function kt(e){var t=e.getAttribute("is")||e.nodeName,r=Ze.get(t);if(r)return r;Ze.set(t,r=[]);for(var a,i=e,u=Element.prototype;u!==i;){a=rr(i);for(var s in a)a[s].set&&r.push(s);i=Zt(i)}return r}function Sr(e,t,r=t){var a=new WeakSet;ut(e,"input",async i=>{var u=i?e.defaultValue:e.value;if(u=De(e)?Re(u):u,r(u),Y!==null&&a.add(Y),await ft(),u!==(u=t())){var s=e.selectionStart,l=e.selectionEnd,n=e.value.length;if(e.value=u??"",l!==null){var f=e.value.length;s===l&&l===n&&f>n?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=s,e.selectionEnd=Math.min(l,f))}}}),(I&&e.defaultValue!==e.value||or(t)==null&&e.value)&&(r(De(e)?Re(e.value):e.value),Y!==null&&a.add(Y)),lr(()=>{var i=t();if(e===document.activeElement){var u=ct??Y;if(a.has(u))return}De(e)&&i===Re(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function De(e){var t=e.type;return t==="number"||t==="range"}function Re(e){return e===""?null:+e}const Nr="https://search.smotrelka.org",xr="7ea4364936aee87d8b00d9e2d139b4890e758ea83bc59ef76652b93f766cf247";/**
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
 */const Tr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Mr=ur("<svg><!><!></svg>");function ce(e,t){F(t,!0);const r=K(t,"color",3,"currentColor"),a=K(t,"size",3,24),i=K(t,"strokeWidth",3,2),u=K(t,"absoluteStrokeWidth",3,!1),s=K(t,"iconNode",19,()=>[]),l=re(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var n=Mr();Xe(n,g=>({...Tr,...l,width:a(),height:a(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>u()?Number(i())*24/Number(a()):i()]);var f=T(n);Se(f,17,s,$e,(g,p)=>{var S=le(()=>cr(d(p),2));let _=()=>d(S)[0],y=()=>d(S)[1];var o=B(),m=j(o);hr(m,_,!0,(k,w)=>{Xe(k,()=>({...y()}))}),C(g,o)});var v=U(f);X(v,()=>t.children??Q),x(n),C(e,n),q()}function Cr(e,t){F(t,!0);/**
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
 */let r=re(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,ue({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(i,u)=>{var s=B(),l=j(s);X(l,()=>t.children??Q),C(i,s)},$$slots:{default:!0}})),q()}function Ir(e,t){F(t,!0);/**
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
 */let r=re(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 18-6-6 6-6"}]];ce(e,ue({name:"chevron-left"},()=>r,{get iconNode(){return a},children:(i,u)=>{var s=B(),l=j(s);X(l,()=>t.children??Q),C(i,s)},$$slots:{default:!0}})),q()}function Or(e,t){F(t,!0);/**
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
 */let r=re(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ce(e,ue({name:"external-link"},()=>r,{get iconNode(){return a},children:(i,u)=>{var s=B(),l=j(s);X(l,()=>t.children??Q),C(i,s)},$$slots:{default:!0}})),q()}function zr(e,t){F(t,!0);/**
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
 */let r=re(t,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ce(e,ue({name:"image"},()=>r,{get iconNode(){return a},children:(i,u)=>{var s=B(),l=j(s);X(l,()=>t.children??Q),C(i,s)},$$slots:{default:!0}})),q()}function Lr(e,t){F(t,!0);/**
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
 */let r=re(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ce(e,ue({name:"loader"},()=>r,{get iconNode(){return a},children:(i,u)=>{var s=B(),l=j(s);X(l,()=>t.children??Q),C(i,s)},$$slots:{default:!0}})),q()}function Pr(e,t){F(t,!0);/**
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
 */let r=re(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,ue({name:"search"},()=>r,{get iconNode(){return a},children:(i,u)=>{var s=B(),l=j(s);X(l,()=>t.children??Q),C(i,s)},$$slots:{default:!0}})),q()}var Dr=$('<span class="bg-zinc-900 block rounded-sm pt-[150%] relative w-full"><span class="absolute inset-0 flex justify-center items-center opacity-70"><!></span></span>'),Rr=$('<img loading="lazy"/>'),Ur=$('<span class="rounded-md px-2 py-1 bg-zinc-900 dark:bg-zinc-900"> </span>'),$r=$('<button type="button" class="group w-full text-left cursor-pointer outline-none"><span class="block relative"><!> <!></span> <span class="font-semibold text-balance block mt-2 group-hover:text-violet-500"> </span> <span class="flex gap-2 mt-2 flex-wrap text-xs"><span class="rounded-md px-2 py-1 bg-zinc-900 dark:bg-zinc-900"> </span> <!></span></button>');function jr(e,t){F(t,!0);let r=R(!1),a=R(!1);const i=le(()=>t.item.mydramalist_cover||t.item.shikimori_cover||t.item.kinopoisk_cover),u=le(()=>!d(i)||!d(r)||d(a));var s=$r();s.__click=function(...w){t.onclick?.apply(this,w)};var l=T(s),n=T(l);{var f=w=>{var b=Dr(),E=T(b),c=T(E);zr(c,{size:24}),x(E),x(b),C(w,b)};W(n,w=>{d(u)&&w(f)})}var v=U(n,2);{var g=w=>{var b=Rr();let E;G(c=>{E=He(b,1,"rounded-sm w-full transition-opacity duration-200",null,E,c),H(b,"src",d(i)),H(b,"alt",t.item.title_ru||t.item.title_en||t.item.original_title)},[()=>({"opacity-0":!d(r),absolute:!d(r),"inset-0":!d(r)})]),Ae("load",b,()=>z(r,!0)),Ae("error",b,()=>z(a,!0)),It(b),C(w,b)};W(v,w=>{d(i)&&w(g)})}x(l);var p=U(l,2),S=T(p,!0);x(p);var _=U(p,2),y=T(_),o=T(y,!0);x(y);var m=U(y,2);{var k=w=>{var b=Ur(),E=T(b,!0);x(b),G(()=>pe(E,t.item.category)),C(w,b)};W(m,w=>{t.item.category&&w(k)})}x(_),x(s),G(()=>{pe(S,t.item.title_ru||t.item.title_en||t.item.original_title||t.item.alt_titles?.[0]),pe(o,t.item.year)}),C(e,s),q()}We(["click"]);var Wr=$("<div><!></div>");function Kr(e,t){F(t,!0);let r=K(t,"stretchFirst",3,!1),a=K(t,"gap",3,"1em"),i=K(t,"padding",3,"0"),u=K(t,"colWidth",3,"minmax(min(10em, 100%), 1fr)"),s=R(null),l=R(dt([])),n=R(null),f=R(0);function v(){if(!d(s)||!d(l).length)return;const o=getComputedStyle(d(s)),m=o.gridTemplateColumns.split(" ").length,k=parseFloat(o.gridRowGap)||0;d(l).forEach(w=>w.style.marginTop=""),m>1&&d(l).slice(m).forEach((w,b)=>{const E=d(l)[b].getBoundingClientRect().bottom,c=w.getBoundingClientRect().top;w.style.marginTop=`${E+k-c}px`})}async function g(){await ft(),d(s)&&(z(l,Array.from(d(s).children).filter(o=>o.nodeType===1&&getComputedStyle(o).gridColumnEnd!=="-1"),!0),d(l).forEach(o=>{o.querySelectorAll("img").forEach(k=>{k.complete||k.addEventListener("load",()=>{fr(f),requestAnimationFrame(v)},{once:!0})})}),requestAnimationFrame(v))}et(()=>{if(!d(s))return;t.onRefresh?.(v),g();const o=new MutationObserver(()=>{g()});return o.observe(d(s),{childList:!0,subtree:!1}),z(n,new ResizeObserver(()=>{requestAnimationFrame(v)}),!0),d(n).observe(d(s)),window.addEventListener("resize",v),()=>{o.disconnect(),d(n)?.disconnect(),window.removeEventListener("resize",v)}}),he(()=>{d(f),requestAnimationFrame(v)});var p=Wr();let S,_;var y=T(p);X(y,()=>t.children??Q),x(p),vt(p,o=>z(s,o),()=>d(s)),G((o,m)=>{S=He(p,1,"masonry svelte-99y4nj",null,S,o),_=ht(p,"",_,m)},[()=>({"stretch-first":r()}),()=>({"--gap":a(),"--padding":i(),"--col-width":u()})]),C(e,p),q()}var Br=$('<iframe title="Smotrelka" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" allowfullscreen="" allow="autoplay *; fullscreen *; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>');function Hr(e,t){var r=Br();G(()=>H(r,"src",t.embedUrl)),C(e,r)}var Fr=$("<option> </option>"),qr=$("<optgroup></optgroup>"),Vr=$('<a target="_blank" rel="noopener noreferrer" class="inline-flex shrink-0 items-center gap-1 p-2 text-sm text-blue-400 hover:text-blue-300 transition-colors border border-zinc-900 rounded-md"><!> <span> </span></a>'),Yr=$('<div class="p-4 sm:p-0"><div class="flex gap-2 flex-wrap"><div class="relative inline-flex text-ellipsis not-sm:w-full"><select class="bg-zinc-900 text-ellipsis not-sm:w-full appearance-none rounded-md px-3 pr-10 py-2 min-w-0"></select> <span class="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none"><!></span></div> <!></div></div>');function Gr(e,t){F(t,!0);let r=K(t,"embedUrl",15),a=K(t,"priorityOrder",19,()=>["turbo","lumex","kodik"]);const i={kodik:{label:"Kodik",base:"https://kodik.cc/find-player?",param:(o,m)=>`${o}ID=${m}`},lumex:{label:"Lumex",base:"https://p.lumex.cloud/f8GoATHamU0d?",param:(o,m)=>o==="imdb"?`imdb_id=${m}`:`kp_id=${m}`},turbo:{label:"Turbo",base:"https://52dce3a2.obrut.show/embed/0MTM?",param:(o,m)=>o==="worldart"?`worldart_id=${m}`:o==="imdb"?`imdb_id=${m}`:`kinopoisk_id=${m}`},flixcdn:{label:"FlixCDN",base:"https://player0.flixcdn.space/show/",param:(o,m)=>`${o}/${m}`}},u={imdb:{label:"IMDB",link:o=>`https://www.imdb.com/title/${o}/`},kinopoisk:{label:"КиноПоиск",link:o=>`https://www.kinopoisk.ru/film/${o}/`},shikimori:{label:"Shikimori",link:o=>`https://shikimori.one/animes/${o}`},tmdb:{label:"TMDB",link:o=>`https://www.themoviedb.org/movie/${o}`},mydramalist:{label:"MyDramaList",link:o=>`https://mydramalist.com/${o}`},worldart:{label:"World-Art",link:o=>`http://www.world-art.ru/${t.category?.includes("anime")||Object.values(t.providerIds).some(k=>k.shikimori?.length)?"animation/animation.php":"cinema/cinema.php"}?id=${o}`}},s=le(()=>{const o=new Map;for(const[m,k]of Object.entries(t.providerIds)){const w=m.startsWith("lumex:")?"lumex":m,b=i[w];if(!b)continue;const E=a().indexOf(m),c=E===-1?`999_${w}`:`${E}_${w}`;for(const[h,N]of Object.entries(k))if(N?.length)for(const O of N){const M=typeof O=="object"?O.id:O,D=typeof O=="object"&&O.label?O.label:String(M),L=b.base+b.param(h,M);o.has(c)||o.set(c,[]),o.get(c).push({label:D,url:L,sourceKey:h,id:M})}}return Array.from(o.entries()).sort(([m],[k])=>m.localeCompare(k)).map(([m,k])=>{const w=m.split("_")[1];return{provider:i[w]?.label||w,items:k}})}),l=le(()=>d(s).flatMap(o=>o.items).find(o=>o.url===r()));he(()=>{!r()&&d(s)[0]?.items[0]&&r(d(s)[0].items[0].url)});var n=Yr(),f=T(n),v=T(f),g=T(v);Se(g,21,()=>d(s),$e,(o,m)=>{var k=qr();Se(k,21,()=>d(m).items,$e,(w,b)=>{var E=Fr(),c=T(E,!0);x(E);var h={};G(()=>{pe(c,d(b).label),h!==(h=d(b).url)&&(E.value=(E.__value=d(b).url)??"")}),C(w,E)}),x(k),G(()=>H(k,"label",d(m).provider)),C(o,k)}),x(g);var p=U(g,2),S=T(p);Cr(S,{size:16}),x(p),x(v);var _=U(v,2);{var y=o=>{const m=le(()=>u[d(l).sourceKey]?.link(d(l).id));var k=B(),w=j(k);{var b=E=>{var c=Vr(),h=T(c);Or(h,{size:16});var N=U(h,2),O=T(N,!0);x(N),x(c),G(()=>{H(c,"href",d(m)),pe(O,u[d(l).sourceKey].label)}),C(E,c)};W(w,E=>{d(m)&&E(b)})}C(o,k)};W(_,o=>{d(l)&&o(y)})}x(f),x(n),kr(g,r),C(e,n),q()}class Jr{baseUrl;apiKey;constructor(t,r){this.baseUrl=t.replace(/\/$/,""),this.apiKey=r}async searchTitles(t,r={}){const{limit:a=30,offset:i=0,providers:u=null,categories:s=null}=r,l=this.buildFilters(u,s),n=Math.min(a*5,1e3),f=await this.search(t,{limit:n,offset:0,sort:["year:desc"],filter:l.length?l.join(" AND "):void 0}),v=this.groupDuplicates(f.hits);return{hits:v.slice(i,i+a),hasMore:v.length>i+a,estimatedTotalHits:v.length}}async search(t,r={}){const a=`${this.baseUrl}/indexes/media/search`,i={"Content-Type":"application/json"};this.apiKey&&(i.Authorization=`Bearer ${this.apiKey}`);const u={q:t,...r};try{const s=await fetch(a,{method:"POST",headers:i,body:JSON.stringify(u)});if(!s.ok){const l=await s.json().catch(()=>({message:s.statusText}));throw new Error(`Meilisearch error: ${l.message||s.statusText}`)}return await s.json()}catch(s){throw console.error("Meilisearch search failed:",s),s}}buildFilters(t,r){const a=[];return t?.length&&a.push(`provider IN [${t.map(i=>`"${i}"`).join(",")}]`),r?.length&&a.push(`category IN [${r.map(i=>`"${i}"`).join(",")}]`),a}groupDuplicates(t){const r=new Map,a=n=>(r.get(n)!==n&&r.set(n,a(r.get(n))),r.get(n)),i=(n,f)=>r.set(a(n),a(f));t.forEach((n,f)=>r.set(f,f));const u={imdb:new Map,kinopoisk:new Map,shikimori:new Map,tmdb:new Map,mydramalist:new Map,worldart:new Map},s=(n,f,v)=>{if(!f)return;const g=String(f);u[n].has(g)||u[n].set(g,[]),u[n].get(g).push(v)};t.forEach((n,f)=>{s("imdb",n.imdb_id,f),s("kinopoisk",n.kinopoisk_id,f),s("tmdb",n.tmdb_id,f),s("mydramalist",n.mydramalist_id,f),s("shikimori",n.shikimori_id,f),s("worldart",n.worldart_id,f)}),Object.values(u).forEach(n=>n.forEach(f=>f.reduce((v,g)=>(i(v,g),v),f[0])));const l=new Map;return t.forEach((n,f)=>{const v=a(f);if(!l.has(v)){const o={kodik:{imdb:[],kinopoisk:[],shikimori:[],tmdb:[],mydramalist:[],worldart:[]},turbo:{imdb:[],kinopoisk:[],shikimori:[],tmdb:[],mydramalist:[],worldart:[]},flixcdn:{imdb:[],kinopoisk:[],shikimori:[],tmdb:[],mydramalist:[],worldart:[]},lumex:{imdb:[],kinopoisk:[],shikimori:[],tmdb:[],mydramalist:[],worldart:[]}};l.set(v,{hit:n,providers:o})}if(!n.provider)return;const g=l.get(v),p=this.normalizeProvider(n.provider);if(!p){console.warn("Unknown provider",n.provider,n);return}const S=g.providers[p],_=[n.provider_title,n.title_ru,n.title_en,n.original_title,n.alt_titles?.[0]].find(Boolean)||"-"+(n.year?` (${n.year})`:""),y=(o,m)=>{m&&(S[o].some(k=>k.id===m)||S[o].push({id:m,label:_}))};y("imdb",n.imdb_id),y("kinopoisk",n.kinopoisk_id),y("shikimori",n.shikimori_id),y("tmdb",n.tmdb_id),y("mydramalist",n.mydramalist_id),y("worldart",n.worldart_id)}),[...l.values()].map(({hit:n,providers:f})=>({...n,provider_ids:f}))}normalizeProvider(t){if(t){if(t.startsWith("lumex"))return"lumex";if(t.startsWith("kodik"))return"kodik";if(t.startsWith("turbo"))return"turbo";if(t.startsWith("flixcdn"))return"flixcdn"}}}var Qr=(e,t)=>{e.preventDefault(),z(t,"watch")},Xr=$('<button type="button" class="rounded-md cursor-pointer hover:bg-zinc-700 duration-75 active:scale-95 transition-transform bg-zinc-800 p-2"><!></button>'),Zr=$("<p>😔 Увы, по Вашему запросу ничего не найдено</p>"),ea=(e,t)=>{e.preventDefault(),z(t,"#popular")},ta=(e,t)=>{e.preventDefault(),z(t,"#hot")},ra=$('<div class="space-y-4"><div class="flex flex-wrap gap-2 text-xs"><button type="button" class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2">🏆 Популярное</button> <button type="button" class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2">🔥 Сейчас смотрят</button></div></div>'),aa=$('<header class="bg-zinc-900 flex items-center h-16 z-10 sticky top-0"><div class="max-w-5xl mx-auto w-full px-4 flex gap-2"><!> <div class="relative grow"><input name="search" type="search" autocomplete="off" autocorrect="off" autocapitalize="off" class="w-full min-w-0 rounded-md bg-zinc-800 px-3 py-2 text-sm outline-none text-ellipsis disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-violet-500 focus-visible:ring-violet-500/50 focus-visible:ring-3 [&amp;::-webkit-search-cancel-button]:appearance-none [&amp;::-webkit-search-decoration]:appearance-none [&amp;::-webkit-search-results-button]:appearance-none [&amp;::-webkit-search-results-decoration]:appearance-none peer ps-9 pe-9" placeholder="начните вводить название…"/> <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 opacity-70 peer-disabled:opacity-50"><!></div></div></div></header> <main><div><div class="max-w-5xl mx-auto w-full sm:p-4 space-y-4"><!> <div class="overflow-hidden rounded-lg" style="position: relative; width: 100%; padding-top: 57%; background: #000;"><!></div></div></div> <div><div class="max-w-5xl mx-auto w-full p-4"><!></div></div></main>',1);function ua(e,t){F(t,!0);let r=R("search"),a=R(""),i=R(void 0),u=R(!1),s=R(dt([])),l,n=R(null),f=R(null),v=R(null);he(()=>{clearTimeout(l);const A=d(a).trim();if(!A){z(s,[],!0),z(u,!1);return}l=setTimeout(()=>p(A),100)}),he(()=>{d(n)?.provider_ids&&z(f,Object.keys(d(n)?.provider_ids)[0],!0)}),he(()=>{d(n)&&localStorage.setItem("recent_title",JSON.stringify(d(n)))}),et(()=>{const A=localStorage.getItem("recent_title");if(A){const P=JSON.parse(A);z(n,P,!0),z(r,"watch")}});const g=new Jr(Nr,xr);async function p(A){if(!A.trim()){z(s,[],!0);return}const P=await g.searchTitles(A,{limit:20,offset:0});z(s,P.hits,!0)}function S(A){if((A.key==="k"||A.key==="/")&&(A.metaKey||A.ctrlKey)){A.preventDefault(),d(i)?.focus();return}document.activeElement!==d(i)&&(A.key.length>1||d(i)?.focus())}var _=aa();Ae("keydown",dr,S);var y=j(_),o=T(y),m=T(o);{var k=A=>{var P=Xr();P.__click=[Qr,r];var se=T(P);Ir(se,{size:20}),x(P),C(A,P)};W(m,A=>{d(r)!=="watch"&&d(n)&&A(k)})}var w=U(m,2),b=T(w);yt(b),vt(b,A=>z(i,A),()=>d(i));var E=U(b,2),c=T(E);{var h=A=>{Lr(A,{class:"animate-spin",size:16,"aria-hidden":"true",role:"presentation"})},N=A=>{Pr(A,{size:16,"aria-hidden":"true"})};W(c,A=>{d(u)?A(h):A(N,!1)})}x(E),x(w),x(o),x(y);var O=U(y,2),M=T(O),D=T(M),L=T(D);{var ae=A=>{Gr(A,{get providerIds(){return d(n).provider_ids},get category(){return d(n).category},get embedUrl(){return d(v)},set embedUrl(P){z(v,P,!0)}})};W(L,A=>{d(n)&&A(ae)})}var ie=U(L,2),Z=T(ie);Hr(Z,{get embedUrl(){return d(v)}}),x(ie),x(D),x(M);var ee=U(M,2),ye=T(ee),Ce=T(ye);{var Et=A=>{var P=B(),se=j(P);{var we=ne=>{Kr(ne,{children:(ke,Fe)=>{var Ee=B(),fe=j(Ee);Se(fe,17,()=>d(s),de=>de.id,(de,qe)=>{jr(de,{get item(){return d(qe)},onclick:St=>{St.preventDefault(),z(n,d(qe),!0),z(v,null),z(r,"watch")}})}),C(ke,Ee)},$$slots:{default:!0}})},Ie=ne=>{var ke=B(),Fe=j(ke);{var Ee=fe=>{var de=Zr();C(fe,de)};W(Fe,fe=>{d(u)||fe(Ee)},!0)}C(ne,ke)};W(se,ne=>{d(s).length?ne(we):ne(Ie,!1)})}C(A,P)},At=A=>{var P=ra(),se=T(P),we=T(se);we.__click=[ea,a];var Ie=U(we,2);Ie.__click=[ta,a],x(se),x(P),C(A,P)};W(Ce,A=>{d(a).trim().length?A(Et):A(At,!1)})}x(ye),x(ee),x(O),G(()=>{H(M,"hidden",d(r)!=="watch"),H(ee,"hidden",d(r)!=="search")}),Ae("focus",b,()=>z(r,"search")),Sr(b,()=>d(a),A=>z(a,A)),C(e,_),q()}We(["click"]);export{ua as component};
