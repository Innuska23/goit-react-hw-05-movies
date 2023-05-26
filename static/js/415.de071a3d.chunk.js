"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{4e3:function(n,t,r){r.d(t,{Z:function(){return h}});var e,a,i,u=r(7689),o=r(1087),c=r(168),s=r(5706),p=s.Z.div(e||(e=(0,c.Z)(["\n    display: flex;\n"]))),d=s.Z.ol(a||(a=(0,c.Z)(["\n    padding: 30px;\n    text-decoration: none;\n"]))),f=s.Z.li(i||(i=(0,c.Z)(["\n    margin-bottom: 5px;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover{\n        text-decoration: underline;\n        text-decoration-color: gray;\n    }\n"]))),l=r(184);var h=function(n){var t=n.list,r=(0,u.TH)();return(0,l.jsx)(p,{children:(0,l.jsx)(d,{children:t&&t.map((function(n){var t=n.title,e=n.name,a=n.id;return(0,l.jsx)(f,{children:(0,l.jsx)(o.rU,{to:"/movies/"+a,state:{from:r},children:t||e})},a)}))})})}},4773:function(n,t,r){r.d(t,{S:function(){return f},mU:function(){return p},XT:function(){return x},SM:function(){return h},Rw:function(){return c}});var e=r(5861),a=r(4687),i=r.n(a),u=r(1243),o="&language=en-US";function c(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t),{params:{language:o,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t,"/credits"),{params:{language:o}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t,"/reviews"),{params:{language:o,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("search/keyword",{params:{query:t,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ5NzM5ZTEwYTU3YTliZjAyNGU0Y2JkYTdiZGQyMCIsInN1YiI6IjY0NmNhNDFkMzNhMzc2MDExZWM1NzZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l7wd1ErHz9MLKun2tiW2sFEdmte5xSXYfQzmnx_8WvI")},5415:function(n,t,r){r.r(t);var e=r(9439),a=r(2791),i=r(4773),u=r(4e3),o=r(8977),c=r(184);t.default=function(){var n=(0,a.useState)(null),t=(0,e.Z)(n,2),r=t[0],s=t[1];return(0,a.useEffect)((function(){(0,i.Rw)().then(s)}),[]),(0,c.jsxs)(o.FJ,{children:[(0,c.jsx)("h2",{children:"Trading today"}),(0,c.jsx)(u.Z,{list:r})]})}},8977:function(n,t,r){r.d(t,{AK:function(){return Z},FJ:function(){return h},MA:function(){return l},TW:function(){return x},r_:function(){return f},y2:function(){return g}});var e,a,i,u,o,c,s=r(168),p=r(5706),d=r(8185),f=p.Z.div(e||(e=(0,s.Z)(["\n    display: flex;\n\n"]))),l=p.Z.input(a||(a=(0,s.Z)(["\n    background-color: rgb(237, 242, 247);\n    border-radius: 10px;\n    font-size: 20px;\n"]))),h=p.Z.div(i||(i=(0,s.Z)(["\n    padding: 0 20px;\n"]))),Z=(0,p.Z)(d.dVI)(u||(u=(0,s.Z)(["\n    width: 25px;\n    height: 25px;\n    display: inline-block;\n"]))),x=p.Z.button(o||(o=(0,s.Z)(["\n    display: inline-block;\n    width: 40px;\n    border: 0px;\n    height: 40px;\n    background-color: inherit;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    cursor: pointer;\n    margin-left: 5px;\n"]))),g=p.Z.p(c||(c=(0,s.Z)(["\n    color: gray;\n    font-weight: 700;\n    text-transform: uppercase;\n"])))}}]);
//# sourceMappingURL=415.de071a3d.chunk.js.map