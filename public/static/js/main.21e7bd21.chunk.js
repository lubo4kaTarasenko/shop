(this.webpackJsonpshop_front=this.webpackJsonpshop_front||[]).push([[0],{10:function(e,t,c){"use strict";c.d(t,"f",(function(){return o})),c.d(t,"d",(function(){return l})),c.d(t,"b",(function(){return j})),c.d(t,"e",(function(){return d})),c.d(t,"c",(function(){return b})),c.d(t,"a",(function(){return u}));var n=c(9),a=c(21),r=c.n(a),s=r.a.load("email"),i=r.a.load("cart")||{},o=Object(n.b)([]),l=Object(n.b)(1),j=Object(n.b)([]),d=Object(n.b)({search:"",page:1,filter:"",price_from:"",price_to:"",category:"",subcategory:""}),b=Object(n.b)(s),u=Object(n.b)(i)},122:function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return O}));var n=c(1),a=c(5),r=c(0),s=c(9),i=c(10),o=c(21),l=c.n(o),j=c(126),d=c(57),b=c(194),u=c(123);function O(){var t=Object(s.c)(i.a),c=Object(a.a)(t,2),o=c[0],O=(c[1],Object(r.useRef)(null)),h=Object(r.useRef)(null),m=Object(r.useRef)(null),x=Object(r.useRef)(null),f=Object(r.useRef)(null),p=Object(r.useRef)(null);return Object(n.jsx)(j.a,{className:"order_cont",children:Object(n.jsxs)("form",{onSubmit:function(t){!function(t){t.preventDefault();var c=Object.values(o).map((function(e){return{product_id:e.id,number:e.count}}));e.email=x;var n={products:c,email:x.current.value,phone:m.current.value,first_name:O.current.value,last_name:h.current.value,city:f.current.value,post_office:p.current.value};console.log("info; ",JSON.stringify(n)),(new u.a).postProductsIds(n).then((function(e){console.log(e),l.a.remove("cart",{path:"/"}),window.location.replace(e.next)}))}(t)},children:[Object(n.jsx)("h1",{className:"order_headers",children:"Checkout"}),Object(n.jsx)("div",{className:"order_info",children:Object(n.jsx)(d.a,{label:"First name",variant:"outlined",inputProps:{ref:O},required:!0})}),Object(n.jsx)("div",{className:"order_info",children:Object(n.jsx)(d.a,{label:"Last name",variant:"outlined",inputProps:{ref:h},required:!0})}),Object(n.jsx)("div",{className:"order_info",children:Object(n.jsx)(d.a,{label:"City",variant:"outlined",inputProps:{ref:f},required:!0})}),Object(n.jsx)("div",{className:"order_info",children:Object(n.jsx)(d.a,{label:"Phone",variant:"outlined",inputProps:{ref:m},required:!0})}),Object(n.jsx)("div",{className:"order_info",children:Object(n.jsx)(d.a,{label:"Email",variant:"outlined",type:"email",inputProps:{ref:x},required:!0})}),Object(n.jsx)("div",{className:"order_info",children:Object(n.jsx)(d.a,{label:"New Post office number",variant:"outlined",inputProps:{ref:p},required:!0})}),Object(n.jsx)("div",{className:"order_info",children:Object(n.jsx)(b.a,{variant:"contained",color:"primary",type:"submit",children:"Confirm order"})})]})})}}).call(this,c(81))},123:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(28),a=c(29),r=c(22),s=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,[{key:"postProductsIds",value:function(e){return fetch(Object(r.a)("/order?message=Success"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({products:e.products,email:e.email,phone:e.phone,first_name:e.first_name,last_name:e.last_name,post_office:e.post_office,city:e.city})}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}}]),e}()},144:function(e,t,c){},190:function(e,t,c){},191:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(14),i=c.n(s),o=c(9),l=(c(144),c(35)),j=c(16),d=c(5),b=c(236),u=c(237),O=c(238),h=c(230),m=c(239),x=c(240),f=c(46),p=c(57),g=c(253),v=c(28),y=c(29),_=c(22),N=function(){function e(){Object(v.a)(this,e)}return Object(y.a)(e,[{key:"getListByParams",value:function(e){return this.getList(e.search,e.page,e.filter,e.price_from,e.price_to,e.category,e.subcategory)}},{key:"getList",value:function(e,t,c,n,a,r,s){return fetch(Object(_.a)("/products?q=".concat(e,"&p=").concat(t,"&f=").concat(c,"&pr_f=").concat(n,"&pr_t=").concat(a,"&c=").concat(r,"&sc=").concat(s))).then((function(e){return e.json()}))}},{key:"getProduct",value:function(e){return fetch(Object(_.a)("/product?name=".concat(e))).then((function(e){return e.json()}))}}]),e}(),w=c(10);function k(e){var t=Object(o.c)(w.f),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(o.c)(w.d),i=Object(d.a)(s,2),l=(i[0],i[1]),j=Object(o.c)(w.e),b=Object(d.a)(j,2),u=b[0],O=b[1];return Object(n.jsx)(g.a,{id:"search_complete",options:a,getOptionLabel:function(e){return e.name},style:{width:250},clearOnBlur:!1,onInputChange:function(e,t){!function(e){u.search=e,O(u),(new N).getListByParams(u).then((function(e){!function(e,t){r(e),l(t)}(e.products,e.pages)}))}(t)},renderInput:function(e){return Object(n.jsx)(p.a,Object(f.a)(Object(f.a)({},e),{},{label:"Search",variant:"filled",id:"search_input"}))}})}var C=c(251),P=c(194),S=c(252),E=c(78),L=c.n(E),B=c(233),T=c(234),I=c(235),z=c(21),A=c.n(z);function J(){var e=Object(o.c)(w.a),t=Object(d.a)(e,2),c=t[0],a=t[1];console.log("cart render",c);var s=function(){for(var e=Object.values(c),t=0,n=0,a=e;n<a.length;n++){var r=a[n];t+=r.count}return t}();return Object(n.jsx)(L.a,{variant:"popover",popupId:"cart_popup",children:function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(h.a,Object(f.a)(Object(f.a)({},Object(E.bindTrigger)(e)),{},{style:{color:"white",float:"left"},children:[Object(n.jsx)(B.a,{}),s>0?Object(n.jsx)("span",{className:"cartC",children:s}):null]})),Object(n.jsx)(S.a,Object(f.a)(Object(f.a)({},Object(E.bindPopover)(e)),{},{anchorOrigin:{vertical:"bottom",horizontal:-200},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(n.jsx)(C.a,{p:6,children:Object(n.jsxs)("div",{children:["Cart",Object(n.jsx)("hr",{}),i()]})})}))]})}});function i(){var e=Object.values(c);return console.log(e),0!=e.length?(console.log(c),Object(n.jsxs)(r.a.Fragment,{children:[e.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"/ava.jpg",alt:"",width:"50"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:e.name}),Object(n.jsx)("div",{children:Object(n.jsxs)("b",{children:[e.price," $"]})}),Object(n.jsx)(h.a,{style:{color:"red"},onClick:function(){j(e,-1)},children:Object(n.jsx)(T.a,{})}),Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:e.count})}),Object(n.jsx)(h.a,{style:{color:"green"},onClick:function(){j(e,1)},children:Object(n.jsx)(I.a,{})}),Object(n.jsx)("hr",{})]},e.id)})),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:["Total: ",b(),"$"]}),Object(n.jsx)("br",{}),Object(n.jsx)(P.a,{color:"primary",variant:"contained",children:Object(n.jsx)(l.b,{to:"/order",style:{color:"white",textDecoration:"none"},children:"Make an order"})})]})):Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("img",{src:"/sad-cart.png",alt:"",width:"200"}),Object(n.jsx)("hr",{}),"Your cart is empty now. But you can fix it)"]})}function j(e,t){console.log(e);var n=JSON.parse(JSON.stringify(c)),r=n[e.id].count+t;r>0?n[e.id].count=r:delete n[e.id],console.log(n),A.a.save("cart",n,{path:"/"}),a(n)}function b(){for(var e=0,t=0,n=Object.values(c);t<n.length;t++){var a=n[t];e+=a.price*a.count}return e}}function R(){var e=Object(o.c)(w.c),t=Object(d.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){setTimeout((function(){var e=A.a.load("email");e&&!c&&r(e)}),1e3)}),[]),Object(n.jsx)(b.a,{position:"static",children:Object(n.jsx)(u.a,{className:"nav_cont",children:Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsxs)(O.a,{item:!0,xs:3,md:2,lg:5,className:"header_item",children:[" ",Object(n.jsx)("h2",{children:"Let it be shop"})]}),Object(n.jsx)(O.a,{item:!0,xs:9,md:4,lg:3,className:"header_item",children:Object(n.jsx)(k,{})}),Object(n.jsx)(O.a,{item:!0,xs:5,md:3,lg:2,className:"header_item",children:Object(n.jsx)("h4",{children:c})}),Object(n.jsx)(O.a,{item:!0,xs:7,md:3,lg:2,className:"header_item",children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(J,{}),"\xa0\xa0",s(),"\xa0\xa0",Object(n.jsx)(h.a,{children:Object(n.jsx)(l.b,{to:"/home",children:Object(n.jsx)(m.a,{})})})]})})]})})});function s(){return A.a.load("token")?Object(n.jsx)(h.a,{children:Object(n.jsx)(l.b,{to:"/profile",children:Object(n.jsx)(x.a,{style:{color:"white",marginTop:"-5px"}})})}):Object(n.jsx)(h.a,{children:Object(n.jsxs)("a",{href:Object(_.a)("/users/sign_in"),children:[" ",Object(n.jsx)(x.a,{})]})})}}var q=c(125),M=c(124),U=c(241),F=c(242),D=c(243),Z=function(e){Object(q.a)(c,e);var t=Object(M.a)(c);function c(){return Object(v.a)(this,c),t.apply(this,arguments)}return Object(y.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b.a,{position:"static",className:"footer",children:Object(n.jsx)(u.a,{className:"nav_cont footer_c ",children:Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsxs)(O.a,{item:!0,xs:6,md:3,lg:3,className:"header_item",children:[" ",Object(n.jsx)("h4",{children:"Let it be shop"})]}),Object(n.jsx)(O.a,{item:!0,xs:6,md:3,lg:3,className:"header_item",children:Object(n.jsxs)("h4",{children:[Object(n.jsx)(U.a,{className:"footer_i"})," ",Object(n.jsx)("span",{className:"footer_t",children:"333 333 3333"})]})}),Object(n.jsx)(O.a,{item:!0,xs:6,md:3,lg:3,className:"header_item",children:Object(n.jsxs)("h4",{children:[Object(n.jsx)(F.a,{className:"footer_i"})," ",Object(n.jsx)("span",{className:"footer_t",children:"blabla@gmail.com"})]})}),Object(n.jsx)(O.a,{item:!0,xs:6,md:3,lg:3,className:"header_item",children:Object(n.jsxs)("h4",{children:[Object(n.jsx)(D.a,{className:"footer_i"}),Object(n.jsx)("span",{className:"footer_t",children:" Ukraine, Cherkasy, 2020"})]})})]})})})}}]),c}(r.a.Component),$=c(126),G=function(){function e(){Object(v.a)(this,e)}return Object(y.a)(e,[{key:"deleteSession",value:function(){return fetch(Object(_.a)("/users/sign_out"),{method:"DELETE"}).catch((function(e){console.log(e)}))}}]),e}();function H(){var e=Object(o.c)(w.c),t=Object(d.a)(e,2),c=t[0],a=t[1];return""!==c&&c?Object(n.jsx)($.a,{elevation:3,className:"profile_cont",children:Object(n.jsxs)("div",{className:"profile_info",children:[Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:c})}),Object(n.jsx)("h3",{children:"History of orders"}),Object(n.jsx)(P.a,{variant:"contained",color:"secondary",style:{marginTop:"200px"},onClick:function(){(new G).deleteSession().then((function(e){console.log(e),A.a.remove("token",{path:"/"}),A.a.remove("email",{path:"/"}),a("")}))},children:"LOG OUT"})]})}):Object(n.jsx)(j.a,{push:!0,to:"/"})}var W=function(){function e(){Object(v.a)(this,e)}return Object(y.a)(e,[{key:"getList",value:function(){return fetch(Object(_.a)("/categories")).then((function(e){return e.json()}))}}]),e}(),Y=c(247),V=c(244),K=c(246),Q=c(245),X=Object(V.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function ee(e){var t=Object(o.c)(w.f),c=Object(d.a)(t,2),a=(c[0],c[1]),s=Object(o.c)(w.d),i=Object(d.a)(s,2),l=(i[0],i[1]),j=Object(o.c)(w.b),b=Object(d.a)(j,2),u=(b[0],b[1],Object(o.c)(w.e)),O=Object(d.a)(u,2),h=O[0],m=O[1],x=X(),f=r.a.useState(null),p=Object(d.a)(f,2),g=p[0],v=p[1],y=Boolean(g),_=y?"simple-popover":void 0;return Object(n.jsxs)("div",{children:[Object(n.jsx)(P.a,{"aria-describedby":_,onClick:function(e){v(e.currentTarget)},style:{float:"right",marginTop:"10px"},children:Object(n.jsx)(Q.a,{})}),Object(n.jsx)(S.a,{id:_,open:y,anchorEl:g,onClose:function(){v(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(n.jsx)(K.a,{className:x.typography,children:e.category.subcategories.map((function(e){return Object(n.jsxs)("div",{id:e,style:{color:"darkblue",cursor:"pointer"},children:[Object(n.jsx)("span",{onClick:function(){!function(e){var t=document.getElementsByClassName("checked_category");[].forEach.call(t,(function(e){e.classList.remove("checked_category")}));var c=document.getElementsByClassName("checked_subcategory");[].forEach.call(c,(function(e){e.classList.remove("subchecked_category")})),document.getElementById("".concat(e)).classList.add("checked_subcategory"),h.subcategory=e,m(h),(new N).getListByParams(h).then((function(e){!function(e,t){a(e),l(t)}(e.products,e.pages)}))}(e)},children:e}),Object(n.jsx)("hr",{})]},e)}))})})]})}function te(){var e=Object(o.c)(w.f),t=Object(d.a)(e,2),c=(t[0],t[1]),a=Object(o.c)(w.d),r=Object(d.a)(a,2),s=(r[0],r[1]),i=Object(o.c)(w.b),l=Object(d.a)(i,2),j=l[0],b=(l[1],Object(o.c)(w.e)),u=Object(d.a)(b,2),O=u[0],m=u[1];return Object(n.jsxs)("div",{id:"categories",children:[Object(n.jsx)("div",{className:"category_container, checked_category",id:"undefined",children:Object(n.jsxs)(h.a,{color:"primary",className:"category_btn",onClick:function(){x("undefined")},children:[Object(n.jsx)(Y.a,{className:"category_icon",fontSize:"large"}),"All categories"]})}),j.map((function(e){return Object(n.jsxs)("div",{className:"category_container",id:"".concat(e.id),children:[Object(n.jsx)(ee,{category:e}),Object(n.jsxs)(h.a,{color:"primary",className:"category_btn",onClick:function(){x(e.id)},children:[Object(n.jsx)(Y.a,{className:"category_icon",fontSize:"large"}),e.name]})]},e.id)}))]});function x(e){var t=document.getElementsByClassName("checked_category");[].forEach.call(t,(function(e){e.classList.remove("checked_category")})),document.getElementById("".concat(e)).classList.add("checked_category"),O.category=e,O.subcategory="",m(O),(new N).getListByParams(O).then((function(e){!function(e,t){c(e),s(t)}(e.products,e.pages)}))}}function ce(){var e,t=Object(a.useState)(null),c=Object(d.a)(t,2),r=c[0],s=c[1],i=Object(o.c)(w.f),l=Object(d.a)(i,2),b=l[0];l[1];return r?(e=r.url_name,Object(n.jsx)(j.a,{push:!0,to:"/product/".concat(e)})):Object(n.jsx)("div",{id:"products",children:b.map((function(e){var t=e.image;return t.url&&(t=t.url),Object(n.jsx)("div",{onClick:function(){s(e)},className:"product_block",children:Object(n.jsxs)($.a,{className:"product_container",children:[Object(n.jsx)("div",{className:"product_attr",children:Object(n.jsx)("b",{children:e.name})}),Object(n.jsx)("div",{className:"product_attr",children:Object(n.jsxs)("i",{children:[e.category,"/",e.subcategory]})}),Object(n.jsx)("div",{className:"product_attr",children:Object(n.jsx)("img",{src:t,className:"product_image",alt:""})}),Object(n.jsx)("div",{className:"product_attr",children:Object(n.jsxs)("h3",{children:["price: ",e.price," $"]})})]})},e.id)}))})}var ne=c(255),ae=c(254),re=c(257);function se(){var e=Object(o.c)(w.f),t=Object(d.a)(e,2),c=(t[0],t[1]),a=Object(o.c)(w.d),r=Object(d.a)(a,2),s=(r[0],r[1]),i=Object(o.c)(w.b),l=Object(d.a)(i,2),j=(l[0],l[1],Object(o.c)(w.e)),b=Object(d.a)(j,2),u=b[0],h=b[1];return Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:12,md:4,lg:6}),Object(n.jsxs)(O.a,{item:!0,xs:4,md:3,lg:2,children:[Object(n.jsx)(p.a,{className:"price",id:"price_from",label:"price from:",variant:"outlined",style:{width:100}}),Object(n.jsx)(p.a,{className:"price",id:"price_to",label:"price to:",variant:"outlined",style:{width:100}})]}),Object(n.jsx)(O.a,{item:!0,xs:5,md:4,lg:2,children:Object(n.jsxs)(ae.a,{defaultValue:"default",id:"products_select",size:"small",variant:"outlined",style:{width:150},onChange:function(e){m(e.target.value)},children:[Object(n.jsx)(re.a,{value:"default",children:" default sort"}),Object(n.jsx)(re.a,{value:"A...Z",children:"A...Z"}),Object(n.jsx)(re.a,{value:"Z...A",children:"Z...A"}),Object(n.jsx)(re.a,{value:"cheap...expensive",className:"blue",children:"cheap...expensive"}),Object(n.jsx)(re.a,{value:"expensive...cheap",className:"purpure",children:"expensive...cheap"})]})}),Object(n.jsx)(O.a,{item:!0,xs:3,md:1,lg:1,children:Object(n.jsx)(P.a,{variant:"contained",color:"primary",onClick:function(){!function(){var e=document.getElementById("products_select").innerHTML,t=document.getElementById("price_to").value,c=document.getElementById("price_from").value;m(e,c,t)}()},style:{height:56},children:Object(n.jsx)("b",{children:"Filter"})})})]});function m(e,t,n){u.filter=e,u.price_from=t,u.price_to=n,h(u),(new N).getListByParams(u).then((function(e){!function(e,t){c(e),s(t)}(e.products,e.pages)}))}}function ie(){var e=Object(o.c)(w.f),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(o.c)(w.d),i=Object(d.a)(s,2),l=i[0],b=i[1],u=Object(o.c)(w.b),h=Object(d.a)(u,2),m=(h[0],h[1]),x=Object(o.c)(w.e),f=Object(d.a)(x,2),p=f[0],g=f[1];Object(a.useEffect)((function(){console.log(c.length),y(),(new W).getList().then((function(e){m(e.categories)}))}),[]);var v=new URLSearchParams(Object(j.g)().search).get("message");function y(){(new N).getListByParams(p).then((function(e){!function(e,t){r(e),b(t)}(e.products,e.pages),e.user&&(A.a.save("token",e.user.token,{path:"/"}),A.a.save("email",e.user.email,{path:"/"}))}))}return Object(n.jsxs)("div",{id:"home_cont",children:[Object(n.jsx)(se,{}),Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:6,sm:2,className:"categories_grid",children:Object(n.jsx)(te,{})}),Object(n.jsxs)(O.a,{item:!0,xs:6,sm:10,children:[v&&Object(n.jsx)("p",{style:{color:"green"},children:Object(n.jsx)("b",{children:v})}),0!==c?Object(n.jsx)(ce,{}):Object(n.jsx)("div",{children:"No products found"})]})]}),Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:1,sm:5}),Object(n.jsx)(O.a,{item:!0,xs:11,sm:4,className:"page_grid",children:Object(n.jsx)(ne.a,{count:l,variant:"outlined",shape:"rounded",id:"paginator",onChange:function(e,t){p.page=t,g(p),y()}})})]})]})}var oe=c(250),le=c(43),je=c(258),de=c(95),be=c.n(de),ue=c(96),Oe=c.n(ue),he=c(120),me=c.n(he),xe=c(121),fe=Object(xe.autoPlay)(me.a),pe=[{imgPath:"../../sale.png"},{imgPath:"../../free.jpg"},{imgPath:"../../gift.jpg"}],ge=Object(V.a)((function(e){return{root:{maxWidth:1500,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:300,display:"block",maxWidth:1500,overflow:"hidden",width:"100%"}}}));var ve=function(){var e=ge(),t=Object(le.a)(),c=r.a.useState(0),a=Object(d.a)(c,2),s=a[0],i=a[1],o=pe.length,l=0;return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(fe,{className:"image_st",axis:"rtl"===t.direction?"x-reverse":"x",index:s,onChangeIndex:function(e){i(e)},enableMouseEvents:!0,children:pe.map((function(t,c){return Object(n.jsx)("div",{children:Math.abs(s-c)<=2?Object(n.jsx)("img",{className:e.img,src:t.imgPath,alt:t.label}):null},l+=1)}))}),Object(n.jsx)(je.a,{className:"stepper",steps:o,position:"static",variant:"text",activeStep:s,nextButton:Object(n.jsxs)(P.a,{size:"small",onClick:function(){i((function(e){return e+1}))},disabled:s===o-1,children:["Next","rtl"===t.direction?Object(n.jsx)(be.a,{}):Object(n.jsx)(Oe.a,{})]}),backButton:Object(n.jsxs)(P.a,{size:"small",onClick:function(){i((function(e){return e-1}))},disabled:0===s,children:["rtl"===t.direction?Object(n.jsx)(Oe.a,{}):Object(n.jsx)(be.a,{}),"Back"]})})]})},ye=c(259),_e=c(248),Ne=c(249),we=c(193),ke=function(){function e(){Object(v.a)(this,e)}return Object(y.a)(e,[{key:"createComment",value:function(e){return fetch(Object(_.a)("/comments"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},{key:"updateComment",value:function(e){return fetch(Object(_.a)("/comments"),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},{key:"deleteComment",value:function(e){return fetch(Object(_.a)("/comments?id=".concat(e)),{method:"DELETE"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}}]),e}();function Ce(e){var t=r.a.useState(5),c=Object(d.a)(t,2),a=c[0],s=c[1];return Object(n.jsxs)("div",{className:"comment_cont",children:[Object(n.jsx)("h3",{style:{textAlign:"center"},children:"New comment"}),Object(n.jsx)(C.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(n.jsx)(ye.a,{id:"new_rating",name:"simple-controlled",value:a,onChange:function(e,t){s(t)}})}),Object(n.jsx)(we.a,{"aria-label":"comment",style:{width:"70%",margin:"10px"},rowsMin:3,placeholder:"comment",id:"new_body"}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{variant:"outlined",color:"primary",onClick:function(){return function(){var t=document.getElementById("new_body").value,c={product_id:e.product_id,rating:a,body:t};(new ke).createComment(c).then((function(t){console.log(t),e.loadProduct()}))}()},children:"Create comment"})})]})}function Pe(e){var t=r.a.useState(e.comment.rating),c=Object(d.a)(t,2),a=c[0],s=c[1];return Object(n.jsxs)("div",{className:"comment_cont",children:[Object(n.jsx)("h3",{style:{textAlign:"center"},children:"Edit comment"}),Object(n.jsx)(C.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(n.jsx)(ye.a,{name:"simple-controlled",value:a,onChange:function(e,t){s(t)}})}),Object(n.jsx)(we.a,{"aria-label":"comment",style:{width:"70%",margin:"10px"},rowsMin:3,placeholder:"comment",id:"edit_body",children:e.comment.body}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{variant:"outlined",color:"primary",onClick:function(){return function(){var t=document.getElementById("edit_body").value,c={id:e.comment.id,rating:a,body:t};(new ke).updateComment(c).then((function(t){console.log(t),e.loadProduct(),e.setEditable(!1)}))}()},children:"Update comment"})})]})}function Se(e){var t=Object(o.c)(w.c),c=Object(d.a)(t,1)[0],a=r.a.useState(!1),s=Object(d.a)(a,2),i=s[0],l=s[1];return Object(n.jsxs)($.a,{style:{padding:"10px"},children:[e.newComment&&Object(n.jsx)(Ce,{product_id:e.product_id,loadProduct:e.loadProduct}),e.comments.length>0&&Object(n.jsx)("h3",{style:{textAlign:"center"},children:"Comments"}),e.comments.map((function(e){return Object(n.jsx)("div",{className:"comment_cont",children:Object(n.jsxs)(C.a,{component:"fieldset",mb:3,borderColor:"transparent",children:[Object(n.jsx)(ye.a,{name:"read-only",value:e.rating,readOnly:!0}),Object(n.jsx)(K.a,{children:e.body}),Object(n.jsxs)(K.a,{children:[Object(n.jsx)("b",{style:{fontSize:"small"},children:e.email}),j(e)]})]})},e.id)}))]});function j(t){if(c===t.email)return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(h.a,{color:"primary",onClick:function(){return l(!i)},children:Object(n.jsx)(_e.a,{fontSize:"small"})}),Object(n.jsx)(h.a,{color:"secondary",onClick:function(){return c=t.id,void(new ke).deleteComment(c).then((function(t){console.log(t),e.loadProduct()}));var c},children:Object(n.jsx)(Ne.a,{fontSize:"small"})}),i&&Object(n.jsx)(Pe,{comment:t,loadProduct:e.loadProduct,setEditable:l})]})}}function Ee(e){var t=Object(a.useState)({}),c=Object(d.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)([]),l=Object(d.a)(i,2),j=l[0],b=l[1],u=Object(a.useState)([]),m=Object(d.a)(u,2),x=m[0],f=m[1];Object(a.useEffect)((function(){_()}),[]);var p=Object(o.c)(w.a),g=Object(d.a)(p,2),v=g[0],y=g[1];function _(){(new N).getProduct(e.match.params.url_name).then((function(e){s(e.product),b(e.comments),f(e.new_comment)}))}return Object(n.jsxs)("div",{children:[Object(n.jsxs)(O.a,{container:!0,style:{paddingTop:"20px"},children:[Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,md:12,lg:2}),Object(n.jsx)(O.a,{item:!0,xs:12,sm:4,md:4,lg:4,children:Object(n.jsx)($.a,{className:"show_product_paper",children:Object(n.jsx)("div",{className:"product_show_img show",children:Object(n.jsx)("img",{src:r.image,width:"200px"})})})}),Object(n.jsx)(O.a,{item:!0,xs:12,sm:4,md:8,lg:4,children:Object(n.jsxs)($.a,{className:"show_product_paper",children:[r.rating&&Object(n.jsxs)("div",{className:"show",children:[Object(n.jsx)("b",{children:"Rating "}),Object(n.jsx)(oe.a,{style:{color:"#ffb400"}}),Object(n.jsx)("b",{children:r.rating})]}),Object(n.jsxs)("div",{className:"product_show_name show",children:[Object(n.jsx)("b",{children:"name: "})," ",r.name]}),Object(n.jsxs)("div",{className:"product_show_category show",children:[Object(n.jsx)("b",{children:"category: "})," ",r.category]}),Object(n.jsxs)("div",{className:"product_show_name show",children:[Object(n.jsx)("b",{children:"subcategory: "})," ",r.subcategory]}),Object(n.jsxs)("div",{className:"product_show_description show",children:[Object(n.jsx)("b",{children:"description: "}),r.description]}),Object(n.jsxs)("div",{className:"product_show_country show",children:[Object(n.jsx)("b",{children:"country: "}),r.country]}),Object(n.jsxs)("div",{className:"product_show_price show",style:{color:"green"},children:[Object(n.jsx)("b",{children:"price: "}),r.price," $ "]}),Object(n.jsxs)(h.a,{variant:"contained",className:"category_btn",style:{color:"green"},onClick:function(){!function(){var e=JSON.parse(JSON.stringify(v));e[r.id]?e[r.id].count++:e[r.id]={price:r.price,count:1,name:r.name,id:r.id};A.a.save("cart",e,{path:"/"}),y(e)}()},children:[Object(n.jsx)(B.a,{fontSize:"large"}),"BUY"]}),v[r.id]?"Added to cart ".concat(v[r.id].count>1?"x".concat(v[r.id].count):""):""]})})]}),Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,md:12,lg:2}),Object(n.jsx)(O.a,{item:!0,xs:12,sm:8,md:8,lg:8,children:r.id&&Object(n.jsx)(Se,{loadProduct:_,product_id:r.id,comments:j,newComment:x})})]}),Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,md:12,lg:2}),Object(n.jsx)(O.a,{item:!0,xs:12,sm:8,md:8,lg:8,children:Object(n.jsx)(ve,{})})]})]})}var Le=c(122);var Be=function(){return console.log("v0.0.8"),Object(n.jsxs)("div",{id:"main",children:[Object(n.jsxs)(l.a,{children:[Object(n.jsx)(R,{}),Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/order",component:Le.a}),Object(n.jsx)(j.b,{path:"/profile",component:H}),Object(n.jsx)(j.b,{path:"/product/:url_name",component:Ee}),Object(n.jsx)(j.b,{path:"/home",component:ie}),Object(n.jsx)(j.b,{path:"",component:ie})]})]}),Object(n.jsx)(Z,{})]})},Te=(c(190),document.getElementById("root"));i.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(Be,{})}),Te)},22:function(e,t,c){"use strict";function n(e){return"".concat("https://super-amazing-shop.herokuapp.com").concat(e)}c.d(t,"a",(function(){return n}))}},[[191,1,2]]]);
//# sourceMappingURL=main.21e7bd21.chunk.js.map