(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{4:function(n,e,t){"use strict";t.d(e,{Z:function(){return T}});var r,a,c,o,i,u,s,p=t(6871),f=t(2007),l=t.n(f),h=t(9457),d=t(7739),m=t(168),v=t(6444),g=v.ZP.img(r||(r=(0,m.Z)(["\n    width: 100%;\n    height: auto;\n    object-fit: cover;\n"]))),x=v.ZP.div(a||(a=(0,m.Z)(["\n    width: 100%;\n    padding: ","px;\n    font-size: ",";\n    font-weight: ",";\n    color: ",";\n    background-color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.tailwind}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white})),b=v.ZP.p(c||(c=(0,m.Z)(["\n    margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),y=v.ZP.span(o||(o=(0,m.Z)(["\n    color: ",";\n"])),(function(n){return n.theme.colors.accent})),w=t(184),k=function(n){var e=n.movie,t=e.title,r=e.poster_path,a=e.vote_average;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{src:r?d.Zm+r:d.YS,alt:t}),(0,w.jsxs)(x,{children:[(0,w.jsx)(b,{children:t}),(0,w.jsxs)("p",{children:[" Rating:",(0,w.jsxs)(y,{children:[" ",a.toFixed(2)]})]})]})]})},Z=t(501),_=v.ZP.ul(i||(i=(0,m.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    grid-gap: ","px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"])),(function(n){return n.theme.space[4]})),j=v.ZP.li(u||(u=(0,m.Z)(["\n    border-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),P=(0,v.ZP)(Z.rU)(s||(s=(0,m.Z)(["\n    display: block;\n    height: 100%;\n    text-decoration: none;\n    overflow: hidden;\n    border-radius: ",";\n    box-shadow: 0px 5px 5px rgba(16,1,0,0.7); \n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    \n    :hover, :focus {\n        transform: scale(1.03);\n        box-shadow: 0px 10px 10px rgba(16,1,0,0.7); \n    }\n"])),(function(n){return n.theme.radii.normal})),S=function(n){var e=n.movies,t=(0,p.TH)();return(0,w.jsx)(h.x,{children:(0,w.jsx)(_,{children:e.map((function(n){return(0,w.jsx)(j,{children:(0,w.jsx)(P,{to:"/movies/".concat(n.id),state:{from:t},children:(0,w.jsx)(k,{movie:n})})},n.id)}))})})};S.protoTypes={movies:l().array.isRequired};var T=S},7739:function(n,e,t){"use strict";t.d(e,{YS:function(){return a},Zm:function(){return r},d1:function(){return c}});var r="https://image.tmdb.org/t/p/w500/",a="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",c="https://via.placeholder.com/300x400"},304:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var r,a=t(5861),c=t(885),o=t(7757),i=t.n(o),u=t(2791),s=t(4390),p=t(9457),f=t(4),l=t(168),h=t(6444).ZP.h1(r||(r=(0,l.Z)(["\n    padding-top: ","px;\n    padding-bottom: ","px;\n    font-size: ",";\n    text-align: center;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes.xl})),d=t(184),m=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,u.useEffect)((function(){!function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.wr)();case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}),[]),(0,d.jsxs)(p.x,{as:"main",children:[(0,d.jsx)(h,{children:"Trending today"}),(0,d.jsx)(f.Z,{movies:t})]})}},4390:function(n,e,t){"use strict";t.d(e,{Hx:function(){return h},Mc:function(){return f},bI:function(){return p},uV:function(){return l},wr:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),u="08f616fe2f268b4dbcc5ac680fac4838";i().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("trending/movie/day?api_key=".concat(u));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("search/movie",{params:{api_key:u,query:e,language:"en - US",page:1,include_adult:!1}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function c(){}c.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,c,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=304.9f1075d0.chunk.js.map