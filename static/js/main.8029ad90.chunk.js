(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('[{"id":1,"title":"Stargazr","technology":"Front End Project","img":"/react-portfolio/images/stargazr.jpg","githubUrl":"https://github.com/apklopfenstein/stargazr","deployUrl":"https://apklopfenstein.github.io/stargazr/"},{"id":2,"title":"Mixer","technology":"Full Stack Project","img":"/react-portfolio/images/mixer.jpg","githubUrl":"https://github.com/apklopfenstein/mixer","deployUrl":"https://afternoon-reef-59917.herokuapp.com/"},{"id":3,"title":"Fairstreem","technology":"MERN/SPA Project","img":"/react-portfolio/images/fairstreem.jpg","githubUrl":"https://github.com/Team-Dreem/fairstreem-mern","deployUrl":"https://fairstreem.herokuapp.com/"},{"id":4,"title":"Weather Dashboard","technology":"Server Side API","img":"/react-portfolio/images/weather-dashboard.jpg","githubUrl":"https://github.com/apklopfenstein/weather-dashboard","deployUrl":"https://apklopfenstein.github.io/weather-dashboard/"},{"id":5,"title":"Note Taker","technology":"Express","img":"/react-portfolio/images/note-taker.jpg","githubUrl":"https://github.com/apklopfenstein/note-taker","deployUrl":"https://limitless-refuge-20384.herokuapp.com/"},{"id":6,"title":"Tech Blog","technology":"MVC","img":"/react-portfolio/images/tech-blog.jpg","githubUrl":"https://github.com/apklopfenstein/tech-blog","deployUrl":"https://murmuring-fortress-02595.herokuapp.com/"},{"id":7,"title":"Pizza Hunt","technology":"NoSQL","img":"/react-portfolio/images/pizza-hunt.jpg","githubUrl":"https://github.com/apklopfenstein/pizza-hunt","deployUrl":"https://shielded-ravine-13933.herokuapp.com/"}]')},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var c=r(0),i=r(1),n=r.n(i),s=r(23),a=r.n(s),l=(r(31),r(32),r(11));r(33);var o=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{exact:!0,to:"/",activeClassName:"selected",children:"About Me"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/portfolio",activeClassName:"selected",children:"Portfolio"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/contact",activeClassName:"selected",children:"Contact Me"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/resume",activeClassName:"selected",children:"Resume"})})]})})};r(39);var j=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"Alyssa Klopfenstein"}),Object(c.jsx)(o,{})]})},h=(r(40),r.p+"static/media/profile.97a95c23.jpg");var b=function(){return Object(c.jsxs)("section",{id:"about-me",children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:h,alt:"portrait"}),Object(c.jsx)("p",{children:"Hi, I'm Alyssa Klopfenstein! I'm currently a stay at home parent with 2 children who are are both about to be in school full time. I have a growing interest in web development and am hoping to use what I learn to reenter the work force. I'd also like to be able to co-create something with my husband."}),Object(c.jsx)("p",{children:"I currently live in Texas and have 2 dogs. I love to watch my kids and husband play hockey. We're also big Columbus Blue Jacket fans! My favorite vacations are to the beach and I love pop punk music. It's nice to meet you!"})]})]})},d=(r(41),r(9));var p=function(e){var t=e.project;return Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Img,{variant:"top",src:t.img}),Object(c.jsxs)(d.a.Body,{children:[Object(c.jsx)(d.a.Title,{children:t.title}),Object(c.jsx)(d.a.Text,{children:t.technology})]}),Object(c.jsxs)(d.a.Body,{children:[Object(c.jsx)(d.a.Link,{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub Repo"}),Object(c.jsx)(d.a.Link,{href:t.deployUrl,target:"_blank",rel:"noopener noreferrer",children:"Deployed App"})]})]})},u=r(25);var m=function(){return Object(c.jsxs)("section",{id:"work",children:[Object(c.jsx)("h2",{children:"Portfolio"}),Object(c.jsx)("div",{className:"projects",children:u.map((function(e){return Object(c.jsx)(p,{project:e},e.id)}))})]})},x=r(14),O=r(20),g=r(21),f=(r(42),r(15));var v=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(g.a)(e,2),r=t[0],n=t[1],s=r.name,a=r.email,l=r.message,o=Object(i.useState)(""),j=Object(g.a)(o,2),h=j[0],b=j[1];function d(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),b(t?"":"Your email is invalid.")}else e.target.value.length?b(""):b("".concat(e.target.name," is required."));h||n(Object(O.a)(Object(O.a)({},r),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{className:"contact",children:"Contact Me"}),Object(c.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(r)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{type:"text",name:"name",defaultValue:s,onBlur:d})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(c.jsx)("input",{type:"email",name:"email",defaultValue:a,onBlur:d})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{name:"message",rows:"5",defaultValue:l,onBlur:d})]}),h&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:h})}),Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{type:"submit",children:"Submit"})})]})]})};r(43);var k=function(){return Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsxs)("div",{className:"front-end",children:[Object(c.jsx)("h2",{children:"Front End"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"HTML"}),Object(c.jsx)("li",{children:"CSS"}),Object(c.jsx)("li",{children:"JavaScript"}),Object(c.jsx)("li",{children:"jQuery"}),Object(c.jsx)("li",{children:"React"}),Object(c.jsx)("li",{children:"Bootstrap"}),Object(c.jsx)("li",{children:"Responsive Design"})]})]}),Object(c.jsxs)("div",{className:"back-end",children:[Object(c.jsx)("h2",{children:"Back End"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"APIs"}),Object(c.jsx)("li",{children:"Node"}),Object(c.jsx)("li",{children:"Express"}),Object(c.jsx)("li",{children:"MySQL/Sequelize"}),Object(c.jsx)("li",{children:"MongoDB"})]})]})]}),Object(c.jsx)(f.a,{className:"resume",href:"https://docs.google.com/document/d/1YaCfj7-VyA2lQiz14NTqH-l3gSrQwMHH-sIelYoIS8E/export?format=pdf ",children:"View My Resume"})]})},y=(r(44),r(12));var w=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/apklopfenstein/",children:Object(c.jsx)(y.a,{size:"36px"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/alyssa-klopfenstein-a85b231aa/",children:Object(c.jsx)(y.c,{size:"36px"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/aklopfenstein/",children:Object(c.jsx)(y.b,{size:"36px"})})})]}),Object(c.jsx)("h2",{className:"footer-text",children:"Alyssa Klopfenstein \xa9 2020"})]})},S=r(3);var N=function(){return Object(c.jsxs)(l.a,{basename:"/",children:[Object(c.jsx)(j,{}),Object(c.jsx)("main",{children:Object(c.jsxs)(S.c,{children:[Object(c.jsx)(S.a,{exact:!0,path:"/",children:Object(c.jsx)(b,{})}),Object(c.jsx)(S.a,{path:"/portfolio",children:Object(c.jsx)(m,{})}),Object(c.jsx)(S.a,{path:"/contact",children:Object(c.jsx)(v,{})}),Object(c.jsx)(S.a,{path:"/resume",children:Object(c.jsx)(k,{})})]})}),Object(c.jsx)(w,{})]})},z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(t){var r=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),c(e),i(e),n(e),s(e)}))};a.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),z()}},[[45,1,2]]]);
//# sourceMappingURL=main.8029ad90.chunk.js.map