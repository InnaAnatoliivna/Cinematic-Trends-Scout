"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[650],{824:function(t,n,e){e.d(n,{Df:function(){return i},V0:function(){return o},fh:function(){return f},tx:function(){return v},u7:function(){return h},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(243),s="b8038f0a7a9d99e63733d790c6805a39";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(t){return"https://image.tmdb.org/t/p/original".concat(t)}},854:function(t,n,e){e(791);var r=e(184);n.Z=function(){return(0,r.jsx)("div",{children:"Loading..."})}},650:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=e(689),o=e(824),f=e(184),p=function(t){var n=t.reviewsResults;return(0,f.jsx)("ul",{children:n.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h4",{children:["Author: ",t.author]}),(0,f.jsxs)("p",{children:['"',t.content,'"']})]},t.id)}))})},v=e(854),h=function(){var t=(0,i.UO)().movieId,n=(0,s.useState)(null),e=(0,a.Z)(n,2),u=e[0],h=e[1],d=(0,s.useState)(""),l=(0,a.Z)(d,2),x=l[0],m=l[1],w=(0,s.useState)(!1),k=(0,a.Z)(w,2),Z=k[0],g=k[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),m(""),n.prev=2,n.next=5,(0,o.tx)(t);case 5:(e=n.sent).results.length>0&&h(e.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),m(n.t0.message),console.log(x);case 13:return n.prev=13,g(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[x,t]),(0,f.jsxs)(f.Fragment,{children:[Z&&(0,f.jsx)(v.Z,{}),u?(0,f.jsx)(p,{reviewsResults:u}):(0,f.jsx)("p",{children:"We dont have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=650.33062e31.chunk.js.map