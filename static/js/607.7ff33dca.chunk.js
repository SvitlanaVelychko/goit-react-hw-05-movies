"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{6607:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,c=t(5861),u=t(885),s=t(7757),o=t.n(s),i=t(2791),p=t(6871),l=t(4390),f=t(9457),d=t(168),h=t(6444),v=h.ZP.ul(r||(r=(0,d.Z)(["\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: ","px;\n"])),(function(e){return e.theme.space[4]})),x=h.ZP.li(a||(a=(0,d.Z)(["\n    padding: ","px;\n    border-radius: ",";\n    border-color: transparent;\n    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.7) \n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.radii.normal})),g=t(184),m=function(){var e=(0,i.useState)([]),n=(0,u.Z)(e,2),t=n[0],r=n[1],a=(0,p.UO)().movieId;return(0,i.useEffect)((function(){!function(){var e=(0,c.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Hx)(a);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),(0,g.jsx)(f.x,{children:(0,g.jsx)(v,{children:t.length>0?t.map((function(e){var n=e.id,t=e.author,r=e.author_details.rating,a=e.content,c=e.created_at;return(0,g.jsxs)(x,{children:[(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Author:"})," ",t]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Rating:"})," ",r||"No rating"]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Content:"})," ",a]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Created at:"})," ",new Date(c).toLocaleDateString("en-US")]})]},n)})):(0,g.jsx)("b",{children:"There are no reviews at this movie"})})})}},4390:function(e,n,t){t.d(n,{Hx:function(){return d},Mc:function(){return l},bI:function(){return p},uV:function(){return f},wr:function(){return i}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u),o="08f616fe2f268b4dbcc5ac680fac4838";s().defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("trending/movie/day?api_key=".concat(o));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("search/movie",{params:{api_key:o,query:n,language:"en - US",page:1,include_adult:!1}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=607.7ff33dca.chunk.js.map