"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[235],{639:function(t,n,e){e.d(n,{$:function(){return u}});var r=e(946),a=e(184),c={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},u=function(){return(0,a.jsx)("div",{style:c,children:(0,a.jsx)(r.Z,{color:"#36d7b7"})})}},235:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i="Cast_list__GlWio",s="Cast_img__-isbW",o="Cast_box__nTwkx",f="Cast_name__6UbFm",p="Cast_role__BLVYL",l=e(184),d=function(t){var n=t.cast,e=t.movieId;return(0,l.jsx)("ul",{className:i,children:n.map((function(t,n){return(0,l.jsxs)("li",{className:o,children:[t.profile_path?(0,l.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:"".concat(t.name),width:150}):(0,l.jsx)("img",{className:s,src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:"".concat(t.name),width:150,height:225}),(0,l.jsxs)("h4",{className:f,children:["Name: ",t.name]}),(0,l.jsxs)("p",{className:p,children:["Character: ",t.character]})]},"".concat(e,"r").concat(n+1))}))})},m=e(639),h=e(791),v=e(689),g=e(390),_=function(){var t=(0,h.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],i=(0,h.useState)(!1),s=(0,a.Z)(i,2),o=s[0],f=s[1],p=(0,v.UO)().movieId,_=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,(0,g.zv)(n);case 3:e=t.sent,c(e.data.cast),f(!1);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,h.useEffect)((function(){_(p)}),[p]),(0,l.jsxs)(l.Fragment,{children:[0===e.length?(0,l.jsx)("p",{children:"There is no cast for this movie"}):(0,l.jsx)(d,{cast:e,movieId:p}),o&&(0,l.jsx)(m.$,{})]})}},390:function(t,n,e){e.d(n,{Hg:function(){return s},qF:function(){return l},t2:function(){return o},tx:function(){return f},zv:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="61d9cd9403fbf5a1ed0d2d0fb0f8e6d3";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.Z.get("trending/movie/day?api_key=".concat(i)),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US")),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,r=u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(e)),t.abrupt("return",r);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US")),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&include_adult=false")),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=235.11c0b358.chunk.js.map