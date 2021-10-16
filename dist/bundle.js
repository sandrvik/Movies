(()=>{"use strict";const e=document.getElementById("popup"),t=document.getElementById("popup__image"),n=document.getElementById("popup__title"),a=document.getElementById("popup__lang"),o=document.getElementById("popup__year"),s=document.getElementById("popup__description"),i=document.getElementById("popup__genres"),l=document.getElementById("overlay");function c(){e.classList.toggle("active"),l.classList.toggle("active"),document.body.classList.toggle("lock")}function d(e){!function(e){const l=e.parentNode;t.innerHTML=`<img src=${l.info.image?.medium||l.info.image?.original||"./assets/images/noImageAvailable.jpg"}>`,n.innerText=l.info.name,a.innerText=l.info.language,o.innerText=l.info.premiered?.slice(0,4)||"Sometime",s.innerHTML=l.info.summary||"No description available.",i.innerHTML="",l.info.genres.forEach((e=>{const t=document.createElement("li");t.innerText=e,i.append(t)}))}(e.target),c()}e.addEventListener("click",(function(e){e.target.closest(".popup__container")&&!e.target.classList.contains("popup__close")||c()}));const r=document.getElementById("movies");function m(e){if(movies.innerHTML="",0===e.length||0===e.size){const e=document.createElement("h2");e.innerText="Films not found",movies.append(e)}else e.forEach((e=>function(e){const t=document.createElement("li");t.setAttribute("class","card"),t.setAttribute("data-id",e.id),t.info=e;const n=document.createElement("img");n.setAttribute("class","card__img"),n.style.width="200px",n.style.height="280px",n.src=e.image?.medium||"./assets/images/noImageAvailable.jpg",n.addEventListener("click",d);const a=document.createElement("img");a.setAttribute("class","card__heart"),E.has(`${e.id}`)?a.src="./assets/icomoon/SVG/heart.svg":a.src="./assets/icomoon/SVG/heart-outlined.svg",t.append(n),t.append(a),r.appendChild(t)}(e)))}const u=document.getElementById("header"),g=document.getElementById("main"),p=document.getElementById("pagination"),y=document.getElementById("search"),h=document.getElementById("favouritesHeader");let E;E=localStorage.getItem("favs")?new Map(JSON.parse(localStorage.getItem("favs"))):new Map;const f=function(e,t,n){return function(e){if(e.target.classList.contains("card__heart")){const a=e.target.parentNode.dataset.id,o=e.target.parentNode.info;t.has(a)?(t.delete(a),v(t,n),e.target.src="./assets/icomoon/SVG/heart-outlined.svg"):(t.set(a,o),e.target.src="./assets/icomoon/SVG/heart.svg",v(t,n))}}}(0,E,"favs");function v(e,t){localStorage.setItem(t,JSON.stringify([...e]))}document.addEventListener("click",f);const _="https://api.tvmaze.com/";async function B(e,t){try{const n=await fetch(e);return((e,t)=>e.map((e=>((e,...t)=>Object.fromEntries(t.filter((t=>t in e)).map((t=>[t,e[t]]))))(e.show||e._embedded?.show||e,...t))))((await n.json()).slice(0,t),["language","genres","name","image","summary","premiered","id"])}catch(e){console.log("Error:",e)}}const I=document.getElementById("lang"),L=document.getElementById("genre");function b(e){const t={language:I.value,genres:L.value},n=Object.keys(t);return e.filter((e=>n.every((n=>!t[n]||t[n]===e[n]||e[n].includes(t[n])))))}const k=document.getElementById("currentPage"),x=document.getElementById("lastPage"),w=document.getElementById("prev"),T=document.getElementById("next"),N=document.getElementById("paginationDropDown"),S=document.getElementById("expandDropDown");let F=1;document.body.addEventListener("click",(()=>{N.classList.contains("pagination__full--hidden")||N.classList.toggle("pagination__full--hidden")})),k.innerText=F,x.innerText=10,x.addEventListener("click",(()=>{F=10,k.innerText=F,G()})),w.addEventListener("click",(()=>{1!==F&&(F-=1,k.innerText=F,G())})),T.addEventListener("click",(()=>{10!==F&&(F+=1,k.innerText=F,G())})),function(e){for(let e=1;e<=10;e++){const t=document.createElement("li");t.classList.add("pagination__page"),t.innerText=e,t.addEventListener("click",(e=>{F=+e.target.innerText,k.innerText=F,G(),N.classList.toggle("pagination__full--hidden")})),N.append(t)}S.addEventListener("click",(e=>{e.stopPropagation(),N.classList.toggle("pagination__full--hidden")}))}();const $=document.getElementById("header"),H=document.getElementById("main"),j=document.getElementById("pagination"),A=document.getElementById("loginForm"),C=document.getElementById("perPage"),D=document.getElementById("search"),M=document.getElementById("favouritesHeader");let O,P;async function G(){location.hash="#/",$.style.display="block",H.style.display="block",A.style.display="none",O=await B(`${_}shows?page=${F-1}`,50),P=b(O),m(P.slice(0,C.value)),j.style.display="block",C.style.display="inline",D.style.display="flex",M.style.display="none";const e=document.getElementsByClassName("filters__select");for(let t of e)t.disabled=!1;I.addEventListener("change",(()=>{P=b(O),m(P.slice(0,C.value))})),L.addEventListener("change",(()=>{P=b(O),m(P.slice(0,C.value))}))}C.addEventListener("change",(()=>{m(P.slice(0,C.value))}));const V=document.getElementById("loginForm"),z=document.getElementById("name"),J=document.getElementById("pass"),q=document.getElementById("loginBtn"),R=document.getElementById("logoutBtn"),K=document.getElementById("main"),Q=document.getElementById("header"),U={admin:"123456",test:"test1234"};function W(){return document.cookie.includes("login=true")}function X(){V.style.display="block",Q.style.display="none",K.style.display="none"}function Y(e){const t=document.createElement("div");return t.classList.add("form__error"),t.innerText=`This field must contain over ${e-1} symbols`,function(n){n.target.value.length<e?n.target.after(t):t.remove()}}function Z(e,t,n,a){return function(o){o.target.value.length>=e?t[a]=!0:t[a]=!1,Object.values(t).every((e=>e))?n.disabled=!1:n.disabled=!0}}R.addEventListener("click",(function(e){e.preventDefault(),document.cookie="login=true;max-age=0",K.innerText="",location.hash="#/",location.reload()})),q.addEventListener("click",(function(e){e.preventDefault(),U[z.value]&&J.value===U[z.value]?(document.cookie="login=true;max-age=3600",V.style.display="none",ce()):console.log("Invalid credentials")})),function(e,t){t.disabled=!0;const n={};for(let a in e){n[a]=!1;const o=Y(e[a]),s=Z(e[a],n,t,a);document.getElementById(a).addEventListener("keyup",(e=>{o(e),s(e)}))}}({name:4,pass:6},q);const ee=document.getElementById("search"),te=document.getElementById("perPage"),ne=document.getElementById("pagination");let ae,oe;async function se(){if(searchField.value){location.hash="#/search",ae=await B(`${_}search/shows?q=${searchField.value}`,50),oe=b(ae),m(oe),ne.style.display="none",te.style.display="none",ee.style.display="flex",favouritesHeader.style.display="none";const e=document.getElementsByClassName("filters__select");for(let t of e)t.disabled=!1;I.addEventListener("change",(()=>{oe=b(ae),m(oe)})),L.addEventListener("change",(()=>{oe=b(ae),m(oe)}))}else G()}searchButton.addEventListener("click",(e=>{"#/search"===location.hash?se():location.hash="#/search"})),searchField.addEventListener("keydown",(e=>{"Enter"===e.key&&("#/search"===location.hash?se():location.hash="#/search")}));const ie=[{path:"/",component:{render:()=>{W()?G():X()}}},{path:"/favourites",component:{render:()=>{W()?function(){u.style.display="block",g.style.display="block",p.style.display="none",y.style.display="none",h.style.display="block";const e=document.getElementsByClassName("filters__select");for(let t of e)t.disabled=!0;m(E)}():X()}}},{path:"/search",component:{render:()=>{W()?se():X()}}}],le=()=>{const e=location.hash.slice(1).toLowerCase()||"/",{component:t}=((e,t)=>t.find((t=>t.path.match(new RegExp(`^\\${e}$`,"gm"))))||void 0)(e,ie)||{};t.render()};window.addEventListener("hashchange",le),window.addEventListener("load",le);const ce=le,de={"#/":"Films","#/search":"Films","#/favourites":"Favourites"},re=document.getElementsByClassName("menu__item");window.addEventListener("hashchange",(()=>{const e=location.hash;for(let t of re)t.innerText!==de[e]?t.classList.remove("menu__item--active"):t.classList.add("menu__item--active")})),window.addEventListener("load",(()=>{const e=location.hash;for(let t of re)t.innerText!==de[e]?t.classList.remove("menu__item--active"):t.classList.add("menu__item--active")}))})();