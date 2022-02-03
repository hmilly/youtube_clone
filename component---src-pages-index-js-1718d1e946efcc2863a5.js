(self.webpackChunkyoutube_clone=self.webpackChunkyoutube_clone||[]).push([[678],{7757:function(e,t,n){e.exports=n(5666)},72:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,a,i,o,l,c=n(7294),u=n(5444),s=n(1880),m=n(9),p=m.ZP.header(r||(r=(0,s.Z)(["\n  grid-area: Header;\n  display: grid;\n  grid-template-columns:\n    minmax(125px, 225px)\n    minmax(100px, 740px)\n    minmax(40px, 210px);\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n  gap: 10px;\n  .left {\n    display: grid;\n    grid-template-columns: 50px auto;\n    align-items: center;\n    justify-items: center;\n    button {\n      width: 100%;\n      background-color: white;\n      border: none;\n    }\n    a,\n    img {\n      padding: 0;\n      width: 120px;\n      max-width: 120px;\n      height: auto;\n    }\n  }\n  .mid {\n    display: grid;\n    grid-template-columns: minmax(60px, 720px) 64px 40px;\n    grid-template-rows: 50px;\n    padding: 0 40px;\n    justify-content: center;\n    input {\n      padding: 1% 2%;\n      font-size: 16px;\n      color: black;\n      border: solid 1px rgba(223, 222, 222, 0.871);\n    }\n    button {\n      width: 100%;\n      justify-self: start;\n      background-color: #f8f8f8;\n      border: solid 1px rgba(223, 222, 222, 0.871);\n      &:last-child {\n        border: none;\n        background-color: white;\n      }\n    }\n    span {\n      font-size: 20px;\n      height: auto;\n    }\n  }\n\n  .right {\n    display: grid;\n    grid-template-columns: 40px 40px 130px;\n    grid-template-rows: 50px;\n    align-items: center;\n    justify-content: end;\n    button {\n      border: none;\n      background-color: white;\n    }\n  }\n\n  // **** //Media Query // **** //\n  @media (max-width: 670px) {\n    justify-items: center;\n    .left button,\n    .mid input,\n    .mid button:nth-child(3),\n    .right button {\n      display: none;\n    }\n    .left {\n      justify-self: space-around;\n    }\n    .right {\n      justify-self: start;\n    }\n    .mid {\n      justify-self: end;\n    }\n    .mid,\n    .right {\n      grid-template-columns: 40px;\n      padding: 0;\n      button {\n        background-color: white;\n        border: none;\n      }\n    }\n  }\n  // **** //Media Query // **** //\n"]))),d=m.ZP.nav(a||(a=(0,s.Z)(["\n  grid-area: sideNav;\n  height: 100%;\n  width: ",";\n  padding-right: ",";\n  overflow: hidden;\n  &:hover {\n    overflow: scroll;\n  }\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 0;\n    padding: 2px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: grey;\n    border-radius: 10px;\n  }\n  h4 {\n    width: 210px;\n    font-size: 14px;\n    padding: 22px 20px 0;\n    color: rgb(114, 113, 113);\n  }\n\n  // **** //Media Query // **** //\n  @media (max-width: 575px) {\n    display: none;\n    width: 0;\n  }\n  // **** //Media Query // **** //\n"])),(function(e){return e.sm?"90px":"255px"}),(function(e){return e.sm?"0":"10px"})),f=m.ZP.ul(i||(i=(0,s.Z)(["\n  padding: ",";\n  border-bottom: ",";\n  li,\n  a {\n    display: grid;\n    list-style-type: none;\n    text-decoration: none;\n    align-items: center;\n    grid-template-columns: ",";\n    grid-template-rows: ",";\n    justify-items: ",";\n    font-size: ",";\n    padding: ",";\n    &:hover {\n      background-color: rgb(240, 239, 239);\n      cursor: pointer;\n    }\n    &:active {\n      text-decoration: none;\n    }\n    /* imgs */\n    img {\n      width: 24px;\n      height: 30px;\n    }\n    h2 {\n      background-color: white;\n    }\n    p {\n      justify-self: ",";\n      color: black;\n      text-decoration: none !important;\n    }\n  }\n"])),(function(e){return e.sm?"0":"0 10px"}),(function(e){return e.sm?"none":"1px solid rgba(213, 213, 213, 0.618);"}),(function(e){return e.sm?"90px":"50px 150px"}),(function(e){return e.sm?"repeat(2, 1fr);":"44px"}),(function(e){return e.sm?"center":"start"}),(function(e){return e.sm?"12px":"17px"}),(function(e){return e.sm?"12px 0":"0 20px"}),(function(e){return e.sm?"center":"left"})),g=m.ZP.section(o||(o=(0,s.Z)(["\n  width: auto;\n  padding: 12px;\n  h5 {\n    display: inline-block;\n    position: relative;\n    margin: 3px;\n    padding: 0;\n    font-size: 14px;\n    color: #606060;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgb(148, 148, 148);\n  }\n  &:last-child {\n    padding: 15px;\n  }\n"]))),h=m.ZP.section(l||(l=(0,s.Z)(["\n  display: grid;\n  align-content: space-evenly;\n  justify-items: start;\n  height: 133px;\n  padding: 10px 10px 10px 30px;\n  border-bottom: 1px solid rgba(213, 213, 213, 0.618);\n  p {\n    font-size: 16px;\n    color: black;\n  }\n  a {\n    padding: 0;\n  }\n"]))),y=n(6125),b=function(e){var t=e.setLgnav,r=e.lgNav;return c.createElement(p,null,c.createElement("div",{className:"left"},c.createElement("button",{onClick:function(){return t(!r)}},c.createElement("span",{role:"img","aria-label":"dropdown"},"☰")),c.createElement(u.rU,{to:"/"},c.createElement(y.S,{src:"../images/yt.png",alt:"Youtube logo",__imageData:n(7180)}))),c.createElement("form",{className:"mid"},c.createElement("input",{placeholder:"Search"}),c.createElement("button",null,c.createElement("span",{role:"img","aria-label":"dropdown"},"🔍")),c.createElement("button",null,c.createElement("span",{role:"img","aria-label":"dropdown"},"🎤"))),c.createElement("div",{className:"right"},c.createElement("button",null,c.createElement("span",{role:"img","aria-label":"grid"},"▦")),c.createElement("button",null,c.createElement("span",{role:"img","aria-label":"3 dots"},"⋮")),c.createElement(u.rU,{id:"blueBtn",to:"/signin"},c.createElement("span",{role:"img","aria-label":"profile"},"👤"),c.createElement("p",null,"SIGN IN"))))},E=function(e){var t=e.tag,n=e.img,r=e.name;return void 0!==t?c.createElement(u.rU,{to:""+t,activeStyle:{backgroundColor:"#dedede",fontWeight:600}},c.createElement("img",{src:"/"+n,alt:""+r}),c.createElement("p",null,r)):c.createElement("li",null,c.createElement("img",{src:"/"+n,alt:""+r}),c.createElement("p",null,r))},v=function(e){var t=e.lgNav;return c.createElement(d,{sm:!t},c.createElement(c.Fragment,null,c.createElement(f,{sm:!t},c.createElement(E,{tag:"/",img:"yt-grey.png",name:"Home"}),c.createElement(E,{tag:"/explore",img:"compass.png",name:"Explore"}),c.createElement(E,{tag:"/subscriptions",img:"subscriptions.png",name:"Subscriptions"})),c.createElement(f,{sm:!t},c.createElement(E,{tag:"/library",img:"lib.png",name:"Library"}),c.createElement(E,{tag:"/history",img:"history.png",name:"History"}))),t&&c.createElement(c.Fragment,null,c.createElement(h,null,c.createElement("p",null,"Sign in to like videos, comment, and subscribe"),c.createElement(u.rU,{id:"blueBtn",to:"/signin"},c.createElement("span",{role:"img","aria-label":"profile"},"👤"),c.createElement("p",null,"SIGN IN"))),c.createElement("h4",null,"BEST OF YOUTUBE"),c.createElement(f,null,c.createElement(E,{img:"music.png",name:"Music"}),c.createElement(E,{img:"sport.png",name:"Sports"}),c.createElement(E,{img:"game.png",name:"Gaming"}),c.createElement(E,{img:"movie.png",name:"Movie & Shows"}),c.createElement(E,{img:"news.png",name:"News"}),c.createElement(E,{img:"live.png",name:"Live"}),c.createElement(E,{img:"fash.png",name:"Fashion & Beauty"}),c.createElement(E,{img:"learn.png",name:"Learning"}),c.createElement(E,{img:"yt-red.png",name:"Spotlight"}),c.createElement(E,{img:"vr.png",name:"360 Video"})),c.createElement(f,null,c.createElement(E,{img:"plus.png",name:"Browse Channels"})),c.createElement("h4",null,"MORE FROM YOUTUBE"),c.createElement(f,null,c.createElement(E,{img:"yt-grey.png",name:"YouTube Premium"}),c.createElement(E,{img:"live-grey.png",name:"Live"})),c.createElement(f,null,c.createElement(E,{img:"setting.png",name:"Settings"}),c.createElement(E,{img:"flag.png",name:"Report History"}),c.createElement(E,{img:"help.png",name:"Help"}),c.createElement("li",null,c.createElement("h2",null,"!"),c.createElement("p",null,"Send Feedback"))),c.createElement(g,null,c.createElement("h5",null,"About"),c.createElement("h5",null,"Press"),c.createElement("h5",null,"Copyright"),c.createElement("h5",null,"Contact us"),c.createElement("h5",null,"Creators"),c.createElement("h5",null,"Advertise"),c.createElement("h5",null,"Developers")),c.createElement(g,null,c.createElement("h5",null,"Terms"),c.createElement("h5",null,"Privacy"),c.createElement("h5",null,"Policy & Safety"),c.createElement("h5",null,"How YouTube works"),c.createElement("h5",null,"Test new features")),c.createElement(g,null,c.createElement("p",null,"© 2021 Google LLC"))))},x=n(5081),w=function(e){var t=e.children,n=(0,c.useState)(),r=n[0],a=n[1],i=(0,c.useState)(!0),o=i[0],l=i[1];return(0,c.useEffect)((function(){l(!(r<=1330))}),[r]),(0,c.useLayoutEffect)((function(){window.addEventListener("resize",(function(){return a(window.innerWidth)}))})),c.createElement("main",{className:"index"},c.createElement(x.n,null),c.createElement("title",null,"Youtube clone"),c.createElement(b,{lgNav:o,setLgnav:l}),c.createElement("main",{className:"sideNavContainer"},c.createElement(v,{lgNav:o}),t))}},2939:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,a)}n.r(t),n.d(t,{default:function(){return x}});var a,i,o,l=n(7757),c=n.n(l),u=n(7294),s=n(72),m=n(5081),p=n(1880),d=n(9),f=d.ZP.div(a||(a=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 50px 1fr;\n  gap: 20px;\n  margin: 15px 5%;\n  border-bottom: 4px solid rgb(209, 209, 209);\n\n  h1 {\n    color: black;\n    padding: 20px;\n    width: 100%;\n    font-size: 24px;\n  }\n  .videos {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-template-rows: auto;\n    min-width: 300px;\n    gap: 10px;\n    align-content: flex-start;\n    justify-content: flex-start;\n  }\n"]))),g=d.ZP.div(i||(i=(0,p.Z)(["\n  overflow: hidden;\n  padding-bottom: 100%;\n  position: relative;\n  height: 100%;\n  iframe {\n    position: absolute;\n    height: 70%;\n    width: 100%;\n  }\n"]))),h=d.ZP.section(o||(o=(0,p.Z)(["\n  position: absolute;\n  top: 72%;\n  height: auto;\n  display: grid;\n  grid-template-columns: 34px 1fr;\n  grid-template-rows: 1fr;\n  gap: 10px;\n\n  .img {\n    span {\n      height: 34px;\n      border: solid purple 1px;\n      background: purple;\n      font-size: 22px;\n      border-radius: 50%;\n    }\n  }\n  .details {\n    display: grid;\n    grid-template-rows: 1.5fr 1fr 1fr;\n    gap: 2px;\n    h2 {\n      font-size: 120%;\n    }\n    div {\n      display: grid;\n      grid-template-columns: auto 15px 1fr;\n      grid-template-rows: 1fr;\n      align-items: center;\n      justify-items: center;\n      gap: 5px;\n      p {\n        white-space: nowrap;\n        font-size: 100%;\n        color: grey;\n        justify-self: start;\n      }\n      span {\n        width: 14px;\n        height: 14px;\n        font-size: 10px;\n        border-radius: 50%;\n        background-color: grey;\n        color: white;\n      }\n    }\n    &:last-child span {\n      width: 3px;\n      height: 3px;\n      font-size: 1px;\n      background-color: grey;\n    }\n  }\n"]))),y=function(e){var t=e.vidData;return u.createElement(u.Fragment,null,t.map((function(e,t){return u.createElement(g,{key:"v_"+t},u.createElement("iframe",{src:"https://www.youtube.com/embed/"+e.youtube_trailer_key,loading:"lazy",title:e.title,samesite:"secure",width:"100%",height:"auto",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",rel:"0",origin:"https://www.youtube.com/",modestbranding:"1",autohide:"1",showinfo:"0",frameBorder:"0"}),u.createElement(h,null,u.createElement("div",{className:"img"},u.createElement("span",{role:"img","aria-label":"tick"},"👤")),u.createElement("div",{className:"details"},u.createElement("h2",null,e.title),u.createElement("div",null,u.createElement("p",null,e.director),u.createElement("span",{role:"img","aria-label":"tick"},"✔")),u.createElement("div",null,u.createElement("p",null,(i=e.popularity,o=i.split("."),l=o[0],o[0].concat(".",l[0])+"K views")),u.createElement("span",{role:"img","aria-label":"dot"},"•"),u.createElement("p",null," "+(n=e.year,r=new Date,(1===(a=r.getFullYear()-n>15?15:r.getFullYear()-n)?2:a)+" weeks ago"))))));var n,r,a,i,o,l})))},b=n(5785),E=function(e){var t=e.filmData,n=e.setClicked,r=e.clicked,a=(0,u.useState)(0),i=a[0],o=a[1],l=(0,u.useState)(600),c=l[0],s=l[1];return u.createElement("ul",{className:"scrollingDiv"},i<c&&u.createElement("button",{id:"scrollRight",onClick:function(e){return function(e){s(e.target.parentElement.offsetWidth),i+300<=c?(o(i+300),e.target.parentElement.scrollLeft+=300):(o(c),e.target.parentElement.scrollLeft=c)}(e)}},"›"),i>0&&u.createElement("button",{id:"scrollLeft",onClick:function(e){return function(e){i-300>=300?(o(i-300),e.target.parentElement.scrollLeft-=300):(o(0),e.target.parentElement.scrollLeft=0),o(i-300),e.target.parentElement.scrollLeft-=300,console.log("left"),console.log(i)}(e)}},"‹"),u.createElement("li",null,u.createElement("button",{onClick:function(e){return n((0,b.Z)(t))}},"All")),t.map((function(e,t){return u.createElement("li",{key:t},u.createElement("button",{onClick:function(t){return n([Object.assign({},r,{data:e.data})])}},e.title))})))},v=function(e){var t=e.filmData,n=(0,u.useState)([{title:"",data:[]}]),r=n[0],a=n[1];return(0,u.useEffect)((function(){a(t)}),[t]),u.createElement(u.Fragment,null,u.createElement(E,{filmData:t,setClicked:a,clicked:r}),r.map((function(e,t){return u.createElement(f,{key:"video_"+t},u.createElement("h1",null,e.title),u.createElement("div",{className:"videos"},u.createElement(y,{vidData:e.data})))})))},x=function(){var e=(0,u.useState)([]),t=e[0],n=e[1];return(0,u.useEffect)((function(){var e=function(){var e,t=(e=c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/hmilly/filmDb/films",{method:"GET",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json;odata.metadata=full","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function l(e){r(o,a,i,l,c,"next",e)}function c(e){r(o,a,i,l,c,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();e()}),[]),u.createElement(s.Z,null,u.createElement(m.n,null),u.createElement("div",{className:"videoContainer"},u.createElement(v,{filmData:t})))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),o=new S(r||[]);return i._invoke=function(e,t,n){var r=m;return function(a,i){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw i;return O()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var l=j(o,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===m)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=s(e,t,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,o),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var m="suspendedStart",p="suspendedYield",d="executing",f="completed",g={};function h(){}function y(){}function b(){}var E={};c(E,i,(function(){return this}));var v=Object.getPrototypeOf,x=v&&v(v(C([])));x&&x!==n&&r.call(x,i)&&(E=x);var w=b.prototype=h.prototype=Object.create(E);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(a,i,o,l){var c=s(e[a],e,i);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,l)}))}l(c.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=s(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=b,c(w,"constructor",b),c(b,"constructor",y),y.displayName=c(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(L.prototype),c(L.prototype,o,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new L(u(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(w),c(w,l,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return l.type="throw",l.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},7180:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/youtube_clone/static/f4376d1cf8940eb0b1ee492d99f0a82c/7bfbb/yt.png","srcSet":"/youtube_clone/static/f4376d1cf8940eb0b1ee492d99f0a82c/bb853/yt.png 116w,\\n/youtube_clone/static/f4376d1cf8940eb0b1ee492d99f0a82c/94728/yt.png 232w,\\n/youtube_clone/static/f4376d1cf8940eb0b1ee492d99f0a82c/7bfbb/yt.png 464w","sizes":"(min-width: 464px) 464px, 100vw"},"sources":[{"srcSet":"/youtube_clone/static/f4376d1cf8940eb0b1ee492d99f0a82c/01fcd/yt.webp 116w,\\n/youtube_clone/static/f4376d1cf8940eb0b1ee492d99f0a82c/ab28f/yt.webp 232w,\\n/youtube_clone/static/f4376d1cf8940eb0b1ee492d99f0a82c/95897/yt.webp 464w","type":"image/webp","sizes":"(min-width: 464px) 464px, 100vw"}]},"width":464,"height":142}')}}]);
//# sourceMappingURL=component---src-pages-index-js-1718d1e946efcc2863a5.js.map