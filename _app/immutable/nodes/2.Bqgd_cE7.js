import"../chunks/DsnmJJEf.js";import{A as E,Q as Ce,z as he,Y as g,ag as mr,a6 as gr,a7 as wr,a8 as Pe,F as re,E as Z,G as K,C as yr,aP as kr,N as fe,P as xr,J as ee,aN as Ye,i as Ze,y as Le,aR as Ar,at as He,av as Ue,K as qe,M as Er,aV as be,aW as Ae,L as ue,aX as _e,aY as Nr,D as Tr,aZ as Sr,aM as Mr,a_ as Ir,ak as Ge,I as Je,a$ as Qe,ab as Xe,b0 as Cr,b1 as $r,U as zr,b2 as Lr,S as Or,T as er,a9 as rr,b3 as Dr,b4 as Rr,b5 as Pr,b6 as Hr,b7 as Ur,b8 as Kr,b9 as Vr,ba as jr,bb as Wr,bc as Br,bd as Fr,be as Yr,t as Zr,e as qr,aa as Gr,bf as Jr,a0 as de,bg as Qr,a3 as I,a5 as U,x as me,a4 as S,p as L,a2 as ve,r as ae,v as te,aT as Xr,bh as ea,aS as X,ah as ra,u as aa,ai as D,o as j,a1 as pe,bi as ta}from"../chunks/BKz6_MF8.js";import{i as sa,a as ia,c as la,d as ar,n as oa,b as na,e as Ke,s as Ee}from"../chunks/Bvle-UgS.js";import{p as oe,r as ge,s as Oe,i as Y,b as ca}from"../chunks/DmZU1Ngl.js";import{B as fa,s as we}from"../chunks/DFC-AMyi.js";function ua(e,r){return r}function da(e,r,a){for(var t=e.items,s=[],l=r.length,i=0;i<l;i++)Sr(r[i].e,s,!0);var o=l>0&&s.length===0&&a!==null;if(o){var u=a.parentNode;Mr(u),u.append(a),t.clear(),H(e,r[0].prev,r[l-1].next)}Ir(s,()=>{for(var d=0;d<l;d++){var h=r[d];o||(t.delete(h.k),H(e,h.prev,h.next)),ue(h.e,!o)}})}function tr(e,r,a,t,s,l=null){var i=e,o={flags:r,items:new Map,first:null},u=(r&Qe)!==0;if(u){var d=e;i=E?re(Je(d)):d.appendChild(Le())}E&&Ce();var h=null,m=!1,f=new Map,y=mr(()=>{var x=a();return Ze(x)?x:x==null?[]:Ye(x)}),v,_;function p(){va(_,v,o,f,i,s,r,t,a),l!==null&&(v.length===0?h?qe(h):h=fe(()=>l(i)):h!==null&&Er(h,()=>{h=null}))}he(()=>{_??=Ge,v=g(y);var x=v.length;if(m&&x===0)return;m=x===0;let A=!1;if(E){var C=gr(i)===wr;C!==(x===0)&&(i=Pe(),re(i),Z(!1),A=!0)}if(E){for(var k=null,T,n=0;n<x;n++){if(K.nodeType===yr&&K.data===kr){i=K,A=!0,Z(!1);break}var c=v[n],w=t(c,n);T=$e(K,o,k,null,c,w,n,s,r,a),o.items.set(w,T),k=T}x>0&&re(Pe())}if(E)x===0&&l&&(h=fe(()=>l(i)));else if(xr()){var $=new Set,N=ee;for(n=0;n<x;n+=1){c=v[n],w=t(c,n);var R=o.items.get(w)??f.get(w);R?(r&(_e|be))!==0&&sr(R,c,n,r):(T=$e(null,o,null,null,c,w,n,s,r,a,!0),f.set(w,T)),$.add(w)}for(const[O,q]of o.items)$.has(O)||N.skipped_effects.add(q.e);N.add_callback(p)}else p();A&&Z(!0),g(y)}),E&&(i=K)}function va(e,r,a,t,s,l,i,o,u){var d=(i&Cr)!==0,h=(i&(_e|be))!==0,m=r.length,f=a.items,y=a.first,v=y,_,p=null,x,A=[],C=[],k,T,n,c;if(d)for(c=0;c<m;c+=1)k=r[c],T=o(k,c),n=f.get(T),n!==void 0&&(n.a?.measure(),(x??=new Set).add(n));for(c=0;c<m;c+=1){if(k=r[c],T=o(k,c),n=f.get(T),n===void 0){var w=t.get(T);if(w!==void 0){t.delete(T),f.set(T,w);var $=p?p.next:v;H(a,p,w),H(a,w,$),Ne(w,$,s),p=w}else{var N=v?v.e.nodes_start:s;p=$e(N,a,p,p===null?a.first:p.next,k,T,c,l,i,u)}f.set(T,p),A=[],C=[],v=p.next;continue}if(h&&sr(n,k,c,i),(n.e.f&Ae)!==0&&(qe(n.e),d&&(n.a?.unfix(),(x??=new Set).delete(n))),n!==v){if(_!==void 0&&_.has(n)){if(A.length<C.length){var R=C[0],O;p=R.prev;var q=A[0],b=A[A.length-1];for(O=0;O<A.length;O+=1)Ne(A[O],R,s);for(O=0;O<C.length;O+=1)_.delete(C[O]);H(a,q.prev,b.next),H(a,p,q),H(a,b,R),v=R,p=b,c-=1,A=[],C=[]}else _.delete(n),Ne(n,v,s),H(a,n.prev,n.next),H(a,n,p===null?a.first:p.next),H(a,p,n),p=n;continue}for(A=[],C=[];v!==null&&v.k!==T;)(v.e.f&Ae)===0&&(_??=new Set).add(v),C.push(v),v=v.next;if(v===null)continue;n=v}A.push(n),p=n,v=n.next}if(v!==null||_!==void 0){for(var M=_===void 0?[]:Ye(_);v!==null;)(v.e.f&Ae)===0&&M.push(v),v=v.next;var P=M.length;if(P>0){var G=(i&Qe)!==0&&m===0?s:null;if(d){for(c=0;c<P;c+=1)M[c].a?.measure();for(c=0;c<P;c+=1)M[c].a?.fix()}da(a,M,G)}}d&&Xe(()=>{if(x!==void 0)for(n of x)n.a?.apply()}),e.first=a.first&&a.first.e,e.last=p&&p.e;for(var se of t.values())ue(se.e);t.clear()}function sr(e,r,a,t){(t&_e)!==0&&Ue(e.v,r),(t&be)!==0?Ue(e.i,a):e.i=a}function $e(e,r,a,t,s,l,i,o,u,d,h){var m=(u&_e)!==0,f=(u&Nr)===0,y=m?f?Ar(s,!1,!1):He(s):s,v=(u&be)===0?i:He(i),_={i:v,v:y,k:l,a:null,e:null,prev:a,next:t};try{if(e===null){var p=document.createDocumentFragment();p.append(e=Le())}return _.e=fe(()=>o(e,y,v,d),E),_.e.prev=a&&a.e,_.e.next=t&&t.e,a===null?h||(r.first=_):(a.next=_,a.e.next=_.e),t!==null&&(t.prev=_,t.e.prev=_.e),_}finally{}}function Ne(e,r,a){for(var t=e.next?e.next.e.nodes_start:a,s=r?r.e.nodes_start:a,l=e.e.nodes_start;l!==null&&l!==t;){var i=Tr(l);s.before(l),l=i}}function H(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function pa(e,r,a,t,s,l){let i=E;E&&Ce();var o=null;E&&K.nodeType===$r&&(o=K,Ce());var u=E?K:e,d=new fa(u,!1);he(()=>{const h=r()||null;var m=Lr;if(h===null){d.ensure(null,null);return}return d.ensure(h,f=>{if(h){if(o=E?o:document.createElementNS(m,h),Or(o,o),t){E&&sa(h)&&o.append(document.createComment(""));var y=E?Je(o):o.appendChild(Le());E&&(y===null?Z(!1):re(y)),t(o,y)}Ge.nodes_end=o,f.before(o)}E&&re(f)}),()=>{}},zr),er(()=>{}),i&&(Z(!0),re(u))}function ha(e,r){var a=void 0,t;he(()=>{a!==(a=r())&&(t&&(ue(t),t=null),a&&(t=fe(()=>{rr(()=>a(e))})))})}function ir(e){var r,a,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(a=ir(e[r]))&&(t&&(t+=" "),t+=a)}else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}function ba(){for(var e,r,a=0,t="",s=arguments.length;a<s;a++)(e=arguments[a])&&(r=ir(e))&&(t&&(t+=" "),t+=r);return t}function _a(e){return typeof e=="object"?ba(e):e??""}const Ve=[...` 	
\r\f \v\uFEFF`];function ma(e,r,a){var t=e==null?"":""+e;if(a){for(var s in a)if(a[s])t=t?t+" "+s:s;else if(t.length)for(var l=s.length,i=0;(i=t.indexOf(s,i))>=0;){var o=i+l;(i===0||Ve.includes(t[i-1]))&&(o===t.length||Ve.includes(t[o]))?t=(i===0?"":t.substring(0,i))+t.substring(o+1):i=o}}return t===""?null:t}function je(e,r=!1){var a=r?" !important;":";",t="";for(var s in e){var l=e[s];l!=null&&l!==""&&(t+=" "+s+": "+l+a)}return t}function Te(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ga(e,r){if(r){var a="",t,s;if(Array.isArray(r)?(t=r[0],s=r[1]):t=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,i=0,o=!1,u=[];t&&u.push(...Object.keys(t).map(Te)),s&&u.push(...Object.keys(s).map(Te));var d=0,h=-1;const _=e.length;for(var m=0;m<_;m++){var f=e[m];if(o?f==="/"&&e[m-1]==="*"&&(o=!1):l?l===f&&(l=!1):f==="/"&&e[m+1]==="*"?o=!0:f==='"'||f==="'"?l=f:f==="("?i++:f===")"&&i--,!o&&l===!1&&i===0){if(f===":"&&h===-1)h=m;else if(f===";"||m===_-1){if(h!==-1){var y=Te(e.substring(d,h).trim());if(!u.includes(y)){f!==";"&&m++;var v=e.substring(d,m).trim();a+=" "+v+";"}}d=m+1,h=-1}}}}return t&&(a+=je(t)),s&&(a+=je(s,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function wa(e,r,a,t,s,l){var i=e.__className;if(E||i!==a||i===void 0){var o=ma(a,t,l);(!E||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):r?e.className=o:e.setAttribute("class",o)),e.__className=a}else if(l&&s!==l)for(var u in l){var d=!!l[u];(s==null||d!==!!s[u])&&e.classList.toggle(u,d)}return l}function Se(e,r={},a,t){for(var s in a){var l=a[s];r[s]!==l&&(a[s]==null?e.style.removeProperty(s):e.style.setProperty(s,l,t))}}function ya(e,r,a,t){var s=e.__style;if(E||s!==r){var l=ga(r,t);(!E||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=r}else t&&(Array.isArray(t)?(Se(e,a?.[0],t[0]),Se(e,a?.[1],t[1],"important")):Se(e,a,t));return t}function ze(e,r,a=!1){if(e.multiple){if(r==null)return;if(!Ze(r))return Dr();for(var t of e.options)t.selected=r.includes(We(t));return}for(t of e.options){var s=We(t);if(Rr(s,r)){t.selected=!0;return}}(!a||r!==void 0)&&(e.selectedIndex=-1)}function ka(e){var r=new MutationObserver(()=>{ze(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),er(()=>{r.disconnect()})}function We(e){return"__value"in e?e.__value:e.value}const ne=Symbol("class"),ce=Symbol("style"),lr=Symbol("is custom element"),or=Symbol("is html");function nr(e){if(E){var r=!1,a=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var t=e.value;V(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var s=e.checked;V(e,"checked",null),e.checked=s}}};e.__on_r=a,Xe(a),Pr()}}function xa(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function V(e,r,a,t){var s=cr(e);E&&(s[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||s[r]!==(s[r]=a)&&(r==="loading"&&(e[Kr]=a),a==null?e.removeAttribute(r):typeof a!="string"&&fr(e).includes(r)?e[r]=a:e.setAttribute(r,a))}function Aa(e,r,a,t,s=!1,l=!1){if(E&&s&&e.tagName==="INPUT"){var i=e,o=i.type==="checkbox"?"defaultChecked":"defaultValue";o in a||nr(i)}var u=cr(e),d=u[lr],h=!u[or];let m=E&&d;m&&Z(!1);var f=r||{},y=e.tagName==="OPTION";for(var v in r)v in a||(a[v]=null);a.class?a.class=_a(a.class):a[ne]&&(a.class=null),a[ce]&&(a.style??=null);var _=fr(e);for(const n in a){let c=a[n];if(y&&n==="value"&&c==null){e.value=e.__value="",f[n]=c;continue}if(n==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";wa(e,p,c,t,r?.[ne],a[ne]),f[n]=c,f[ne]=a[ne];continue}if(n==="style"){ya(e,c,r?.[ce],a[ce]),f[n]=c,f[ce]=a[ce];continue}var x=f[n];if(!(c===x&&!(c===void 0&&e.hasAttribute(n)))){f[n]=c;var A=n[0]+n[1];if(A!=="$$")if(A==="on"){const w={},$="$$"+n;let N=n.slice(2);var C=na(N);if(ia(N)&&(N=N.slice(0,-7),w.capture=!0),!C&&x){if(c!=null)continue;e.removeEventListener(N,f[$],w),f[$]=null}if(c!=null)if(C)e[`__${N}`]=c,ar([N]);else{let R=function(O){f[n].call(this,O)};f[$]=la(N,e,R,w)}else C&&(e[`__${N}`]=void 0)}else if(n==="style")V(e,n,c);else if(n==="autofocus")Br(e,!!c);else if(!d&&(n==="__value"||n==="value"&&c!=null))e.value=e.__value=c;else if(n==="selected"&&y)xa(e,c);else{var k=n;h||(k=oa(k));var T=k==="defaultValue"||k==="defaultChecked";if(c==null&&!d&&!T)if(u[n]=null,k==="value"||k==="checked"){let w=e;const $=r===void 0;if(k==="value"){let N=w.defaultValue;w.removeAttribute(k),w.defaultValue=N,w.value=w.__value=$?N:null}else{let N=w.defaultChecked;w.removeAttribute(k),w.defaultChecked=N,w.checked=$?N:!1}}else e.removeAttribute(n);else T||_.includes(k)&&(d||typeof c!="string")?(e[k]=c,k in u&&(u[k]=Fr)):typeof c!="function"&&V(e,k,c)}}}return m&&Z(!0),f}function Be(e,r,a=[],t=[],s,l=!1,i=!1){jr(a,t,o=>{var u=void 0,d={},h=e.nodeName==="SELECT",m=!1;if(he(()=>{var y=r(...o.map(g)),v=Aa(e,u,y,s,l,i);m&&h&&"value"in y&&ze(e,y.value);for(let p of Object.getOwnPropertySymbols(d))y[p]||ue(d[p]);for(let p of Object.getOwnPropertySymbols(y)){var _=y[p];p.description===Wr&&(!u||_!==u[p])&&(d[p]&&ue(d[p]),d[p]=fe(()=>ha(e,()=>_))),v[p]=_}u=v}),h){var f=e;rr(()=>{ze(f,u.value,!0),ka(f)})}m=!0})}function cr(e){return e.__attributes??={[lr]:e.nodeName.includes("-"),[or]:e.namespaceURI===Hr}}var Fe=new Map;function fr(e){var r=e.getAttribute("is")||e.nodeName,a=Fe.get(r);if(a)return a;Fe.set(r,a=[]);for(var t,s=e,l=Element.prototype;l!==s;){t=Vr(s);for(var i in t)t[i].set&&a.push(i);s=Ur(s)}return a}function Ea(e,r,a=r){var t=new WeakSet;Yr(e,"input",async s=>{var l=s?e.defaultValue:e.value;if(l=Me(e)?Ie(l):l,a(l),ee!==null&&t.add(ee),await Zr(),l!==(l=r())){var i=e.selectionStart,o=e.selectionEnd,u=e.value.length;if(e.value=l??"",o!==null){var d=e.value.length;i===o&&o===u&&d>u?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=i,e.selectionEnd=Math.min(o,d))}}}),(E&&e.defaultValue!==e.value||qr(r)==null&&e.value)&&(a(Me(e)?Ie(e.value):e.value),ee!==null&&t.add(ee)),Gr(()=>{var s=r();if(e===document.activeElement){var l=Jr??ee;if(t.has(l))return}Me(e)&&s===Ie(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Me(e){var r=e.type;return r==="number"||r==="range"}function Ie(e){return e===""?null:+e}class Na{baseUrl;apiKey;constructor(r,a){this.baseUrl=r.replace(/\/$/,""),this.apiKey=a}async searchTitles(r,a={}){const{limit:t=30,offset:s=0,providers:l=null,categories:i=null}=a,o=this.buildFilters(l,i),u=Math.min(t*5,1e3),d=await this.search(r,{limit:u,offset:0,filter:o.length?o.join(" AND "):void 0}),h=this.deduplicateResults(d.hits);return{hits:h.slice(s,s+t),nextCursor:null,hasMore:h.length>s+t,estimatedTotalHits:h.length}}async search(r,a={}){const t=`${this.baseUrl}/indexes/titles/search`,s={"Content-Type":"application/json"};this.apiKey&&(s.Authorization=`Bearer ${this.apiKey}`);const l={q:r,...a};try{const i=await fetch(t,{method:"POST",headers:s,body:JSON.stringify(l)});if(!i.ok){const o=await i.json().catch(()=>({message:i.statusText}));throw new Error(`Meilisearch error: ${o.message||i.statusText}`)}return await i.json()}catch(i){throw console.error("Meilisearch search failed:",i),i}}buildFilters(r,a){const t=[];return r?.length&&t.push(`provider IN [${r.map(s=>`"${s}"`).join(",")}]`),a?.length&&t.push(`category IN [${a.map(s=>`"${s}"`).join(",")}]`),t}getExternalId(r){return r.imdb_id?`imdb:${r.imdb_id}`:r.kinopoisk_id?`kp:${r.kinopoisk_id}`:r.mydramalist_id?`mdl:${r.mydramalist_id}`:r.shikimori_id?`shiki:${r.shikimori_id}`:r.tmdb_id?`tmdb:${r.tmdb_id}`:r.worldart_id?`wa:${r.worldart_id}`:`${r.provider}:${r.provider_id}`}deduplicateResults(r){const a=new Map;for(const t of r){const s=this.getExternalId(t);a.has(s)||a.set(s,t)}return Array.from(a.values())}}/**
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
 */const Ta={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Sa=Qr("<svg><!><!></svg>");function De(e,r){de(r,!0);const a=oe(r,"color",3,"currentColor"),t=oe(r,"size",3,24),s=oe(r,"strokeWidth",3,2),l=oe(r,"absoluteStrokeWidth",3,!1),i=oe(r,"iconNode",19,()=>[]),o=ge(r,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Sa();Be(u,m=>({...Ta,...o,width:t(),height:t(),stroke:a(),"stroke-width":m,class:["lucide-icon lucide",r.name&&`lucide-${r.name}`,r.class]}),[()=>l()?Number(s())*24/Number(t()):s()]);var d=I(u);tr(d,17,i,ua,(m,f)=>{var y=Xr(()=>ea(g(f),2));let v=()=>g(y)[0],_=()=>g(y)[1];var p=ae(),x=te(p);pa(x,v,!0,(A,C)=>{Be(A,()=>({..._()}))}),L(m,p)});var h=U(d);we(h,()=>r.children??me),S(u),L(e,u),ve()}function Ma(e,r){de(r,!0);/**
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
 */let a=ge(r,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m15 18-6-6 6-6"}]];De(e,Oe({name:"chevron-left"},()=>a,{get iconNode(){return t},children:(s,l)=>{var i=ae(),o=te(i);we(o,()=>r.children??me),L(s,i)},$$slots:{default:!0}})),ve()}function Ia(e,r){de(r,!0);/**
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
 */let a=ge(r,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];De(e,Oe({name:"loader"},()=>a,{get iconNode(){return t},children:(s,l)=>{var i=ae(),o=te(i);we(o,()=>r.children??me),L(s,i)},$$slots:{default:!0}})),ve()}function Ca(e,r){de(r,!0);/**
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
 */let a=ge(r,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];De(e,Oe({name:"search"},()=>a,{get iconNode(){return t},children:(s,l)=>{var i=ae(),o=te(i);we(o,()=>r.children??me),L(s,i)},$$slots:{default:!0}})),ve()}var $a=(e,r)=>{e.preventDefault(),D(r,"watch")},za=j('<button type="button" class="rounded-md cursor-pointer hover:bg-zinc-700 duration-75 active:scale-95 transition-transform bg-zinc-800 p-2"><!></button>'),La=(e,r,a,t)=>{e.preventDefault(),D(r,g(a),!0),D(t,"watch")},Oa=j('<img class="rounded-sm w-full"/>'),Da=j('<span class="rounded-full px-2 py-1 bg-zinc-900 dark:bg-zinc-900"> </span>'),Ra=j('<li><button type="button" class="group text-left cursor-pointer outline-none"><span class="block"><!></span> <span class="font-medium line-clamp-2 mt-2 group-hover:text-violet-500"> </span> <span class="flex gap-2 mt-1 flex-wrap text-xs"><span class="rounded-full px-2 py-1 bg-zinc-900 dark:bg-zinc-900"> </span> <!></span></button></li>'),Pa=j('<ul class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(90px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] text-xs sm:text-sm lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]"></ul>'),Ha=j("<p>😔 Увы, по Вашему запросу ничего не найдено</p>"),Ua=(e,r)=>{e.preventDefault(),D(r,"#popular")},Ka=(e,r)=>{e.preventDefault(),D(r,"#hot")},Va=j('<div class="space-y-4"><div class="flex flex-wrap gap-2 text-xs"><button type="button" class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2">🏆 Популярное</button> <button type="button" class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2">🔥 Сейчас смотрят</button></div></div>'),ja=j(`<div class="w-full"><header class="bg-zinc-900 flex items-center h-16 z-10 sticky top-0"><div class="max-w-5xl mx-auto w-full px-4 flex gap-2"><!> <div class="relative grow"><input name="search" type="search" autocomplete="off" autocorrect="off" autocapitalize="off" class="w-full min-w-0 rounded-md bg-zinc-800 px-3 py-2 text-sm outline-none text-ellipsis disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-violet-500 focus-visible:ring-violet-500/50 focus-visible:ring-3 [&amp;::-webkit-search-cancel-button]:appearance-none [&amp;::-webkit-search-decoration]:appearance-none [&amp;::-webkit-search-results-button]:appearance-none [&amp;::-webkit-search-results-decoration]:appearance-none peer ps-9 pe-9" placeholder="начните вводить название…"/> <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 opacity-70 peer-disabled:opacity-50"><!></div></div></div></header> <main><div><div class="relative pt-[56.25%] w-full overflow-hidden"><span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.76 0a3.6 3.6 0 0 1 3.38 2.3 2.86 2.86 0 0 1 1.74 5.4l.01.14a2.86 2.86 0 0 1-3.82 2.69 2.84 2.84 0 0 1-4.78-2.1c0-.91.42-1.71 1.07-2.24a3.5 3.5 0 0 1-1.22-2.65A3.58 3.58 0 0 1 5.76 0ZM8.4 11.75a2.91 2.91 0 0 1 2.82 3.66 2.89 2.89 0 0 1-2.15 5.34 3.54 3.54 0 1 1-5.55-3.2 2.98 2.98 0 0 1 1.8-5.4c.44 0 .85.09 1.22.25.5-.4 1.15-.65 1.86-.65Zm7.01-6.11a2.39 2.39 0 0 1 2.42 2.35c0 .24-.04.47-.1.68a3.8 3.8 0 0 1 1.62-.36 3.62 3.62 0 0 1 3.69 3.55 3.62 3.62 0 0 1-4.36 3.48l.02.31c0 1.7-1.25 3.07-2.78 3.07-1.54 0-2.79-1.37-2.79-3.07 0-.77.26-1.47.68-2l-.32.01A2.71 2.71 0 0 1 10.75 11a2.7 2.7 0 0 1 2.27-2.63 2.39 2.39 0 0 1 2.39-2.72Zm.28 6.95h.05l-.01-.05-.04.05Z" fill="currentColor"></path></svg></span></div> <div class="w-full max-w-5xl overflow-x-hidden overflow-y-auto max-h-full mx-auto flex gap-4 flex-wrap sm:flex-nowrap items-start"><div class="bg-background overflow-hidden rounded-md border"><div class="relative w-full overflow-auto"><table class="w-full text-xs sm:text-sm"><tbody class="[&amp;_tr:last-child]:border-0"><tr class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&amp;>:not(:last-child)]:border-r"><td colspan="2"><div style="position: relative; width: 100%; padding-top: 56.25%; background: #000;"><iframe title="title" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" width="100%" height="100%" src="https://52dce3a2.obrut.show/embed/0MTM/content/wUDM5ATM" frameborder="0" allow="*" allowfullscreen=""></iframe></div></td></tr><tr class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&amp;>:not(:last-child)]:border-r"><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium">Доступные источники</td><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 py-2"></td></tr><tr class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&amp;>:not(:last-child)]:border-r"><td colspan="2" class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 py-2"><div class="max-w-16 shrink-0 w-full"><div class="relative pt-[150%] w-full"><a class="absolute inset-0 z-10" href="https://kinopoiskapiunofficial.tech/images/posters/kp/4365427.jpg?q_auto,f_auto,w_auto,dpr_auto" aria-label="Title" target="_blank" rel="nofollow noopener noreferer"></a> <img class="absolute rounded-sm inset-0" src="https://kinopoiskapiunofficial.tech/images/posters/kp/4365427.jpg?q_auto,f_auto,w_auto,dpr_auto" alt=""/></div></div></td></tr><tr class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&amp;>:not(:last-child)]:border-r"><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium">Оригинальное название</td><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 py-2">Wednesday</td></tr><tr class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&amp;>:not(:last-child)]:border-r"><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium">Русское название</td><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 py-2">Уэнздэй</td></tr><tr class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&amp;>:not(:last-child)]:border-r"><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium">Год</td><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 py-2">2022</td></tr><tr class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&amp;>:not(:last-child)]:border-r"><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium">Описание</td><td class="p-3 align-top [&amp;:has([role=checkbox])]:pr-0 py-2">Для выполнения новой миссии секретный агент должен завести поддельную семью. Но
										он и не подозревает, что его фиктивная жена — наёмная убийца, а удочеренная
										маленькая девочка — телепат, которая хочет, чтобы приёмные родители, несмотря ни
										на что, действительно были вместе.</td></tr></tbody></table></div></div></div></div> <div><div class="max-w-5xl mx-auto w-full p-4"><!></div></div></main></div>`);function qa(e,r){de(r,!0);let a=X("search"),t=X(""),s=X(void 0),l=X(!1),i=X(ra([])),o,u=X(null);aa(()=>{clearTimeout(o);const b=g(t).trim();if(!b){D(i,[],!0),D(l,!1);return}o=setTimeout(()=>h(b),100)});const d=new Na("http://127.0.0.1:7700");async function h(b){if(!b.trim()){D(i,[],!0);return}const M=await d.searchTitles(b,{limit:20,offset:0});D(i,M.hits,!0)}function m(b){if(document.activeElement!==g(s)){if(b.key==="k"&&(b.metaKey||b.ctrlKey)||b.key==="/"){b.preventDefault(),g(s)?.focus();return}b.key.length>1||g(s)?.focus()}}var f=ja();Ke("keydown",ta,m);var y=I(f),v=I(y),_=I(v);{var p=b=>{var M=za();M.__click=[$a,a];var P=I(M);Ma(P,{size:20}),S(M),L(b,M)};Y(_,b=>{g(a)!=="watch"&&g(u)&&b(p)})}var x=U(_,2),A=I(x);nr(A),ca(A,b=>D(s,b),()=>g(s));var C=U(A,2),k=I(C);{var T=b=>{Ia(b,{class:"animate-spin",size:16,"aria-hidden":"true",role:"presentation"})},n=b=>{Ca(b,{size:16,"aria-hidden":"true"})};Y(k,b=>{g(l)?b(T):b(n,!1)})}S(C),S(x),S(v),S(y);var c=U(y,2),w=I(c),$=U(w,2),N=I($),R=I(N);{var O=b=>{var M=ae(),P=te(M);{var G=J=>{var Q=Pa();tr(Q,21,()=>g(i),ie=>ie.id,(ie,z)=>{var W=Ra(),le=I(W);le.__click=[La,u,z,a];var ye=I(le),ur=I(ye);{var dr=B=>{var F=Oa();pe(()=>{V(F,"src",g(z).cover),V(F,"alt",g(z).name_ru||g(z).name_en||g(z).original_name)}),L(B,F)};Y(ur,B=>{g(z).cover&&B(dr)})}S(ye);var ke=U(ye,2),vr=I(ke,!0);S(ke);var Re=U(ke,2),xe=I(Re),pr=I(xe,!0);S(xe);var hr=U(xe,2);{var br=B=>{var F=Da(),_r=I(F,!0);S(F),pe(()=>Ee(_r,g(z).category)),L(B,F)};Y(hr,B=>{g(z).category&&B(br)})}S(Re),S(le),S(W),pe(()=>{Ee(vr,g(z).name_ru||g(z).name_en||g(z).original_name||g(z).alt_names?.[0]),Ee(pr,g(z).year)}),L(ie,W)}),S(Q),L(J,Q)},se=J=>{var Q=ae(),ie=te(Q);{var z=W=>{var le=Ha();L(W,le)};Y(ie,W=>{g(l)||W(z)},!0)}L(J,Q)};Y(P,J=>{g(i).length?J(G):J(se,!1)})}L(b,M)},q=b=>{var M=Va(),P=I(M),G=I(P);G.__click=[Ua,t];var se=U(G,2);se.__click=[Ka,t],S(P),S(M),L(b,M)};Y(R,b=>{g(t).trim().length?b(O):b(q,!1)})}S(N),S($),S(c),S(f),pe(()=>{V(w,"hidden",g(a)!=="watch"),V($,"hidden",g(a)!=="search")}),Ke("focus",A,()=>D(a,"search")),Ea(A,()=>g(t),b=>D(t,b)),L(e,f),ve()}ar(["click"]);export{qa as component};
