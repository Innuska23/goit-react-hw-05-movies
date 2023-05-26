"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{4e3:function(n,t,r){r.d(t,{Z:function(){return h}});var e,i,o,a=r(7689),u=r(1087),c=r(168),s=r(5706),p=s.Z.div(e||(e=(0,c.Z)(["\n    display: flex;\n"]))),l=s.Z.ol(i||(i=(0,c.Z)(["\n    padding: 30px;\n    text-decoration: none;\n"]))),f=s.Z.li(o||(o=(0,c.Z)(["\n    margin-bottom: 5px;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover{\n        text-decoration: underline;\n        text-decoration-color: #FED36A;\n    }\n"]))),d=r(184);var h=function(n){var t=n.list,r=(0,a.TH)();return(0,d.jsx)(p,{children:(0,d.jsx)(l,{children:t&&t.map((function(n){var t=n.title,e=n.name,i=n.id;return(0,d.jsx)(f,{children:(0,d.jsx)(u.rU,{to:"/movies/"+i,state:{from:r},children:t||e})},i)}))})})}},4773:function(n,t,r){r.d(t,{S:function(){return f},mU:function(){return p},XT:function(){return Z},SM:function(){return h},Rw:function(){return c}});var e=r(5861),i=r(4687),o=r.n(i),a=r(1243),u="&language=en-US";function c(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("movie/".concat(t),{params:{language:u,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("movie/".concat(t,"/credits"),{params:{language:u}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("movie/".concat(t,"/reviews"),{params:{language:u,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("search/keyword",{params:{query:t,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}a.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ5NzM5ZTEwYTU3YTliZjAyNGU0Y2JkYTdiZGQyMCIsInN1YiI6IjY0NmNhNDFkMzNhMzc2MDExZWM1NzZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l7wd1ErHz9MLKun2tiW2sFEdmte5xSXYfQzmnx_8WvI")},5415:function(n,t,r){r.r(t);var e=r(9439),i=r(2791),o=r(4773),a=r(4e3),u=r(8977),c=r(184);t.default=function(){var n=(0,i.useState)(null),t=(0,e.Z)(n,2),r=t[0],s=t[1];return(0,i.useEffect)((function(){(0,o.Rw)().then(s)}),[]),(0,c.jsxs)(u.FJ,{children:[(0,c.jsx)("h2",{children:"Trading today"}),(0,c.jsx)(a.Z,{list:r})]})}},8977:function(n,t,r){r.d(t,{AK:function(){return v},FJ:function(){return g},MA:function(){return x},Od:function(){return Z},TW:function(){return m},eW:function(){return y},r_:function(){return h},y2:function(){return b}});var e,i,o,a,u,c,s,p,l=r(168),f=r(5706),d=r(8185),h=f.Z.div(e||(e=(0,l.Z)(["\n    display: flex;\n\n"]))),x=f.Z.input(i||(i=(0,l.Z)(["\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 6px 12px;\n    gap: 4px;\n    width: 100%;\n    height: 32px;\n    background: #455A64;\n    border: none;\n    color: #fff;\n    outline-with: 1.75;\n    outline-color: #455A64;\n\n    outline-style: solid;\n    border-radius: 4px;\n    &:hover,\n    &:focus,\n    &:focus-visible {\n        outline-color: #FED36A;\n        border: none;\n    }\n"]))),Z=f.Z.label(o||(o=(0,l.Z)(["\n    position: relative;\n    display: block;\n    width: 212px;;\n"]))),g=f.Z.div(a||(a=(0,l.Z)(["\n    padding: 0 20px;\n"]))),v=(0,f.Z)(d.dVI)(u||(u=(0,l.Z)(["\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    fill: #FED36A;\n    &:hover,\n    &:focus{\n        fill: #fff;\n"]))),m=f.Z.button(c||(c=(0,l.Z)(["\n    display: inline-block;\n    width: 40px;\n    border: 0px;\n    height: 40px;\n    background-color: inherit;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    cursor: pointer;\n    margin-left: 5px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n"]))),b=f.Z.p(s||(s=(0,l.Z)(["\n    margin-top: 40px;\n    color: gray;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #FED36A;\n"]))),y=f.Z.h2(p||(p=(0,l.Z)(["\n    margin-top: 20px\n"])))}}]);
//# sourceMappingURL=415.f81fc9de.chunk.js.map