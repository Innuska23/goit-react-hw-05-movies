"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[273],{854:function(n,e,r){var t=r(6286),i=r(184);e.Z=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(t.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})}},4773:function(n,e,r){r.d(e,{S:function(){return d},mU:function(){return p},XT:function(){return v},SM:function(){return f},Rw:function(){return c}});var t=r(5861),i=r(4687),a=r.n(i),s=r(1243),o="&language=en-US";function c(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("trending/all/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e),{params:{language:o,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/credits"),{params:{language:o}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/reviews"),{params:{language:o,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("search/keyword",{params:{query:e,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ5NzM5ZTEwYTU3YTliZjAyNGU0Y2JkYTdiZGQyMCIsInN1YiI6IjY0NmNhNDFkMzNhMzc2MDExZWM1NzZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l7wd1ErHz9MLKun2tiW2sFEdmte5xSXYfQzmnx_8WvI")},273:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,i,a,s,o,c,u,p,l=r(7689),d=r(1087),h=r(8977),f=r(9439),x=r(2791),v=r(4773),g=r(168),Z=r(5706),m=r(8185),j=Z.Z.article(t||(t=(0,g.Z)(["\n    display: flex;\n    gap: 20px;\n    align-items: start;"]))),w=Z.Z.ul(i||(i=(0,g.Z)(["\n    display: flex;\n    gap: 20px;\n    list-style: none;\n    padding: 0;\n"]))),y=Z.Z.span(a||(a=(0,g.Z)(["\n    font-weight: 300;\n"]))),b=(0,Z.Z)(d.OL)(s||(s=(0,g.Z)(["\n    display: flex;\n    color: grey;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-shadow: 1px 1px 2px pink;\n    align-items: center;\n    &.active,\n    &:hover {\n        color: red;\n    }\n    &:hover {\n        text-decoration: underline;\n    }\n"]))),k=(0,Z.Z)(m.i1r)(o||(o=(0,g.Z)(["\n    width: 25px;\n    height: 25px;\n    display: inline-block;\n"]))),_=Z.Z.img(c||(c=(0,g.Z)(["\nborder-radius: 5px;\nfilter: drop-shadow(9px 5px 10px #000);\n"]))),I=Z.Z.p(u||(u=(0,g.Z)(["\n    color: gray;\n    font-weight: 700;\n    text-transform: uppercase;\n"]))),z=Z.Z.p(p||(p=(0,g.Z)(["\n    font-weight: 700;\n    text-transform: uppercase;\n"]))),M=r(854),J=r(184),N=function(){var n,e=(0,x.useState)(null),r=(0,f.Z)(e,2),t=r[0],i=r[1],a=null!==t&&void 0!==t?t:{},s=a.poster_path,o=void 0===s?"":s,c=a.original_title,u=void 0===c?"":c,p=a.name,d=void 0===p?"":p,h=a.release_date,g=void 0===h?"":h,Z=a.genres,m=void 0===Z?"":Z,N=a.overview,U=void 0===N?"":N,C=a.vote_average,G=void 0===C?"":C,S=(0,l.TH)(),T=(0,x.useRef)((null===(n=S.state)||void 0===n?void 0:n.from)||"/"),Y=G?"".concat((10*G).toFixed(0),"%"):"Not rated yet",W=(0,l.UO)().id;return(0,x.useEffect)((function(){(0,v.mU)(W).then(i)}),[W]),t?(0,J.jsxs)("div",{children:[(0,J.jsx)("p",{children:(0,J.jsxs)(b,{to:T.current,children:[(0,J.jsx)(k,{}),"Go back"]})}),(0,J.jsxs)(j,{children:[(0,J.jsx)(_,{width:200,height:300,src:o?"https://image.tmdb.org/t/p/w500/".concat(o):"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",alt:d}),(0,J.jsxs)("div",{children:[(0,J.jsxs)("h2",{children:[u,(0,J.jsxs)("span",{children:[" (",g.substring(0,4),")"]})]}),(0,J.jsxs)("h3",{children:["User Score: ",(0,J.jsxs)(y,{children:[Y," "]})]}),(0,J.jsxs)("h3",{children:["Genres: ",(0,J.jsxs)(y,{children:[" ",m.map((function(n){return n.name})).join(", ")]})]}),(0,J.jsx)("h3",{children:"Overview:"}),(0,J.jsx)("p",{children:U})]})]}),(0,J.jsx)("hr",{}),(0,J.jsx)(z,{children:"Additional information:"}),(0,J.jsxs)(w,{children:[(0,J.jsx)("li",{children:(0,J.jsx)(b,{to:"cast",children:"Cast"})}),(0,J.jsx)("li",{children:(0,J.jsx)(b,{to:"reviews",children:"Reviews"})})]}),(0,J.jsx)(x.Suspense,{fallback:(0,J.jsx)(M.Z,{}),children:(0,J.jsx)(l.j3,{})})]}):(0,J.jsx)(I,{children:"Don't find this movies"})};var U=function(){var n,e,r=(0,l.TH)();return(0,J.jsx)(h.FJ,{children:(0,J.jsx)("main",{children:(0,J.jsxs)(h.r_,{children:[(0,J.jsx)(d.rU,{to:null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"}),(0,J.jsx)(N,{})]})})})}},8977:function(n,e,r){r.d(e,{AK:function(){return x},FJ:function(){return f},MA:function(){return h},TW:function(){return v},r_:function(){return d},y2:function(){return g}});var t,i,a,s,o,c,u=r(168),p=r(5706),l=r(8185),d=p.Z.div(t||(t=(0,u.Z)(["\n    display: flex;\n\n"]))),h=p.Z.input(i||(i=(0,u.Z)(["\n    background-color: rgb(237, 242, 247);\n    border-radius: 10px;\n    font-size: 20px;\n"]))),f=p.Z.div(a||(a=(0,u.Z)(["\n    padding: 0 20px;\n"]))),x=(0,p.Z)(l.dVI)(s||(s=(0,u.Z)(["\n    width: 25px;\n    height: 25px;\n    display: inline-block;\n"]))),v=p.Z.button(o||(o=(0,u.Z)(["\n    display: inline-block;\n    width: 40px;\n    border: 0px;\n    height: 40px;\n    background-color: inherit;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    cursor: pointer;\n    margin-left: 5px;\n"]))),g=p.Z.p(c||(c=(0,u.Z)(["\n    color: gray;\n    font-weight: 700;\n    text-transform: uppercase;\n"])))}}]);
//# sourceMappingURL=273.5fed2e87.chunk.js.map