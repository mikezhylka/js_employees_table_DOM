function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,c=!1;try{for(o=o.call(e);!(l=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(c)throw r}}return a}}(e,t)||r(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||r(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}var o=n(document.querySelectorAll("thead tr th")),a=n(document.querySelectorAll("tbody tr")),l=t(o,5),c=l[0],i=l[1],u=l[2],d=l[3],s=l[4],m=0,p=0,y=0,f=0,b=0,v=t(a,12),x=v[0],E=v[1],C=v[2],h=v[3],S=v[4],q=v[5],g=v[6],A=v[7],L=v[8],T=v[9],k=v[10],w=v[11],I=function(e,t){t.innerHTML="",e.forEach(function(e){return t.append(e)})},N=function(e,t){e.sort(function(e,n){var r=e.cells[t].innerText.toLowerCase(),o=n.cells[t].innerText.toLowerCase();return r.localeCompare(o)})},$=function(e,t){e.sort(function(e,n){var r=e.cells[t].innerText.toLowerCase();return n.cells[t].innerText.toLowerCase().localeCompare(r)})},P=function(e,t){e.sort(function(e,n){return parseInt(e.cells[t].innerText)-parseInt(n.cells[t].innerText)})},j=function(e,t){e.sort(function(e,n){var r=parseInt(e.cells[t].innerText);return parseInt(n.cells[t].innerText)-r})},F=function(e,t){e.sort(function(e,n){return parseInt(e.cells[t].innerText.replace("$","").replace(",",""))-parseInt(n.cells[t].innerText.replace("$","").replace(",",""))})},O=function(e,t){e.sort(function(e,n){var r=parseInt(e.cells[t].innerText.replace("$","").replace(",",""));return parseInt(n.cells[t].innerText.replace("$","").replace(",",""))-r})};c.addEventListener("click",function(){var e=document.querySelector("tbody"),t=n(document.querySelectorAll("tbody tr"));++m%2==0?$(t,0):N(t,0),I(t,e)}),i.addEventListener("click",function(){var e=n(document.querySelectorAll("tbody tr")),t=document.querySelector("tbody");++p%2==0?$(e,1):N(e,1),I(e,t)}),u.addEventListener("click",function(){var e=n(document.querySelectorAll("tbody tr")),t=document.querySelector("tbody");++y%2==0?$(e,2):N(e,2),I(e,t)}),d.addEventListener("click",function(){var e=n(document.querySelectorAll("tbody tr")),t=document.querySelector("tbody");++f%2==0?j(e,3):P(e,3),I(e,t)}),s.addEventListener("click",function(){var e=n(document.querySelectorAll("tbody tr")),t=document.querySelector("tbody");++b%2==0?O(e,4):F(e,4),I(e,t)});var D=function(e){e.addEventListener("click",function(){var t=[];a.forEach(function(e){""!==e.className&&t.push(e.className)}),t.length?e.className="":e.className="active"})};D(x),D(E),D(C),D(h),D(S),D(q),D(g),D(A),D(L),D(T),D(k),D(w);var M=document.createElement("form");M.classList.add("new-employee-form");var Y=document.createElement("label"),H=document.createElement("label"),U=document.createElement("label"),z=document.createElement("label"),B=document.createElement("label"),G=document.createElement("input"),J=document.createElement("input"),K=document.createElement("input"),Q=document.createElement("input"),R=document.createElement("button"),V=document.createElement("select"),W=document.createElement("option"),X=document.createElement("option"),Z=document.createElement("option"),_=document.createElement("option"),ee=document.createElement("option"),et=document.createElement("option");W.value="Tokyo",W.textContent="Tokyo",X.value="Singapore",X.textContent="Singapore",Z.value="London",Z.textContent="London",_.value="NewYork",_.textContent="New York",ee.value="Edinburgh",ee.textContent="Edinburgh",et.value="SanFrancisco",et.textContent="San Francisco",V.append(W,X,Z,_,ee,et),G.name="name",G.type="text",G.dataset.qa="name",G.required="true",J.name="position",J.type="text",J.dataset.qa="position",J.required="true",V.name="office",V.dataset.qa="office",V.required="true",K.name="age",K.type="number",K.dataset.qa="age",K.required="true",Q.name="salary",Q.type="number",Q.dataset.qa="salary",Q.required="true",R.textContent="Save to table",Y.textContent="Name:",H.textContent="Position:",U.textContent="Office:",z.textContent="Age:",B.textContent="Salary:",Y.append(G),H.append(J),U.append(V),z.append(K),B.append(Q),M.append(Y,H,U,z,B,R),document.body.appendChild(M),M.addEventListener("submit",function(e){e.preventDefault();var r=new FormData(e.target),o=document.querySelector("tbody"),a=document.createElement("tr"),l=!0,c=document.createElement("div"),i=document.createElement("h2"),u=document.createElement("p"),d=n(document.querySelectorAll(".new-employee-form label"));c.dataset.qa="notification",c.append(i,u);var s=!0,m=!1,p=void 0;try{for(var y,f=r.entries()[Symbol.iterator]();!(s=(y=f.next()).done);s=!0){var b=t(y.value,2),v=b[0],x=b[1],E=!1,C=!1;if("age"===v){var h=parseInt(x);E=h<18||h>90}if("name"===v&&(C=x.length<4),"name"===v&&!x.replaceAll(" ","").length){l=!1,c.classList.add("notification","error"),i.textContent="Error.",i.className="title",u.textContent="Please, type name value",document.body.append(c);break}if("position"===v&&!x.replaceAll(" ","").length){l=!1,c.classList.add("notification","error"),i.textContent="Error.",i.className="title",u.textContent="Please, type position value",document.body.append(c);break}if(E){l=!1,d[3].style.color="red",c.classList.add("notification","error"),i.textContent="Error.",i.className="title",u.textContent="Please fill in correct age (from 18 to 90)",document.body.append(c);break}if(C){l=!1,d[0].style.color="red",c.classList.add("notification","error"),i.className="title",i.textContent="Error.",u.textContent="Please fill in correct name (>4 characters)",document.body.append(c);break}var S=document.createElement("td");"salary"===v?x.length<4?S.textContent="$".concat(x):S.textContent="$".concat(x.slice(0,-3),",").concat(x.slice(x.length-3)):S.textContent=x,a.append(S)}}catch(e){m=!0,p=e}finally{try{s||null==f.return||f.return()}finally{if(m)throw p}}l&&("red"===d[3].style.color?d[3].style.color="#808080":"red"===d[0].style.color&&(d[0].style.color="#808080"),c.classList.add("notification","success"),i.className="title",i.textContent="Success.",u.textContent="New employee has been added successfully.",document.body.append(c),o.append(a),e.target.reset()),setTimeout(function(){c.style.display="none"},3500)});
//# sourceMappingURL=index.472609fb.js.map
