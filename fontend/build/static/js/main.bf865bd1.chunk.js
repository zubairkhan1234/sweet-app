(this.webpackJsonpsweetapp=this.webpackJsonpsweetapp||[]).push([[0],{120:function(e,t,a){},146:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),s=(a(120),a(26)),d=a(186),l=a(204),o=a(193),j=a(189),h=a(80),b=window.location.href.split(":");"https"===b[0]?(Object(h.a)("BaseURL"),b="https://m-sweet-app.herokuapp.com/"):(Object(h.a)("BaseURL"),b="http://localhost:5000");var p=a(12),x=a(10),u=a.n(x),m=a(1),O=i.a.createContext(),g=i.a.createContext(),f=function(){return Object(n.useContext)(O)},v=function(){return Object(n.useContext)(g)};function y(e){var t=e.children,a=Object(n.useState)({role:null,user:null,loginStatus:!1,orderUser:null}),i=Object(p.a)(a,2),r=i[0],c=i[1];return Object(n.useEffect)((function(){return u()({method:"get",url:b+"/profile",withCredentials:!0}).then((function(e){200===e.data.status&&c((function(t){return Object(s.a)(Object(s.a)({},t),{},{user:e.data.profile,loginStatus:!0,role:e.data.profile.role})}))})).catch((function(e){e&&e.response&&e.response.status&&c((function(e){return Object(s.a)(Object(s.a)({},e),{},{loginStatus:!1})}))})),function(){}}),[]),Object(m.jsx)(O.Provider,{value:r,children:Object(m.jsx)(g.Provider,{value:c,children:t})})}var w=a(207),N=a(191),C=a(67),k=a.n(C),S=a(153),A=a(13),R=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"40ch"}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var D=function(){var e=f(),t=v(),a=(Object(A.f)(),R());return console.log("GlobalState on Login Component   ",e),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(N.a,{}),Object(m.jsxs)("div",{className:a.paper,children:[Object(m.jsx)(w.a,{className:a.avatar,children:Object(m.jsx)(k.a,{})}),Object(m.jsx)(S.a,{component:"h1",variant:"h5",children:"Login"}),Object(m.jsxs)("form",{className:a.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var a=document.getElementById("loginEmail").value,n=document.getElementById("loginPassword").value;return u()({method:"post",url:b+"/login",data:{email:a,password:n},withCredentials:!0}).then((function(e){200===e.data.status?(t((function(t){return Object(s.a)(Object(s.a)({},t),{},{loginStatus:!0,user:e.data.loginRequestUser,role:e.data.loginRequestUser.role})})),alert(e.data.message)):alert(e.data.message)})).catch((function(e){alert(e),console.log("ldafjldja ",e.response.data.message)})),!1},children:[Object(m.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"loginEmail",label:"Email Address",autoComplete:"email",autoFocus:!0}),Object(m.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"loginPassword",autoComplete:"current-password"}),Object(m.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Login"})]})]})]})})},E=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"40ch"}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var I=function(){v(),f();var e=Object(A.f)(),t=E();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(N.a,{}),Object(m.jsxs)("div",{className:t.paper,children:[Object(m.jsx)(w.a,{className:t.avatar,children:Object(m.jsx)(k.a,{})}),Object(m.jsx)(S.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(m.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(t){t.preventDefault();var a={userName:document.getElementById("name").value,userEmail:document.getElementById("email").value.toLowerCase(),userPhone:document.getElementById("phone").value,userPassword:document.getElementById("password").value};return u()({method:"post",url:b+"/signup",data:a,withCredentials:!0}).then((function(t){200===t.data.status?(alert(t.data.message),e.push("/login")):alert(t.data.message)})).catch((function(e){alert(e)})),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("phone").value="",document.getElementById("password").value="",!1},children:[Object(m.jsx)(l.a,{id:"name",label:"Name",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(m.jsx)(l.a,{id:"phone",label:"Phone",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(m.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",autoComplete:"email",autoFocus:!0}),Object(m.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(m.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Login"})]})]})]})})},z=a(70),B=a(194),T=a(195),F=a(198),W=a(196),q=a(197),P=Object(d.a)({root:{maxWidth:345,width:345},media:{height:200},fontSize:{fontSize:18}});function H(e){var t=e.setCart,a=e.cart,r=(f(),v(),P()),c=Object(n.useState)([]),d=Object(p.a)(c,2),l=d[0],h=d[1];Object(n.useEffect)((function(){u()({method:"get",url:"http://localhost:5000/getProducts",withCredentials:!0}).then((function(e){console.log(e.data.data),h(e.data.data)})).catch((function(e){console.log(e)}))}),[]);return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)(j.a,{maxWidth:"xl",children:l.map((function(e,n){return Object(m.jsxs)(B.a,{value:e.id,className:"products ".concat(r.root),style:{display:"inline-block",margin:"15px"},children:[Object(m.jsxs)(T.a,{children:[Object(m.jsx)(W.a,{children:Object(m.jsx)(S.a,{variant:"body2",style:{color:"red"},id:"title",component:"p",children:e.availability})}),Object(m.jsx)(q.a,{className:r.media,image:e.cartimage,title:"Contemplative Reptile"}),Object(m.jsxs)(W.a,{children:[Object(m.jsx)(S.a,{variant:"h5",color:"primary",id:"title",component:"h2",children:e.title}),Object(m.jsx)(S.a,{id:"description",variant:"body2",color:"primary",component:"p",children:e.description}),Object(m.jsxs)(S.a,{id:"price",variant:"body2",color:"primary",component:"p",children:["Rs:",e.price,"/="]})]})]}),Object(m.jsx)(F.a,{children:Object(m.jsx)(o.a,{size:"small",onClick:function(){return function(e){var n=Object(z.a)(a),i=n.find((function(t){return e.title===t.title}));i?i.quantity++:(i=Object(s.a)(Object(s.a)({},e),{},{quantity:1}),n.push(i)),t(n)}(e)},color:"primary",children:"Add To Card"})})]},n)}))})})}var L=a(46),U=a.n(L),G=a(205),Q=a(199),V=a(154),J=Object(d.a)((function(e){return{root:{maxWidth:345,width:145,height:100},media:{height:200},fontSize:{fontSize:18},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},header:{width:"20%",textAlign:"center"},input:{width:"100%",height:"35px",border:"none",borderRadius:"5px",backgroundColor:"#3f51b5",opacity:.9,color:"#ffffff",paddingLeft:"5px",marginBottom:"10px"},button:{color:"#3f51b5",border:"none",backgroundColor:"none"}}}));function M(e){var t=e.cart,a=e.setCart,n=J(),r=i.a.useState(!1),c=Object(p.a)(r,2),s=c[0],d=c[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Cart"}),Object(m.jsxs)(j.a,{maxWidth:"xl",children:[Object(m.jsxs)("div",{style:{margin:"15px",display:"flex",justifyContent:"space-between",textAlign:"center"},children:[Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)("h2",{children:"Image"})}),Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)("h2",{children:"Sweet Name"})}),Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)("h2",{children:"Sweet Price"})}),Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)("h2",{children:"Sweet Quantity in kg"})}),Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)("h2",{children:"action"})})]}),Object(m.jsxs)("div",{children:[t.map((function(e,i){return Object(m.jsxs)(B.a,{value:e.id,children:["    ",Object(m.jsxs)("div",{style:{margin:"15px",display:"flex",justifyContent:"space-between"},children:[Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)(q.a,{className:"products ".concat(n.root),image:e.cartimage,alt:e.cartimage,title:"Contemplative Reptile"})}),Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)(S.a,{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:e.title})}),Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)(S.a,{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:e.price})}),Object(m.jsx)("div",{className:n.header,children:Object(m.jsx)(S.a,{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",onChange:function(n){return function(e,n){var i=Object(z.a)(t);i.find((function(t){return t.title===e.title})).quantity=n,a(i)}(e,parseInt(n.target.value))},children:e.quantity+"kg"})}),Object(m.jsx)("div",{style:{width:"20%",textAlign:""},children:Object(m.jsx)(F.a,{className:n.header,children:Object(m.jsx)(o.a,{style:{lineHeight:"100px",padding:"10px"},className:n.header,size:"small",onClick:function(){return n=e,void a(t.filter((function(e){return e!==n})));var n},color:"primary",children:"Remove"})})})]})]},i)})),Object(m.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-around",color:"red",fontSize:25,padding:10},children:[Object(m.jsxs)(o.a,{style:{color:"black"},onClick:function(){d(!0)},children:[Object(m.jsx)(U.a,{}),"  Order Now"]}),Object(m.jsx)(G.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:s,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:Q.a,BackdropProps:{timeout:500},children:Object(m.jsx)(V.a,{in:s,children:Object(m.jsxs)("div",{className:n.paper,children:[Object(m.jsx)("h2",{className:n.button,children:"Order Info & address"}),Object(m.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var a={name:document.getElementById("name").value,email:document.getElementById("email").value.toLowerCase(),phone:document.getElementById("phone").value,address:document.getElementById("address").value,total:document.getElementById("Totalcost").innerHTML,orders:t};return u()({method:"post",url:b+"/order",data:a,withCredentials:!0}).then((function(e){e.data.status,alert(e.data.message)})).catch((function(e){alert(e.response.data.message)})),!1},children:[Object(m.jsx)("input",{className:n.input,id:"name",type:"text",placeholder:"Type name",required:!0})," ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:n.input,id:"email",type:"text",placeholder:"Type Email",required:!0})," ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:n.input,id:"phone",type:"text",placeholder:"Type Phone Number",required:!0})," ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:n.input,id:"address",type:"text",placeholder:"Type Complete and correct address",required:!0}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",className:n.button,children:" Send Order "})]})]})})}),Object(m.jsxs)("div",{id:"Totalcost",children:["Total Cost: $",t.reduce((function(e,t){return e+t.price*t.quantity}),0)]})]})]})]})]})}var $="products",_="cart";var Y=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)($),c=Object(p.a)(r,2),s=c[0],d=c[1],l=function(e){d(e)};return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)("header",{children:[Object(m.jsxs)("button",{style:{margin:"20px",backgroundColor:"#3f51b5",border:"none",padding:"10px",borderRadius:"4px",color:"#ffff"},onClick:function(){return l(_)},children:["Go to Cart (",a.reduce((function(e,t){return e+t.quantity}),0),")"]}),Object(m.jsx)("button",{style:{margin:"20px",backgroundColor:"#3f51b5",border:"none",padding:"10px",borderRadius:"4px",color:"#ffff"},onClick:function(){return l($)},children:"View Products"})]}),s===$&&Object(m.jsx)(H,{cart:a,setCart:i}),s===_&&Object(m.jsx)(M,{cart:a,setCart:i})]})};var K=a(37),X=(a(146),a(206)),Z=a(208),ee=a(200),te=a(192),ae=Object(d.a)((function(e){var t;return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #3f51b5",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},form:{backgroundColor:e.palette.background.paper,border:"2px solid #3f51b5",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},sizeeee:{fontSize:300},marginnn:{marginLeft:550,marginTop:200},input:{width:"100%",height:"25px",border:"none",backgroundColor:"#3f51b5",opacity:.9,color:"#ffffff",paddingLeft:"15px",marginBottom:"10px"},textArea:(t={width:"100%",height:"25px",border:"none",backgroundColor:"#3f51b5",opacity:.9,color:"#ffffff",paddingLeft:"15px",marginBottom:"10px",overflow:"hidden"},Object(K.a)(t,"border","1px solid gray"),Object(K.a)(t,"borderRadius","5px"),Object(K.a)(t,"height","60px"),t),color:{color:"#3f51b5"},radio:{"&$checked":{color:"#3f51b5"}},root:{maxWidth:345,width:345},media:{height:200},fontSize:{fontSize:18}}}));function ne(){var e,t=ae(),a=i.a.useState(!1),r=Object(p.a)(a,2),c=r[0],s=r[1],d=i.a.useState(""),l=Object(p.a)(d,2),h=l[0],x=l[1],O=Object(n.useState)([]),g=Object(p.a)(O,2),f=g[0],v=g[1],y=Object(n.useRef)(),w=Object(n.useRef)(),N=Object(n.useRef)();return Object(n.useEffect)((function(){u()({method:"get",url:"http://localhost:5000/getProducts",withCredentials:!0}).then((function(e){console.log(e.data.data),v(e.data.data)})).catch((function(e){console.log(e)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{className:t.marginnn,style:{color:"#3f51b5"},children:Object(m.jsx)(U.a,{className:t.sizeeee,onClick:function(){s(!0)}})}),Object(m.jsx)(G.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:c,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:Q.a,BackdropProps:{timeout:500},children:Object(m.jsx)(V.a,{in:c,children:Object(m.jsxs)("div",{className:t.form,children:[Object(m.jsx)("h2",{id:"transition-modal-title",className:t.color,children:"Cart Form"}),Object(m.jsx)("p",{id:"transition-modal-description",className:t.color,children:"Read careFully before Upload Cart"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("raised-button-file"),a=new FormData;a.append("myFile",t.files[0]),a.append("title",w.current.value),a.append("price",y.current.value),a.append("description",N.current.value),a.append("avalablity",h),u()({method:"post",url:b+"/uploadcart",data:a,headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)}))},style:{padding:"10px 30px 10px 10px"},className:t.paper,children:[Object(m.jsx)("input",{className:t.input,type:"text",ref:w,placeholder:"Title"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:t.input,type:"text",ref:y,placeholder:"Price"}),Object(m.jsx)("br",{}),Object(m.jsx)("textarea",{className:t.textArea,ref:N,rowsMax:4,"aria-label":"maximum height",placeholder:"Type a short Description about cart"}),Object(m.jsx)("br",{}),Object(m.jsx)(te.a,{component:"fieldset",className:t.color,children:Object(m.jsxs)(Z.a,{"aria-label":"gender",name:"gender1",value:h,onChange:function(e){x(e.target.value)},children:[Object(m.jsx)(ee.a,{value:"Available",control:Object(m.jsx)(X.a,{classes:{root:t.radio,checked:t.checked}}),label:"Available"}),Object(m.jsx)(ee.a,{value:"UnAvailable Now",control:Object(m.jsx)(X.a,{classes:{root:t.radio,checked:t.checked}}),label:"Un Available"})]})}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{accept:"image/*",className:t.input,style:{display:"none"},id:"raised-button-file",multiple:!0,type:"file"}),Object(m.jsx)("label",(e={className:t.button,htmlFor:"raised-button-file"},Object(K.a)(e,"className",t.color),Object(K.a)(e,"children","Upload Image"),e)),Object(m.jsx)(o.a,{variant:"raised",type:"submit",className:t.color,children:"  Upload Cart "})]})]})})}),Object(m.jsx)(j.a,{maxWidth:"xl",children:f.map((function(e,a){return Object(m.jsx)(B.a,{value:e.id,className:"products ".concat(t.root),style:{display:"inline-block",margin:"15px"},children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(W.a,{children:Object(m.jsx)(S.a,{variant:"body2",style:{color:"red"},id:"title",component:"p",children:e.availability})}),Object(m.jsx)(q.a,{className:t.media,image:e.cartimage,title:"Contemplative Reptile"}),Object(m.jsxs)(W.a,{children:[Object(m.jsx)(S.a,{variant:"h5",color:"primary",id:"title",component:"h2",children:e.title}),Object(m.jsx)(S.a,{id:"description",variant:"body2",color:"primary",component:"p",children:e.description}),Object(m.jsxs)(S.a,{id:"price",variant:"body2",color:"primary",component:"p",children:["Rs:",e.price,"/="]})]})]})},a)}))})]})}var ie=a(202),re=a(203),ce=a(201),se=a(71),de=a.n(se);var le=function(){var e=Object(A.f)();return Object(m.jsx)(o.a,{style:{color:"white",textDecoration:"none"},onClick:function(){u()({method:"post",url:b+"/logout",withCredentials:!0}).then((function(t){200===t.status&&e.push("/login")})).catch((function(e){console.log(e.data.message)}))},type:"submit",children:" Logout "})};Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var oe=a(19),je=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var he=function(){var e=f(),t=(v(),je());return Object(A.f)(),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("form",{children:Object(m.jsx)(ie.a,{position:"static",children:Object(m.jsxs)(re.a,{children:[null===e.role?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(ce.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:[" ",Object(m.jsx)(de.a,{})," "]}),Object(m.jsx)(S.a,{variant:"h6",className:t.title,children:" Sweet Place "}),Object(m.jsxs)(oe.b,{style:{color:"white",textDecoration:"none"},to:"/",children:["  ",Object(m.jsx)(o.a,{color:"inherit",style:{textTransform:"capitalize"},children:"Login"})]}),Object(m.jsxs)(oe.b,{style:{color:"white",textDecoration:"none"},to:"/signup",children:["  ",Object(m.jsx)(o.a,{color:"inherit",style:{textTransform:"capitalize"},children:"Sign up"})]})]}):null,"user"===e.role?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(ce.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:[" ",Object(m.jsx)(de.a,{})," "]}),Object(m.jsx)(S.a,{variant:"h6",className:t.title,children:" Sweet Place "}),Object(m.jsx)(oe.b,{style:{textDecoration:"none"},to:"/",children:Object(m.jsx)(o.a,{style:{color:"white",textDecoration:"none",textTransform:"capitalize"},children:"Dashboard"})}),Object(m.jsx)(oe.b,{style:{textDecoration:"none"},to:"/my-all-orders",children:Object(m.jsx)(o.a,{style:{color:"white",textDecoration:"none",textTransform:"capitalize"},children:"my orders"})}),Object(m.jsx)(le,{})]}):null,"admin"===e.role?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(ce.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:[" ",Object(m.jsx)(de.a,{})," "]}),Object(m.jsx)(S.a,{variant:"h6",className:t.title,children:" Sweet Place "}),Object(m.jsxs)(oe.b,{style:{textDecoration:"none"},to:"/",children:["  ",Object(m.jsx)(o.a,{style:{color:"white",textDecoration:"none",textTransform:"capitalize"},children:"Allorders"})]}),Object(m.jsxs)(oe.b,{style:{textDecoration:"none"},to:"/AddShopCard",children:["  ",Object(m.jsx)(o.a,{style:{color:"white",textDecoration:"none",textTransform:"capitalize"},children:"AddShop Card"})]}),Object(m.jsxs)(oe.b,{style:{textDecoration:"none"},to:"/Accepted-order",children:["  ",Object(m.jsx)(o.a,{style:{color:"white",textDecoration:"none",textTransform:"capitalize"},children:"Accepted Order"})]}),Object(m.jsxs)(oe.b,{style:{textDecoration:"none"},to:"/Delivered-order",children:["  ",Object(m.jsx)(o.a,{style:{color:"white",textDecoration:"none",textTransform:"capitalize"},children:"Delivered Order"})]}),Object(m.jsx)(le,{})]}):null]})})})})},be=Object(d.a)((function(e){return{root:{maxWidth:345,width:70,height:60},media:{height:100},fontSize:{fontSize:18},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},header:{width:"15%",textAlign:"center",margin:"0px"}}}));function pe(){var e=f(),t=(v(),be()),a=Object(n.useState)([]),i=Object(p.a)(a,2),r=i[0],c=i[1];Object(n.useEffect)((function(){u()({method:"get",url:b+"/admin/getorders/review",withCredentials:!0}).then((function(e){200===e.status&&c(e.data.data)})).catch((function(e){console.log(e)}))}),[]);return console.log(e),Object(m.jsxs)("div",{style:{margin:20},children:[Object(m.jsx)("h1",{children:"All Order With delever detail"}),Object(m.jsx)("div",{maxWidth:"xl",children:Object(m.jsx)("div",{style:{border:"2px solid #3f51b5",borderRadius:"10px"},children:r.map((function(e,a){return Object(m.jsxs)("div",{style:{border:"2px solid #3f51b5",backgroundColor:"#bacaff",margin:20,padding:20,borderRadius:10},value:e.id,children:[Object(m.jsx)("h1",{children:"Order Detail"}),Object(m.jsxs)("div",{style:{margin:"15px",display:"flex",justifyContent:"space-between",height:70},children:[Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Image"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Name"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"sweet description"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Price"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Quantity in kg"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"total"})})]}),e.orders.map((function(e,a){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{value:e.id,children:Object(m.jsxs)("div",{style:{margin:"0px",display:"flex",justifyContent:"space-between",textAlign:"center",height:70},children:[Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("img",{className:"products ".concat(t.root),src:e.cartimage,alt:e.cartimage})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:e.title})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:e.description})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:e.price})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsxs)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:[e.quantity,"kg"]})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:e.quantity*e.price})})]})},a)})})),Object(m.jsx)("h1",{children:"Reciever Detail"}),Object(m.jsxs)("div",{style:{padding:20,textAlign:"left"},children:[Object(m.jsxs)("div",{children:["Name:  ",e.name]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Phone Number:  ",e.phone]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Email: ",e.email]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Address: ",e.address]})," ",Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:e.total})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{style:{margin:"20px",backgroundColor:"#3f51b5",border:"none",padding:"10px",borderRadius:"4px",color:"#ffff"},size:"small",onClick:function(){return function(e){u()({method:"post",url:b+"/admin/getorders/updatestatus",data:{id:e._id,status:"Your Order Accepeted"},withCredentials:!0}).then((function(e){200===e.status&&console.log(e.data.message)})).catch((function(e){console.log(e)}))}(e)},color:"primary",children:"Accept Order"}),Object(m.jsx)("button",{style:{margin:"20px",backgroundColor:"#3f51b5",border:"none",padding:"10px",borderRadius:"4px",color:"#ffff"},size:"small",onClick:function(){return t=e,void c(r.filter((function(e){return e!==t})));var t},color:"primary",children:"Remove Order"})]})]})]},a)}))})})]})}var xe=Object(d.a)((function(e){return{root:{maxWidth:345,width:70,height:60},media:{height:100},fontSize:{fontSize:18},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},header:{width:"15%",textAlign:"center",margin:"0px"}}}));function ue(){var e=f(),t=(v(),xe()),a=Object(n.useState)([]),i=Object(p.a)(a,2),r=i[0],c=i[1];Object(n.useEffect)((function(){u()({method:"get",url:b+"/admin/getorders/accepted",withCredentials:!0}).then((function(e){200===e.status&&c(e.data.data)})).catch((function(e){console.log(e)}))}),[]);return console.log(e),Object(m.jsxs)("div",{style:{margin:20},children:[Object(m.jsx)("h1",{children:"All Order With delever detail"}),Object(m.jsx)("div",{maxWidth:"xl",children:Object(m.jsx)("div",{style:{border:"2px solid #3f51b5",borderRadius:"10px"},children:r.map((function(e,a){return Object(m.jsxs)("div",{style:{border:"2px solid #3f51b5",backgroundColor:"#bacaff",margin:20,padding:20,borderRadius:10},children:[Object(m.jsx)("h1",{children:"Order Detail"}),Object(m.jsxs)("div",{style:{margin:"15px",display:"flex",justifyContent:"space-between",height:70},children:[Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Image"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Name"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"sweet description"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Price"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Quantity in kg"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"total"})})]}),e.orders.map((function(e,a){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{style:{margin:"0px",display:"flex",justifyContent:"space-between",textAlign:"center",height:70},children:[Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("img",{className:"products ".concat(t.root),src:e.cartimage,alt:e.cartimage})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:e.title})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:e.description})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:e.price})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsxs)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:[e.quantity,"kg"]})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:e.quantity*e.price})})]})},a)})})),Object(m.jsx)("h1",{children:"Reciever Detail"}),Object(m.jsxs)("div",{style:{padding:20,textAlign:"left"},children:[Object(m.jsxs)("div",{children:["Name:  ",e.name]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Phone Number:  ",e.phone]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Email: ",e.email]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Address: ",e.address]})," ",Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:e.total})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{style:{margin:"20px",backgroundColor:"#3f51b5",border:"none",padding:"10px",borderRadius:"4px",color:"#ffff"},size:"small",onClick:function(){return function(e){u()({method:"post",url:b+"/admin/getorders/confirmorder",data:{id:e._id,status:"your Order has been deliverd"},withCredentials:!0}).then((function(e){200===e.status&&(console.log(e.data.message),alert(e.data.message))})).catch((function(e){console.log(e)}))}(e)},color:"primary",children:"Delivered"}),Object(m.jsx)("button",{style:{margin:"20px",backgroundColor:"#3f51b5",border:"none",padding:"10px",borderRadius:"4px",color:"#ffff"},size:"small",onClick:function(){return t=e,void c(r.filter((function(e){return e!==t})));var t},color:"primary",children:"Remove Order"})]})]})]},a)}))})})]})}var me=Object(d.a)((function(e){return{root:{maxWidth:345,width:70,height:60},media:{height:100},fontSize:{fontSize:18},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},header:{width:"15%",textAlign:"center",margin:"0px"}}}));function Oe(){var e=f(),t=(v(),me()),a=Object(n.useState)([]),i=Object(p.a)(a,2),r=i[0],c=i[1];return Object(n.useEffect)((function(){u()({method:"get",url:b+"/admin/getorders/delivering",withCredentials:!0}).then((function(e){200===e.status&&c(e.data.data)})).catch((function(e){console.log(e)}))}),[]),console.log(e),Object(m.jsxs)("div",{style:{margin:20},children:[Object(m.jsx)("h1",{children:"All Order With delever detail"}),Object(m.jsx)("div",{maxWidth:"xl",children:Object(m.jsx)("div",{style:{border:"2px solid #3f51b5",borderRadius:"10px"},children:r.map((function(e,a){return Object(m.jsxs)("div",{style:{border:"2px solid #3f51b5",backgroundColor:"#bacaff",margin:20,padding:20,borderRadius:10},value:e.id,children:[Object(m.jsx)("h1",{children:"Order Detail"}),Object(m.jsxs)("div",{style:{margin:"15px",display:"flex",justifyContent:"space-between",height:70},children:[Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Image"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Name"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"sweet description"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Price"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"Sweet Quantity in kg"})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("h2",{children:"total"})})]}),e.orders.map((function(e,a){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{value:e.id,children:Object(m.jsxs)("div",{style:{margin:"0px",display:"flex",justifyContent:"space-between",textAlign:"center",height:70},children:[Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("img",{className:"products ".concat(t.root),src:e.cartimage,alt:e.cartimage})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:e.title})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:e.description})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:e.price})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsxs)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:[e.quantity,"kg"]})}),Object(m.jsx)("div",{className:t.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:e.quantity*e.price})})]})},a)})})),Object(m.jsx)("h1",{children:"Reciever Detail"}),Object(m.jsxs)("div",{style:{padding:20,textAlign:"left"},children:[Object(m.jsxs)("div",{children:["Name:  ",e.name]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Phone Number:  ",e.phone]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Email: ",e.email]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:["Address: ",e.address]})," ",Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:e.total})," ",Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{style:{color:"#3f51b5"},children:"Delivered"})})]})]},a)}))})})]})}var ge=a(105),fe=a.n(ge),ve=(a(148),Object(d.a)((function(e){return{root:{maxWidth:345,width:70,height:60},media:{height:100},fontSize:{fontSize:18},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},header:{width:"15%",textAlign:"center",margin:"0px"}}})));function ye(){var e=ve(),t=Object(n.useState)([]),a=Object(p.a)(t,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){u()({method:"get",url:b+"/getorders",withCredentials:!0}).then((function(e){console.log(e.data),200===e.status&&r(e.data.data)})).catch((function(e){console.log(e)}))}),[]),console.log(i),Object(m.jsxs)("div",{style:{margin:20},children:[Object(m.jsx)("h1",{style:{color:"#3f51b5"},children:"This is my all order"}),Object(m.jsx)("div",{maxWidth:"xl",children:Object(m.jsx)("div",{style:{border:"2px solid #3f51b5",borderRadius:"10px"},children:i.map((function(t,a){return Object(m.jsxs)("div",{style:{border:"2px solid #3f51b5",backgroundColor:"#bacaff",margin:20,padding:20,borderRadius:10},children:[Object(m.jsx)("div",{children:Object(m.jsxs)("p",{style:{color:"red"},children:[Object(m.jsx)("b",{children:"Order Status : "})," ",t.status," "]})}),Object(m.jsxs)("div",{style:{color:"red"},children:[Object(m.jsx)("b",{children:"Ordered Time : "}),Object(m.jsx)(fe.a,{fromNow:!0,children:t.createdOn})]}),Object(m.jsx)("br",{}),t.orders.map((function(t,a){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{style:{margin:"0px",display:"flex",justifyContent:"space-between",textAlign:"center",height:70},children:[Object(m.jsx)("div",{className:e.header,children:Object(m.jsx)("img",{className:"products ".concat(e.root),style:{borderRadius:"5px"},src:t.cartimage,alt:t.cartimage})}),Object(m.jsx)("div",{className:e.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:t.title})}),Object(m.jsx)("div",{className:e.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},variant:"h5",id:"title",component:"h2",children:t.description})}),Object(m.jsx)("div",{className:e.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:t.price})}),Object(m.jsx)("div",{className:e.header,children:Object(m.jsxs)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:[t.quantity,"kg"]})}),Object(m.jsx)("div",{className:e.header,children:Object(m.jsx)("span",{style:{lineHeight:"100px",padding:"10px"},id:"price",variant:"body2",component:"h2",children:t.quantity*t.price})})]})},a)})})),Object(m.jsx)("div",{style:{textAlign:"right",paddingRight:90},children:Object(m.jsx)("h2",{children:t.total})})]},a)}))})})]})}var we=function(){var e=f();return v(),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(oe.a,{children:[Object(m.jsx)(he,{}),null===e.role?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A.b,{exact:!0,path:"/",children:Object(m.jsx)(D,{})}),Object(m.jsx)(A.b,{path:"/signup",children:Object(m.jsx)(I,{})}),Object(m.jsx)(A.b,{path:"*",children:Object(m.jsx)(A.a,{to:"/"})})]}):null,"user"===e.role?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A.b,{exact:!0,path:"/",children:Object(m.jsx)(Y,{})}),Object(m.jsx)(A.b,{path:"/my-all-orders",children:Object(m.jsx)(ye,{})}),Object(m.jsx)(A.b,{path:"*",children:Object(m.jsx)(A.a,{to:"/"})})]}):null,"admin"===e.role?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A.b,{path:"/AddShopCard",children:Object(m.jsx)(ne,{})}),Object(m.jsx)(A.b,{exact:!0,path:"/",children:Object(m.jsx)(pe,{})}),Object(m.jsx)(A.b,{exact:!0,path:"/Accepted-order",children:Object(m.jsx)(ue,{})}),Object(m.jsx)(A.b,{exact:!0,path:"/Delivered-order",children:Object(m.jsx)(Oe,{})}),Object(m.jsx)(A.b,{path:"*",children:Object(m.jsx)(A.a,{to:"/"})})]}):null]})})};var Ne=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y,{children:Object(m.jsx)(we,{})})})};c.a.render(Object(m.jsx)(Ne,{}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.bf865bd1.chunk.js.map