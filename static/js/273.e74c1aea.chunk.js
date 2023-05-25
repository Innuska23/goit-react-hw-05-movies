"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[273],{854:function(n,e,r){var t=r(6286),i=r(184);e.Z=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(t.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})}},4773:function(n,e,r){r.d(e,{S:function(){return p},mU:function(){return l},XT:function(){return v},SM:function(){return f},Rw:function(){return o}});var t=r(5861),i=r(4687),a=r.n(i),s=r(1243),c="&language=en-US";function o(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("trending/all/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e),{params:{language:c,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/credits"),{params:{language:c}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/reviews"),{params:{language:c,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("search/keyword",{params:{query:e,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ5NzM5ZTEwYTU3YTliZjAyNGU0Y2JkYTdiZGQyMCIsInN1YiI6IjY0NmNhNDFkMzNhMzc2MDExZWM1NzZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l7wd1ErHz9MLKun2tiW2sFEdmte5xSXYfQzmnx_8WvI")},273:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,i,a,s,c,o=r(7689),u=r(1087),l=r(8977),d=r(9439),p=r(2791),h=r(4773),f=r(168),x=r(5706),v=r(8185),g=x.Z.article(t||(t=(0,f.Z)(["\n    display: flex;\n    gap: 20px;\n    align-items: start;"]))),m=x.Z.ul(i||(i=(0,f.Z)(["\n    display: flex;\n    gap: 20px;\n    list-style: none;\n    padding: 0;\n"]))),Z=x.Z.span(a||(a=(0,f.Z)(["\n    font-weight: 300;\n"]))),j=(0,x.Z)(u.OL)(s||(s=(0,f.Z)(["\n    display: flex;\n    color: grey;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-shadow: 1px 1px 2px pink;\n    align-items: center;\n    &.active,\n    &:hover {\n        color: red;\n    }\n    &:hover {\n        text-decoration: underline;\n    }\n"]))),w=(0,x.Z)(v.i1r)(c||(c=(0,f.Z)(["\n    width: 25px;\n    height: 25px;\n    display: inline-block;\n"]))),b=r(854),y=r(184),k=function(){var n,e=(0,p.useState)(null),r=(0,d.Z)(e,2),t=r[0],i=r[1],a=null!==t&&void 0!==t?t:{},s=a.poster_path,c=void 0===s?"":s,u=a.original_title,l=void 0===u?"":u,f=a.name,x=void 0===f?"":f,v=a.release_date,k=void 0===v?"":v,_=a.genres,I=void 0===_?"":_,N=a.overview,z=void 0===N?"":N,M=a.vote_average,J=void 0===M?"":M,U=(0,o.TH)(),C=(0,p.useRef)((null===(n=U.state)||void 0===n?void 0:n.from)||"/"),G=J?"".concat((10*J).toFixed(0),"%"):"Not rated yet",S=(0,o.UO)().id;return(0,p.useEffect)((function(){(0,h.mU)(S).then(i)}),[S]),t?(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:(0,y.jsxs)(j,{to:C.current,children:[(0,y.jsx)(w,{}),"Go back"]})}),(0,y.jsxs)(g,{className:"card",children:[(0,y.jsx)("img",{width:200,height:300,src:c?"https://image.tmdb.org/t/p/w500/".concat(c):"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",alt:x}),(0,y.jsxs)("div",{className:"subscribe",children:[(0,y.jsxs)("h2",{children:[l,(0,y.jsxs)("span",{children:[" (",k.substring(0,4),")"]})]}),(0,y.jsxs)("h3",{children:["User Score: ",(0,y.jsxs)(Z,{children:[G," "]})]}),(0,y.jsxs)("h3",{children:["Genres: ",(0,y.jsxs)(Z,{children:[" ",I.map((function(n){return n.name})).join(", ")]})]}),(0,y.jsx)("h3",{children:"Overview:"}),(0,y.jsx)("p",{children:z})]})]}),(0,y.jsx)("hr",{}),(0,y.jsx)("p",{children:"Additional information:"}),(0,y.jsxs)(m,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(p.Suspense,{fallback:(0,y.jsx)(b.Z,{}),children:(0,y.jsx)(o.j3,{})})]}):(0,y.jsx)("p",{children:"Don't find this movies"})};var _=function(){var n,e,r=(0,o.TH)();return(0,y.jsx)(l.FJ,{children:(0,y.jsx)("main",{children:(0,y.jsxs)(l.r_,{children:[(0,y.jsx)(u.rU,{to:null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"}),(0,y.jsx)(k,{})]})})})}},8977:function(n,e,r){r.d(e,{AK:function(){return f},FJ:function(){return h},MA:function(){return p},TW:function(){return x},r_:function(){return d}});var t,i,a,s,c,o=r(168),u=r(5706),l=r(8185),d=u.Z.div(t||(t=(0,o.Z)(["\n    display: flex;\n\n"]))),p=u.Z.input(i||(i=(0,o.Z)(["\n    background-color: rgb(237, 242, 247);\n    border-radius: 10px;\n    font-size: 20px;\n"]))),h=u.Z.div(a||(a=(0,o.Z)(["\n    padding: 0 20px;\n"]))),f=(0,u.Z)(l.dVI)(s||(s=(0,o.Z)(["\n    width: 25px;\n    height: 25px;\n    display: inline-block;\n"]))),x=u.Z.button(c||(c=(0,o.Z)(["\n    display: inline-block;\n    width: 40px;\n    border: 0px;\n    height: 40px;\n    background-color: inherit;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    cursor: pointer;\n    margin-left: 5px;\n"])))}}]);
//# sourceMappingURL=273.e74c1aea.chunk.js.map