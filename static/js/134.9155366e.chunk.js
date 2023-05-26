"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{4e3:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,i,u=e(7689),o=e(1087),c=e(168),s=e(5706),p=s.Z.div(r||(r=(0,c.Z)(["\n    display: flex;\n"]))),l=s.Z.ol(a||(a=(0,c.Z)(["\n    padding: 30px;\n    text-decoration: none;\n"]))),d=s.Z.li(i||(i=(0,c.Z)(["\n    margin-bottom: 5px;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover{\n        text-decoration: underline;\n    }\n"]))),f=e(184);var h=function(n){var t=n.list,e=(0,u.TH)();return(0,f.jsx)(p,{children:(0,f.jsx)(l,{children:t&&t.map((function(n){var t=n.title,r=n.name,a=n.id;return(0,f.jsx)(d,{children:(0,f.jsx)(o.rU,{to:"/movies/"+a,state:{from:e},children:t||r})},a)}))})})}},4773:function(n,t,e){e.d(t,{S:function(){return d},mU:function(){return p},XT:function(){return Z},SM:function(){return h},Rw:function(){return c}});var r=e(5861),a=e(4687),i=e.n(a),u=e(1243),o="&language=en-US";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t),{params:{language:o,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t,"/credits"),{params:{language:o}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t,"/reviews"),{params:{language:o,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("search/keyword",{params:{query:t,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ5NzM5ZTEwYTU3YTliZjAyNGU0Y2JkYTdiZGQyMCIsInN1YiI6IjY0NmNhNDFkMzNhMzc2MDExZWM1NzZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l7wd1ErHz9MLKun2tiW2sFEdmte5xSXYfQzmnx_8WvI")},1134:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),i=e(1087),u=e(4773),o=e(4e3),c=e(8977),s=e(184);t.default=function(n){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),p=e[0],l=e[1],d=(0,i.lr)(),f=(0,r.Z)(d,2),h=f[0],x=f[1];return(0,a.useEffect)((function(){var n=h.get("query");n&&(0,u.XT)(n).then(l),n||(l(null),x({}))}),[h,x]),(0,s.jsx)(c.FJ,{children:(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""===n.currentTarget.elements.q.value&&alert("Please enter a word to search for"),x({query:n.currentTarget.elements.q.value}),n.currentTarget.reset()},children:[(0,s.jsx)("label",{children:(0,s.jsx)(c.MA,{name:"q",type:"text"})}),(0,s.jsx)(c.TW,{type:"submit",children:(0,s.jsx)(c.AK,{})}),p&&0===p.length&&(0,s.jsx)(c.y2,{children:"Nothing was found for this query."}),(null===p||void 0===p?void 0:p.length)>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"List movies"}),(0,s.jsx)(o.Z,{list:p})]})]})})}},8977:function(n,t,e){e.d(t,{AK:function(){return x},FJ:function(){return h},MA:function(){return f},TW:function(){return Z},r_:function(){return d},y2:function(){return m}});var r,a,i,u,o,c,s=e(168),p=e(5706),l=e(8185),d=p.Z.div(r||(r=(0,s.Z)(["\n    display: flex;\n\n"]))),f=p.Z.input(a||(a=(0,s.Z)(["\n    background-color: rgb(237, 242, 247);\n    border-radius: 10px;\n    font-size: 20px;\n"]))),h=p.Z.div(i||(i=(0,s.Z)(["\n    padding: 0 20px;\n"]))),x=(0,p.Z)(l.dVI)(u||(u=(0,s.Z)(["\n    width: 25px;\n    height: 25px;\n    display: inline-block;\n"]))),Z=p.Z.button(o||(o=(0,s.Z)(["\n    display: inline-block;\n    width: 40px;\n    border: 0px;\n    height: 40px;\n    background-color: inherit;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    cursor: pointer;\n    margin-left: 5px;\n"]))),m=p.Z.p(c||(c=(0,s.Z)(["\n    color: gray;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-shadow: 1px 1px 2px pink;\n"])))}}]);
//# sourceMappingURL=134.9155366e.chunk.js.map