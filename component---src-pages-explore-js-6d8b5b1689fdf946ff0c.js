"use strict";(self.webpackChunkyoutube_clone=self.webpackChunkyoutube_clone||[]).push([[87],{72:function(e,n,t){t.d(n,{Z:function(){return w}});var r,l,a,i,o,m=t(7294),c=t(5444),u=t(1880),p=t(9),s=p.ZP.header(r||(r=(0,u.Z)(["\n  grid-area: Header;\n  display: grid;\n  grid-template-columns:\n    minmax(125px, 225px)\n    minmax(100px, 740px)\n    minmax(40px, 210px);\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n  gap: 10px;\n  .left {\n    display: grid;\n    grid-template-columns: 50px auto;\n    align-items: center;\n    justify-items: center;\n    button {\n      width: 100%;\n      background-color: white;\n      border: none;\n    }\n    a,\n    img {\n      padding: 0;\n      width: 120px;\n      height: auto;\n    }\n  }\n  .mid {\n    display: grid;\n    grid-template-columns: minmax(60px, 720px) 64px 40px;\n    grid-template-rows: 50px;\n    padding: 0 40px;\n    justify-content: center;\n    input {\n      padding: 1% 2%;\n      font-size: 16px;\n      color: black;\n      border: solid 1px rgba(223, 222, 222, 0.871);\n    }\n    button {\n      width: 100%;\n      justify-self: start;\n      background-color: #f8f8f8;\n      border: solid 1px rgba(223, 222, 222, 0.871);\n      &:last-child {\n        border: none;\n        background-color: white;\n      }\n    }\n    span {\n      font-size: 20px;\n      height: auto;\n    }\n  }\n\n  .right {\n    display: grid;\n    grid-template-columns: 40px 40px 130px;\n    grid-template-rows: 50px;\n    align-items: center;\n    justify-content: end;\n    button {\n      border: none;\n      background-color: white;\n    }\n  }\n\n  // **** //Media Query // **** //\n  @media (max-width: 670px) {\n    justify-items: center;\n    .left button,\n    .mid input,\n    .mid button:nth-child(3),\n    .right button {\n      display: none;\n    }\n    .left {\n      justify-self: space-around;\n    }\n    .right {\n      justify-self: start;\n    }\n    .mid {\n      justify-self: end;\n    }\n    .mid,\n    .right {\n      grid-template-columns: 40px;\n      padding: 0;\n      button {\n        background-color: white;\n        border: none;\n      }\n    }\n  }\n  // **** //Media Query // **** //\n"]))),g=p.ZP.nav(l||(l=(0,u.Z)(["\n  grid-area: sideNav;\n  height: 100%;\n  width: ",";\n  padding-right: ",";\n  overflow: hidden;\n  &:hover {\n    overflow: scroll;\n  }\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 0;\n    padding: 2px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: grey;\n    border-radius: 10px;\n  }\n  h4 {\n    width: 210px;\n    font-size: 14px;\n    padding: 22px 20px 0;\n    color: rgb(114, 113, 113);\n  }\n\n  // **** //Media Query // **** //\n  @media (max-width: 575px) {\n    display: none;\n    width: 0;\n  }\n  // **** //Media Query // **** //\n"])),(function(e){return e.sm?"90px":"255px"}),(function(e){return e.sm?"0":"10px"})),d=p.ZP.ul(a||(a=(0,u.Z)(["\n  padding: ",";\n  border-bottom: ",";\n  li,\n  a {\n    display: grid;\n    list-style-type: none;\n    text-decoration: none;\n    align-items: center;\n    grid-template-columns: ",";\n    grid-template-rows: ",";\n    justify-items: ",";\n    font-size: ",";\n    padding: ",";\n    &:hover {\n      background-color: rgb(240, 239, 239);\n      cursor: pointer;\n    }\n    &:active {\n      text-decoration: none;\n    }\n    /* imgs */\n    div {\n      width: 24px;\n      height: 30px;\n    }\n    h2 {\n      background-color: white;\n    }\n    p {\n      justify-self: ",";\n      color: black;\n      text-decoration: none !important;\n    }\n  }\n"])),(function(e){return e.sm?"0":"0 10px"}),(function(e){return e.sm?"none":"1px solid rgba(213, 213, 213, 0.618);"}),(function(e){return e.sm?"90px":"50px 150px"}),(function(e){return e.sm?"repeat(2, 1fr);":"44px"}),(function(e){return e.sm?"center":"start"}),(function(e){return e.sm?"12px":"17px"}),(function(e){return e.sm?"12px 0":"0 20px"}),(function(e){return e.sm?"center":"left"})),E=p.ZP.section(i||(i=(0,u.Z)(["\n  width: auto;\n  padding: 12px;\n  h5 {\n    display: inline-block;\n    position: relative;\n    margin: 3px;\n    padding: 0;\n    font-size: 14px;\n    color: #606060;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  p {\n    font-size: 14px;\n    font-weight: 500;\n    color: rgb(148, 148, 148);\n  }\n  &:last-child {\n    padding: 15px;\n  }\n"]))),h=p.ZP.section(o||(o=(0,u.Z)(["\n  display: grid;\n  align-content: space-evenly;\n  justify-items: start;\n  height: 133px;\n  padding: 10px 10px 10px 30px;\n  border-bottom: 1px solid rgba(213, 213, 213, 0.618);\n  p {\n    font-size: 16px;\n    color: black;\n  }\n  a {\n    padding: 0;\n  }\n"]))),b=function(e){var n=e.setLgnav,t=e.lgNav;return m.createElement(s,null,m.createElement("div",{className:"left"},m.createElement("button",{onClick:function(){return n(!t)}},m.createElement("span",{role:"img","aria-label":"dropdown"},"☰")),m.createElement(c.rU,{to:"/"},m.createElement("img",{src:"/yt.png",alt:"Youtube logo"}))),m.createElement("form",{className:"mid"},m.createElement("input",{placeholder:"Search"}),m.createElement("button",null,m.createElement("span",{role:"img","aria-label":"dropdown"},"🔍")),m.createElement("button",null,m.createElement("span",{role:"img","aria-label":"dropdown"},"🎤"))),m.createElement("div",{className:"right"},m.createElement("button",null,m.createElement("span",{role:"img","aria-label":"grid"},"▦")),m.createElement("button",null,m.createElement("span",{role:"img","aria-label":"3 dots"},"⋮")),m.createElement(c.rU,{id:"blueBtn",to:"/signin"},m.createElement("span",{role:"img","aria-label":"profile"},"👤"),m.createElement("p",null,"SIGN IN"))))},x=function(e){var n=e.tag,t=e.img,r=e.name;return void 0!==n?m.createElement(c.rU,{to:""+n,activeStyle:{backgroundColor:"#dedede",fontWeight:600}},m.createElement("img",{src:"/"+t,alt:""+r}),m.createElement("p",null,r)):m.createElement("li",null,m.createElement("img",{src:"/"+t,alt:""+r}),m.createElement("p",null,r))},f=function(e){var n=e.lgNav;return m.createElement(g,{sm:!n},m.createElement(m.Fragment,null,m.createElement(d,{sm:!n},m.createElement(x,{tag:"/",img:"yt-grey.png",name:"Home"}),m.createElement(x,{tag:"/explore",img:"compass.png",name:"Explore"}),m.createElement(x,{tag:"/subscriptions",img:"subscriptions.png",name:"Subscriptions"})),m.createElement(d,{sm:!n},m.createElement(x,{tag:"/library",img:"lib.png",name:"Library"}),m.createElement(x,{tag:"/history",img:"history.png",name:"History"}))),n&&m.createElement(m.Fragment,null,m.createElement(h,null,m.createElement("p",null,"Sign in to like videos, comment, and subscribe"),m.createElement(c.rU,{id:"blueBtn",to:"/signin"},m.createElement("span",{role:"img","aria-label":"profile"},"👤"),m.createElement("p",null,"SIGN IN"))),m.createElement("h4",null,"BEST OF YOUTUBE"),m.createElement(d,null,m.createElement(x,{img:"music.png",name:"Music"}),m.createElement(x,{img:"sport.png",name:"Sports"}),m.createElement(x,{img:"game.png",name:"Gaming"}),m.createElement(x,{img:"movie.png",name:"Movie & Shows"}),m.createElement(x,{img:"news.png",name:"News"}),m.createElement(x,{img:"live.png",name:"Live"}),m.createElement(x,{img:"fash.png",name:"Fashion & Beauty"}),m.createElement(x,{img:"learn.png",name:"Learning"}),m.createElement(x,{img:"yt-red.png",name:"Spotlight"}),m.createElement(x,{img:"vr.png",name:"360 Video"})),m.createElement(d,null,m.createElement(x,{img:"plus.png",name:"Browse Channels"})),m.createElement("h4",null,"MORE FROM YOUTUBE"),m.createElement(d,null,m.createElement(x,{img:"yt-grey.png",name:"YouTube Premium"}),m.createElement(x,{img:"live-grey.png",name:"Live"})),m.createElement(d,null,m.createElement(x,{img:"setting.png",name:"Settings"}),m.createElement(x,{img:"flag.png",name:"Report History"}),m.createElement(x,{img:"help.png",name:"Help"}),m.createElement("li",null,m.createElement("h2",null,"!"),m.createElement("p",null,"Send Feedback"))),m.createElement(E,null,m.createElement("h5",null,"About"),m.createElement("h5",null,"Press"),m.createElement("h5",null,"Copyright"),m.createElement("h5",null,"Contact us"),m.createElement("h5",null,"Creators"),m.createElement("h5",null,"Advertise"),m.createElement("h5",null,"Developers")),m.createElement(E,null,m.createElement("h5",null,"Terms"),m.createElement("h5",null,"Privacy"),m.createElement("h5",null,"Policy & Safety"),m.createElement("h5",null,"How YouTube works"),m.createElement("h5",null,"Test new features")),m.createElement(E,null,m.createElement("p",null,"© 2021 Google LLC"))))},y=t(5081),w=function(e){var n=e.children,t=(0,m.useState)(),r=t[0],l=t[1],a=(0,m.useState)(!0),i=a[0],o=a[1];return(0,m.useEffect)((function(){o(!(r<=1330))}),[r]),(0,m.useLayoutEffect)((function(){window.addEventListener("resize",(function(){return l(window.innerWidth)}))})),m.createElement("body",{className:"index"},m.createElement(y.n,null),m.createElement("title",null,"Youtube clone"),m.createElement(b,{lgNav:i,setLgnav:o}),m.createElement("main",{className:"sideNavContainer"},m.createElement(f,{lgNav:i}),n))}},9710:function(e,n,t){t.r(n);var r=t(7294),l=t(72);n.default=function(){return r.createElement(l.Z,null,r.createElement("div",{className:"contentContainer"},r.createElement("p",null,"This would be the explore page on Youtube")))}}}]);
//# sourceMappingURL=component---src-pages-explore-js-6d8b5b1689fdf946ff0c.js.map